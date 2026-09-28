export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  scoreLabel: string;
  score: string;
  boardOrUniversity: string;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'tools' | 'concepts' | 'salesforce';
  description: string;
  related: string[];
}

export interface WorkflowStep {
  id: string;
  label: string;
  step: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  type: string;
  stack: string[];
  github?: string;
  description: string;
  features: string[];
  workflow: WorkflowStep[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  periodOrScore: string;
  badgeOrCertDetails: string;
  image?: string;
  badgeImage?: string;
  url?: string;
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "Ritika Srivastava",
    title: "Backend / Software Engineer",
    location: "Serampore, West Bengal, India",
    headline: "Computer Science undergraduate building reliable backend systems, REST APIs, multi-tenant applications, and Salesforce solutions.",
    about: "Computer Science undergraduate with hands-on experience in backend and full-stack development. Skilled in Java, Spring Boot, REST APIs, PostgreSQL, React, and database management. Experienced in building multi-tenant and Salesforce applications, with strong foundations in Data Structures and Algorithms, OOP, and DBMS.",
    contact: {
      email: "ritikasrivastava010@gmail.com",
      phone: "+91 9330495931",
      location: "Serampore, West Bengal, India",
      linkedin: "https://www.linkedin.com/in/ritika-srivastava-41a40b2b4",
      github: "https://github.com/Ritika331",
      leetcode: "https://leetcode.com/u/ritika_2211/",
      salesforce: "https://www.salesforce.com/trailblazer/bvrhkgo3o54jwyeb1h"
    }
  },

  education: [
    {
      degree: "B.Tech — Computer Science and Engineering",
      institution: "Guru Nanak Institute of Technology",
      period: "2023–2027",
      scoreLabel: "CGPA",
      score: "8.925",
      boardOrUniversity: "Maulana Abul Kalam Azad University of Technology (MAKAUT)"
    },
    {
      degree: "Class 12 — ISC",
      institution: "Holy Home School, Serampore",
      period: "2021–2022",
      scoreLabel: "Aggregate",
      score: "90.33%",
      boardOrUniversity: "Council for the Indian School Certificate Examinations (CISCE)"
    },
    {
      degree: "Class 10 — ICSE",
      institution: "Holy Home School, Serampore",
      period: "2019–2020",
      scoreLabel: "Aggregate",
      score: "95.3%",
      boardOrUniversity: "Council for the Indian School Certificate Examinations (CISCE)"
    }
  ] as EducationItem[],

  skillCategories: [
    { id: 'languages', title: 'Programming Languages' },
    { id: 'frameworks', title: 'Frameworks & Technologies' },
    { id: 'databases', title: 'Databases' },
    { id: 'salesforce', title: 'Salesforce Ecosystem' },
    { id: 'concepts', title: 'Core Computer Science Concepts' },
    { id: 'tools', title: 'Developer Tools' }
  ],

