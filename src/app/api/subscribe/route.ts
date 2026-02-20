import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email } = body

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 })
        }

        const transportOptions: any = {
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER?.trim(),
                pass: process.env.SMTP_PASS?.trim(),
                authMethod: 'LOGIN'
            },
        }

        const transporter = nodemailer.createTransport(transportOptions)
        const storeName = process.env.NEXT_PUBLIC_STORE_NAME || 'mak.Indus'

        // 1. Send confirmation email to the user
        const userEmailHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                <h2 style="color: #10b981;">Welcome to ${storeName}! 🎉</h2>
                <p>Thank you for subscribing to our newsletter.</p>
                <p>You'll now receive special offers, free giveaways, and deals right in your inbox.</p>
                <br />
                <p>Best Regards,</p>
                <p><strong>The ${storeName} Team</strong></p>
            </div>
        `

        await transporter.sendMail({
            from: `"${storeName}" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Thank You for Subscribing! - ${storeName}`,
            html: userEmailHTML,
        })

        // 2. Send notification to the store owner
        if (process.env.STORE_EMAIL) {
            const adminEmailHTML = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h2 style="color: #10b981;">New Newsletter Subscriber! 📬</h2>
                    <p>A new user has just subscribed to your newsletter.</p>
                    <p><strong>Subscriber Email:</strong> ${email}</p>
                    <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                </div>
            `

            await transporter.sendMail({
                from: `"${storeName}" <${process.env.SMTP_USER}>`,
                to: process.env.STORE_EMAIL,
                subject: `New Subscriber Alert: ${email}`,
                html: adminEmailHTML,
            })
        }

        return NextResponse.json(
            { success: true, message: 'Successfully subscribed' },
            { status: 200 }
        )

    } catch (error) {
        console.error('Subscription error:', error)
        return NextResponse.json(
            { error: 'Failed to subscribe', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        )
    }
}
