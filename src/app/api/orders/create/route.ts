import { generateOrderEmailHTML } from '@/utils/emailTemplate'
import { formatOrderDate, generateOrderNumber } from '@/utils/orderUtils'
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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
        } = body

        // Validate required fields
        if (!customerName || !customerEmail || !items || items.length === 0) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        // Create email transporter
        try {
            console.log('📬 Starting email process...');

            const transportOptions: any = {
                service: 'gmail', // Default to gmail for simplicity
                auth: {
                    user: process.env.SMTP_USER?.trim(),
                    pass: process.env.SMTP_PASS?.trim(),
                },
                logger: true, // Log to console
                debug: true,  // Show debug output
            };

            if (process.env.SMTP_HOST && process.env.SMTP_HOST !== 'smtp.gmail.com') {
                delete transportOptions.service;
                transportOptions.host = process.env.SMTP_HOST;
                transportOptions.port = parseInt(process.env.SMTP_PORT || '587');
                transportOptions.secure = process.env.SMTP_SECURE === 'true';
            }

            console.log('Sending from:', transportOptions.auth.user);
            console.log('Password length:', transportOptions.auth.pass?.length);
            const transporter = nodemailer.createTransport(transportOptions);

            // Prepare email data
            const emailData = { orderNumber, orderDate, customerName, customerEmail, customerPhone, shippingAddress, items, subtotal, shipping, tax, total }

            // Generate email HTML
            const emailHTML = generateOrderEmailHTML(emailData)

            // Send email to store owner
            if (process.env.SMTP_USER && process.env.STORE_EMAIL) {
                const storeName = process.env.NEXT_PUBLIC_STORE_NAME || 'Your Store';

                console.log('📤 Sending alert to owner...');
                // 1. Send Alert to Owner
                await transporter.sendMail({
                    from: `"${storeName}" <${process.env.SMTP_USER}>`,
                    to: process.env.STORE_EMAIL,
                    subject: `🚨 NEW ORDER ALERT - ${orderNumber}`,
                    html: emailHTML,
                })
                console.log('✅ Owner alert sent.');

                console.log(`📤 Sending confirmation to customer (${customerEmail})...`);
                // 2. Send Confirmation to Customer
                await transporter.sendMail({
                    from: `"${storeName}" <${process.env.SMTP_USER}>`,
                    to: customerEmail,
                    subject: `Order Confirmation - ${orderNumber}`,
                    html: emailHTML,
                })
                console.log('✅ Customer confirmation sent.');
            } else {
                console.warn('⚠️ SMTP_USER or STORE_EMAIL missing in .env');
            }

        } catch (emailError: any) {
            // Log email error but do NOT fail the order
            console.error('❌ EMAIL ERROR:', emailError.message || emailError)
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
