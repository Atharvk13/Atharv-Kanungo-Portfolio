export interface ResumeData {
  basics: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    phone: string;
    links: { label: string; url: string }[];
  };
  experience: {
    company: string;
    role: string;
    dates: string;
    location: string;
    bullets: string[];
    metrics?: string[];
  }[];
  achievements: {
    title: string;
    context: string;
    type: "win" | "metric" | "leadership" | "award" | "research";
    value?: string;
  }[];
  projects: {
    title: string;
    stack: string[];
    bullets: string[];
    links?: { label: string; url: string }[];
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    dates: string;
    location: string;
  }[];
  certifications: string[];
  awards: string[];
  extra: string[];
}

export const resumeData: ResumeData = {
  basics: {
    name: "Atharv Kanungo",
    title: "Backend Software Engineer | Java Full Stack Developer",
    summary: "Backend Software Engineer with a passion for building scalable, production-grade systems that solve real-world problems. Specialized in Java-based backend development with expertise in Spring Boot, Hibernate, and RESTful API design. Experienced in event-driven systems using Apache Kafka and Salesforce integration.",
    location: "Indore, Madhya Pradesh, India",
    email: "kanungoatharv@gmail.com",
    phone: "6232511818",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/atharv-kanungo-6a8b771b6/" },
      { label: "GitHub", url: "https://github.com/Atharvk13" },
      { label: "LeetCode", url: "https://leetcode.com/u/AtharvJi/" }
    ]
  },
  experience: [
    {
      company: "Bajaj Finserv Health",
      role: "Salesforce Developer",
      dates: "July 2025 - December 2025",
      location: "Pune, Maharashtra, India",
      bullets: [
        "Worked on backend workflows for policy document generation.",
        "Implemented event-driven communication systems using Apache Kafka.",
        "Integrated Salesforce using SOQL.",
        "Directly impacted 10,000+ policy documents monthly.",
        "Reduced manual processing time by 40%."
      ],
      metrics: ["10,000+ docs/mo", "40% time reduction"]
    }
  ],
  achievements: [
    {
      title: "Code Crusade 1.0",
      context: "Secured AIR 41 in competitive programming competition.",
      type: "win",
      value: "AIR 41"
    },
    {
      title: "ICI3 Conference",
      context: "Research paper published at international conference.",
      type: "research"
    },
    {
      title: "HackerRank C",
      context: "4-star rating in C programming.",
      type: "metric",
      value: "4⭐"
    },
    {
      title: "Smart India Hackathon",
      context: "Participated in national level hackathon.",
      type: "leadership"
    },
    {
      title: "Kriyeta 3.0",
      context: "Hackathon participant and contributor.",
      type: "leadership"
    }
  ],
  projects: [
    {
      title: "BaatCheet — A Chat Application",
      stack: ["Java", "Spring Boot", "WebSocket", "MySQL", "HTML", "CSS", "JavaScript"],
      bullets: [
        "Real-time Messaging: Built a chat platform enabling instant communication between users using WebSockets. Implemented user authentication and session management for secure messaging. Designed backend APIs for message handling and persistence with MySQL integration."
      ],
      links: [{ label: "Source Code", url: "https://github.com/Atharvk13/BaatCheet---A-Chat-Application" }]
    },
    {
      title: "Job Tracking Application",
      stack: ["Java", "Spring Boot", "MySQL", "REST API", "HTML", "CSS", "JavaScript"],
      bullets: [
        "Application Management System: Developed a full-stack job tracker to manage applications across stages (Applied, Interview, Offer, Rejected). Built RESTful APIs for CRUD operations with Hibernate ORM for database persistence. Implemented session-based authentication for secure, user-specific data access."
      ]
    },
    {
      title: "Product Management Application",
      stack: ["Java", "Spring MVC", "MySQL", "JSP", "HTML", "CSS"],
      bullets: [
        "CRUD Management System: Built a web application to perform product management operations including create, read, update, and delete. Used Spring MVC architecture with JSP for dynamic views and MySQL for database handling. Focused on clean MVC separation and form handling."
      ],
      links: [{ label: "Source Code", url: "https://github.com/Atharvk13/Product-Management-Application" }]
    },
    {
      title: "Language Learning Support System",
      stack: ["TypeScript", "Node.js", "Google Gemini API", "HTML", "CSS", "JavaScript"],
      bullets: [
        "AI-Powered Language Assistant: Built a language learning and grammar support application integrating Google Gemini API to provide intelligent language assistance. Implemented features like grammar correction, language translation, and interactive text processing. Designed a responsive frontend and backend services using Node.js to handle API interactions and user requests efficiently."
      ],
      links: [{ label: "Source Code", url: "https://github.com/Atharvk13/Language-Learning-Support-System" }]
    },
    {
      title: "Movie Review Website",
      stack: ["Java", "JSP", "Servlets", "HTML", "CSS", "JavaScript"],
      bullets: [
        "Review Platform: Built a responsive movie review website allowing users to explore, read, and submit movie reviews. Implemented interactive UI components for displaying featured reviews and detailed movie insights. Designed a clean and user-friendly interface with dynamic content rendering to enhance user engagement."
      ],
      links: [{ label: "Source Code", url: "https://github.com/Atharvk13/Movie-Review" }]
    }
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["Java", "Spring Boot", "Apache Kafka", "SQL", "JSP", "Servlets", "RESTful APIs"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL"]
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "Postman", "CI/CD", "Azure", "GitHub Copilot"]
    },
    {
      category: "Technologies",
      items: ["Event-Driven Architecture", "SOQL", "Salesforce", "HTML Templating"]
    },
    {
      category: "Coursework",
      items: ["OOP", "Data Structures & Algorithms", "RESTful APIs", "MVC Architecture", "Event-Driven Systems", "Authentication & Authorization", "DBMS"]
    }
  ],
  education: [
    {
      institution: "Acropolis Institute of Technology and Research",
      degree: "Bachelor of Technology - BTech, Computer Science and Information Technology",
      dates: "2022 - 2026",
      location: "Indore, India"
    },
    {
      institution: "Progressive Education School ISC - Higher Secondary School (12th)",
      degree: "PCM (Physics, Chemistry, Mathematics)",
      dates: "2020 - 2022",
      location: "Indore, India"
    },
    {
      institution: "Progressive Education School ICSE - Secondary School (10th)",
      degree: "Science and Mathematics",
      dates: "2018 - 2020",
      location: "Indore, India"
    }
  ],
  certifications: [
    "Journal of Emerging Technologies and Innovative Research",
    "Salesforce Certified Agentforce Specialist"
  ],
  awards: [
    "Programming in Java",
    "Google Cloud Study Jam"
  ],
  extra: [
    "Intern @BFHL",
    "Eager to contribute to innovative teams working on high-impact software solutions."
  ]
};
