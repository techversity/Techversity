const data = {
  heroImage: "https://i.pinimg.com/736x/dc/d7/1d/dcd71d3085257c682ab44e0c1d11d9a9.jpg",
  tagline:
    "Move from executing projects to leading them strategically — master governance, financial models, quantitative risk and AI-driven decision-making that goes well beyond a standard PMP.",
  overview:
    "Strategic Project Management is for professionals ready to step up from technical execution into enterprise leadership. This program closes the gap between managing projects and shaping strategy — you learn PMO structures and governance, financial evaluation with NPV, CBA and CEA, advanced scheduling and earned value management, and the AI/ML techniques now used for cost estimation, duration forecasting and risk assessment. Built around real case studies and a capstone, it prepares you to lead complex, high-stakes initiatives and align them with business strategy.",

  heroStats: [
    { val: "6", unit: "Weeks", label: "Duration" },
    { val: "7", unit: "+", label: "Applied Projects" },
    { val: "12", unit: "+", label: "Frameworks Covered" },
    { val: "98", unit: "%", label: "Completion" },
  ],

  highlights: [
    { icon: "award",  img: "https://i.pinimg.com/1200x/8e/3e/30/8e3e304ec1957cd5dc1836f2b8f1ca24.jpg", title: "Strategic, Beyond PMP", desc: "Go past execution into governance, strategy alignment and enterprise oversight." },
    { icon: "cpu",    img: "https://i.pinimg.com/736x/f7/8c/ef/f78cef0dd20b57db43cc6c93cc4e7303.jpg", title: "AI/ML-Powered Decision-Making", desc: "Fuzzy inference, Monte Carlo and ML models for cost, duration and risk." },
    { icon: "rocket", img: "https://i.pinimg.com/736x/d2/a4/42/d2a4424e8e717b9bc4fb6c63d059f309.jpg", title: "7 Applied Projects + Capstone", desc: "Real scenarios in cost estimation, earned value and portfolio prioritisation." },
    { icon: "users",  img: "https://i.pinimg.com/1200x/f5/bf/70/f5bf709621ed9e926d04d555181345ec.jpg", title: "Learn from Practitioners", desc: "Faculty and leaders who run complex programs and portfolios." },
    { icon: "shield", img: "https://i.pinimg.com/1200x/33/bf/df/33bfdf3866d3a37ef6a7e62d76a2d36e.jpg", title: "Financial & ESG Acumen", desc: "NPV, CBA, CEA, CapEx vs OpEx and sustainability-driven project decisions." },
    { icon: "clock",  img: "https://i.pinimg.com/736x/27/07/23/270723b6ddc755efbe1fd911ed940ab3.jpg", title: "Flexible, Live & Online", desc: "Interactive live sessions with recordings you fit around a senior role." },
  ],

  journey: [
    { n: "01", phase: "Strategic Foundations (W1)", desc: "Project leadership, enterprise PM, strategy alignment and PMO governance." },
    { n: "02", phase: "Evaluation (W2)",            desc: "Portfolio fit, financial tools (NPV, CBA, CEA), prioritisation and ESG." },
    { n: "03", phase: "Scheduling (W3)",            desc: "Advanced scheduling, critical path, dependencies and ML duration estimation." },
    { n: "04", phase: "Budget Governance (W4)",     desc: "Resource optimisation, earned value, vendor governance and variance analysis." },
    { n: "05", phase: "Leadership (W5)",            desc: "Cross-functional and global teams, negotiation, conflict and project culture." },
    { n: "06", phase: "Capstone (W6)",              desc: "An integrative capstone applying strategic leadership to a real challenge." },
  ],

  modules: [
    {
      n: 1, title: "Project Management — Induction", weeks: "Induction",
      courses: [
        "Introduction to the Strategic Project Management program and learning journey",
        "How the program bridges execution and enterprise strategy",
        "Orientation to tools, faculty and the capstone",
        "Setting your goals and outcomes for the program",
      ],
      deliverables: "Program orientation and a personal learning roadmap",
      skills: ["Program Orientation", "Goal Setting"],
    },
    {
      n: 2, title: "Strategic Foundations of Project Leadership", weeks: "1 week", preview: true,
      courses: [
        "Enterprise project management in complex systems",
        "Aligning projects with organisational strategy",
        "PMO structures and governance models",
        "Stakeholder management and influence mapping",
        "Business case thinking and value metrics",
      ],
      workshops: ["Case Study: fuzzy inference system to classify stakeholders by influence"],
      deliverables: "Wk 1 → Governance and stakeholder-alignment plan for a complex program",
      skills: ["Strategic Leadership", "PMO Governance", "Strategy Alignment", "Stakeholder Mapping", "Business Case Thinking"],
    },
    {
      n: 3, title: "Advanced Project Evaluation & Prioritisation", weeks: "1 week", preview: true,
      courses: [
        "Project selection models and portfolio fit",
        "Financial tools: NPV, CBA and CEA",
        "Project prioritisation and decision gates",
        "Sustainability, ESG and strategic impact assessment",
        "Business model risk evaluation",
      ],
      workshops: ["Case Study: fuzzy rule-based system evaluating projects on sustainability criteria"],
      deliverables: "Wk 2 → Portfolio prioritisation model with financial and ESG scoring",
      skills: ["Portfolio Prioritisation", "Financial Modelling", "NPV & CBA", "ESG Evaluation", "Risk Assessment"],
    },
    {
      n: 4, title: "Integrated Scheduling & Dependencies", weeks: "1 week",
      courses: [
        "Advanced scheduling tools: AOA, AON and Gantt",
        "Critical path and buffer management",
        "Program milestone planning",
        "Cross-functional dependency mapping",
        "Agile vs Waterfall portfolio scheduling",
      ],
      workshops: ["Case Study: ML-based project duration estimation from historical data"],
      deliverables: "Wk 3 → Integrated schedule with critical path and dependency map",
      skills: ["Advanced Scheduling", "Critical Path", "Dependency Mapping", "ML Duration Estimation", "Agile & Waterfall"],
    },
    {
      n: 5, title: "Strategic Resource & Budget Governance", weeks: "1 week",
      courses: [
        "Resource allocation and optimisation",
        "Budget forecasting and Earned Value Management",
        "Contractor and vendor governance",
        "CapEx vs OpEx financial strategy",
        "Program budget controls and variance analysis",
      ],
      workshops: ["Case Study: AI/ML-based cost estimation for a complex program"],
      deliverables: "Wk 4 → Budget governance plan with EVM and variance controls",
      skills: ["Budget Governance", "Earned Value Management", "Resource Optimisation", "Vendor Governance", "CapEx vs OpEx"],
    },
    {
      n: 6, title: "Leadership in Complex Project Ecosystems", weeks: "1 week",
      courses: [
        "Leading cross-functional project teams",
        "Stakeholder negotiation and executive buy-in",
        "Behavioural dynamics and conflict resolution",
        "Project culture, accountability and communication",
        "Managing virtual and global teams",
      ],
      workshops: ["Case Study: the future of AI/ML applications in project management"],
      deliverables: "Wk 5 → Leadership and communication plan for a global program",
      skills: ["Cross-Functional Leadership", "Negotiation", "Conflict Resolution", "Global Teams", "Change Management"],
    },
    {
      n: 7, title: "Capstone — integrative strategic project", weeks: "1 week", isCapstone: true,
      courses: [
        "Capstone kickoff — scope a real strategic challenge",
        "Build sprint with 1-on-1 mentor support",
        "Presentation dry-run with an expert panel",
      ],
      workshops: ["Demo Day: present your capstone to mentors and peers"],
      deliverables: "An integrative capstone demonstrating strategic leadership, analytical thinking and execution",
      skills: ["Strategic Execution", "Integrated Planning", "Executive Presentation", "Portfolio Building"],
    },
  ],

  tools: [
    "MS Project", "Gantt Charts", "Monte Carlo Simulation", "Decision Trees", "Fuzzy Logic Systems",
    "NPV / CBA / CEA Models", "Earned Value Management", "Jira", "Power BI", "Excel", "Python", "ChatGPT",
  ],

  capstone: {
    title: "Walk out able to lead, not just manage.",
    desc: "Your capstone is an integrative strategic challenge — scoped around a real business scenario and built across the program. It brings together governance, financial evaluation, scheduling, risk and leadership into one deliverable that proves you can lead high-impact initiatives, not just execute them.",
    points: [
      "Choose a strategic challenge that matches your role",
      "Apply the full toolkit — governance, finance, scheduling, AI risk",
      "Produce executive-ready analysis and recommendations",
      "Present to mentors as you would to a leadership board",
    ],
  },

  outcomes: [
    "Align projects and portfolios with enterprise strategy",
    "Evaluate and prioritise projects using NPV, CBA, CEA and ESG",
    "Build advanced schedules with critical path and dependency mapping",
    "Govern budgets with earned value management and variance analysis",
    "Apply AI/ML to cost estimation, duration forecasting and risk",
    "Lead cross-functional and global teams through complexity",
  ],

  learningJourney: [
    { tab: "Learning Experience", heading: "Strategic, case-led learning", points: ["Live, interactive sessions with senior practitioners", "Real case studies and applied projects", "Recorded classes with lifetime access", "Real-time doubt-clearing sessions"] },
    { tab: "Support & Assistance", heading: "Never stuck for long", points: ["Dedicated cohort manager", "Active peer community of experienced professionals", "Mentoring sessions for projects and doubts", "Instructor office hours"] },
    { tab: "Career Support",       heading: "Built for the next step up", points: ["1-on-1 career advisor", "AI-powered resume & LinkedIn review", "Mock interviews and assessments", "Job marketplace and referral network"] },
    { tab: "Networking & Peers",   heading: "Learn alongside senior leaders", points: ["Cohort of experienced professionals and managers", "Showcase and demo events", "Lifetime alumni community access", "Collaborate on real strategic problems"] },
  ],

  forWhom: [
    { title: "Project & Program Managers", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", desc: "Step up from execution into strategic, enterprise-level leadership." },
    { title: "PMO & Delivery Leads", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", desc: "Master governance, portfolio prioritisation and financial evaluation." },
    { title: "Senior Individual Contributors", img: "https://i.pinimg.com/736x/11/d3/e6/11d3e646686d55ba13b55a6539dccfc0.jpg", desc: "Build the strategic and financial acumen to move into leadership." },
    { title: "Consultants & Team Leads", img: "https://i.pinimg.com/236x/88/ef/73/88ef73d5d2b668231c980e95476ba477.jpg", desc: "Add AI-driven decision-making and risk expertise to your toolkit." },
  ],

  compare: {
    ours: [
      "7 applied projects + an integrative capstone",
      "Strategic leadership, governance and financial evaluation",
      "AI/ML for cost, duration and risk — beyond standard PM",
      "1-on-1 mentor and career support",
      "Enterprise-ready outcome you can demonstrate",
    ],
    others: [
      "Certification exam prep only",
      "Execution mechanics, no strategy or governance",
      "No AI/ML or quantitative risk content",
      "No personal guidance",
      "Ends with a certificate, not capability",
    ],
  },

  whyNow: {
    heading: "Organisations need strategic project leaders, not just executors.",
    body: "As initiatives grow more complex and AI reshapes decision-making, demand for project leaders who can align delivery with strategy — and use data and AI to govern risk and cost — is climbing fast. Certified professionals with strategic and AI capabilities command a clear premium, and the shortage of qualified project talent is only widening.",
    stats: [
      { val: "33", unit: "%", label: "projected growth in PM roles by 2027" },
      { val: "20–30", unit: "%", label: "salary premium for strategic PM skills" },
      { val: "7.5M", unit: "+", label: "project professionals needed in India by 2035" },
      { val: "56", unit: "%", label: "salary premium for professionals with AI skills" },
    ],
  },


  faqs: [
    { q: "How is this different from a PMP certification?", a: "A PMP focuses on execution mechanics. This program goes beyond that into strategic leadership — aligning projects with enterprise strategy, governance and PMO structures, financial evaluation, and AI/ML-driven decision-making for cost, duration and risk." },
    { q: "Who is this program for?", a: "Experienced professionals ready to move from technical execution into strategic leadership — project and program managers, PMO and delivery leads, and senior contributors stepping toward leadership. Some years of work experience are recommended." },
    { q: "Do I need a technical or AI background?", a: "No. The AI/ML content is taught applied and case-led — you learn how to use techniques like fuzzy inference, Monte Carlo and ML forecasting for project decisions, not how to build models from scratch." },
    { q: "What will I produce by the end?", a: "Seven applied projects across cost estimation, earned value, duration forecasting and portfolio prioritisation, plus an integrative capstone — a portfolio that demonstrates strategic project leadership." },
    { q: "What frameworks and tools are covered?", a: "PMO governance, NPV/CBA/CEA financial models, earned value management, advanced scheduling (AOA, AON, Gantt), Monte Carlo simulation, decision trees and fuzzy logic systems — with AI woven throughout." },
    { q: "Can I take this while working full-time?", a: "Yes. Sessions are live, online and weekend-friendly, and every class is recorded with lifetime access, so you can learn around a senior full-time role." },
  ],

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
    total: "1,579",
    emi: "71",
    note: "Inclusive of all taxes. Flexible EMI options available at 0% interest with no hidden cost.",
    includes: [
      "Full curriculum — live sessions + case studies",
      "7 applied projects and an integrative capstone",
      "University-awarded certificate on completion",
      "1-on-1 career advisor and interview prep",
      "Lifetime access to learning content",
    ],
  },

  skillsCovered: [
    "Strategic Project Leadership", "PMO Governance", "Portfolio Prioritization", "Financial Modelling (NPV/CBA/CEA)",
    "ESG & Sustainability Evaluation", "Advanced Scheduling", "Critical Path Analysis", "Dependency Mapping",
    "Earned Value Management", "Budget Governance", "Resource Optimization", "Vendor Governance",
    "AI/ML Decision-Making", "Data-Driven Risk Assessment", "Cross-Functional Leadership", "Negotiation",
    "Conflict Resolution", "Change Management", "Global Team Leadership", "Strategic Execution",
  ],

  projects: [
    { title: "Stakeholder Classification System", desc: "Build a fuzzy inference system to classify stakeholders by influence and prioritise engagement." },
    { title: "Sustainability-Based Project Evaluation", desc: "Design a fuzzy rule-based model to evaluate projects on ESG and sustainability criteria." },
    { title: "ML Project Duration Estimation", desc: "Use machine learning on historical data to forecast realistic project durations." },
    { title: "AI/ML Cost Estimation", desc: "Build an AI-driven cost estimation model for a complex, multi-workstream program." },
    { title: "Portfolio Prioritisation Model", desc: "Create a financial and ESG scoring model to prioritise a portfolio of competing projects." },
    { title: "Earned Value Dashboard", desc: "Design an EVM-based budget governance dashboard with variance and forecasting controls." },
    { title: "Integrative Strategic Capstone", desc: "Bring governance, finance, scheduling, risk and leadership into one enterprise-level deliverable." },
  ],

  applicationProcess: [
    { step: "01", title: "Submit Application", desc: "Complete the online application with your background and leadership experience." },
    { step: "02", title: "Application Review", desc: "A dedicated admissions panel reviews your fit against the program outcomes." },
    { step: "03", title: "Admission Offer", desc: "Shortlisted candidates receive a formal offer; reserve your seat to join the cohort." },
  ],

  batchProfile: {
    intro: "You'll learn alongside experienced managers and leaders across industries — the peer network is a core part of the value.",
    industries: [
      { label: "IT & Software", pct: 30 },
      { label: "Consulting", pct: 18 },
      { label: "BFSI", pct: 15 },
      { label: "Manufacturing", pct: 12 },
      { label: "Infrastructure", pct: 10 },
      { label: "Others", pct: 15 },
    ],
  },

};
export default data;