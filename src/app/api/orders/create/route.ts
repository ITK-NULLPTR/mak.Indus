import { generateOrderEmailHTML } from '@/utils/emailTemplate'
import { formatOrderDate, generateOrderNumber } from '@/utils/orderUtils'
import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Generate unique order number
        const orderNumber = generateOrderNumber()
        const orderDate = formatOrderDate(new Date())

        // Extract order data from request
        const {
            customerName,
            customerEmail,
            customerPhone,
            shippingAddress,
            items,
            subtotal,
            shipping,
            tax,
            total,
            paymentMethod,
        } = body

        // Validate required fields
        if (!customerName || !customerEmail || !items || items.length === 0) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        // Create email transporter
        // Note: You'll need to set these environment variables
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'smtp.gmail.com',
                port: parseInt(process.env.SMTP_PORT || '587'),
                secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER, // Your email
                    pass: process.env.SMTP_PASS, // Your email password or app password
                },
            })

            // Prepare email data
            const emailData = {
                orderNumber,
                orderDate,
                customerName,
                customerEmail,
                customerPhone,
                shippingAddress,
                items,
                subtotal,
                shipping,
                tax,
                total,
                paymentMethod: paymentMethod || 'Not specified',
            }

            // Generate email HTML
            const emailHTML = generateOrderEmailHTML(emailData)

            // Send email to store owner
            if (process.env.SMTP_USER && process.env.STORE_EMAIL) {
                await transporter.sendMail({
                    from: `"Your Store" <${process.env.SMTP_USER}>`,
                    to: process.env.STORE_EMAIL,
                    subject: `🛒 New Order Received - ${orderNumber}`,
                    html: emailHTML,
                })

                // Send confirmation email to customer
                await transporter.sendMail({
                    from: `"Your Store" <${process.env.SMTP_USER}>`,
                    to: customerEmail,
                    subject: `Order Confirmation - ${orderNumber}`,
                    html: emailHTML,
                })
            } else {
                console.warn('⚠️ SMTP settings or STORE_EMAIL not found. Email notifications skipped.')
            }

        } catch (emailError) {
            // Log email error but do NOT fail the order
            console.error('❌ Failed to send email notifications:', emailError)
        }

        // Return success response with order number
        return NextResponse.json(
            {
                success: true,
                orderNumber,
                orderDate,
                message: 'Order placed successfully',
            },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error creating order:', error)
        return NextResponse.json(
            {
                error: 'Failed to create order',
                details: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        )
    }
}
