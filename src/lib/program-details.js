/* ─── Extended program detail content, keyed by slug ────────────────
   Moved out of the [slug]/page.js template to keep the page component
   focused on layout/JSX only. Add a new key here whenever a new
   program slug needs a detail page. ─────────────────────────────── */

const programDetails = {
  "dba-esdst": {
    tagline: "Applied research. Real executive authority. No career break required.",
    overview:
      "The Doctor of Business Administration at ESDST is not a theoretical exercise — it is an applied research journey conducted inside your own professional world. Unlike a PhD, the DBA focuses on real organizational challenges: governance gaps, transformation blockers, strategic blind spots. Your dissertation is your most powerful professional deliverable.",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=85",
    sectionImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80",
    stats: [
      { val: "18", unit: "Months", label: "Programme Duration" },
      { val: "100%", unit: "", label: "Online Delivery" },
      { val: "10+", unit: "Yrs", label: "Experience Required" },
      { val: "82%", unit: "", label: "Acceptance Rate" },
    ],
    highlights: [
      { icon: "◈", title: "Applied, Not Academic", desc: "Research conducted inside your own organisation — outcomes that matter beyond the library." },
      { icon: "◈", title: "No Career Break", desc: "Structured milestones around your schedule. Senior professionals typically commit 8–12 hrs/week." },
      { icon: "◈", title: "ESDST Accreditation", desc: "Issued by ESDST University, France — independently verifiable, recognised across European markets." },
    ],
    modules: [
      {
        title: "Strategic Leadership & Corporate Governance",
        topics: ["Board-level decision frameworks", "Ethics in organisational leadership", "Stakeholder management at executive level", "Corporate governance structures globally"],
      },
      {
        title: "Applied Business Research Methods",
        topics: ["Quantitative & qualitative methodologies", "Research design for practitioners", "Data analysis using SPSS / Atlas.ti", "Academic integrity & citation standards"],
      },
      {
        title: "Organisational Transformation",
        topics: ["Change management frameworks (Kotter, ADKAR)", "Digital transformation strategy", "Culture shift & resistance management", "Restructuring and turnaround case studies"],
      },
      {
        title: "Innovation & Digital Strategy",
        topics: ["Disruptive innovation models", "AI & automation strategy for executives", "Digital business model design", "IP strategy and innovation governance"],
      },
      {
        title: "Executive Dissertation Project",
        topics: ["Problem identification & research proposal", "Literature review & theoretical framework", "Data collection & primary fieldwork", "Dissertation writing, review & final submission"],
      },
    ],
    outcomes: [
      "Earn the title 'Dr.' and the board-level credibility it carries globally in business settings.",
      "Produce applied research from your own organisation — a deliverable with immediate strategic value.",
      "Hold a credential from ESDST University, France — independently verifiable and internationally respected.",
      "Join a cohort of senior executives pursuing applied doctorates — a network with immediate professional reach.",
      "Complete the programme without pausing your current role, board seats, or active consulting work.",
    ],
    eligibility: [
      "Minimum 10 years of professional experience in a leadership or management role",
      "Bachelor's degree or equivalent (Master's preferred but not mandatory for all pathways)",
      "Currently operating at a senior executive, director, or founder level",
      "Commitment of 8–12 hours per week to coursework and research activities",
      "Strong written English proficiency for research and dissertation submission",
    ],
    universitySlug: "esdst",
    universityName: "ESDST University",
    universityCountry: "France",
    universityFlag: "🇫🇷",
    universityDesc: "ESDST (École Supérieure de Direction Scientifique et Technique) is a France-based institution specialising in executive and doctoral business education for working professionals.",
    universities: [
      { slug: "esdst", name: "ESDST University", country: "France", flag: "🇫🇷", code: "fr", fee: "From $8,000", duration: "18 Months" },
      { slug: "eu-global", name: "EU Global Institute", country: "Malta", flag: "🇲🇹", code: "mt", fee: "From $9,200", duration: "16 Months" },
      { slug: "euro-asian-university", name: "Euro-Asian University", country: "Kazakhstan", flag: "🇰🇿", code: "kz", fee: "From $7,400", duration: "20 Months" },
    ],
  },

  "phd-kennedy": {
    tagline: "Research rigour. Faculty mentorship. The highest academic credential.",
    overview:
      "The PhD in Business Management at Kennedy University is a research-intensive doctoral pathway — demanding, internationally supervised, and academically rigorous. Unlike applied doctorates, this programme requires an original contribution to academic knowledge through a full dissertation under faculty mentorship. Designed for professionals who intend to publish, teach, or hold senior academic or advisory roles.",
    heroImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&q=85",
    sectionImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
    stats: [
      { val: "24", unit: "Months", label: "Programme Duration" },
      { val: "100%", unit: "", label: "Online Delivery" },
      { val: "5+", unit: "Yrs", label: "Experience Required" },
      { val: "1:1", unit: "", label: "Faculty Supervision" },
    ],
    highlights: [
      { icon: "◈", title: "Research-First Design", desc: "Every module builds toward an original contribution to academic knowledge — not just applied practice." },
      { icon: "◈", title: "Faculty Supervision", desc: "Assigned a dedicated faculty supervisor from Kennedy University's international research network." },
      { icon: "◈", title: "Publication Pathway", desc: "Structured support toward conference presentations and journal submissions during the programme." },
    ],
    modules: [
      {
        title: "Research Philosophy & Epistemology",
        topics: ["Ontological and epistemological foundations", "Positivism vs interpretivism debate", "Philosophy of social science", "Choosing your research paradigm"],
      },
      {
        title: "Qualitative & Quantitative Methods",
        topics: ["Survey design and psychometric scales", "Interview design and coding", "Mixed-methods approaches", "Case study methodology in depth"],
      },
      {
        title: "Literature Review & Theoretical Frameworks",
        topics: ["Systematic literature review techniques", "Theory building from existing research", "Research gap identification", "Citation mapping and bibliometrics"],
      },
      {
        title: "Advanced Data Analysis",
        topics: ["Statistical modelling (SEM, regression)", "Grounded theory analysis", "NVivo for qualitative data", "Validity and reliability assessment"],
      },
      {
        title: "Dissertation & Academic Writing",
        topics: ["Thesis structure and academic register", "Publication ethics and peer review", "Oral defence preparation", "Final dissertation submission"],
      },
    ],
    outcomes: [
      "Hold a PhD credential from Kennedy University — recognised across academic and corporate institutions internationally.",
      "Complete a full academic dissertation with independent original research — publishable in peer-reviewed journals.",
      "Access faculty networks and co-authorship opportunities through Kennedy University's research community.",
      "Qualify for adjunct professorship, visiting faculty, and senior research advisory roles globally.",
      "Demonstrate the highest level of intellectual rigour on any board, advisory panel, or academic body.",
    ],
    eligibility: [
      "Master's degree or equivalent postgraduate qualification (mandatory for this pathway)",
      "Minimum 5 years of professional experience; research background preferred",
      "Submission of a research proposal aligned with Kennedy University faculty areas",
      "Strong academic English — IELTS 6.5 or equivalent for non-native English speakers",
      "Commitment of 15–20 hours per week, particularly in the first 12 months",
    ],
    universitySlug: "kennedy-university",
    universityName: "Kennedy University",
    universityCountry: "United States",
    universityFlag: "🇺🇸",
    universityDesc: "Kennedy University is a US-based institution offering research-intensive doctoral programmes with international faculty supervision and a focus on business and management scholarship.",
    universities: [
      { slug: "kennedy-university", name: "Kennedy University", country: "United States", flag: "🇺🇸", code: "us", fee: "From $10,000", duration: "24 Months" },
      { slug: "sbs-swiss", name: "SBS Swiss Business School", country: "Switzerland", flag: "🇨🇭", code: "ch", fee: "From $12,500", duration: "22 Months" },
      { slug: "esdst", name: "ESDST University", country: "France", flag: "🇫🇷", code: "fr", fee: "From $9,600", duration: "26 Months" },
    ],
  },

  "honorary-doctorate": {
    tagline: "A lifetime of achievement, formally recognised by an accredited institution.",
    overview:
      "An Honorary Doctorate is a title of recognition — not an earned academic degree. It is conferred by an accredited university in acknowledgment of distinguished achievement, societal contribution, or professional excellence. It is not equivalent to a PhD or DBA for employment or licensing purposes. Techversity is transparent about this distinction — because the right kind of buyer deserves radical honesty, not ambiguity.",
    heroImage: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1400&q=85",
    sectionImage: "https://i.pinimg.com/736x/f2/43/46/f24346a4f08a935cda0f589c8b464a25.jpg",
    stats: [
      { val: "6–12", unit: "Months", label: "Conferment Timeline" },
      { val: "15+", unit: "Yrs", label: "Experience Required" },
      { val: "100%", unit: "", label: "Transparent Process" },
      { val: "10+", unit: "", label: "Partner Universities" },
    ],
    highlights: [
      { icon: "◈", title: "Formal Conferment", desc: "Issued by an accredited partner university — official documents, ceremony details, and independent verification." },
      { icon: "◈", title: "Full Transparency", desc: "Every accreditation claim is independently verifiable. We show you the documentation before you commit." },
      { icon: "◈", title: "Clarity Upfront", desc: "This is a recognition title, not an earned degree. We state this clearly — because trust is the product." },
    ],
    modules: [
      {
        title: "Eligibility Assessment",
        topics: ["Review of professional achievements and contributions", "Verification of career tenure and impact", "Alignment with the conferring university's honorary criteria", "Advisory call with Techversity team"],
      },
      {
        title: "Documentation & Dossier",
        topics: ["Professional CV and portfolio preparation", "Letters of recommendation (where applicable)", "Personal statement of achievement", "Submission to university nomination committee"],
      },
      {
        title: "University Committee Review",
        topics: ["University committee nomination process", "Review period — typically 6–10 weeks", "Conditional approval and communication", "Award recommendation letter issued"],
      },
      {
        title: "Conferment & Certification",
        topics: ["Official conferment documentation", "Digital and physical certificate preparation", "Ceremony participation (virtual or in-person, varies by university)", "LinkedIn guidance for appropriate title usage"],
      },
    ],
    outcomes: [
      "Hold an Honorary Doctorate from an accredited university, with documentation you can verify independently.",
      "Use the honorary 'Dr.' title in professional, ceremonial, and social contexts per the issuing institution's guidance.",
      "Receive formal institutional recognition of a career built over 15+ years of leadership and achievement.",
      "Access Techversity's post-conferment advisory — guidance on title usage, LinkedIn presentation, and PR.",
      "Join a select group of professionals who have completed this pathway with full transparency and dignity.",
    ],
    eligibility: [
      "Minimum 15 years of professional experience with documented achievements and leadership impact",
      "Demonstrated contribution to industry, society, arts, sciences, or business at a distinguished level",
      "No pending legal proceedings that would conflict with the conferring university's standards",
      "Willingness to undergo a standard background and credentials review by the partner university committee",
      "Acceptance of the transparency disclosure: this is a recognition title, not an earned academic degree",
    ],
    universitySlug: "universities",
    universityName: "Multiple Partner Universities",
    universityCountry: "Global",
    universityFlag: "🌍",
    universityDesc: "Honorary Doctorates are conferred through Techversity's network of accredited partner universities across Europe and beyond. Each issuing institution is independently verifiable.",
    universities: [
      { slug: "esdst", name: "ESDST University", country: "France", flag: "🇫🇷", code: "fr", fee: "From $5,000", duration: "6–12 Months" },
      { slug: "eu-global", name: "EU Global Institute", country: "Malta", flag: "🇲🇹", code: "mt", fee: "From $5,800", duration: "8–12 Months" },
      { slug: "euro-asian-university", name: "Euro-Asian University", country: "Kazakhstan", flag: "🇰🇿", code: "kz", fee: "From $4,500", duration: "6–10 Months" },
    ],
  },

  "mba-global": {
    tagline: "Leadership-ready. Globally recognised. Built for the next role you haven't taken yet.",
    overview:
      "The MBA — Global Executive Track is a 12-month online MBA delivered through EU Global Institute, Malta — designed for mid-career professionals who already manage teams, budgets, and strategy, and need the credential to match. Internationally recognised, structured around practical business challenges, and built to advance your career without pausing it.",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=85",
    sectionImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
    stats: [
      { val: "12", unit: "Months", label: "Programme Duration" },
      { val: "100%", unit: "", label: "Online Delivery" },
      { val: "3–5", unit: "Yrs", label: "Experience Required" },
      { val: "6", unit: "Modules", label: "Core Curriculum" },
    ],
    highlights: [
      { icon: "◈", title: "Global Recognition", desc: "Conferred by EU Global Institute, Malta — accredited and recognised across European and international markets." },
      { icon: "◈", title: "Practitioner Design", desc: "Every module is built around real business problems — applicable from Day 1 of your next leadership role." },
      { icon: "◈", title: "Career Services Included", desc: "Resume review, interview coaching, and placement support are included in the programme — not optional extras." },
    ],
    modules: [
      {
        title: "Business Strategy & Competitive Analysis",
        topics: ["Porter's Five Forces & Blue Ocean strategy", "Competitive intelligence and market mapping", "Strategic planning and execution frameworks", "Corporate portfolio management"],
      },
      {
        title: "Financial Management & Decision-Making",
        topics: ["Financial statement analysis for non-finance managers", "Budgeting, forecasting, and financial modelling", "Investment appraisal and capital allocation", "Risk management and financial governance"],
      },
      {
        title: "Marketing & Digital Business",
        topics: ["Brand strategy and positioning", "Digital marketing and growth analytics", "Customer journey and experience design", "B2B and B2C go-to-market strategy"],
      },
      {
        title: "Operations & Supply Chain",
        topics: ["Lean operations and process optimisation", "Supply chain risk and resilience", "Project management — PMI frameworks", "Technology and automation in operations"],
      },
      {
        title: "International Business & Leadership",
        topics: ["Cross-cultural management and global teams", "International trade, tariffs, and expansion strategy", "Leadership styles and executive presence", "Negotiation and stakeholder management"],
      },
      {
        title: "MBA Capstone Project",
        topics: ["Business case research and problem scoping", "Proposal preparation and advisor review", "Final presentation to academic panel", "Reflective learning portfolio"],
      },
    ],
    outcomes: [
      "Earn an internationally recognised MBA from EU Global Institute, Malta — verifiable and respected globally.",
      "Step into VP, Director, and C-suite roles with the credential that signals leadership-level business acumen.",
      "Build a global professional network through Techversity's alumni community across 15+ countries.",
      "Apply learnings immediately — all modules are practitioner-first with real business case frameworks.",
      "Access Techversity's career services — resume review, interview coaching, and placement support included.",
    ],
    eligibility: [
      "Bachelor's degree or equivalent professional qualification",
      "Minimum 3–5 years of professional experience in a business, management, or functional role",
      "Strong motivation to apply learnings immediately in a current or target leadership role",
      "Adequate English proficiency for academic reading and written assignments",
      "Commitment of 10–15 hours per week across the 12-month programme duration",
    ],
    universitySlug: "eu-global",
    universityName: "EU Global Institute",
    universityCountry: "Malta",
    universityFlag: "🇲🇹",
    universityDesc: "EU Global Institute is a Malta-based international business school offering globally recognised MBA and doctoral programmes designed for working professionals.",
    universities: [
      { slug: "eu-global", name: "EU Global Institute", country: "Malta", flag: "🇲🇹", code: "mt", fee: "From $6,500", duration: "12 Months" },
      { slug: "sbs-swiss", name: "SBS Swiss Business School", country: "Switzerland", flag: "🇨🇭", code: "ch", fee: "From $7,800", duration: "12 Months" },
      { slug: "euro-asian-university", name: "Euro-Asian University", country: "Kazakhstan", flag: "🇰🇿", code: "kz", fee: "From $5,900", duration: "14 Months" },
    ],
  },

  "msc-data-science": {
    tagline: "From data professional to data leader — the graduate credential that marks the shift.",
    overview:
      "The MSc in Data Science at SBS Swiss Business School is an 18-month online master's degree covering the full stack of modern data competencies: Python, machine learning, deep learning, data engineering, and business intelligence. Designed for tech professionals who want a formal graduate degree to back their practical expertise and position themselves for senior data roles.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85",
    sectionImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    stats: [
      { val: "18", unit: "Months", label: "Programme Duration" },
      { val: "100%", unit: "", label: "Online Delivery" },
      { val: "6", unit: "Modules", label: "Core Curriculum" },
      { val: "MSc", unit: "", label: "Graduate Degree" },
    ],
    highlights: [
      { icon: "◈", title: "Python to Production", desc: "From fundamentals to production-grade ML pipelines — practical, employer-ready, not just theoretical." },
      { icon: "◈", title: "BI & Analytics Built-In", desc: "Power BI, Tableau, and SQL are core curriculum — not electives or afterthoughts." },
      { icon: "◈", title: "Full MSc Credential", desc: "A graduate-level degree from SBS Swiss Business School — recognised in European and global markets." },
    ],
    modules: [
      {
        title: "Python & Statistical Foundations",
        topics: ["Python programming for data analysis", "Statistical inference and probability", "Pandas, NumPy, and data wrangling", "Exploratory data analysis (EDA) techniques"],
      },
      {
        title: "Machine Learning Foundations",
        topics: ["Supervised and unsupervised learning", "Model evaluation and validation metrics", "Feature engineering and selection", "Scikit-learn end-to-end pipelines"],
      },
      {
        title: "Deep Learning & NLP",
        topics: ["Neural network architectures (CNN, RNN, Transformers)", "Natural language processing fundamentals", "Hugging Face and pre-trained models", "Computer vision applications"],
      },
      {
        title: "Data Engineering & Cloud",
        topics: ["ETL pipeline design", "Cloud platforms: AWS, GCP, Azure basics", "SQL and NoSQL databases in depth", "Data warehousing and lakehouse architectures"],
      },
      {
        title: "Business Intelligence & Visualisation",
        topics: ["Power BI dashboards and DAX formulas", "Tableau fundamentals and data storytelling", "Executive-level data communication", "KPI design and metrics frameworks"],
      },
      {
        title: "MSc Research Project",
        topics: ["Research problem framing in data science", "Dataset sourcing and methodology design", "Model development and evaluation report", "Final dissertation submission and review"],
      },
    ],
    outcomes: [
      "Earn an MSc in Data Science from SBS Swiss Business School — a recognised European graduate degree.",
      "Qualify for senior data scientist, ML engineer, and head-of-data roles requiring graduate credentials.",
      "Build a portfolio of real ML projects completed during the programme — shareable on GitHub and LinkedIn.",
      "Bridge the gap between technical execution and business strategy with BI and communication modules.",
      "Access Techversity's career placement support — including resume review and interview prep for data roles.",
    ],
    eligibility: [
      "Bachelor's degree in any discipline (STEM background preferred but not mandatory)",
      "Basic familiarity with Python or any programming language",
      "Minimum 1–2 years of experience in a data, analytics, or tech-adjacent role",
      "Strong quantitative aptitude and ability to work with complex datasets",
      "Commitment of 12–16 hours per week across the 18-month programme",
    ],
    universitySlug: "sbs-swiss",
    universityName: "SBS Swiss Business School",
    universityCountry: "Switzerland",
    universityFlag: "🇨🇭",
    universityDesc: "SBS Swiss Business School is a Switzerland-based institution offering internationally recognised graduate degrees in business, data science, and management for working professionals.",
    universities: [
      { slug: "sbs-swiss", name: "SBS Swiss Business School", country: "Switzerland", flag: "🇨🇭", code: "ch", fee: "From $10,000", duration: "18 Months" },
      { slug: "eu-global", name: "EU Global Institute", country: "Malta", flag: "🇲🇹", code: "mt", fee: "From $8,700", duration: "16 Months" },
      { slug: "kennedy-university", name: "Kennedy University", country: "United States", flag: "🇺🇸", code: "us", fee: "From $9,400", duration: "20 Months" },
    ],
  },

  "executive-mba": {
    tagline: "C-suite calibre. Global credential. Delivered in eight months.",
    overview:
      "The Executive MBA (Fast-Track) at Euro-Asian University is built for professionals already in or approaching C-suite and VP-level roles. It is deliberately short — 8 months — because at this career level, time is the scarcest resource. The programme covers governance, corporate finance for executives, global strategy, and board-level leadership — taught at the pace and depth a senior professional demands.",
    heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=85",
    sectionImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80",
    stats: [
      { val: "8", unit: "Months", label: "Fast-Track Duration" },
      { val: "100%", unit: "", label: "Online Delivery" },
      { val: "8+", unit: "Yrs", label: "Experience Required" },
      { val: "EMBA", unit: "", label: "Executive Credential" },
    ],
    highlights: [
      { icon: "◈", title: "8-Month Fast-Track", desc: "Concentrated, high-impact, structured to respect the schedule of someone at your career level." },
      { icon: "◈", title: "Board-Level Focus", desc: "Governance, ethics, and board dynamics are core — not electives. Built for current and aspiring board members." },
      { icon: "◈", title: "International Credential", desc: "Euro-Asian University's EMBA carries international recognition for professionals across CIS and global markets." },
    ],
    modules: [
      {
        title: "Executive Leadership & Organisational Vision",
        topics: ["Visionary leadership vs operational management", "Executive presence and stakeholder influence", "Building and leading high-performance executive teams", "Leading during uncertainty and transformation"],
      },
      {
        title: "Corporate Finance for Executives",
        topics: ["P&L management and executive financial oversight", "M&A strategy and due diligence fundamentals", "Capital markets and funding strategy", "Investor relations and board financial reporting"],
      },
      {
        title: "Global Strategy & Market Expansion",
        topics: ["Global competitive strategy frameworks", "International market entry models", "Geopolitical risk assessment for executives", "Cross-border negotiation and partnerships"],
      },
      {
        title: "Board Governance & Corporate Ethics",
        topics: ["Board composition and accountability frameworks", "ESG governance and stakeholder capitalism", "Executive ethics and whistleblowing policies", "Legal responsibilities of directors and officers"],
      },
      {
        title: "EMBA Applied Project",
        topics: ["Strategic problem diagnosis in your own organisation", "Applied research methodology at executive level", "Peer review and advisory panel discussion", "Final board-ready presentation and report"],
      },
    ],
    outcomes: [
      "Earn an Executive MBA from Euro-Asian University — internationally recognised for business and leadership roles.",
      "Step into or consolidate board-level positions with formal governance and corporate finance credentials.",
      "Complete the programme in 8 months with zero impact on your current professional commitments.",
      "Gain a structured framework for executive decision-making, M&A evaluation, and board stakeholder management.",
      "Access Techversity's executive alumni network — peers at C-suite and board level across 15+ countries.",
    ],
    eligibility: [
      "Minimum 8–10 years of professional experience, with at least 3 years at director or C-suite level",
      "Bachelor's degree or equivalent (Master's preferred but not mandatory for this pathway)",
      "Currently in or actively targeting a VP, Director, CEO, or board-level role",
      "Strong English proficiency for academic and strategic communication",
      "Commitment of 6–10 hours per week for the 8-month programme duration",
    ],
    universitySlug: "euro-asian-university",
    universityName: "Euro-Asian University",
    universityCountry: "Kazakhstan",
    universityFlag: "🇰🇿",
    universityDesc: "Euro-Asian University is a Kazakhstan-based institution offering internationally recognised executive and MBA programmes for senior professionals across the CIS and global markets.",
    universities: [
      { slug: "euro-asian-university", name: "Euro-Asian University", country: "Kazakhstan", flag: "🇰🇿", code: "kz", fee: "From $9,000", duration: "8 Months" },
      { slug: "sbs-swiss", name: "SBS Swiss Business School", country: "Switzerland", flag: "🇨🇭", code: "ch", fee: "From $11,200", duration: "8 Months" },
      { slug: "eu-global", name: "EU Global Institute", country: "Malta", flag: "🇲🇹", code: "mt", fee: "From $8,400", duration: "9 Months" },
    ],
  },

  "agentic-ai": {
    tagline: "Build AI agents. Deploy real systems. Move beyond the prompt.",
    overview:
      "The Agentic AI & Automation Mastery programme is a 4-month applied certification for professionals who are done learning AI as theory. You will build multi-agent systems, automate real workflows, deploy LangChain and LangGraph pipelines, and leave with a portfolio of working projects. This is not a course — it is a builder's track.",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=85",
    sectionImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
    stats: [
      { val: "4", unit: "Months", label: "Programme Duration" },
      { val: "6+", unit: "Projects", label: "Portfolio Built" },
      { val: "14+", unit: "Tools", label: "Frameworks Covered" },
      { val: "97%", unit: "", label: "Completion Rate" },
    ],
    highlights: [
      { icon: "◈", title: "Agents, Not Prompts", desc: "Build autonomous AI systems that reason, retrieve, and act — not just respond to chat inputs." },
      { icon: "◈", title: "Portfolio-First", desc: "6+ deployable projects completed during the programme — shareable, demonstrable, employer-ready." },
      { icon: "◈", title: "14+ Frameworks", desc: "LangChain, LangGraph, AutoGen, CrewAI, Pinecone, Weaviate — plus deployment and monitoring tools." },
    ],
    modules: [
      {
        title: "Foundations of Agentic AI",
        topics: ["LLM architecture and capabilities overview", "Prompt engineering for agent design", "OpenAI, Anthropic, and Gemini APIs", "Tool use and function calling patterns"],
      },
      {
        title: "LangChain & LangGraph",
        topics: ["LangChain LCEL pipelines", "LangGraph stateful agent graphs", "Memory types: buffer, vector, summary", "Multi-step reasoning chains"],
      },
      {
        title: "Multi-Agent Systems",
        topics: ["AutoGen conversational agent setup", "CrewAI role-based agent teams", "Agent orchestration patterns", "Debugging and observability with LangSmith"],
      },
      {
        title: "RAG & Knowledge Systems",
        topics: ["Vector databases: Pinecone, Weaviate, Chroma", "Embedding models and retrieval strategies", "Document loaders and chunking strategies", "Production RAG pipeline design"],
      },
      {
        title: "Automation & Deployment",
        topics: ["n8n and Make.com workflow automation", "FastAPI for AI backend deployment", "Docker containerisation basics", "Monitoring, logging, and cost management"],
      },
      {
        title: "Capstone Project",
        topics: ["Full autonomous agent design brief", "Architecture review with mentors", "Deployment to cloud infrastructure", "Demo day and portfolio submission"],
      },
    ],
    outcomes: [
      "Build and deploy autonomous AI agents that operate independently in real production environments.",
      "Complete 6+ portfolio projects using LangChain, LangGraph, AutoGen, and RAG pipelines.",
      "Qualify for AI engineer, automation consultant, and AI product roles paying $80K–$160K+.",
      "Receive a Techversity-issued Agentic AI Certification — verifiable and shareable on LinkedIn.",
      "Join the Techversity AI community — peers, mentors, and job opportunities in one network.",
    ],
    eligibility: [
      "Basic Python knowledge — writing functions, loops, working with APIs",
      "Familiarity with REST APIs and JSON; prior AI experience is not required",
      "A laptop/computer capable of running Python environments locally",
      "Commitment of 10–14 hours per week across the 4-month programme",
      "Motivation to build real projects — not just complete quizzes and watch videos",
    ],
    universitySlug: "certifications",
    universityName: "Techversity.ai",
    universityCountry: "Global",
    universityFlag: "🌐",
    universityDesc: "The Agentic AI certification is issued directly by Techversity.ai — verifiable through our certification registry and shareable with a credential URL on LinkedIn.",
  },

  "data-science-cert": {
    tagline: "Python. ML. SQL. Power BI. Career-ready in 3 months.",
    overview:
      "The Data Science Certification is a 3-month applied programme covering the complete modern data science toolkit: Python for data analysis, machine learning with scikit-learn, SQL for querying, and Power BI for visualisation. Designed for analysts and engineers making the move into data science — with real project work and career support built in.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85",
    sectionImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    stats: [
      { val: "3", unit: "Months", label: "Programme Duration" },
      { val: "5+", unit: "Projects", label: "Portfolio Built" },
      { val: "100%", unit: "", label: "Online Delivery" },
      { val: "Job-Ready", unit: "", label: "Outcome Focus" },
    ],
    highlights: [
      { icon: "◈", title: "Python-First Curriculum", desc: "Full Python data stack — Pandas, NumPy, scikit-learn, Matplotlib — covered thoroughly from foundations." },
      { icon: "◈", title: "BI & Dashboards", desc: "Power BI and Tableau are included — data scientists who can present their findings are worth more." },
      { icon: "◈", title: "Career Support Included", desc: "Portfolio review, resume coaching, and placement support — included, not an upsell." },
    ],
    modules: [
      {
        title: "Python for Data Analysis",
        topics: ["Python basics and data types", "Pandas for data manipulation", "NumPy for numerical computing", "Matplotlib and Seaborn for visualisation"],
      },
      {
        title: "SQL & Database Fundamentals",
        topics: ["SQL queries, joins, and subqueries", "Data aggregation and window functions", "Working with PostgreSQL and MySQL", "Data extraction from real databases"],
      },
      {
        title: "Machine Learning",
        topics: ["Supervised learning: regression and classification", "Unsupervised learning: clustering and PCA", "Model evaluation: precision, recall, F1, AUC-ROC", "Scikit-learn end-to-end pipelines"],
      },
      {
        title: "Business Intelligence & Visualisation",
        topics: ["Power BI data modelling and DAX", "Dashboard design for business stakeholders", "Tableau fundamentals", "Storytelling with data principles"],
      },
      {
        title: "Capstone Project",
        topics: ["End-to-end data science case study", "Data cleaning, analysis, and model building", "Business insight presentation", "GitHub portfolio submission"],
      },
    ],
    outcomes: [
      "Earn a Techversity Data Science Certification — verifiable and shareable on LinkedIn.",
      "Build a portfolio of real projects covering Python, ML, SQL, and Power BI.",
      "Qualify for data analyst, data scientist, and BI analyst roles.",
      "Receive resume review and interview coaching from Techversity's career team.",
      "Access Techversity's alumni network and ongoing job opportunity updates.",
    ],
    eligibility: [
      "No prior data science experience required — basic computer literacy expected",
      "Any graduate degree or equivalent professional experience",
      "Access to a computer capable of running Python (Windows, Mac, or Linux)",
      "Commitment of 8–12 hours per week for the 3-month duration",
      "Genuine interest in building a data science career, not just collecting a certificate",
    ],
    universitySlug: "certifications",
    universityName: "Techversity.ai",
    universityCountry: "Global",
    universityFlag: "🌐",
    universityDesc: "The Data Science Certification is issued directly by Techversity.ai — verifiable through our certification registry and designed to meet current employer requirements.",
  },

  "cybersecurity": {
    tagline: "Ethical hacking. Cloud security. SOC operations. Job-ready in 3 months.",
    overview:
      "The Cybersecurity Mastery certification is a hands-on 3-month programme covering the full spectrum of modern cybersecurity: ethical hacking, penetration testing, cloud security on AWS and Azure, and Security Operations Center (SOC) procedures. Designed for IT professionals making the move into cybersecurity — with real labs, simulated environments, and a career support package.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&q=85",
    sectionImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80",
    stats: [
      { val: "3", unit: "Months", label: "Programme Duration" },
      { val: "5+", unit: "Labs", label: "Hands-On Projects" },
      { val: "100%", unit: "", label: "Online + Lab-Based" },
      { val: "SOC", unit: "", label: "Role-Ready Focus" },
    ],
    highlights: [
      { icon: "◈", title: "Ethical Hacking", desc: "Penetration testing, vulnerability assessment, and attack simulation in controlled lab environments." },
      { icon: "◈", title: "Cloud Security", desc: "AWS and Azure security architecture — aligned with real enterprise environments and hiring requirements." },
      { icon: "◈", title: "SOC Operations", desc: "SIEM tools, incident response, and threat hunting — the skills SOC analyst roles actually require." },
    ],
    modules: [
      {
        title: "Cybersecurity Fundamentals",
        topics: ["CIA triad and security frameworks (NIST, ISO 27001)", "Networking for security (TCP/IP, DNS, firewalls)", "Linux fundamentals for security professionals", "Common attack vectors and threat landscape"],
      },
      {
        title: "Ethical Hacking & Penetration Testing",
        topics: ["Kali Linux environment setup", "Reconnaissance: passive and active techniques", "Exploitation using the Metasploit framework", "Reporting penetration test findings professionally"],
      },
      {
        title: "Cloud Security",
        topics: ["AWS IAM, S3 security, and VPC architecture", "Azure Security Center and Defender", "Cloud-native threat detection", "Shared responsibility model in depth"],
      },
      {
        title: "SOC Operations & Incident Response",
        topics: ["SIEM tools: Splunk and Microsoft Sentinel", "Log analysis and threat hunting", "Incident response playbooks", "Malware analysis fundamentals"],
      },
      {
        title: "Capstone Project",
        topics: ["Full penetration test on a simulated environment", "Cloud security audit report", "Incident response simulation exercise", "Portfolio documentation and LinkedIn showcase"],
      },
    ],
    outcomes: [
      "Earn a Techversity Cybersecurity Certification — verifiable and aligned with current industry hiring requirements.",
      "Complete hands-on labs covering ethical hacking, cloud security, and SOC operations.",
      "Qualify for SOC analyst, cybersecurity analyst, and penetration tester roles.",
      "Build a portfolio of security assessments and reports from real simulated environments.",
      "Access Techversity's career support — resume review, interview prep, and placement assistance.",
    ],
    eligibility: [
      "Basic IT knowledge: networking fundamentals, understanding of operating systems",
      "Prior experience in IT support, networking, or system administration preferred",
      "Access to a computer capable of running virtual machines (8 GB RAM minimum recommended)",
      "Commitment of 10–14 hours per week for the 3-month duration",
      "Interest in defensive and offensive security — ethical intent is required",
    ],
    universitySlug: "certifications",
    universityName: "Techversity.ai",
    universityCountry: "Global",
    universityFlag: "🌐",
    universityDesc: "The Cybersecurity Mastery certification is issued directly by Techversity.ai — designed in alignment with industry frameworks (NIST, CompTIA, EC-Council) and current employer requirements.",
  },
};

export default programDetails;