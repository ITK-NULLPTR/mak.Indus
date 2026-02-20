import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, subject, message } = body

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
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

        const userAutoReplyHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                <h2 style="color: #10b981;">Hi ${name},</h2>
                <p>Thank you for reaching out to us at ${storeName}.</p>
                <p>We have successfully received your message regarding <strong>"${subject}"</strong>, and our team will get back to you within 24 hours.</p>
                <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
                <h3>Your Message Details:</h3>
                <p><em>${message}</em></p>
                <br />
                <p>Best Regards,</p>
                <p><strong>The ${storeName} Team</strong></p>
            </div>
        `

        await transporter.sendMail({
            from: `"${storeName} Support" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `We received your message - ${storeName}`,
            html: userAutoReplyHTML,
        })

        if (process.env.STORE_EMAIL) {
            const adminEmailHTML = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h2 style="color: #10b981;">New Contact Form Submission 📝</h2>
                    <p>You have received a new message from the contact form on your website.</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <tr>
                            <td style="padding: 8px; border: 1px solid #eaeaea; font-weight: bold; width: 30%;">Name</td>
                            <td style="padding: 8px; border: 1px solid #eaeaea;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #eaeaea; font-weight: bold;">Email</td>
                            <td style="padding: 8px; border: 1px solid #eaeaea;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #eaeaea; font-weight: bold;">Subject</td>
                            <td style="padding: 8px; border: 1px solid #eaeaea;">${subject}</td>
                        </tr>
                    </table>
                    <h3 style="margin-top: 20px;">Message:</h3>
                    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
                        <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `

            await transporter.sendMail({
                from: `"${storeName} Contact Form" <${process.env.SMTP_USER}>`,
                to: process.env.STORE_EMAIL,
                subject: `New Query from ${name}: ${subject}`,
                html: adminEmailHTML,
                replyTo: email, 
            })
        }

        return NextResponse.json(
            { success: true, message: 'Message sent successfully' },
            { status: 200 }
        )

    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Failed to send message', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        )
    }
}
