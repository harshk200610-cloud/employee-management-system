
const employees = [
  {
    id: 1,
    email: "employee1@gmail.com",
    password: "Emp@1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Login Page",
        description: "Create a responsive login page using React and Tailwind CSS.",
        date: "2026-09-16",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve the responsive navigation issue on mobile screens.",
        date: "2026-09-17",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Project Structure",
        description: "Set up the basic folder structure for the employee management project.",
        date: "2026-09-14",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update Documentation",
        description: "Update the project README with installation and usage instructions.",
        date: "2026-09-13",
        category: "Documentation"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@gmail.com",
    password: "Emp@2345",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Dashboard UI",
        description: "Create the employee dashboard layout with reusable components.",
        date: "2026-09-18",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Implement Search",
        description: "Add search functionality to filter employees by name or email.",
        date: "2026-09-19",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Setup React Router",
        description: "Configure routing between login, dashboard, and profile pages.",
        date: "2026-09-15",
        category: "React"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@gmail.com",
    password: "Emp@3456",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create API Endpoints",
        description: "Develop backend endpoints for employee authentication.",
        date: "2026-09-20",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Connect MySQL Database",
        description: "Connect the backend application to the MySQL database.",
        date: "2026-09-21",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Test Login API",
        description: "Test login functionality using sample employee credentials.",
        date: "2026-09-16",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix Database Connection",
        description: "Resolve connection errors occurring during local development.",
        date: "2026-09-14",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Add Logout API",
        description: "Implement the backend endpoint for employee logout.",
        date: "2026-09-22",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@gmail.com",
    password: "Emp@4567",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Profile Page",
        description: "Create a profile page to display employee details.",
        date: "2026-09-18",
        category: "UI Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Add Edit Profile",
        description: "Allow employees to update their profile information.",
        date: "2026-09-20",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Employee Cards",
        description: "Build reusable employee cards for the dashboard.",
        date: "2026-09-15",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix Profile Layout",
        description: "Resolve alignment issues in the employee profile page.",
        date: "2026-09-13",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Add Profile Image",
        description: "Allow employees to upload and display a profile image.",
        date: "2026-09-23",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Review UI Components",
        description: "Review existing components for consistency and reuse.",
        date: "2026-09-16",
        category: "Review"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@gmail.com",
    password: "Emp@5678",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Unit Tests",
        description: "Write unit tests for the employee management components.",
        date: "2026-09-19",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Test Dashboard",
        description: "Test dashboard functionality across different screen sizes.",
        date: "2026-09-20",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Review Task Component",
        description: "Review the TaskList component and suggest improvements.",
        date: "2026-09-15",
        category: "Review"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix Test Failures",
        description: "Resolve failing tests in the task management module.",
        date: "2026-09-14",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Test Report",
        description: "Prepare a report describing test results and identified issues.",
        date: "2026-09-22",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Perform Integration Testing",
        description: "Test the integration between frontend and backend modules.",
        date: "2026-09-24",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Setup Testing Environment",
        description: "Configure the testing environment for the project.",
        date: "2026-09-16",
        category: "Testing"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@gmail.com",
    password: "Adm@1234"
  }
];

export { employees, admin };

export const  setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
   const employees =  JSON.parse(localStorage.getItem('employees'))
   const admin =  JSON.parse(localStorage.getItem('admin'))
   console.log(employees, admin);
   
   
}