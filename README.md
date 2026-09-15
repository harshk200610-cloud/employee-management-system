# Employee Management System

A React-based Employee Management System that allows an administrator to assign tasks to employees and enables employees to view and manage their assigned tasks.

## Features

### Admin Features

- Admin login
- View all employees
- Assign tasks to selected employees
- View assigned tasks
- Delete completed tasks
- Manage employee task information

### Employee Features

- Employee login
- View assigned tasks
- View task counters
- View active tasks
- View new tasks
- View completed tasks
- View failed tasks
- Light and dark theme toggle

## Technologies Used

- React.js
- Vite
- JavaScript
- Tailwind CSS
- React Context API
- React Hooks
- Local Storage
- HTML5
- CSS3

## Concepts Learned

- React components
- Props
- State management using `useState`
- Context API using `useContext`
- Conditional rendering
- Event handling
- Form handling
- Component reusability
- Passing data between components
- Array methods such as `map`, `filter`, and `find`
- Local Storage
- Login authentication logic
- Light and dark theme implementation
- Task status management
- Responsive layouts using Tailwind CSS

## Login Credentials

### Admin Account

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@gmail.com | Adm@1234 |

### Employee Accounts

| Employee | Email | Password |
|----------|-------|----------|
| Harsh | employee1@gmail.com | Emp@1234 |
| Rohit | employee2@gmail.com | Emp@2345 |
| Aarav | employee3@gmail.com | Emp@3456 |
| Sneha | employee4@gmail.com | Emp@4567 |
| Priya | employee5@gmail.com | Emp@5678 |

> Use the admin account to assign tasks.  
> Log out from the admin account and log in using an employee account to view the assigned tasks.

## Project Workflow

1. Log in using the admin credentials.
2. Select an employee.
3. Assign a task to the employee.
4. Log out from the admin account.
5. Log in using the selected employee's credentials.
6. View the assigned task in the employee dashboard.
7. Check the task counters and task status.

## Project Images
<img width="630" height="678" alt="Screenshot 2026-09-15 184200" src="https://github.com/user-attachments/assets/f94f5853-7e55-452f-8225-ffeeb96a6504" />
<img width="1917" height="1017" alt="Screenshot 2026-09-15 184528" src="https://github.com/user-attachments/assets/1cec9205-d9a6-4237-b1a3-61fa2f7db807" />
<img width="1661" height="1027" alt="Screenshot 2026-09-15 184449" src="https://github.com/user-attachments/assets/d1366b90-04a4-4800-ab68-a42dda80b23c" />
<img width="1907" height="1000" alt="Screenshot 2026-09-15 184240" src="https://github.com/user-attachments/assets/7e062627-1ade-4a38-b163-4272b7b3f3fd" />
<img width="1648" height="1017" alt="Screenshot 2026-09-15 184423" src="https://github.com/user-attachments/assets/97e3d18a-6e79-4d6e-b6e4-d688251044fd" />
<img width="1917" height="1032" alt="Screenshot 2026-09-15 184222" src="https://github.com/user-attachments/assets/2eb8e204-1310-462e-ba44-9e889bdd1f2d" />

## Project Structure
```
src
│
├── components
│   ├── AdminComponents
│   ├── EmployeeComponents
│   ├── TaskList
│   └── OtherComponents
│
├── context
│   └── AuthContext.jsx
│
├── pages
│   ├── Login.jsx
│   ├── AdminDashboard.jsx
│   └── EmployeeDashboard.jsx
│
├── utils
│   └── data.js
│
├── App.jsx
├── main.jsx
└── index.css