  skills: [
    // Languages
    {
      name: "Java",
      category: "languages",
      description: "Primary backend language. Object-oriented architecture, collections framework, exception handling, and multithreading fundamentals.",
      related: ["Spring Boot", "REST APIs", "PostgreSQL", "OOP"]
    },
    {
      name: "Python (Basics)",
      category: "languages",
      description: "Basic programming syntax, scripting fundamentals, and algorithmic problem-solving basics.",
      related: ["DSA", "Data Structures"]
    },
    {
      name: "JavaScript",
      category: "languages",
      description: "Core language for web development, asynchronous operations, event-driven programming, and DOM manipulation.",
      related: ["React", "Node.js", "HTML", "CSS"]
    },

    // Frameworks & Technologies
    {
      name: "Spring Boot",
      category: "frameworks",
      description: "Backend microservices and layered enterprise architecture. Inversion of control, dependency injection, and JPA repository abstractions.",
      related: ["Java", "REST APIs", "PostgreSQL", "Spring Data JPA"]
    },
    {
      name: "REST APIs",
      category: "frameworks",
      description: "Standardized API endpoint design, HTTP methods, status code governance, request/response payload mapping, and tenant header handling.",
      related: ["Spring Boot", "Java", "PostgreSQL"]
    },
    {
      name: "React",
      category: "frameworks",
      description: "Modern component-based user interfaces, modular architecture, state management, and responsive frontend design.",
      related: ["JavaScript", "HTML", "CSS"]
    },
    {
      name: "Node.js",
      category: "frameworks",
      description: "Server-side JavaScript runtime environment for backend utilities and application execution.",
      related: ["JavaScript", "React"]
    },
    {
      name: "HTML",
      category: "frameworks",
      description: "Semantic HTML5 structural elements, accessible document tree, and web standard semantics.",
      related: ["CSS", "JavaScript", "React"]
    },
    {
      name: "CSS",
      category: "frameworks",
      description: "Responsive layouts, flexbox, grid, glassmorphism, dark-mode color tokens, and smooth UI animations.",
      related: ["HTML", "JavaScript", "React"]
    },

    // Databases
    {
      name: "PostgreSQL",
      category: "databases",
      description: "Relational database management system. Relational schema modeling, multi-tenant isolation schemas, indexing, and transactional integrity.",
      related: ["Spring Boot", "Java", "DBMS"]
    },
    {
      name: "MySQL",
      category: "databases",
      description: "Relational database querying, structured tables, primary/foreign key relationships, and ACID compliance.",
      related: ["PostgreSQL", "DBMS", "Java"]
    },

    // Salesforce
    {
      name: "Salesforce Administration",
      category: "salesforce",
      description: "User provisioning, profiles, role hierarchy, permission sets, security models, organization management, and sharing settings.",
      related: ["Salesforce Development", "Salesforce Flow", "Permission Sets"]
    },
    {
      name: "Salesforce Development",
      category: "salesforce",
      description: "Custom cloud solutions, data modeling, custom objects, relational lookups, and business logic automation.",
      related: ["Apex", "SOQL", "Lightning Web Components", "Salesforce Flow"]
    },
    {
      name: "Salesforce Flow",
      category: "salesforce",
      description: "Record-triggered flows, scheduled flows, automated notification triggers, and record creation workflows.",
      related: ["Salesforce Administration", "Apex"]
    },
    {
      name: "Apex",
      category: "salesforce",
      description: "Strongly typed, object-oriented programming language executing flow and transaction control on Force.com platform.",
      related: ["SOQL", "Salesforce Development", "Java"]
    },
    {
      name: "SOQL",
      category: "salesforce",
      description: "Salesforce Object Query Language for structured querying and retrieval of organization record sets.",
      related: ["Apex", "Salesforce Development"]
    },
    {
      name: "Lightning Web Components",
      category: "salesforce",
      description: "Modern enterprise UI components built using HTML, modern JavaScript, and CSS within the Salesforce ecosystem.",
      related: ["Salesforce Development", "JavaScript"]
    },

    // Core Concepts
    {
      name: "Data Structures and Algorithms",
      category: "concepts",
      description: "Arrays, Linked Lists, Stacks, Queues, Binary Trees, Graphs, Sorting, Searching, and Dynamic Programming.",
      related: ["Java", "OOP", "DBMS"]
    },
    {
      name: "Object-Oriented Programming",
      category: "concepts",
      description: "Encapsulation, Inheritance, Polymorphism, Abstraction, Design Principles, and robust class hierarchies.",
      related: ["Java", "Spring Boot", "Apex"]
    },
    {
      name: "Database Management Systems",
      category: "concepts",
      description: "Relational algebra, normalization (1NF–BCNF), ACID properties, transaction isolation levels, and concurrency control.",
      related: ["PostgreSQL", "MySQL", "Spring Boot"]
    },
    {
      name: "Operating Systems",
      category: "concepts",
      description: "Process management, CPU scheduling algorithms, virtual memory, paging, deadlocks, multithreading, and file systems.",
      related: ["DSA", "Java"]
    },

    // Tools
    {
      name: "Git",
      category: "tools",
      description: "Distributed version control, branch management, collaborative workflows, and GitHub repository hosting.",
      related: ["Visual Studio Code", "IntelliJ IDEA"]
    },
    {
      name: "Visual Studio Code",
      category: "tools",
      description: "Primary development environment for frontend, JavaScript, and configuration tooling.",
      related: ["Git"]
    },
    {
      name: "IntelliJ IDEA",
      category: "tools",
      description: "Enterprise IDE specialized for Java, Spring Boot, Maven dependencies, and backend debugging.",
      related: ["Java", "Spring Boot"]
    },
    {
      name: "Google Antigravity",
      category: "tools",
      description: "Cutting-edge agentic development environment and workflow tooling.",
      related: ["Git"]
    }
  ] as SkillItem[],

