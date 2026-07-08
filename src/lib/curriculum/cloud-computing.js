const data = {
  heroImage: "https://i.pinimg.com/1200x/47/ed/f2/47edf2d31c14d2bc756bb39b6cde2857.jpg",
  tagline:
    "Master cloud and DevOps end-to-end — AWS, Azure and Google Cloud, plus Docker, Kubernetes, Terraform and CI/CD — and layer AI on top to build, deploy and run intelligent cloud-native systems.",
  overview:
    "Cloud and DevOps skills sit behind almost every modern application — and the professionals who can architect, automate and secure them are in constant demand. This program takes you across the major clouds (AWS and Azure), through the full DevOps toolchain (Git, Jenkins, Ansible, Terraform, Docker, Kubernetes, monitoring), and into the AI-driven practices reshaping the field — generative AI on the cloud, containerising AI services, and AI orchestration. You build a large portfolio of hands-on projects and finish with an industry-oriented capstone that showcases real cloud-native, automated systems to employers.",

  heroStats: [
    { val: "11", unit: "Months", label: "Duration" },
    { val: "30", unit: "+", label: "Hands-On Projects" },
    { val: "33", unit: "+", label: "Tools Mastered" },
    { val: "1", unit: "", label: "Capstone Project" },
  ],

  highlights: [
    { icon: "cpu",    img: "https://i.pinimg.com/1200x/9d/b4/b6/9db4b68b34bc797b131df61a53011ff0.jpg", title: "Multi-Cloud: AWS & Azure", desc: "Architect and deploy across the major clouds, not just one provider." },
    { icon: "rocket", img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80", title: "30+ Hands-On Projects", desc: "CI/CD pipelines, containers, multi-cloud deployments and real infrastructure." },
    { icon: "award",  img: "https://i.pinimg.com/736x/82/a5/68/82a568b14c83a9a2b040b067fb0d9600.jpg", title: "Exam-Aligned with Major Certs", desc: "Curriculum mapped to leading AWS and Azure (AZ-104) certification tracks." },
    { icon: "shield", img: "https://i.pinimg.com/736x/13/cf/67/13cf677678423ef84997d2291ca68935.jpg", title: "DevSecOps & Security Built In", desc: "Secure pipelines, IAM and best practices woven throughout." },
    { icon: "users",  img: "https://i.pinimg.com/1200x/81/56/3e/81563eee08c9be9922545c53b06028e4.jpg", title: "Learn from Cloud Engineers", desc: "Live sessions with practitioners who run cloud and DevOps in production." },
    { icon: "clock",  img: "https://i.pinimg.com/736x/50/ce/a6/50cea61a8653f83262b80f081051681b.jpg", title: "AI-Powered Cloud & DevOps", desc: "Generative AI on the cloud, containerising AI services and AI orchestration." },
  ],

  journey: [
    { n: "01", phase: "Cloud Foundations",   desc: "AWS and Azure architecture, core services, IAM, compute, storage and networking." },
    { n: "02", phase: "GenAI on Cloud",       desc: "Generative AI foundations and applied GenAI on AWS." },
    { n: "03", phase: "DevOps Core",          desc: "Git, CI/CD with Jenkins, and IaC with Ansible and Terraform." },
    { n: "04", phase: "Containers",           desc: "Docker containerisation and Kubernetes orchestration at scale." },
    { n: "05", phase: "Monitoring & Azure AI", desc: "Monitoring, DevOps on AWS, Azure AZ-104 and AI services on Azure." },
    { n: "06", phase: "Capstone",             desc: "An industry-oriented capstone covering the latest cloud technologies." },
  ],

  modules: [
    {
      n: 1, title: "Induction to AI-Powered Cloud Computing and DevOps", weeks: "Induction",
      courses: [
        "Introduction to the Cloud Computing & DevOps program and learning journey",
        "How AI is reshaping cloud and DevOps roles",
        "Orientation to tools, labs and the capstone",
        "Setting your goals and outcomes",
      ],
      deliverables: "Program orientation and a personal learning roadmap",
      skills: ["Program Orientation", "Cloud & DevOps Overview"],
    },
    {
      n: 2, title: "Foundations and Preparatory Module — AWS & Azure", weeks: "Foundation",
      courses: [
        "Cloud fundamentals and core concepts",
        "Introduction to AWS and Azure architecture",
        "Compute, storage, networking and IAM basics",
        "Cloud cost and billing fundamentals",
      ],
      deliverables: "A foundational multi-cloud readiness assessment",
      skills: ["Cloud Fundamentals", "AWS Basics", "Azure Basics", "IAM"],
    },
    {
      n: 3, title: "Generative AI Foundations on AWS", weeks: "Core",
      courses: [
        "Generative AI concepts on the cloud",
        "AWS AI/ML services overview",
        "Foundations for deploying GenAI on AWS",
        "Responsible AI on the cloud",
      ],
      deliverables: "A GenAI-on-AWS foundations exercise",
      skills: ["Generative AI", "AWS AI Services", "Cloud AI Foundations"],
    },
    {
      n: 4, title: "AWS Solutions Architect", weeks: "Core",
      courses: [
        "AWS architecture and Solutions Architect fundamentals",
        "EC2, EBS, VPC, subnets, RDS and Lambda",
        "Designing scalable, resilient AWS solutions",
        "High availability and cost optimisation",
      ],
      deliverables: "A scalable AWS architecture design",
      skills: ["AWS Architecture", "EC2 & VPC", "RDS & Lambda", "Solution Design"],
      preview: true,
    },
    {
      n: 5, title: "Applied Generative AI with AWS", weeks: "Core",
      courses: [
        "Building generative AI applications on AWS",
        "Deploying and serving GenAI models",
        "Integrating GenAI into cloud workflows",
        "Scaling GenAI services",
      ],
      deliverables: "A deployed generative AI service on AWS",
      skills: ["Applied GenAI", "Model Deployment", "AWS AI", "Serving Models"],
    },
    {
      n: 6, title: "DevOps Foundations: Version Control and CI/CD with Jenkins", weeks: "Core",
      courses: [
        "DevOps and DevSecOps lifecycle",
        "Version control with Git and GitHub",
        "CI/CD pipelines with Jenkins — jobs, pipelines, Jenkinsfile",
        "Automating build and deployment",
      ],
      deliverables: "A Jenkins CI/CD pipeline from commit to deploy",
      skills: ["DevOps", "Git & GitHub", "Jenkins", "CI/CD"],
      preview: true,
    },
    {
      n: 7, title: "Configuration Management with Ansible and Terraform", weeks: "Core",
      courses: [
        "Infrastructure as Code (IaC) concepts",
        "Configuration management with Ansible",
        "Provisioning infrastructure with Terraform",
        "Automating environment setup",
      ],
      deliverables: "A Terraform + Ansible provisioned environment",
      skills: ["Infrastructure as Code", "Ansible", "Terraform", "Automation"],
    },
    {
      n: 8, title: "Containerization with Docker", weeks: "Core",
      courses: [
        "Docker architecture, images and registries",
        "Containerising applications",
        "Docker networking and volumes",
        "Docker security best practices",
      ],
      deliverables: "A dockerised multi-tier application",
      skills: ["Docker", "Containerisation", "Images & Registries", "Container Security"],
    },
    {
      n: 9, title: "Container Orchestration using Kubernetes", weeks: "Core",
      courses: [
        "Kubernetes architecture and core components",
        "Deployments, scaling and self-healing",
        "Services, networking and RBAC",
        "Managing workloads at scale",
      ],
      deliverables: "A Kubernetes deployment with scaling and self-healing",
      skills: ["Kubernetes", "Orchestration", "Scaling", "RBAC"],
    },
    {
      n: 10, title: "Monitoring in DevOps", weeks: "Core",
      courses: [
        "Monitoring fundamentals and observability",
        "Metrics, logging and alerting",
        "Building monitoring dashboards",
        "Incident response basics",
      ],
      deliverables: "An instrumented app with monitoring dashboards",
      skills: ["Monitoring", "Observability", "Alerting", "Dashboards"],
    },
    {
      n: 11, title: "DevOps on AWS", weeks: "Core",
      courses: [
        "AWS DevOps services — CodeBuild, CodeDeploy, CodePipeline",
        "CI/CD on AWS",
        "Infrastructure automation on AWS",
        "Deploying and managing on AWS",
      ],
      deliverables: "A CI/CD pipeline built with AWS DevOps services",
      skills: ["AWS DevOps", "CodePipeline", "CI/CD on AWS", "Automation"],
    },
    {
      n: 12, title: "Microsoft Certified Azure Administrator (AZ-104)", weeks: "Core",
      courses: [
        "Azure administration and governance",
        "Managing identities, compute and storage",
        "Azure networking and monitoring",
        "AZ-104 aligned skills",
      ],
      deliverables: "An Azure deployment managed with Resource Manager",
      skills: ["Azure Administration", "AZ-104", "Azure Networking", "Governance"],
    },
    {
      n: 13, title: "Containerizing AI Services with Docker and Azure", weeks: "Advanced",
      courses: [
        "Containerising AI services",
        "Deploying AI containers on Azure",
        "Managing AI workloads in containers",
        "Scaling AI services",
      ],
      deliverables: "A containerised AI service deployed on Azure",
      skills: ["AI Containers", "Docker + Azure", "AI Deployment", "Scaling AI"],
    },
    {
      n: 14, title: "Monitoring and Managing AI Services on Azure", weeks: "Advanced",
      courses: [
        "Monitoring AI services on Azure",
        "Managing AI workloads and cost",
        "Observability for AI systems",
        "Reliability and performance",
      ],
      deliverables: "A monitored, managed AI service on Azure",
      skills: ["AI Monitoring", "Azure AI Ops", "Observability", "Reliability"],
    },
    {
      n: 15, title: "AI Orchestration on Azure", weeks: "Advanced",
      courses: [
        "Orchestrating AI workflows on Azure",
        "Multi-service AI pipelines",
        "Automation and scheduling",
        "End-to-end AI orchestration",
      ],
      deliverables: "An orchestrated multi-service AI pipeline on Azure",
      skills: ["AI Orchestration", "AI Pipelines", "Automation", "Azure"],
    },
    {
      n: 16, title: "Cloud Computing Capstone Project", weeks: "Capstone", isCapstone: true,
      courses: [
        "Capstone kickoff — scope an industry-aligned cloud problem",
        "Build sprint with 1-on-1 mentor support",
        "Presentation dry-run with an expert panel",
      ],
      deliverables: "An industry-oriented capstone plus a 30+ project portfolio across AWS, Azure and DevOps",
      skills: ["End-to-End Cloud", "CI/CD Automation", "Cloud Architecture", "Portfolio Building"],
    },
  ],

  tools: [
    "AWS EC2", "AWS Lambda", "Amazon S3", "Amazon RDS", "VPC", "CloudFormation", "CloudWatch",
    "Azure", "Azure AZ-104", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "Terraform",
    "Ansible", "Git", "GitHub", "Prometheus", "Grafana", "SageMaker", "Azure ML", "OpenAI",
  ],

  capstone: {
    title: "Walk out with a cloud portfolio, not just a certificate.",
    desc: "Your capstone is an industry-aligned cloud-native system — designed, deployed and automated across the program, and presented to an expert panel. Alongside 30+ hands-on projects spanning CI/CD, containers and multi-cloud, it becomes the proof of capability that gets you hired.",
    points: [
      "Choose an industry-aligned problem that matches your target role",
      "Apply the full stack — cloud, DevOps, containers and AI",
      "Deploy real, automated, monitored infrastructure",
      "Present to mentors as you would to an engineering panel",
    ],
  },

  outcomes: [
    "Architect and deploy across AWS and Azure",
    "Build CI/CD pipelines with Jenkins and infrastructure as code",
    "Containerise and orchestrate apps with Docker and Kubernetes",
    "Monitor and secure cloud systems end-to-end",
    "Deploy, containerise and orchestrate AI services on the cloud",
    "Ship a 30+ project cloud & DevOps portfolio you can demo in interviews",
  ],

  learningJourney: [
    { tab: "Learning Experience", heading: "Hands-on, lab-first learning", points: ["Live sessions with practising cloud engineers", "30+ projects and extensive practice labs", "Recorded classes with lifetime access", "Real-time doubt-clearing sessions"] },
    { tab: "Support & Assistance", heading: "Never stuck for long", points: ["Dedicated cohort manager", "Peer-to-peer engagement via chat", "Mentoring sessions for projects and doubts", "Instructor office hours"] },
    { tab: "Career Support",       heading: "Built to get you hired", points: ["1-on-1 career advisor", "AI-powered resume & LinkedIn review", "Mock interviews and assessments", "Job marketplace and referral network"] },
    { tab: "Networking & Peers",   heading: "Learn alongside professionals", points: ["Cohort from IT, software, banking, telecom and more", "Showcase and demo events", "Lifetime alumni community access", "Collaborate on real projects"] },
  ],

  forWhom: [
    { title: "Software Engineers", img: "https://i.pinimg.com/1200x/b4/5c/3b/b45c3bd7fc330aeda5dabfe92a934bca.jpg", desc: "Add cloud and DevOps to your stack and move into high-demand roles." },
    { title: "System & IT Admins", img: "https://i.pinimg.com/1200x/00/02/75/0002758bda124316c60470d837b8d9c5.jpg", desc: "Modernise from on-prem into cloud architecture and automation." },
    { title: "DevOps Aspirants", img: "https://i.pinimg.com/736x/63/3e/64/633e646d4b03b384ddf2c316e920fbde.jpg", desc: "Master the full toolchain — CI/CD, containers, IaC and monitoring." },
    { title: "Career Switchers", img: "https://images.unsplash.com/photo-1740817748368-b8e6a228937e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Enter cloud from a non-programming background with hands-on skills." },
  ],

  compare: {
    ours: [
      "30+ real projects + an industry capstone",
      "Multi-cloud — AWS and Azure with AI services",
      "Full DevOps toolchain plus GenAI and AI orchestration",
      "1-on-1 mentor and career support",
      "University-partner certificate that carries weight",
    ],
    others: [
      "A few basic deployments",
      "One cloud provider only",
      "Certification prep with no real automation or AI",
      "No personal guidance",
      "A completion badge, not capability",
    ],
  },

  whyNow: {
    heading: "Everything runs on the cloud now — and it needs people to run it.",
    body: "Global cloud spending is on track to pass a trillion dollars, and enterprises are still migrating off on-premises systems. That makes skilled cloud and DevOps engineers — especially those who can layer AI and automation on top — among the most in-demand and best-paid professionals in tech.",
    stats: [
      { val: "$1.1T", unit: "+", label: "projected global cloud spend by 2028" },
      { val: "33", unit: "+", label: "cloud & DevOps tools mastered" },
      { val: "3", unit: "", label: "clouds covered — AWS, Azure, GCP" },
      { val: "#1", unit: "", label: "most in-demand infrastructure skill set" },
    ],
  },

 
  university: {
    intro: "Techversity doesn't run these programs alone — every certification is awarded and backed by our accredited international university partners.",
    partners: [
      { name: "EU Global", country: "European Union", blurb: "An international institution partnering with Techversity to award globally recognised professional credentials.", img: "/images/Universities/EU Global/hero.avif" },
      { name: "ESDST", country: "Europe", blurb: "A partner institution offering accredited executive and professional certifications through Techversity.", img: "/images/Universities/ESDST/hero.avif" },
    ],
    note: "Your certificate is issued by the awarding university partner. Techversity facilitates admission, guidance and support end-to-end.",
  },

  pricing: {
    currency: "USD",
    total: "1,749",
    strike: "1,999",
    discount: "13% off",
    emi: "78",
    note: "Inclusive of all taxes. Flexible EMI options available at 0% interest with no hidden cost.",
    includes: [
      "Full curriculum — live sessions + self-paced labs",
      "30+ projects and an industry-oriented capstone",
      "University-awarded certificate on completion",
      "1-on-1 career advisor and interview prep",
      "Lifetime access to learning content",
    ],
  },

  skillsCovered: [
    "AWS Architecture", "Azure Administration (AZ-104)", "IAM", "EC2 & VPC", "Lambda & Serverless",
    "Generative AI on Cloud", "CI/CD", "Jenkins", "Git & GitHub", "Terraform", "Ansible",
    "Infrastructure as Code", "Docker", "Kubernetes", "Container Orchestration", "Monitoring & Observability",
    "AWS DevOps", "AI Containers", "AI Orchestration", "Multi-Cloud Deployment", "DevSecOps",
  ],

  projects: [
    { title: "Scalable AWS Architecture", desc: "Design and plan a highly available, cost-optimised AWS solution as a Solutions Architect." },
    { title: "GenAI Service on AWS", desc: "Deploy and serve a generative AI application on AWS infrastructure." },
    { title: "Jenkins CI/CD Pipeline", desc: "Build an end-to-end CI/CD pipeline from commit to deployment with Jenkins." },
    { title: "IaC with Terraform & Ansible", desc: "Provision and configure a full environment using infrastructure as code." },
    { title: "Dockerised Microservices", desc: "Containerise and deploy a multi-tier application with Docker." },
    { title: "Kubernetes Deployment", desc: "Deploy, scale and self-heal workloads on a Kubernetes cluster." },
    { title: "Monitoring & Observability", desc: "Instrument an application with metrics, logging and alerting dashboards." },
    { title: "Azure AZ-104 Deployment", desc: "Administer and manage an Azure environment aligned to AZ-104 skills." },
    { title: "Containerised AI on Azure", desc: "Containerise and orchestrate an AI service on Azure." },
    { title: "Cloud Capstone System", desc: "Build an industry-aligned, automated cloud-native system end-to-end." },
  ],

  applicationProcess: [
    { step: "01", title: "Submit Application", desc: "Complete the online application with your background details." },
    { step: "02", title: "Application Review", desc: "A dedicated admissions panel reviews your application against the program outcomes." },
    { step: "03", title: "Admission Offer", desc: "Shortlisted candidates receive an offer; reserve your seat to join the cohort." },
  ],

  batchProfile: {
    intro: "You'll learn alongside working professionals from across the tech industry — the mix is what makes the cohort valuable.",
    industries: [
      { label: "Information Technology", pct: 36 },
      { label: "Software Product", pct: 20 },
      { label: "BFSI", pct: 14 },
      { label: "Telecom", pct: 11 },
      { label: "Consulting", pct: 8 },
      { label: "Others", pct: 11 },
    ],
  },

  faqs: [
    { q: "Do I need a programming background to enroll?", a: "Not necessarily. Some professionals come from non-programming backgrounds; a bachelor's degree and around a year of work experience help. The program builds cloud and DevOps skills from the fundamentals, and a foundations module brings everyone to the same baseline." },
    { q: "Which cloud platforms does this cover?", a: "Primarily AWS and Microsoft Azure (including AZ-104 aligned skills), with cloud fundamentals that transfer to Google Cloud — so you can work across multi-cloud and hybrid environments." },
    { q: "What will I have built by the end?", a: "30+ hands-on projects including CI/CD pipelines, containerised microservices, Kubernetes deployments and multi-cloud infrastructure, plus an industry-oriented capstone — a full portfolio for employers." },
    { q: "What tools will I learn?", a: "Docker, Kubernetes, Terraform, Ansible, Jenkins, Git, Prometheus, Grafana and the core AWS and Azure services — 33+ industry-standard cloud and DevOps tools." },
    { q: "Is this aligned with cloud certifications?", a: "Yes. The curriculum is mapped to leading AWS and Azure (AZ-104) certification tracks, so it doubles as strong preparation if you choose to sit those exams." },
    { q: "Can I take this while working full-time?", a: "Yes. Sessions are live, online and weekend-friendly, and every class is recorded with lifetime access, so you can learn around a full-time job." },
  ],
};
export default data;