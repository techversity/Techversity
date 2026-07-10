const data = {
  heroImage: "/images/Certification/AgentiAi/hero.avif",
  tagline:
    "Most AI programs teach concepts. This one prepares leaders to act. Master GenAI and Agentic AI, then design strategy, governance and a real AI roadmap you can take back to your organisation.",
  overview:
    "AI is reshaping every business function — and the leaders who can direct it, not just understand it, are the ones who'll matter. This program is built for professionals who want to lead AI adoption: you'll learn the foundations of AI and machine learning, the shift to Generative and Agentic AI, how to find high-value AI opportunities across business functions, how to design AI strategy and governance, and how to run pilots and scale them. It culminates in a leadership capstone where you walk out with a concrete AI plan for your organisation — not just a certificate.",

  heroStats: [
    { val: "6", unit: "Months", label: "Duration" },
    { val: "26", unit: "Weeks", label: "Guided Journey" },
    { val: "15", unit: "+", label: "AI Tools Explored" },
    { val: "1", unit: "", label: "Leadership Capstone" },
  ],

  highlights: [
    { icon: "cpu",    img: "/images/Certification/AgentiAi/1.avif", title: "GenAI & Agentic AI Integrated", desc: "Go beyond theory into how generative and agentic systems actually change work." },
    { icon: "rocket", img: "/images/Certification/AgentiAi/2.avif", title: "Leadership Capstone", desc: "Walk out with a real AI roadmap for your organisation, not just a completion badge." },
    { icon: "award",  img: "/images/Certification/AgentiAi/3.avif", title: "Strategy & Governance Focus", desc: "Design AI strategy, set the rules, own the risk — built for decision-makers." },
    { icon: "users",  img: "/images/Certification/AgentiAi/4.avif", title: "Senior Peer Cohort", desc: "Learn alongside managers and leaders navigating the same AI shift." },
    { icon: "shield", img: "/images/Certification/AgentiAi/5.avif", title: "Responsible AI & Risk", desc: "Governance, ethics and risk woven through every strategic decision." },
    { icon: "clock",  img: "/images/Certification/AgentiAi/6.avif", title: "Blended & Flexible", desc: "Live, weekend-friendly sessions with recordings and lifetime access." },
  ],

  journey: [
    { n: "01", phase: "Identify AI Impact (W1–4)",     desc: "Define a high-value business problem and prioritise AI opportunities." },
    { n: "02", phase: "Build AI Judgment (W5–8)",      desc: "Understand GenAI & Agentic AI and evaluate what works for your context." },
    { n: "03", phase: "Define AI Strategy (W9–12)",    desc: "Create a roadmap aligned to business goals, outcomes and priorities." },
    { n: "04", phase: "Build the Business Case (W13–16)", desc: "Establish ROI, feasibility and success metrics for your initiative." },
    { n: "05", phase: "Apply in Function (W17–22)",    desc: "Translate strategy into workflows and real business scenarios." },
    { n: "06", phase: "Validate, Scale & Present (W23–26)", desc: "Refine through immersion and present a strategy ready for rollout." },
  ],

  modules: [
    {
      n: 1, title: "AI & Machine Learning Foundations — What every leader must know about AI", weeks: "4 weeks",
      courses: [
        "How AI, machine learning and deep learning actually work",
        "The AI vocabulary every decision-maker needs",
        "Where AI creates value — and where it doesn't",
        "Separating real capability from hype",
      ],
      deliverables: "A clear-eyed AI opportunity map for your function",
      skills: ["AI Foundations", "Machine Learning Literacy", "AI Value Assessment", "Business Framing"],
    },
    {
      n: 2, title: "Generative AI and Agentic AI — Understand the shift and stay ahead of it", weeks: "4 weeks",
      courses: [
        "How generative AI and large language models work",
        "The shift from generative to agentic AI",
        "Autonomous agents, tools and multi-step workflows",
        "Evaluating what to adopt for your context",
      ],
      deliverables: "An evaluation of GenAI and agentic use-cases relevant to your role",
      skills: ["Generative AI", "Agentic AI", "LLMs", "AI Agents", "Technology Evaluation"],
      preview: true,
    },
    {
      n: 3, title: "AI Across Business Functions: Opportunity Discovery — Find the AI opportunities in your function", weeks: "4 weeks",
      courses: [
        "Mapping AI opportunities across business functions",
        "Prioritising high-value, feasible use-cases",
        "Function-specific applications — ops, marketing, finance, HR",
        "Turning opportunities into a shortlist",
      ],
      deliverables: "A prioritised shortlist of AI opportunities for your organisation",
      skills: ["Opportunity Discovery", "Use-Case Prioritisation", "Cross-Functional AI", "Feasibility Analysis"],
      preview: true,
    },
    {
      n: 4, title: "AI Strategy Design and Governance — Design your AI strategy. Set the rules. Own the risk.", weeks: "4 weeks",
      courses: [
        "Designing an AI strategy aligned to business goals",
        "AI governance frameworks and operating models",
        "Responsible AI, ethics and risk management",
        "Data, security and compliance considerations",
      ],
      deliverables: "An AI strategy and governance framework for your context",
      skills: ["AI Strategy", "AI Governance", "Responsible AI", "Risk Management", "Ethics & Compliance"],
    },
    {
      n: 5, title: "AI Implementation and Pilot Execution — Pilot-to-scale playbook", weeks: "4 weeks",
      courses: [
        "Designing and running effective AI pilots",
        "Building the business case — ROI, feasibility, metrics",
        "Change management and adoption",
        "From successful pilot to scaled rollout",
      ],
      deliverables: "A pilot plan with success metrics and a scaling path",
      skills: ["Pilot Execution", "Business Case", "ROI Analysis", "Change Management", "Adoption"],
    },
    {
      n: 6, title: "Measuring Impact, Scaling AI, and Organizational Transformation", weeks: "4 weeks",
      courses: [
        "Measuring AI impact and business outcomes",
        "Scaling AI across the organisation",
        "Building AI-ready culture and capability",
        "Leading organisational transformation",
      ],
      deliverables: "An impact-measurement and scaling framework",
      skills: ["Impact Measurement", "Scaling AI", "AI Culture", "Organisational Transformation"],
    },
    {
      n: 7, title: "AI Project: Leadership Capstone — Walk out with an AI plan for your organisation. Not just a certificate.", weeks: "2 weeks", isCapstone: true,
      courses: [
        "Capstone kickoff — scope a real AI initiative for your organisation",
        "Build sprint with mentor guidance",
        "Refine through immersion and feedback",
        "Present a rollout-ready AI strategy to an expert panel",
      ],
      deliverables: "A complete, rollout-ready AI plan for your organisation, presented to a panel",
      skills: ["AI Roadmapping", "Strategic Planning", "Executive Presentation", "Portfolio Building"],
    },
  ],

  tools: [
    "ChatGPT", "Claude", "Perplexity AI", "DALL·E 3", "Gemini", "Microsoft Copilot",
    "Midjourney", "Notion AI", "Make", "n8n", "LangChain", "CrewAI", "Hugging Face",
    "Power BI", "Zapier AI", "Vertex AI",
  ],

  capstone: {
    title: "Walk out with an AI plan, not just a certificate.",
    desc: "The program ends with a leadership capstone: you scope a real AI initiative for your own organisation, build it out with mentor guidance, refine it through immersion, and present a rollout-ready strategy to an expert panel. It's the difference between learning about AI and being ready to lead it.",
    points: [
      "Scope a real AI initiative for your organisation",
      "Apply strategy, governance and the business case together",
      "Refine through immersion and expert feedback",
      "Present a rollout-ready plan to a panel",
    ],
  },

  outcomes: [
    "Speak the language of AI with confidence as a leader",
    "Distinguish real AI capability from hype",
    "Find and prioritise high-value AI opportunities in your function",
    "Design AI strategy, governance and responsible-AI guardrails",
    "Run pilots, build the business case and scale what works",
    "Walk out with a rollout-ready AI plan for your organisation",
  ],

  learningJourney: [
    { tab: "Learning Experience", heading: "Built for decision-makers", points: ["Blended, flexible learning designed for leaders", "Live, interactive sessions and case discussions", "Recorded classes with lifetime access", "Real-time doubt-clearing sessions"] },
    { tab: "Support & Assistance", heading: "Never stuck for long", points: ["Dedicated program manager", "Peer community of senior professionals", "Mentoring sessions for the capstone", "Instructor office hours"] },
    { tab: "Career Support",       heading: "For your next leadership step", points: ["1-on-1 career advisor", "AI-powered resume & LinkedIn review", "Leadership positioning guidance", "Networking and referral access"] },
    { tab: "Networking & Peers",   heading: "Learn alongside leaders", points: ["Senior leadership cohort across industries", "AI immersion and networking sessions", "Lifetime alumni community access", "Collaborate on real AI strategy problems"] },
  ],

  forWhom: [
    { title: "Managers & Team Leads", img: "/images/Certification/AgentiAi/7.avif", desc: "Leaders who need to direct AI adoption in their teams and functions." },
    { title: "Senior Professionals", img: "/images/Certification/AgentiAi/8.avif", desc: "Experienced professionals moving into AI-driven strategy and decisions." },
    { title: "Founders & Consultants", img: "/images/Certification/AgentiAi/9.avif", desc: "Those who need to build AI strategy and advise on adoption." },
    { title: "Function Heads", img: "/images/Certification/AgentiAi/10.avif", desc: "Ops, marketing, finance and HR leaders finding AI opportunities in their domain." },
  ],

  compare: {
    ours: [
      "A leadership capstone — a real AI plan for your org",
      "Strategy, governance and business case, not just tools",
      "GenAI and agentic AI for decision-makers",
      "Senior peer cohort and mentoring",
      "University-partner certificate that carries weight",
    ],
    others: [
      "Concept-only courses with no application",
      "Tool tutorials with no strategy",
      "No governance or risk framing",
      "No personal guidance",
      "A completion badge, not readiness to lead",
    ],
  },

  whyNow: {
    heading: "AI leadership is the skill of the decade.",
    body: "Generative and agentic AI are moving from experiments into core operations, and organisations are desperate for leaders who can direct that change responsibly. The professionals who can find opportunities, set strategy and govern risk — not just use the tools — are the ones being promoted and hired to lead AI transformation.",
    stats: [
      { val: "78", unit: "%", label: "of organisations now use AI in at least one function" },
      { val: "$4.4T", unit: "", label: "potential annual value from GenAI globally" },
      { val: "3x", unit: "", label: "faster growth for AI-skilled leaders' demand" },
      { val: "#1", unit: "", label: "priority skill cited by senior executives" },
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
    total: "2,099",
    emi: "72",
    seat: "105",
    note: "Inclusive of all taxes. Reserve your seat with $105. Flexible EMI options available at 0% interest with no hidden cost.",
    includes: [
      "Full 26-week guided curriculum — live + self-paced",
      "Leadership capstone with mentor guidance",
      "University-awarded certificate on completion",
      "1-on-1 career advisor and leadership positioning",
      "Lifetime access to learning content",
    ],
  },

  skillsCovered: [
    "AI & ML Literacy", "Generative AI", "Agentic AI", "Large Language Models", "AI Opportunity Discovery",
    "Use-Case Prioritization", "AI Strategy Design", "AI Governance", "Responsible AI", "Risk Management",
    "Business Case Development", "ROI Analysis", "Pilot Execution", "Change Management", "Scaling AI",
    "Impact Measurement", "Organisational Transformation", "Executive Decision-Making",
  ],

  projects: [
    { title: "AI Opportunity Map", desc: "Map and prioritise high-value AI opportunities across your business function." },
    { title: "GenAI vs Agentic Evaluation", desc: "Evaluate generative and agentic AI use-cases and recommend what to adopt." },
    { title: "AI Strategy Blueprint", desc: "Design an AI strategy aligned to business goals, with governance guardrails." },
    { title: "Responsible AI Framework", desc: "Build an AI governance and risk framework for responsible adoption." },
    { title: "AI Pilot Business Case", desc: "Create a pilot plan with ROI, feasibility and success metrics." },
    { title: "Scaling & Impact Model", desc: "Design a framework to measure impact and scale AI across the organisation." },
    { title: "Leadership Capstone: AI Roadmap", desc: "A complete, rollout-ready AI plan for your organisation, presented to a panel." },
  ],

  applicationProcess: [
    { step: "01", title: "Submit Application", desc: "Complete the online application with your background and leadership goals." },
    { step: "02", title: "Application Review", desc: "A dedicated admissions panel reviews your fit against the program outcomes." },
    { step: "03", title: "Reserve Your Seat", desc: "Shortlisted candidates block their seat with $105 and join the cohort." },
  ],

  batchProfile: {
    intro: "You'll learn alongside managers and leaders directing AI adoption across industries — the peer network is a core part of the value.",
    industries: [
      { label: "IT & Software", pct: 28 },
      { label: "BFSI", pct: 18 },
      { label: "Consulting", pct: 15 },
      { label: "Product & Startups", pct: 13 },
      { label: "Manufacturing", pct: 11 },
      { label: "Others", pct: 15 },
    ],
  },

  faqs: [
    { q: "Do I need a technical background to enroll?", a: "No. This program is built for leaders and decision-makers, not engineers. It teaches AI, generative AI and agentic AI concepts in business terms — you learn to direct AI, not to build models from scratch." },
    { q: "What makes this different from other AI courses?", a: "Most AI courses teach concepts or tools. This one prepares you to act — with strategy, governance and a leadership capstone where you build a real, rollout-ready AI plan for your own organisation." },
    { q: "What will I walk away with?", a: "A concrete AI roadmap for your organisation, the judgment to prioritise opportunities, a governance and risk framework, and the confidence to lead AI adoption — plus a university-partner certificate." },
    { q: "What tools will I get exposure to?", a: "ChatGPT, Claude, Gemini, Microsoft Copilot, Midjourney, LangChain, CrewAI, n8n, Power BI and more — explored from a leadership and application perspective." },
    { q: "How long is the program and how much time does it need?", a: "It's a 6-month, 26-week guided journey with live weekend-friendly sessions and self-paced material, designed to fit alongside a full-time senior role." },
    { q: "Can I take this while working full-time?", a: "Yes. The blended, flexible format with recorded sessions and lifetime access is built specifically for working professionals and leaders." },
  ],
};
export default data;