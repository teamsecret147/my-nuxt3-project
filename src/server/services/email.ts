import * as nodemailer from 'nodemailer'

// Tạo transporter cho email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendResetPasswordEmail(email: string, resetUrl: string) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Đặt lại mật khẩu',
      html: `
        <h1>Đặt lại mật khẩu</h1>
        <p>Bạn đã yêu cầu đặt lại mật khẩu. Vui lòng click vào link bên dưới để đặt lại mật khẩu:</p>
        <a href="${resetUrl}">Đặt lại mật khẩu</a>
        <p>Link này sẽ hết hạn sau 1 giờ.</p>
        <p>Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.</p>
      `,
    })
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Không thể gửi email đặt lại mật khẩu')
  }
}
