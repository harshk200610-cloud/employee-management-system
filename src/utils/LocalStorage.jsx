
const employees = [
  {
    id: 1,
    firstName: "Harsh",
    email: "employee1@gmail.com",
    password: "Emp@1234",

    tasks: [
      {
        title: "Prepare project report",
        description: "Complete the project report and submit it.",
        date: "2026-09-15",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Attend team meeting",
        description: "Attend the weekly team meeting.",
        date: "2026-09-16",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Update website",
        description: "Update the company website content.",
        date: "2026-09-17",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Submit assignment",
        description: "Submit the assigned college work.",
        date: "2026-09-18",
        category: "Assignment",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix login bug",
        description: "Resolve the login authentication issue.",
        date: "2026-09-19",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
      total: 5,
    },
  },

  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@gmail.com",
    password: "Emp@2345",

    tasks: [
      {
        title: "Design dashboard",
        description: "Create the dashboard design.",
        date: "2026-09-15",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare presentation",
        description: "Prepare slides for the client presentation.",
        date: "2026-09-16",
        category: "Presentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Research competitors",
        description: "Research competitor products.",
        date: "2026-09-17",
        category: "Research",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Complete documentation",
        description: "Complete the technical documentation.",
        date: "2026-09-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
      total: 4,
    },
  },

  {
    id: 3,
    firstName: "Aarav",
    email: "employee3@gmail.com",
    password: "Emp@3456",

    tasks: [
      {
        title: "Test application",
        description: "Test all major application features.",
        date: "2026-09-15",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix UI issues",
        description: "Fix the reported user interface issues.",
        date: "2026-09-16",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Update test cases",
        description: "Update the existing test cases.",
        date: "2026-09-17",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Submit testing report",
        description: "Submit the final testing report.",
        date: "2026-09-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
      total: 4,
    },
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@gmail.com",
    password: "Emp@4567",

    tasks: [
      {
        title: "Create user flow",
        description: "Create the user flow for the application.",
        date: "2026-09-15",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Review design",
        description: "Review the latest application design.",
        date: "2026-09-16",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Complete wireframes",
        description: "Complete the application wireframes.",
        date: "2026-09-17",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],

    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
      total: 3,
    },
  },

  {
    id: 5,
    firstName: "Priya",
    email: "employee5@gmail.com",
    password: "Emp@5678",

    tasks: [
      {
        title: "Prepare client report",
        description: "Prepare the monthly client report.",
        date: "2026-09-15",
        category: "Report",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Send project update",
        description: "Send the project update to the manager.",
        date: "2026-09-16",
        category: "Communication",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Complete assigned work",
        description: "Complete the assigned project work.",
        date: "2026-09-17",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Resolve pending issue",
        description: "Resolve the pending project issue.",
        date: "2026-09-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],

    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
      total: 4,
    },
  },
];

const admin = [
  {
    id: 101,
    firstName: "Vikram",
    email: "admin@gmail.com",
    password: "Adm@1234",
  },
];

export { employees, admin };

export const setLocalStorage = () => {
localStorage.setItem('employees', JSON.stringify(employees));
localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
const employees = JSON.parse(localStorage.getItem('employees')) || [];
const admin = JSON.parse(localStorage.getItem('admin')) || [];


return { employees, admin };


};
