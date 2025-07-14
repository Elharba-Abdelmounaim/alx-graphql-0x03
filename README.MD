# alx-rick-and-morty-app

A web application built with **Next.js** that uses **GraphQL** and **Apollo Client** to fetch data from the **Rick and Morty** API.  
The project uses **TypeScript**, **ESLint**, and **Tailwind CSS** for code quality and styling.

---

## Requirements

- Node.js (preferably latest version)  
- npm

---

## alx-rick-and-morty-app/
```
├── graphql/
│ ├── apolloClient.ts # Apollo Client setup for connecting to the Rick and Morty API
│ └── queries.ts # GraphQL queries
├── pages/
│ └── _app.tsx # Main app file wrapping components with ApolloProvider
├── styles/
│ └── globals.css # CSS files including Tailwind CSS setup
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
```

## Setup Instructions

1. Clone the repository.
2. Navigate to the project directory `alx-rick-and-morty-app`.
3. Install dependencies:
   ```bash
   npm install