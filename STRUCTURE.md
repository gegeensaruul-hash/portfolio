# Student Task Manager - Folder Structure

```
student-task-manager/
├── node_modules/
├── src/
│   ├── api/
│   │   └── axiosClient.js
│   ├── app/
│   │   └── store.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── BackgroundDecorations.jsx
│   ├── context/
│   ├── feature/
│   │   ├── auth/
│   │   │   └── authSlice.js
│   │   └── tasks/
│   │       └── TaskSlice.js
│   ├── hooks/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Folder Descriptions

- **src/api/** - API client configuration and HTTP requests
- **src/app/** - Global app state and store configuration
- **src/components/** - Reusable UI components (Navbar, BackgroundDecorations)
- **src/context/** - React Context providers (if needed)
- **src/feature/** - Feature-based modules:
  - **feature/auth/** - Authentication logic and slices
  - **feature/tasks/** - Task management logic and slices
- **src/hooks/** - Custom React hooks
- **src/pages/** - Page components (Home, Projects, About, Contact)

This structure follows the **enhanced-shop** pattern with feature-based organization!
