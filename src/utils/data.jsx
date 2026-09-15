const employees = [
  {
    id: 1,
    firstName: 'Harsh',
    email: 'employee1@gmail.com',
    password: 'Emp@1234',

    tasks: [
      {
        id: 101,
        title: 'Prepare project report',
        description: 'Complete the project report and submit it.',
        date: '2026-09-15',
        category: 'Documentation',
        status: 'active',
      },
      {
        id: 102,
        title: 'Attend team meeting',
        description: 'Attend the weekly team meeting.',
        date: '2026-09-16',
        category: 'Meeting',
        status: 'active',
      },
      {
        id: 103,
        title: 'Update website',
        description: 'Update the company website content.',
        date: '2026-09-17',
        category: 'Development',
        status: 'newTask',
      },
      {
        id: 104,
        title: 'Submit assignment',
        description: 'Submit the assigned college work.',
        date: '2026-09-18',
        category: 'Assignment',
        status: 'completed',
      },
      {
        id: 105,
        title: 'Fix login bug',
        description: 'Resolve the login authentication issue.',
        date: '2026-09-19',
        category: 'Development',
        status: 'failed',
      },
    ],
  },

  {
    id: 2,
    firstName: 'Rohit',
    email: 'employee2@gmail.com',
    password: 'Emp@2345',

    tasks: [
      {
        id: 201,
        title: 'Design dashboard',
        description: 'Create the dashboard design.',
        date: '2026-09-15',
        category: 'Design',
        status: 'active',
      },
      {
        id: 202,
        title: 'Prepare presentation',
        description: 'Prepare slides for the client presentation.',
        date: '2026-09-16',
        category: 'Presentation',
        status: 'active',
      },
      {
        id: 203,
        title: 'Research competitors',
        description: 'Research competitor products.',
        date: '2026-09-17',
        category: 'Research',
        status: 'newTask',
      },
      {
        id: 204,
        title: 'Complete documentation',
        description: 'Complete the technical documentation.',
        date: '2026-09-18',
        category: 'Documentation',
        status: 'completed',
      },
    ],
  },

  {
    id: 3,
    firstName: 'Aarav',
    email: 'employee3@gmail.com',
    password: 'Emp@3456',

    tasks: [
      {
        id: 301,
        title: 'Test application',
        description: 'Test all major application features.',
        date: '2026-09-15',
        category: 'Testing',
        status: 'active',
      },
      {
        id: 302,
        title: 'Fix UI issues',
        description: 'Fix the reported user interface issues.',
        date: '2026-09-16',
        category: 'Development',
        status: 'active',
      },
      {
        id: 303,
        title: 'Update test cases',
        description: 'Update the existing test cases.',
        date: '2026-09-17',
        category: 'Testing',
        status: 'newTask',
      },
      {
        id: 304,
        title: 'Submit testing report',
        description: 'Submit the final testing report.',
        date: '2026-09-18',
        category: 'Documentation',
        status: 'completed',
      },
    ],
  },

  {
    id: 4,
    firstName: 'Sneha',
    email: 'employee4@gmail.com',
    password: 'Emp@4567',

    tasks: [
      {
        id: 401,
        title: 'Create user flow',
        description: 'Create the user flow for the application.',
        date: '2026-09-15',
        category: 'Design',
        status: 'active',
      },
      {
        id: 402,
        title: 'Review design',
        description: 'Review the latest application design.',
        date: '2026-09-16',
        category: 'Design',
        status: 'newTask',
      },
      {
        id: 403,
        title: 'Complete wireframes',
        description: 'Complete the application wireframes.',
        date: '2026-09-17',
        category: 'Design',
        status: 'completed',
      },
    ],
  },

  {
    id: 5,
    firstName: 'Priya',
    email: 'employee5@gmail.com',
    password: 'Emp@5678',

    tasks: [
      {
        id: 501,
        title: 'Prepare client report',
        description: 'Prepare the monthly client report.',
        date: '2026-09-15',
        category: 'Report',
        status: 'active',
      },
      {
        id: 502,
        title: 'Send project update',
        description: 'Send the project update to the manager.',
        date: '2026-09-16',
        category: 'Communication',
        status: 'newTask',
      },
      {
        id: 503,
        title: 'Complete assigned work',
        description: 'Complete the assigned project work.',
        date: '2026-09-17',
        category: 'Development',
        status: 'completed',
      },
      {
        id: 504,
        title: 'Resolve pending issue',
        description: 'Resolve the pending project issue.',
        date: '2026-09-18',
        category: 'Development',
        status: 'failed',
      },
    ],
  },
]

const admin = [
  {
    id: 101,
    firstName: 'Vikram',
    email: 'admin@gmail.com',
    password: 'Adm@1234',
  },
]

export { employees, admin }