export interface Experience {
    title: string;
    company: string;
    time: string;
    about: string;
  }
  
  export interface Applicant {
    id: number;
    userName: string;
    userImg: string;
    field: string;
    stacks: string[]; 
    matched: number;
    experience: Experience[];
  }
  

  export const applicants: Applicant[] = [
    {
      id: 1,
      userName: "Sarah Johnson",
      userImg: "/images/profile/avarter.jpg",
      field: "Computer Science",
     stacks: ["Javascript", "Python", "React", "Node.js", "Machine Learning"],
      matched: 92,
      experience: [
        {
          title: "Frontend End Developer Resume",
          company: "Tech Solutions Inc",
          time: "2021 - Present",
          about: "Led frontend development for multiple web applications using React and Typescript, Led frontend development for multiple web applications using React and Typescript."
        },
        {
            title: "Frontend End Developer Resume",
            company: "Tech Solutions Inc",
            time: "2021 - Present",
            about: "Led frontend development for multiple web applications using React and Typescript, Led frontend development for multiple web applications using React and Typescript."
          },
          {
            title: "Frontend End Developer Resume",
            company: "Tech Solutions Inc",
            time: "2021 - Present",
            about: "Led frontend development for multiple web applications using React and Typescript, Led frontend development for multiple web applications using React and Typescript."
          },
          {
            title: "Frontend End Developer Resume",
            company: "Tech Solutions Inc",
            time: "2021 - Present",
            about: "Led frontend development for multiple web applications using React and Typescript, Led frontend development for multiple web applications using React and Typescript."
          },
          {
            title: "Frontend End Developer Resume",
            company: "Tech Solutions Inc",
            time: "2021 - Present",
            about: "Led frontend development for multiple web applications using React and Typescript, Led frontend development for multiple web applications using React and Typescript."
          },
      ]
    },
    {
      id: 2,
      userName: "Bob Smith",
      userImg: "/images/profile/bob.jpg",
      field: "Backend Developer",
      stacks: ["bob@example.com", "555-5678"],
     matched: 92,
      experience: [
        {
          title: "Backend Engineer",
          company: "DataSolutions",
          time: "Mar 2019 - Present",
          about: "Developed REST APIs and managed databases in Node.js."
        }
      ]
    },
    {
      id: 3,
      userName: "Clara Lee",
      userImg: "/images/profile/clara.jpg",
      field: "Fullstack Developer",
      stacks: ["clara@example.com", "555-9012"],
      matched: 92,
      experience: [
        {
          title: "Fullstack Developer",
          company: "WebWorks",
          time: "Jun 2021 - Present",
          about: "Worked on MERN stack projects and cloud deployments."
        }
      ]
    }
  ];

