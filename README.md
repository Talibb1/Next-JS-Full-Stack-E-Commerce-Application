#E-Commerce

> Discover a seamless shopping experience at our e-commerce haven. Browse an extensive selection of products from top brands, enjoy secure transactions, and relish swift deliveries. Elevate your online shopping journey with user-friendly navigation and exclusive deals. Shop effortlessly, anytime, anywhere, and redefine convenience with our digital marketplace.

## Overview

Explore curated deals and trending products on our inviting e-commerce homepage. Instantly find what you need for a delightful shopping experience.

![E-commerce](./E-commerce.png)

## Features

### Pages

- Total `x31` Pages
  - Home `x1`
  - Detail `x1`
  - Filter `x1`
  - Auth `x3`
  - Dashboard `x3`
    - Buyer `x5` `cart & favorites`
    - Seller `x8` `CRUD intension`
    - Admin `x10` `CRUD intension`

### Modals

- Total `x15` Modals
  - Category `x1`
  - Brand `x1`
  - Store `x1`
  - Search `x1`
  - Cart `x1`
  - Auth `x1`
  - Buyer `x2`
  - Seller `x2`
  - Admin `x5`

### Core

- Real-Time interaction `cart`, `favorites`, `create`, `read`, `update` & `delete`
- Separate Dashboard panel `admin`, `seller` & `buyer`
- Advance search filter `highlight matched words & letters`
- Image preview `avatar`, `thumbnail` & `gallery`
- Responsive design `pc`, `laptop`, `tablet` & `mobile`
- Payment gateway `stripe`
- Intuitive user-friendly design `ui/ux`
- Secure channel bypass `role based`

## Tech Stack

- Framework: `Next.Js 14 App Directory`
- State Container: `Redux Toolkit`
- Styling: `Tailwind CSS`
- Icons: `React Icons`
- Database: `MongoDB`
- ORM: `Mongoose`
- Linting: `ESLint`
- Formatter: `Prettier`
- Work Management: `Asana`
- Backend Directory: `Node.Js Express Server`

## Technologies

| Client                  | Server                    |
| ----------------------- | ------------------------- |
| @reduxjs/toolkit        | bcryptjs                  |
| autoprefixer            | cloudinary                |
| eslint                  | colors                    |
| eslint-config-next      | cors                      |
| next                    | dotenv                    |
| postcss                 | express                   |
| react                   | jsonwebtoken              |
| react-dom               | mongoose                  |
| react-icons             | multer                    |
| react-redux             | multer-storage-cloudinary |
| tailwind-scrollbar-hide | validator                 |
| tailwindcss             | nodemon                   |
| @tailwindcss/forms      |

# Development

## Clone Repository

You can use any package manager like `npm` or `yarn`

```bash
git clone https://github.com/Talibb1/Next-JS-Full-Stack-E-Commerce-Application.git
cd E-commerce

cd client
yarn install

cd ..

cd server
yarn install
```

## Environment Setup

### Client Side

```bash
NEXT_PUBLIC_BASE_URL="http://localhost:8080/api"
```
# Author

- Developer: [Talib Uddin](https://my-portfolio-talibs-projects-20e9aed6.vercel.app/)