  experience: {
    role: "AI Model Annotator",
    company: "iMerit Technology",
    partner: "via RT Network Solutions Pvt. Ltd.",
    location: "Remote",
    type: "Paid Internship",
    period: "January 2026 – April 2026",
    description: "Evaluated AI generated images for accuracy, quality and prompt alignment.",
    workflowSteps: [
      {
        step: "01",
        label: "AI GENERATED IMAGE",
        description: "High-resolution generative image ingested from AI diffusion models based on complex multi-attribute prompts."
      },
      {
        step: "02",
        label: "EVALUATION PROTOCOL",
        description: "Standardized evaluation rubric applied to systematically inspect visual artifacts, spatial consistency, and semantics."
      },
      {
        step: "03",
        label: "ACCURACY AUDIT",
        description: "Verification of anatomical accuracy, perspective precision, realistic lighting, and structural coherence."
      },
      {
        step: "04",
        label: "QUALITY ASSESSMENT",
        description: "Analysis of pixel fidelity, edge sharpness, noise reduction, and fine-grained visual texture quality."
      },
      {
        step: "05",
        label: "PROMPT ALIGNMENT",
        description: "Evaluating strict adherence to prompt constraints, object counts, attribute bindings, and stylistic guidelines."
      },
      {
        step: "06",
        label: "HUMAN EVALUATION",
        description: "Final human-in-the-loop validation and scoring delivered to refine and optimize foundational generative model training."
      }
    ]
  },

