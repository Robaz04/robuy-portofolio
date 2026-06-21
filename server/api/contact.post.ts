import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
        throw createError({
            statusCode: 400,
            message: 'Name, email, and message are required'
        })
    }

    const config = useRuntimeConfig()

    // Debug — cek apakah config terbaca
    console.log('API Key exists:', !!config.resendApiKey)
    console.log('Contact email:', config.contactEmail)

    const resend = new Resend(config.resendApiKey as string)

    try {
        const result = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: config.contactEmail as string,
            replyTo: email,
            subject: `${subject || 'New message'} — from ${name}`,
            html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #070311; color: #eadef6; padding: 32px; border-radius: 12px; border: 1px solid rgba(139,92,246,0.3);">
        <h2 style="color: #d0bcff; margin-bottom: 24px;">New message from your portfolio</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #cbc3d7; width: 100px;">Name</td>
            <td style="padding: 8px 0; color: #eadef6; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #cbc3d7;">Email</td>
            <td style="padding: 8px 0; color: #eadef6;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #cbc3d7;">Subject</td>
            <td style="padding: 8px 0; color: #eadef6;">${subject || '(no subject)'}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 20px; background: rgba(139,92,246,0.08); border-radius: 8px; border: 1px solid rgba(139,92,246,0.2);">
          <p style="color: #cbc3d7; margin: 0 0 8px;">Message</p>
          <p style="color: #eadef6; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <p style="margin-top: 24px; color: #cbc3d7; font-size: 12px;">
          Sent from Robuy Portofolio — reply directly to this email to respond to ${name}
        </p>
      </div>
    `
        })

        // Log response dari Resend
        console.log('Resend result:', JSON.stringify(result))

        if (result.error) {
            console.error('Resend error:', result.error)
            throw createError({
                statusCode: 500,
                message: result.error.message
            })
        }

        return { success: true }
    } catch (err) {
        console.error('Send email failed:', err)
        throw createError({
            statusCode: 500,
            message: 'Failed to send email'
        })
    }
})

