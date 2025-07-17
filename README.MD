## 📘 Rick and Morty GraphQL App

A simple React + Next.js application that fetches data from the Rick and Morty GraphQL API using Apollo Client.

---

## 🧱 Features

1. 🔍 Fetch and display episodes using GraphQL.

2. 🖼️ Responsive UI built with Tailwind CSS.

3. 🐛 Error handling using a custom ErrorBoundary component.

4. 🔁 Pagination support.
---

## ⚙️ Setup
```bash
git clone https://github.com/your-username/alx-graphql-0x03.git
cd alx-graphql-0x03/alx-rick-and-morty-app
npm install
npm run dev

```

## 📁 Project Structure
```
alx-rick-and-morty-app/
├── components/
│   └── ErrorBoundary.tsx
├── graphql/
│   └── queries.ts
├── lib/
│   └── apollo-client.ts
├── pages/
│   └── index.tsx
│   └── _app.tsx
└── README.md
```


## 🐞 ErrorBoundary & ErrorProneComponent
   - What is ErrorBoundary?

A React class component that catches unexpected errors in React components during client-side rendering and displays a fallback UI instead of crashing the whole app. 
---

* What we did:
1. Created an ErrorBoundary component to protect the app from crashing due to errors in child components.

2. Created an ErrorProneComponent that deliberately throws an error when rendered, to test ErrorBoundary.

3. Used ErrorProneComponent inside the main page pages/index.tsx wrapped with ErrorBoundary to catch errors.

4. Disabled server-side rendering (SSR) temporarily in the page using next/dynamic with { ssr: false } because ErrorBoundary does not catch errors during SSR.