  projects: [
    {
      id: "multi-tenant-task-management",
      name: "Multi-Tenant Task Management System",
      type: "Team Project",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Spring Data JPA"],
      github: "https://github.com/Ritika331/Multi-Tenant-Task-Management-System-",
      description: "Developed a backend-focused multi-tenant task management system enabling multiple organizations to securely manage their users and tasks with organization-level data isolation.",
      features: [
        "REST APIs for organization, user, and task operations",
        "Layered backend architecture (Controller, Service, Repository, Database)",
        "Tenant-aware data handling using X-ORG-ID header",
        "Strict organization-level data isolation",
        "Input validation and Global exception handling",
        "PostgreSQL integration with Spring Data JPA entities",
        "Organization module, User module, and Task module",
        "Service-layer logic for robust business workflows",
        "Database schema design and entity relationship mappings"
      ],
      workflow: [
        {
          id: "org",
          step: "01",
          label: "ORGANIZATION",
          title: "Tenant Request Inception",
          description: "Tenant clients send authorized HTTP requests specifying their organization scope."
        },
        {
          id: "xorg",
          step: "02",
          label: "X-ORG-ID",
          title: "Tenant-Aware Header Extraction",
          description: "Tenant-aware handling is used to maintain organization-level data isolation. The X-ORG-ID header is extracted by the interceptor to bind all subsequent queries to the tenant's data domain."
        },
        {
          id: "req",
          step: "03",
          label: "REQUEST",
          title: "REST API Endpoint Routing",
          description: "JSON payloads and HTTP verbs (GET, POST, PUT, DELETE) reach the API gateway with preliminary routing."
        },
        {
          id: "controller",
          step: "04",
          label: "CONTROLLER",
          title: "Controller Layer & Validation",
          description: "REST controllers process incoming requests, execute input validation, and dispatch to service layer."
        },
        {
          id: "service",
          step: "05",
          label: "SERVICE",
          title: "Business Logic Layer",
          description: "Business logic and task-management operations, enforcing organizational policies and business constraints."
        },
        {
          id: "repository",
          step: "06",
          label: "REPOSITORY",
          title: "Spring Data JPA Layer",
          description: "Spring Data JPA repository interfaces execute queries automatically constrained by the organization identifier."
        },
        {
          id: "database",
          step: "07",
          label: "POSTGRESQL",
          title: "PostgreSQL Database Layer",
          description: "PostgreSQL + Spring Data JPA providing high-performance, ACID-compliant relational data persistence with tenant isolation."
        }
      ]
    },
    {
      id: "careconnect-healthcare",
      name: "CareConnect — Healthcare Management System",
      type: "Salesforce Healthcare Solution",
      stack: ["Salesforce Custom Objects", "Salesforce Flow", "Validation Rules", "Formula Fields", "Permission Sets", "Reports", "Dashboards"],
      description: "Built a Salesforce healthcare system to manage patients, doctors, appointments, medical records, prescriptions, and billing.",
      features: [
        "Patient management with custom object records",
        "Doctor management and schedule tracking",
        "Appointment management with automated status tracking",
        "Medical records documentation and consultation summaries",
        "Prescriptions and medication linkage",
        "Billing and invoice record generation",
        "Record-Triggered Flows for appointment notifications",
        "Record-Triggered Flow for automated medical record to invoice creation",
        "Validation rules ensuring clinical data integrity",
        "Formula fields for calculated metrics and invoice subtotals",
        "Role-based Permission Sets for doctors, staff, and billing personnel",
        "Reports and Dashboards for healthcare performance metrics"
      ],
      workflow: [
        {
          id: "patient",
          step: "01",
          label: "PATIENT",
          title: "Patient Registration & Profile",
          description: "Patient custom object records created with validation rules verifying medical and contact information."
        },
        {
          id: "appointment",
          step: "02",
          label: "APPOINTMENT",
          title: "Appointment Booking",
          description: "Appointments created linking patient, doctor, and designated consultation time slot."
        },
        {
          id: "flow-notif",
          step: "03",
          label: "FLOW AUTOMATION",
          title: "Record-Triggered Appointment Flow",
          description: "Record-Triggered Flow executes on appointment creation to automatically dispatch appointment notifications."
        },
        {
          id: "doctor",
          step: "04",
          label: "DOCTOR",
          title: "Doctor Consultation & Access",
          description: "Physicians access assigned appointments securely governed by role-based Permission Sets."
        },
        {
          id: "medical-record",
          step: "05",
          label: "MEDICAL RECORD",
          title: "Clinical Record Documentation",
          description: "Medical records created documenting diagnosis, symptoms, and treatment progress."
        },
        {
          id: "prescription",
          step: "06",
          label: "PRESCRIPTION",
          title: "Prescription Association",
          description: "Prescriptions linked to the medical record detailing dosage and duration."
        },
        {
          id: "flow-billing",
          step: "07",
          label: "BILLING & INVOICE",
          title: "Automated Invoice Creation Flow",
          description: "Record-Triggered Flow automatically creates invoice records from finalized medical records with formula field calculations."
        }
      ]
    }
  ] as ProjectItem[],

