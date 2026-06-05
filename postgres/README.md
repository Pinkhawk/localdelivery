# localdelivery Frontend

_In windows_

**Set up Package Manager**

```bash
npm install -g pnpm
```

**SetUP Next.JS APP**

```bash
pnpm create next-app@latest frontend
or
pnpm create next-app

```

Select prompts

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

### Run Locally

```
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
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── users/
│   │   └── settings/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── forms/
│   │   └── layout/
│   │
│   ├── services/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── users.ts
│   │
│   ├── hooks/
│   │
│   ├── store/
│   │
│   ├── lib/
│   │
│   └── types/
│
├── public/
├── .env.local
└── package.json
```
