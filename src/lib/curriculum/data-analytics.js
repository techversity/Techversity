const data = {
  heroImage: "https://i.pinimg.com/736x/03/f7/b8/03f7b851bc11962b540668405f750f9a.jpg",
  tagline:
    "Turn raw data into decisions — master Excel, SQL, Python, R, Tableau and Power BI, then supercharge it all with Generative AI. No coding background required.",
  overview:
    "Data Analytics is the most accessible way into the data field — and now, with GenAI woven through the workflow, it's more powerful than ever. This program takes you from spreadsheets and SQL through Python, statistics and visualisation with Tableau and Power BI, then into applying Generative AI to real analytics tasks like forecasting and summarisation. You build end-to-end skills — data prep, modelling, visualisation and AI — across 15+ industry projects, finishing with a mentor-guided capstone you can put in front of any employer.",

  heroStats: [
    { val: "8", unit: "Weeks", label: "Duration" },
    { val: "15", unit: "+", label: "Industry Projects" },
    { val: "13", unit: "+", label: "Tools Mastered" },
    { val: "96", unit: "%", label: "Completion" },
  ],

  highlights: [
    { icon: "clock",  img: "https://i.pinimg.com/1200x/28/6b/18/286b18e2d80b42abe26f019348db004a.jpg", title: "Beginner-Friendly, No Coding Needed", desc: "Start from Excel and build up — designed for professionals from any background." },
    { icon: "cpu",    img: "https://i.pinimg.com/736x/94/e5/5c/94e55c80249cfaa2f2875c23e20d77c3.jpg", title: "GenAI Integrated Throughout", desc: "Use ChatGPT and modern AI tools for forecasting, summarisation and analytics tasks." },
    { icon: "rocket", img: "https://i.pinimg.com/1200x/93/0d/c1/930dc1ac4570507ca25303a967e0cc2d.jpg", title: "15+ Industry Projects", desc: "Real dashboards and analyses across sales, retail, healthcare and finance." },
    { icon: "users",  img: "https://i.pinimg.com/736x/71/df/c9/71dfc94631441ac68e6238448a663e69.jpg", title: "Learn from Practising Analysts", desc: "Live, mentor-led sessions from people who do analytics for a living." },
    { icon: "award",  img: "https://i.pinimg.com/1200x/d3/16/d6/d316d666aa1ac33426828d7a6c40b481.jpg", title: "End-to-End Analytics Skills", desc: "Data prep, modelling, visualisation, GenAI and adaptive systems in one path." },
    { icon: "shield", img: "https://i.pinimg.com/1200x/8d/74/2c/8d742c6215bb74a40e7bc62e35f47d37.jpg", title: "Data Ethics Built In", desc: "Learn to handle data responsibly — a skill employers increasingly expect." },
  ],

  journey: [
    { n: "01", phase: "Excel & SQL (W1–2)",        desc: "Business analytics with Excel, then data acquisition and manipulation using SQL." },
    { n: "02", phase: "ETL & Visualisation (W3–4)", desc: "Extract, transform and load pipelines, then data visualisation with Tableau." },
    { n: "03", phase: "Python for Data (W5)",       desc: "Python fundamentals and data analytics with Pandas and NumPy." },
    { n: "04", phase: "GenAI Analytics (W6)",       desc: "GenAI literacy and applying generative AI to real analytics tasks." },
    { n: "05", phase: "Advanced & Ethics (W7)",     desc: "Power BI storytelling, R for statistics, and data ethics." },
    { n: "06", phase: "Capstone (W8)",              desc: "A mentor-guided capstone plus your full 15+ project portfolio." },
  ],

  modules: [
    {
      n: 1, title: "Business Analytics with Excel & SQL", weeks: "2 weeks",
      courses: [
        "Business analytics with Excel — formulas, pivots and dashboards",
        "Data acquisition and manipulation using SQL",
        "Querying, joins and aggregation for analysis",
        "Structuring data for downstream analytics",
      ],
      workshops: [
        "Excel Dashboard Lab: build a sales dashboard with KPIs and charts",
        "SQL Clinic: query a real relational database end-to-end",
      ],
      deliverables: "Wk 1 → Excel sales dashboard · Wk 2 → SQL reporting queries",
      skills: ["Excel Analytics", "SQL", "Data Manipulation", "Pivot Tables", "Dashboard Design"],
    },
    {
      n: 2, title: "ETL & Data Visualisation with Tableau", weeks: "2 weeks",
      courses: [
        "Extract, Transform and Load (ETL) fundamentals",
        "Building ETL workflows for real datasets",
        "Data visualisation principles",
        "Interactive dashboards with Tableau",
      ],
      workshops: [
        "ETL Lab: build a pipeline that cleans and loads messy data",
        "Tableau Clinic: design a dashboard that tells a clear story",
      ],
      deliverables: "Wk 3 → ETL workflow · Wk 4 → Interactive Tableau dashboard",
      skills: ["ETL", "Data Transformation", "Tableau", "Data Visualisation", "Dashboard Design"],
    },
    {
      n: 3, title: "Python for Data Analytics", weeks: "1 week",
      courses: [
        "Fundamentals of Python programming",
        "Data analytics with Python — Pandas and NumPy",
        "Exploratory data analysis in Python",
        "Statistical analysis and hypothesis testing",
      ],
      workshops: ["Python Analytics Lab: analyse a real dataset from raw data to insight"],
      deliverables: "Wk 5 → Python EDA notebook with statistical findings",
      skills: ["Python", "Pandas & NumPy", "Exploratory Data Analysis", "Statistical Analysis", "Data Analytics"],
    },
    {
      n: 4, title: "Generative AI for Analytics", weeks: "1 week",
      courses: [
        "GenAI literacy — how large language models work",
        "Applications of generative AI in data analytics",
        "Prompt engineering for forecasting and summarisation",
        "Using AI tools to speed up the analytics workflow",
      ],
      workshops: ["GenAI Lab: use an LLM to forecast and summarise a real dataset"],
      deliverables: "Wk 6 → GenAI-assisted analytics report",
      skills: ["Generative AI", "Prompt Engineering", "AI-Assisted Analytics", "Forecasting", "Summarisation"],
    },
    {
      n: 5, title: "Storytelling, R & Data Ethics", weeks: "1 week",
      courses: [
        "Data storytelling using Power BI",
        "Data analytics with R programming",
        "Statistical techniques — regression and clustering in R",
        "Data ethics and responsible analytics",
      ],
      workshops: [
        "Power BI Lab: build a boardroom-ready reporting dashboard",
        "R Clinic: run regression and clustering on real data",
      ],
      deliverables: "Wk 7 → Power BI report + R statistical analysis",
      skills: ["Power BI", "Data Storytelling", "R Programming", "Regression & Clustering", "Data Ethics"],
    },
    {
      n: 6, title: "Capstone — mentor-guided analytics portfolio", weeks: "1 week", isCapstone: true,
      courses: [
        "Capstone kickoff — scope a real business problem",
        "Build sprint with 1-on-1 mentor support",
        "Presentation dry-run with an expert panel",
      ],
      workshops: ["Demo Day: present your capstone to mentors and peers"],
      deliverables: "A mentor-guided capstone plus a 15+ project portfolio across sales, retail, finance and healthcare",
      skills: ["End-to-End Analytics", "Problem Scoping", "Data Storytelling", "Portfolio Building"],
    },
  ],

  tools: [
    "Excel", "SQL", "Python", "NumPy", "Pandas", "Matplotlib", "R",
    "Tableau", "Power BI", "Jupyter", "AWS Glue", "Hugging Face", "ChatGPT",
  ],

  capstone: {
    title: "Walk out with a portfolio, not just a certificate.",
    desc: "Your capstone is a real business problem, scoped with a mentor and built across the program. Alongside 15+ projects spanning sales, retail, finance and healthcare, it becomes the portfolio that shows employers you can actually turn data into decisions.",
    points: [
      "Choose a capstone problem that matches your target role",
      "Apply the full stack — Excel, SQL, Python, BI tools and GenAI",
      "Produce dashboards and reports as you would on the job",
      "Present findings to mentors as you would to a business team",
    ],
  },

  outcomes: [
    "Build interactive dashboards in Excel, Tableau and Power BI",
    "Query and transform data with SQL and ETL workflows",
    "Analyse data with Python, Pandas and statistical techniques",
    "Apply Generative AI to forecasting, summarisation and analysis",
    "Run regression and clustering with R",
    "Ship a 15+ project analytics portfolio you can demo in interviews",
  ],

  learningJourney: [
    { tab: "Learning Experience", heading: "Hands-on, project-first learning", points: ["Live, interactive sessions with practising analysts", "40+ exercises and 15+ projects", "Recorded classes with lifetime access", "Real-time doubt-clearing sessions"] },
    { tab: "Support & Assistance", heading: "Never stuck for long", points: ["Dedicated cohort manager", "Active peer community and forums", "Mentoring sessions for projects and doubts", "Instructor office hours"] },
    { tab: "Career Support",       heading: "Built to get you hired", points: ["1-on-1 career advisor", "AI-powered resume & LinkedIn review", "Mock interviews and assessments", "Job marketplace and referral network"] },
    { tab: "Networking & Peers",   heading: "Learn alongside professionals", points: ["Cohort from IT, software, BFSI, e-commerce and more", "Showcase and demo events", "Lifetime alumni community access", "Collaborate on real projects"] },
  ],

  forWhom: [
    { title: "Aspiring Analysts", img: "https://i.pinimg.com/736x/29/81/e3/2981e3bccd8697f5a22d255174d74704.jpg", desc: "Break into analytics from any background — no coding experience required." },
    { title: "Business & Ops Professionals", img: "https://i.pinimg.com/736x/96/fb/3d/96fb3dfb0ceca13836fba6d02bcdbef5.jpg", desc: "Add data and BI skills to make sharper, evidence-based decisions." },
    { title: "Excel & Reporting Users", img: "https://i.pinimg.com/736x/22/d2/c7/22d2c7d0b4929ca3575630adae7d005f.jpg", desc: "Move beyond spreadsheets into SQL, Python, BI tools and GenAI." },
    { title: "Career Switchers", img: "https://i.pinimg.com/1200x/99/3d/e2/993de22ebdb42ea5cb49e87d8b578949.jpg", desc: "Enter the data field with a job-ready, project-backed skill set." },
  ],

  compare: {
    ours: [
      "15+ industry projects + a mentor-guided capstone",
      "Full stack: Excel, SQL, Python, R, Tableau, Power BI",
      "Generative AI integrated into the analytics workflow",
      "1-on-1 mentor and career support",
      "Portfolio-ready outcome you can demo",
    ],
    others: [
      "A few disconnected tutorials",
      "One tool only — usually just Excel or SQL",
      "No GenAI or modern AI content",
      "No personal guidance",
      "Ends with a certificate, not capability",
    ],
  },

  whyNow: {
    heading: "Analytics is the fastest on-ramp into the data economy.",
    body: "Every team now runs on data, and the professionals who can prepare it, visualise it and layer AI on top are in demand across every industry. With the big-data analytics market heading toward the hundreds of billions, analytics remains the most accessible, fastest-paying entry point into a data career — especially now that GenAI is part of the job.",
    stats: [
      { val: "$924B", unit: "+", label: "projected big-data analytics market by 2032" },
      { val: "29.4", unit: "%", label: "CAGR of the global data analytics market" },
      { val: "35", unit: "%", label: "CAGR for data & GenAI skills in India" },
      { val: "#1", unit: "", label: "most accessible entry point into data" },
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
    total: "549",
    emi: "46",
    note: "Inclusive of all taxes. Flexible EMI options available at 0% interest with no hidden cost.",
    includes: [
      "Full curriculum — live sessions + self-paced labs",
      "15+ industry projects and a mentor-guided capstone",
      "University-awarded certificate on completion",
      "1-on-1 career advisor and interview prep",
      "Lifetime access to learning content",
    ],
  },

  faqs: [
    { q: "Do I need coding experience to start?", a: "No. This program is designed for professionals from any background — you start with Excel and SQL and build up to Python and R gradually. A bachelor's degree and some work experience help, but prior coding isn't required." },
    { q: "How is Generative AI part of the course?", a: "GenAI is woven through the analytics workflow — you use AI tools like ChatGPT for forecasting, summarisation and speeding up analysis, and there's a dedicated module on applying generative AI to real analytics tasks." },
    { q: "What will I have built by the end?", a: "15+ industry projects — dashboards and analyses across sales, retail, finance and healthcare — plus a mentor-guided capstone. Together they form a portfolio you can show employers." },
    { q: "What tools and languages are covered?", a: "Excel, SQL, Python (Pandas, NumPy), R, Tableau, Power BI, AWS Glue, Jupyter and GenAI tools — the full analytics stack used across the industry." },
    { q: "What roles can this lead to?", a: "Data analyst, business intelligence analyst, Power BI developer and reporting analyst roles, among others. The project portfolio is built specifically to demonstrate readiness for these positions." },
    { q: "Can I take this while working full-time?", a: "Yes. Sessions are live and weekend-friendly, and every class is recorded with lifetime access, so you can learn around a full-time job." },
  ],
};
export default data;