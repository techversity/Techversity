const data = {
  heroImage: "https://tse4.mm.bing.net/th/id/OIP.lYRz_WY8q3ICCIwHwO3yowHaD5?rs=1&pid=ImgDetMain&o=7&rm=3",
  tagline:
    "Master both sides of security — offensive and defensive — supercharged with AI. From OS and networks to ethical hacking, malware analysis, SOC automation and adversarial-AI defence, across 45+ hands-on projects and 3 capstones.",
  overview:
    "Cybersecurity is no longer just firewalls and patches — attackers and defenders now both use AI, and the professionals who understand both win. This executive program blends deep security fundamentals — operating systems, networks, cryptography, enterprise and application security — with offensive skills (ethical hacking, VAPT, malware analysis, red-team tactics) and defensive AI (blue-team automation, SOC, adversarial-AI defence). Over 200+ hours of live and self-paced learning, you build 45+ hands-on projects across four virtual machines and finish with three real-world capstones plus a portfolio project.",

  heroStats: [
    { val: "8", unit: "Months", label: "Duration" },
    { val: "45", unit: "+", label: "Hands-On Projects" },
    { val: "28", unit: "+", label: "Tools Covered" },
    { val: "3", unit: "", label: "Capstone Projects" },
  ],

  highlights: [
    { icon: "shield", img: "https://i.pinimg.com/1200x/20/61/ce/2061ceae4c2ab6059d0ea4eb15a0d0ae.jpg", title: "Offensive + Defensive Mastery", desc: "Balanced red-team and blue-team training — attack and defend with equal depth." },
    { icon: "cpu",    img: "https://i.pinimg.com/736x/b0/38/46/b038467001ad03d0e5a68b85e6a6362b.jpg", title: "AI-Powered Security", desc: "AI-augmented recon, AI-driven SOC automation and adversarial-AI defence built in." },
    { icon: "rocket", img: "https://i.pinimg.com/1200x/36/d1/6a/36d16a8bc9597f727d31bf16b3d6872c.jpg", title: "45+ Projects, 3 Capstones", desc: "Honeypots, VAPT, forensics, malware analysis and day-in-the-life capstones." },
    { icon: "users",  img: "https://i.pinimg.com/736x/81/75/d5/8175d5e9e74be1ee7d628d8b0d9c5d38.jpg", title: "Integrated Virtual Labs", desc: "A secure browser-based sandbox with four virtual machines — no local setup." },
    { icon: "award",  img: "https://i.pinimg.com/1200x/7a/54/fa/7a54faf114764105991e6fcbadedc382.jpg", title: "Ethical-Hacking Aligned", desc: "Curriculum mapped to recognised ethical-hacking and security certification standards." },
    { icon: "clock",  img: "https://i.pinimg.com/736x/3e/7f/5c/3e7f5c55cbcd82127c507c0a39a2e818.jpg", title: "Flexible for Professionals", desc: "Live weekend-friendly classes, all recorded, with lifetime access." },
  ],

  journey: [
    { n: "01", phase: "Foundations",          desc: "OS, scripting, networks and cryptography — the technical base of security." },
    { n: "02", phase: "Enterprise & AppSec",  desc: "SOC workflows, IAM, SIEM, secure SDLC, OWASP and DevSecOps." },
    { n: "03", phase: "AI for Defence",       desc: "AI foundations, blue-team detection, response and automation." },
    { n: "04", phase: "Offensive Security",   desc: "Malware analysis, ethical hacking, VAPT and AI-enhanced red-team tactics." },
    { n: "05", phase: "Advanced AI Defence",  desc: "LLMs, adversarial models and AI risk defence in modern security." },
    { n: "06", phase: "Capstone & Portfolio", desc: "Three day-in-the-life capstones plus a real-world portfolio project." },
  ],

  modules: [
    {
      n: 1, title: "Preparing for Your AI-Powered Cybersecurity Executive Journey", weeks: "Foundation",
      courses: [
        "Overview of the program, learning journey and how AI is reshaping cybersecurity roles",
        "Linux and operating system fundamentals",
        "Networking essentials and TCP/IP",
        "Cryptography basics and security governance frameworks (NICE)",
      ],
      deliverables: "Foundational readiness — Linux, networking, cryptography and governance grounding",
      skills: ["Linux", "Networking", "Cryptography", "Security Governance"],
    },
    {
      n: 2, title: "Operating System & Scripting for Cybersecurity", weeks: "Self-paced",
      courses: [
        "Operating system internals for security",
        "Scripting fundamentals to automate security tasks",
        "Command-line proficiency for security workflows",
        "Automating repetitive security operations",
      ],
      deliverables: "Security automation scripts and a hardened OS configuration",
      skills: ["OS Internals", "Scripting", "Automation", "Command Line"],
      preview: true,
    },
    {
      n: 3, title: "Network Security & Cryptography Essentials", weeks: "Self-paced",
      courses: [
        "Network security fundamentals and common attack vectors",
        "Cryptography fundamentals — encryption, hashing, digital signatures",
        "PKI and secure communications",
        "Traffic analysis and packet inspection",
      ],
      deliverables: "Network traffic analysis report and a cryptography implementation exercise",
      skills: ["Network Security", "Cryptography", "PKI", "Traffic Analysis"],
      preview: true,
    },
    {
      n: 4, title: "Enterprise Infrastructure Security", weeks: "Core",
      courses: [
        "SOC workflows, log management, threat correlation and alert triage",
        "Identity and Access Management (IAM) policies",
        "Real-time monitoring with SIEM platforms",
        "Enterprise hardening and defence-in-depth",
      ],
      deliverables: "A SOC triage workflow and an IAM policy implementation",
      skills: ["SOC Operations", "IAM", "SIEM", "Log Management", "Threat Correlation"],
    },
    {
      n: 5, title: "Application and Web Application Security", weeks: "Core",
      courses: [
        "Secure SDLC principles and threat modelling",
        "OWASP Top 10 vulnerabilities",
        "DevSecOps practices and vulnerability management",
        "Secure application development",
      ],
      deliverables: "A threat model and a secured, vulnerability-assessed web application",
      skills: ["Application Security", "OWASP Top 10", "Secure SDLC", "DevSecOps", "Threat Modelling"],
    },
    {
      n: 6, title: "AI Foundations for Cybersecurity Professionals", weeks: "Core",
      courses: [
        "Machine Learning, NLP and Deep Learning for security",
        "AI applications in cybersecurity",
        "AI ethics and responsible model training",
        "How AI enhances threat detection and response",
      ],
      deliverables: "An applied AI-for-security mini-project",
      skills: ["Machine Learning", "NLP", "Deep Learning", "AI Ethics", "AI in Security"],
    },
    {
      n: 7, title: "AI-Powered Blue Team Strategies: Detection, Response & Automation", weeks: "Core",
      courses: [
        "Automate threat detection and response with AI and behavioural analytics",
        "Threat intelligence and large language models for security",
        "SOC automation and orchestration (SOAR)",
        "Strengthening enterprise security posture with AI",
      ],
      deliverables: "An AI-augmented detection-and-response pipeline",
      skills: ["Blue Team", "Threat Detection", "SOAR", "Threat Intelligence", "Behavioural Analytics"],
      preview: true,
    },
    {
      n: 8, title: "Ransomware and Malware Analysis", weeks: "Core",
      courses: [
        "Trace the malware lifecycle from payload to lateral movement",
        "Sandboxing and safe malware detonation",
        "Reverse engineering fundamentals",
        "Digital forensics and threat mitigation",
      ],
      deliverables: "A full malware analysis write-up from a sandboxed sample",
      skills: ["Malware Analysis", "Reverse Engineering", "Sandboxing", "Digital Forensics"],
    },
    {
      n: 9, title: "Ethical Hacking and VAPT", weeks: "Core",
      courses: [
        "Advanced ethical hacking methodology",
        "Penetration testing with Metasploit and Kali Linux",
        "Vulnerability assessment and reporting",
        "Attacker techniques, defence and system hardening",
      ],
      deliverables: "A complete VAPT engagement report",
      skills: ["Ethical Hacking", "Penetration Testing", "VAPT", "Metasploit", "Kali Linux"],
    },
    {
      n: 10, title: "AI-Enhanced Red Team Tactics: Exploitation to Post-Exploitation", weeks: "Advanced",
      courses: [
        "Automate recon, exploitation and persistence with AI agents and LLMs",
        "Adversarial ML for offensive security",
        "Adaptive attack simulation and emulation frameworks",
        "Supercharging red-team operations with AI",
      ],
      deliverables: "An AI-assisted red-team exercise from recon to post-exploitation",
      skills: ["Red Team", "AI Red-Teaming", "Adversarial ML", "Exploitation", "Attack Simulation"],
    },
    {
      n: 11, title: "Advanced AI in Cybersecurity: LLMs, Adversarial Models & Risk Defence", weeks: "Advanced",
      courses: [
        "LLMs for SOC automation, phishing detection and threat triage",
        "Defending against adversarial AI attacks on NLP systems",
        "Generative AI and prompt engineering for security",
        "AI risk defence and model security in enterprise environments",
      ],
      deliverables: "An AI risk-defence plan and an adversarial-attack simulation",
      skills: ["LLM Security", "Adversarial AI", "Generative AI", "Prompt Engineering", "AI Risk Defence"],
    },
    {
      n: 12, title: "Portfolio Project: Real-World Scenarios in Cyber, Red/Blue Teams & AI", weeks: "Capstone", isCapstone: true,
      courses: [
        "Solve real-world challenges using red-team, blue-team and AI strategies",
        "Three day-in-the-life capstone simulations",
        "Build a comprehensive portfolio project",
        "Present your work to an expert panel",
      ],
      deliverables: "Three capstone projects plus a portfolio showcasing offensive, defensive and AI security skills",
      skills: ["End-to-End Security", "Incident Response", "Red/Blue/AI", "Technical Reporting", "Portfolio Building"],
    },
  ],

  electives: [
    "Cyber Security Master Class",
    "Masterclass from a Former NPCI-level Expert",
    "AI Literacy — GenAI, prompt engineering & ChatGPT",
    "Certified Ethical Hacker (CEH v13 AI aligned)",
    "AI-Driven Cloud Security Mastery (Azure AZ-900 / SC-900 / AZ-500 aligned)",
    "CompTIA Security+ (SY0-701) preparation",
  ],

  tools: [
    "Kali Linux", "Wireshark", "Nmap", "Metasploit", "Nessus", "Nikto", "John the Ripper",
    "Aircrack-ng", "OWASP ZAP", "OWASP Threat Dragon", "Burp Suite", "Shodan", "Spiderfoot",
    "SCAPY", "Binwalk", "Crunch", "MISP", "PEStudio", "GFI LanGuard", "New Relic", "Tor",
    "AWS", "n8n", "DeepExploit", "theHarvester", "7zip", "Windows", "ChatGPT",
  ],

  capstone: {
    title: "Step into the shoes of a real security professional.",
    desc: "The program culminates in three immersive, day-in-the-life capstone projects plus a portfolio project — simulating the real challenges faced by System Administrators, SOC Analysts and Network Security Engineers. You'll set up secure storage, run vulnerability assessments with Metasploit, and deploy and secure infrastructure, all in an integrated lab with four virtual machines.",
    points: [
      "Three day-in-the-life capstone simulations across real roles",
      "Apply red-team, blue-team and AI skills together",
      "Work in a secure browser-based lab with four VMs",
      "Build a portfolio that proves practical capability to recruiters",
    ],
  },

  outcomes: [
    "Run ethical hacking and VAPT engagements end-to-end",
    "Analyse malware and ransomware safely with forensics and reverse engineering",
    "Build AI-augmented detection, response and SOC automation",
    "Secure enterprise, application, web and cloud infrastructure",
    "Apply and defend against adversarial AI and LLM-based attacks",
    "Ship 45+ projects and 3 capstones as a job-ready portfolio",
  ],

  learningJourney: [
    { tab: "Learning Experience", heading: "Hands-on, lab-first learning", points: ["Live, interactive classes led by industry experts", "200+ hours of learning material", "45+ projects across four virtual machines", "Recorded classes with lifetime access"] },
    { tab: "Support & Assistance", heading: "Never stuck for long", points: ["Dedicated Cohort Manager", "Peer engagement via community forums", "Regular mentoring sessions", "24/7 support via email, chat and calls"] },
    { tab: "Career Support",       heading: "Built to get you hired", points: ["1-on-1 career advisor", "AI-powered resume & LinkedIn review", "1:1 mock interviews", "Job marketplace and referral network"] },
    { tab: "Networking & Peers",   heading: "Learn alongside professionals", points: ["Cohort from BFSI, telecom, IT, healthcare and more", "Masterclasses from senior industry experts", "Lifetime alumni community access", "Collaborate on real security projects"] },
  ],

  forWhom: [
    { title: "IT & Network Professionals", img: "https://i.pinimg.com/736x/fb/bd/05/fbbd052076dc213ac9ed51077f68e83a.jpg", desc: "Analysts, network admins and consultants moving into senior security roles." },
    { title: "Managers & Leaders", img: "https://i.pinimg.com/736x/c3/d7/c6/c3d7c6f0431d0fc77836be6a5d926c19.jpg", desc: "Leaders in BFSI, telecom and healthcare needing strategic security depth." },
    { title: "Career Changers", img: "https://i.pinimg.com/236x/89/2f/8d/892f8d99d81c803306ce90d782e79c5a.jpg", desc: "Graduates transitioning into cybersecurity — no programming prerequisite." },
    { title: "Aspiring Red/Blue Teamers", img: "https://i.pinimg.com/736x/2f/94/12/2f941208fa76d96131ce81616f5a735f.jpg", desc: "Those wanting deep, hands-on offensive and defensive expertise." },
  ],

  compare: {
    ours: [
      "45+ projects, 3 capstones + a portfolio project",
      "Both offensive and defensive security, plus AI",
      "Integrated virtual labs with four VMs",
      "Live classes, dedicated cohort manager and mentoring",
      "University-partner certificate that carries weight",
    ],
    others: [
      "Mostly theory, few real labs",
      "Only one side — either attack or defence",
      "Pre-recorded videos, no live support",
      "No AI-driven security content",
      "A completion badge, not capability",
    ],
  },

  whyNow: {
    heading: "AI has changed both sides of the fight.",
    body: "Attackers now use generative AI to move faster, and defenders need AI to keep up. The global cybersecurity market is on track to more than double this decade, and organisations are hiring for exactly the hybrid skill set this program builds: strong fundamentals plus the AI techniques reshaping offence and defence.",
    stats: [
      { val: "14.3", unit: "%", label: "global cybersecurity market CAGR" },
      { val: "$562B", unit: "+", label: "projected market size by 2032" },
      { val: "56", unit: "%", label: "of firms say GenAI increased cyber attacks" },
      { val: "3.5M", unit: "+", label: "unfilled security roles worldwide" },
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
    currency: "INR",
    total: "2,32,000",
    strike: "2,73,760",
    discount: "15% off",
    emi: "10,388",
    note: "Inclusive of all taxes. Flexible EMI options available at 0% interest with no hidden cost.",
    includes: [
      "Full curriculum — 200+ hours, live + self-paced",
      "45+ projects, 3 capstones and integrated virtual labs",
      "University-awarded certificate on completion",
      "1-on-1 career advisor and interview prep",
      "Lifetime access to recordings and content",
    ],
  },

  skillsCovered: [
    "OS & Scripting", "Network Security", "Cryptography & PKI", "SOC Operations", "SIEM & SOAR",
    "IAM", "Application Security", "OWASP Top 10", "DevSecOps", "Malware Analysis", "Reverse Engineering",
    "Digital Forensics", "Ethical Hacking", "Penetration Testing", "VAPT", "Red Team Tactics",
    "Blue Team Automation", "Threat Intelligence", "AI for Security", "Adversarial AI", "LLM Security",
    "Generative AI", "Cloud Security", "Incident Response",
  ],

  projects: [
    { title: "Secure File Storage Setup", desc: "Step into a System Administrator role to design and configure secure, access-controlled file storage." },
    { title: "Vulnerability Assessment with Metasploit", desc: "Run a full vulnerability assessment and exploitation exercise against a target using Metasploit." },
    { title: "Active Directory Deployment & Hardening", desc: "Deploy and secure an Active Directory domain as a Network Security Engineer." },
    { title: "SOC Alert Triage Simulation", desc: "Act as a SOC Analyst to correlate logs, triage alerts and respond to simulated incidents." },
    { title: "Web App Penetration Test", desc: "Find and exploit OWASP Top 10 vulnerabilities in a deliberately vulnerable web application." },
    { title: "Malware Sandbox Analysis", desc: "Detonate and reverse-engineer a malware sample safely to document its behaviour." },
    { title: "AI-Powered Threat Detection", desc: "Build an ML-assisted anomaly detection workflow over network traffic data." },
    { title: "Honeypot Deployment", desc: "Deploy and monitor a honeypot to capture and analyse real attacker behaviour." },
    { title: "Red-Team Recon Automation", desc: "Automate reconnaissance and exploitation steps using AI agents and scripting." },
    { title: "Adversarial-AI Defence", desc: "Attack and then harden an AI model against adversarial inputs in an enterprise scenario." },
  ],

  applicationProcess: [
    { step: "01", title: "Submit Application", desc: "Complete the online application with your background and a brief statement of purpose." },
    { step: "02", title: "Application Review", desc: "A dedicated admissions panel reviews your application against the program outcomes." },
    { step: "03", title: "Admission Offer", desc: "Shortlisted candidates receive a formal offer; reserve your seat to join the cohort." },
  ],

  batchProfile: {
    intro: "You'll learn alongside experienced professionals from data-sensitive sectors — the mix is what makes the cohort valuable.",
    industries: [
      { label: "Information Technology", pct: 34 },
      { label: "BFSI", pct: 22 },
      { label: "Telecom", pct: 12 },
      { label: "Healthcare", pct: 10 },
      { label: "Consulting", pct: 9 },
      { label: "Others", pct: 13 },
    ],
  },

  faqs: [
    { q: "Do I need a security or programming background to enroll?", a: "No. A bachelor's degree with around 50% and roughly four years of work experience is preferred, and basic programming familiarity helps, but the program starts from Linux, networking and cryptography fundamentals — non-programmers are welcome." },
    { q: "Does this cover both attacking and defending?", a: "Yes. You learn offensive security — ethical hacking, VAPT, malware analysis and AI red-team tactics — and defensive security — SOC operations, detection, response and blue-team automation — with AI woven through both." },
    { q: "What will I have built by the end?", a: "45+ hands-on projects across four virtual machines, three day-in-the-life capstone simulations, and a portfolio project — tangible proof of practical skill for employers." },
    { q: "What tools will I learn?", a: "Kali Linux, Wireshark, Nmap, Metasploit, Nessus, Burp Suite, OWASP ZAP, Shodan, SCAPY and many more — 28+ industry-standard security and AI tools in an integrated lab." },
    { q: "Are there electives and masterclasses?", a: "Yes — electives include AI Literacy, ethical-hacking certification prep, cloud security (Azure-aligned), CompTIA Security+ prep, plus masterclasses from senior industry experts." },
    { q: "Can I take this while working full-time?", a: "Yes. Live classes are weekend-friendly at 8–10 hours a week, every session is recorded, and you get lifetime access — designed for busy professionals." },
  ],
};
export default data;