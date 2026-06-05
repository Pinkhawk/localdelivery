# localdelivery Frontend

_In windows_

**Set up Package Manager**

```bash
npm install -g pnpm
```

**SetUP Next.JS APP**

```bash
pnpm create next-app@latest frontend
# OR
pnpm create next-app
```

**Select Prompts**

```
✔ TypeScript?                Yes
✔ Linter                     ESLint
✔ React Compiler?            Yes
✔ Tailwind CSS?              No
✔ src/ directory?            Yes
✔ App Router?                Yes
✔ Turbopack?                 Yes
✔ Customize Import Alias?    No
```

**Install Dependencies**

```bash
# Makes HTTP requests to your FastAPI backend
pnpm add axios
# Global state management
pnpm add zustand
# Server state management
pnpm add @tanstack/react-query
# Build forms
pnpm add react-hook-form
# Validation
pnpm add zod
# SCSS Modules
pnpm add sass
```

### Run Locally

```bash
pnpm dev
```

---

# Recommended Structure

```
project/
│
frontend/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 ← Home Page (/)
│   │   │
│   │   ├── products/
│   │   │   ├── page.tsx             ← /products
│   │   │   └── [slug]/
│   │   │       └── page.tsx         ← /products/iphone-17
│   │   │
│   │   ├── cart/
│   │   │   └── page.tsx             ← /cart
│   │   │
│   │   ├── checkout/
│   │   │   └── page.tsx             ← /checkout
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx             ← /login
│   │   │
│   │   ├── register/
│   │   │   └── page.tsx             ← /register
│   │   │
│   │   ├── account/
│   │   │   ├── page.tsx             ← /account
│   │   │   └── addresses/
│   │   │       └── page.tsx         ← /account/addresses
│   │   │
│   │   ├── orders/
│   │   │   ├── page.tsx             ← /orders
│   │   │   └── [id]/
│   │   │       └── page.tsx         ← /orders/123
│   │   │
│   │   └── admin/
│   │       ├── layout.tsx
│   │       ├── page.tsx             ← /admin
│   │       ├── products/
│   │       ├── inventory/
│   │       ├── coupons/
│   │       └── analytics/
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── ProductCard/
│   │   ├── ProductGrid/
│   │   ├── CartItem/
│   │   └── Loader/
│   │
│   ├── services/
│   │   ├── api.ts
│   │   ├── products.ts
│   │   ├── cart.ts
│   │   └── auth.ts
│   │
│   ├── store/
│   │   ├── cartStore.ts
│   │   └── authStore.ts
│   │
│   ├── types/
│   │   ├── product.ts
│   │   ├── cart.ts
│   │   └── user.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useCart.ts
│   │   ├── useProducts.ts
│   │   ├── useDebounce.ts
│   │   ├── usePagination.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── utils/
│   │
│   ├── styles/
│   │   ├── globals.scss
│   │   ├── variables.scss
│   │   ├── mixins.scss
│   │   │
│   │   ├── components/
│   │   │   ├── Header.module.scss
│   │   │   ├── Footer.module.scss
│   │   │   ├── ProductCard.module.scss
│   │   │   └── CartItem.module.scss
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.module.scss
│   │   │   ├── Products.module.scss
│   │   │   ├── ProductDetails.module.scss
│   │   │   ├── Cart.module.scss
│   │   │   └── Checkout.module.scss
│   │   │
│   │   └── admin/
│   │       ├── Dashboard.module.scss
│   │       ├── Products.module.scss
│   │       └── Coupons.module.scss
│   ├── providers/
├── public/
├── .env.local
└── package.json
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
