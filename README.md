# Nuxt 3 Authentication Project

Dự án xác thực người dùng sử dụng Nuxt 3 với các tính năng:

- Đăng nhập/Đăng ký
- Quên mật khẩu
- Đặt lại mật khẩu
- Xác thực qua email

## Yêu cầu hệ thống

- Node.js 16.x trở lên
- PostgreSQL 14.x trở lên
- npm hoặc yarn
- Docker và Docker Compose (nếu chạy bằng Docker)

## Cài đặt

### Cách 1: Cài đặt trực tiếp

1. Cài đặt PostgreSQL:

   - Tải PostgreSQL từ: https://www.postgresql.org/download/windows/
   - Trong quá trình cài đặt:
     - Đặt mật khẩu cho user postgres là "postgres"
     - Giữ port mặc định là 5432
   - Sau khi cài đặt, tạo database mới tên "nuxt_auth_db" bằng pgAdmin

2. Cài đặt dependencies:

```bash
npm install
```

3. Cấu hình biến môi trường:

   - Copy file `.env.example` thành `.env`
   - Cập nhật các thông tin trong file `.env`:
     - DATABASE_URL: URL kết nối database
     - SMTP_USER: Email của bạn
     - SMTP_PASS: Mật khẩu ứng dụng (nếu dùng Gmail)
     - EMAIL_FROM: Email gửi

4. Chạy migration:

```bash
npx prisma migrate dev
```

5. Khởi chạy ứng dụng:

```bash
npm run dev
```

### Cách 2: Sử dụng Docker

1. Cài đặt Docker và Docker Compose

2. Cấu hình biến môi trường:

   - Copy file `.env.example` thành `.env`
   - Cập nhật các thông tin trong file `.env`:
     - SMTP_USER: Email của bạn
     - SMTP_PASS: Mật khẩu ứng dụng (nếu dùng Gmail)
     - EMAIL_FROM: Email gửi

3. Build và chạy ứng dụng:

```bash
docker-compose up --build
```

Ứng dụng sẽ chạy tại http://localhost:3000

## Cấu hình Email

Nếu sử dụng Gmail:

1. Bật xác thực 2 yếu tố cho tài khoản Google
2. Tạo mật khẩu ứng dụng:
   - Vào Google Account > Security
   - Chọn "App passwords"
   - Tạo mật khẩu mới cho ứng dụng
   - Sử dụng mật khẩu này trong SMTP_PASS

## API Endpoints

- POST /api/auth/login: Đăng nhập
- POST /api/auth/register: Đăng ký
- POST /api/auth/forgot-password: Quên mật khẩu
- POST /api/auth/reset-password: Đặt lại mật khẩu

## Cấu trúc Database

### User Model

- id: String (UUID)
- email: String (unique)
- password: String
- name: String (optional)
- resetToken: String (optional)
- resetTokenExpiry: DateTime (optional)
- createdAt: DateTime
- updatedAt: DateTime