  achievements: {
    leetcode: {
      title: "LeetCode Consistency & Problem Solving",
      problemsSolved: "400+",
      exactSolved: "447",
      easy: "174",
      medium: "193",
      hard: "80",
      streak: "300+ Days",
      exactActiveDays: "338",
      submissionsPastYear: "678",
      badgesCount: "14",
      recentBadge: "200 Days Badge 2026",
      profileUrl: "https://leetcode.com/u/ritika_2211/",
      streakImage: "/pictures/leetcode-streaks.png",
      badgesImage: "/pictures/leetcode-badges.png",
      flow: [
        { step: "01", label: "PROBLEM", desc: "Analyze algorithmic constraints & edge cases" },
        { step: "02", label: "SOLVE", desc: "Develop optimal data structure solution" },
        { step: "03", label: "SUBMIT", desc: "Execute proctored test cases" },
        { step: "04", label: "ACCEPTED", desc: "Verify runtime and memory efficiency" },
        { step: "05", label: "NEXT PROBLEM", desc: "Continuous daily streak progression" }
      ]
    },
    salesforce: {
      title: "Salesforce Trailhead Expeditioner",
      rank: "Expeditioner",
      badges: "66",
      superbadges: "1",
      points: "56,400",
      trails: "3",
      profileUrl: "https://www.salesforce.com/trailblazer/bvrhkgo3o54jwyeb1h",
      profileImage: "/pictures/salesforce-profile.png",
      flow: [
        { step: "01", label: "USER", desc: "Standardized identity & role permissions" },
        { step: "02", label: "SALESFORCE", desc: "Force.com cloud platform architecture" },
        { step: "03", label: "OBJECTS", desc: "Custom schemas, fields, & relationships" },
        { step: "04", label: "FLOW", desc: "Automated record-triggered logic" },
        { step: "05", label: "APEX / SOQL", desc: "Custom platform code & queries" },
        { step: "06", label: "LWC", desc: "Modern Lightning Web Components" }
      ]
    },
    gfg: {
      title: "GFG Technical Scripter 2026",
      status: "Winner",
      benefits: ["Winner", "Cash Prize", "GFG Swags"],
      image: "/pictures/yuva-award.png",
      description: "Recognized as Winner in the prestigious GeeksforGeeks Technical Scripter 2026 competition, awarded Cash Prize and official GFG Swags."
    },
    nptel: {
      title: "NPTEL — Programming in Java",
      honor: "Top 5% Nationwide (TOPPER)",
      score: "95%",
      assignmentsScore: "24.88 / 25",
      examScore: "70.5 / 75",
      level: "Elite + Gold Certified",
      institution: "IIT Kharagpur / SWAYAM / NPTEL",
      image: "/pictures/nptel-java-cert.png"
    },
    research: {
      title: "Hallucination-Free AI Strategies for Enhancing Accuracy in LLMs",
      conference: "RAICCIT 2025",
      role: "Co-Author",
      description: "Proposed techniques to improve LLM reliability and reduce hallucinations.",
      image: "/pictures/raiccit-award.jpeg",
      flow: [
        { step: "01", label: "LLM", desc: "Large Language Model Prompt Ingestion" },
        { step: "02", label: "GENERATED RESPONSE", desc: "Initial model synthesis & raw generation" },
        { step: "03", label: "VERIFICATION", desc: "Fact-checking & consistency auditing" },
        { step: "04", label: "RELIABILITY", desc: "Mitigating hallucinations & uncertainty" },
        { step: "05", label: "IMPROVED OUTPUT", desc: "High-accuracy, trustworthy final output" }
      ]
    }
  },

  certifications: [
    {
      id: "salesforce-expeditioner",
      title: "Salesforce Trailhead Expeditioner",
      issuer: "Salesforce Trailhead",
      periodOrScore: "Expeditioner Rank",
      badgeOrCertDetails: "66 Badges • 1 Superbadge • 56,400 Points",
      image: "/pictures/salesforce-profile.png",
      url: "https://www.salesforce.com/trailblazer/bvrhkgo3o54jwyeb1h"
    },
    {
      id: "servicenow-csa",
      title: "ServiceNow Certified System Administrator",
      issuer: "ServiceNow",
      periodOrScore: "Global Certification",
      badgeOrCertDetails: "Official Certified System Administrator Credential",
      image: "/pictures/servicenow-csa-badge.png"
    },
    {
      id: "oracle-oci-genai",
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle University",
      periodOrScore: "Score: 94%",
      badgeOrCertDetails: "Oracle Certified Professional Recognition",
      badgeImage: "/pictures/oci-genai-badge.png",
      image: "/pictures/oci-genai-cert.png"
    },
    {
      id: "eduskills-java-internship",
      title: "Java Full Stack Developer Virtual Internship",
      issuer: "EduSkills",
      periodOrScore: "Grade O",
      badgeOrCertDetails: "October–December 2025 Virtual Internship Program"
    },
    {
      id: "nptel-programming-java",
      title: "NPTEL — Programming in Java",
      issuer: "NPTEL (IIT Kharagpur)",
      periodOrScore: "Score: 95% • Top 5% Nationwide",
      badgeOrCertDetails: "Elite + Gold Certified (Topper)",
      image: "/pictures/nptel-java-cert.png"
    }
  ] as CertificationItem[]
};
