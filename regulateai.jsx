import { useState } from "react";

const REGULATIONS = [
  {
    id: "eu-ai-act",
    title: "EU AI Act",
    desc: "The world's first comprehensive AI law. Classification-based requirements for AI systems by risk level.",
    tag: "In Effect",
    icon: "🇪🇺",
  },
  {
    id: "nist-rmf",
    title: "NIST AI RMF",
    desc: "Voluntary U.S. framework for managing AI risks across the lifecycle. Increasingly referenced in policy.",
    tag: "Framework",
    icon: "🏛️",
  },
  {
    id: "state-laws",
    title: "U.S. State AI Laws",
    desc: "A patchwork of state-level requirements from Colorado, Illinois, Texas, California, and more.",
    tag: "Evolving",
    icon: "⚖️",
  },
  {
    id: "exec-orders",
    title: "Executive Orders & Federal Policy",
    desc: "Federal AI directives, OMB guidance, and agency-specific requirements for AI procurement and use.",
    tag: "Active",
    icon: "📜",
  },
  {
    id: "sector",
    title: "Sector-Specific Rules",
    desc: "HIPAA, FCRA, ECOA, SEC guidance — existing laws being applied to AI in healthcare, finance, and hiring.",
    tag: "Cross-Cutting",
    icon: "🏥",
  },
  {
    id: "global",
    title: "Global AI Governance",
    desc: "Canada's AIDA, China's AI regulations, UK's pro-innovation approach, and international standards.",
    tag: "Expanding",
    icon: "🌐",
  },
];

const BLOG_POSTS = [
  {
    title: "The EU AI Act Risk Classification: What You Actually Need to Know",
    category: "EU AI Act",
    date: "Mar 2026",
    readTime: "8 min read",
    excerpt:
      "The EU AI Act sorts AI systems into four risk tiers — but the details of what triggers 'high-risk' classification trip up most organizations. Here's the practical breakdown.",
    featured: true,
  },
  {
    title: "5 U.S. States Now Regulate AI in Hiring — Is Yours Next?",
    category: "State Laws",
    date: "Mar 2026",
    readTime: "6 min read",
    excerpt:
      "Colorado, Illinois, and others have passed laws governing automated employment decisions. A quick guide to what each requires and who's affected.",
    featured: false,
  },
  {
    title: "Shadow AI Is Your Biggest Compliance Risk (And How to Fix It)",
    category: "Governance",
    date: "Feb 2026",
    readTime: "5 min read",
    excerpt:
      "Your employees are already using ChatGPT, Claude, and Copilot — whether you know it or not. Here's why that's a compliance problem and what to do about it.",
    featured: false,
  },
  {
    title: "NIST AI RMF in Practice: From Framework to Action Plan",
    category: "NIST",
    date: "Feb 2026",
    readTime: "10 min read",
    excerpt:
      "NIST's AI Risk Management Framework is voluntary — but it's becoming the de facto standard. A step-by-step guide to actually implementing it.",
    featured: false,
  },
];

const FAQ_ITEMS = [
  {
    q: "Who needs to worry about AI compliance?",
    a: "Any organization that develops, deploys, or uses AI systems — including off-the-shelf tools like ChatGPT or Copilot. If AI influences decisions about people (hiring, lending, healthcare, benefits), your compliance obligations are significantly higher. Even companies 'just using' third-party AI tools can face liability.",
  },
  {
    q: "Does the EU AI Act apply to U.S. companies?",
    a: "Yes, if your AI system affects people in the EU or if the output of your AI system is used in the EU. This is similar to how GDPR applies to U.S. companies that handle EU residents' data. Many U.S. companies are subject to the EU AI Act without realizing it.",
  },
  {
    q: "What's the penalty for non-compliance?",
    a: "It varies by regulation. The EU AI Act can impose fines up to €35 million or 7% of global annual revenue. U.S. state laws vary — some carry civil penalties, others create private rights of action. The reputational and operational costs of enforcement actions often exceed the fines themselves.",
  },
  {
    q: "Where should a company start with AI compliance?",
    a: "Start with an inventory: what AI systems do you use, what data do they process, and what decisions do they influence? Then map those systems against the regulations that apply to your industry and geography. Our free Risk Assessment tool above gives you a quick starting point.",
  },
  {
    q: "Is there a single standard that covers everything?",
    a: "Not yet. AI regulation is fragmented across jurisdictions and sectors. The NIST AI Risk Management Framework is the closest thing to a universal baseline, but it's voluntary. Most organizations need to comply with multiple overlapping frameworks — which is exactly the problem RegulateAI is built to help solve.",
  },
  {
    q: "How fast is the regulatory landscape changing?",
    a: "Extremely fast. New AI laws, amendments, and enforcement actions are appearing monthly. In 2025–2026 alone, dozens of U.S. states introduced AI-related legislation, the EU AI Act entered enforcement phases, and multiple federal agencies issued new AI guidance. Staying current is a real challenge — and a core reason this resource exists.",
  },
];

const QUESTIONS = [
  {
    id: 1,
    text: "Does your organization develop or deploy AI systems?",
    options: [
      { label: "Yes — we build AI systems", value: "develop", risk: 3 },
      { label: "Yes — we use third-party AI tools", value: "deploy", risk: 2 },
      { label: "Both — we build and use AI", value: "both", risk: 4 },
      { label: "Exploring / planning to adopt", value: "exploring", risk: 1 },
    ],
  },
  {
    id: 2,
    text: "What industry does your organization primarily operate in?",
    options: [
      { label: "Healthcare", value: "healthcare", risk: 4 },
      { label: "Financial services", value: "finance", risk: 4 },
      { label: "Government / public sector", value: "government", risk: 3 },
      { label: "Technology / SaaS", value: "tech", risk: 2 },
      { label: "Education", value: "education", risk: 2 },
      { label: "Other", value: "other", risk: 1 },
    ],
  },
  {
    id: 3,
    text: "Does your AI make or influence decisions about people?",
    options: [
      { label: "Yes — hiring, lending, insurance, or benefits", value: "high-impact", risk: 5 },
      { label: "Yes — content recommendations or personalization", value: "moderate", risk: 3 },
      { label: "No — internal operations only", value: "internal", risk: 1 },
      { label: "Not sure", value: "unsure", risk: 3 },
    ],
  },
  {
    id: 4,
    text: "Do you process personal data from EU residents?",
    options: [
      { label: "Yes", value: "yes", risk: 4 },
      { label: "No", value: "no", risk: 0 },
      { label: "Not sure", value: "unsure", risk: 2 },
    ],
  },
  {
    id: 5,
    text: "How would you describe your current AI governance posture?",
    options: [
      { label: "We have documented AI policies and oversight", value: "mature", risk: 0 },
      { label: "We have informal practices but nothing documented", value: "developing", risk: 2 },
      { label: "We haven't started thinking about this", value: "none", risk: 4 },
      { label: "We're not sure what's needed", value: "unsure", risk: 3 },
    ],
  },
  {
    id: 6,
    text: "Does your organization operate across multiple states or countries?",
    options: [
      { label: "Multiple countries", value: "international", risk: 4 },
      { label: "Multiple U.S. states", value: "multi-state", risk: 3 },
      { label: "Single state only", value: "single", risk: 1 },
    ],
  },
  {
    id: 7,
    text: "Are you using generative AI (ChatGPT, Claude, Copilot, etc.)?",
    options: [
      { label: "Yes — widely across the organization", value: "wide", risk: 4 },
      { label: "Yes — limited or pilot use", value: "limited", risk: 2 },
      { label: "No", value: "no", risk: 0 },
      { label: "Employees may be using it unofficially", value: "shadow", risk: 5 },
    ],
  },
];

function getRiskProfile(answers) {
  const total = answers.reduce((sum, a) => sum + a.risk, 0);
  const max = answers.length * 5;
  const pct = Math.round((total / max) * 100);
  const regulations = [];
  const answerMap = {};
  answers.forEach((a) => (answerMap[a.qId] = a.value));
  if (answerMap[4] === "yes" || answerMap[6] === "international")
    regulations.push("EU AI Act");
  if (answerMap[3] === "high-impact")
    regulations.push("U.S. State AI Laws (CO, IL, TX)");
  if (answerMap[2] === "healthcare") regulations.push("HIPAA AI Guidance");
  if (answerMap[2] === "finance")
    regulations.push("FCRA / ECOA / SEC AI Guidance");
  if (answerMap[2] === "government")
    regulations.push("Federal AI Executive Orders & OMB Guidance");
  regulations.push("NIST AI Risk Management Framework");
  if (answerMap[7] === "wide" || answerMap[7] === "shadow")
    regulations.push("Generative AI Use Policies");
  let level, color, summary;
  if (pct <= 30) {
    level = "LOW";
    color = "#4ade80";
    summary = "Your AI compliance risk exposure appears relatively limited. Focus on building foundational policies and monitoring the regulatory landscape.";
  } else if (pct <= 55) {
    level = "MODERATE";
    color = "#fbbf24";
    summary = "You face meaningful compliance obligations across several frameworks. Prioritize documenting your AI practices and assessing high-risk use cases.";
  } else if (pct <= 75) {
    level = "HIGH";
    color = "#fb923c";
    summary = "Your organization has significant regulatory exposure. Immediate action on governance frameworks and compliance documentation is advisable.";
  } else {
    level = "CRITICAL";
    color = "#f87171";
    summary = "Your risk profile indicates substantial, multi-jurisdictional compliance obligations. Comprehensive AI governance should be a top organizational priority.";
  }
  return { pct, level, color, regulations, summary };
}

const C = {
  bg: "#16171c",
  bgCard: "rgba(255,255,255,0.025)",
  bgCardHover: "rgba(255,255,255,0.05)",
  border: "rgba(255,255,255,0.06)",
  borderHover: "rgba(200,164,110,0.35)",
  gold: "#c8a46e",
  goldLight: "#e8d5a8",
  goldBg: "rgba(200,164,110,0.08)",
  goldBorder: "rgba(200,164,110,0.18)",
  textPrimary: "#eae5db",
  textSecondary: "#92929a",
  textMuted: "#62626a",
};

function NavBar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(22, 23, 28, 0.88)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${C.border}`,
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 32,
            height: 32,
            background: `linear-gradient(135deg, ${C.gold}, #a67c3d)`,
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 16,
            color: C.bg,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          R
        </div>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 19,
            color: C.textPrimary,
            letterSpacing: "-0.02em",
          }}
        >
          Regulate<span style={{ color: C.gold }}>AI</span>
        </span>
      </div>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Guide", "Assessment", "Blog", "Tools"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: C.textSecondary,
              textDecoration: "none",
              fontSize: 14,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.color = C.gold)}
            onMouseOut={(e) => (e.target.style.color = C.textSecondary)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,164,110,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: C.goldBg,
          border: `1px solid ${C.goldBorder}`,
          borderRadius: 100,
          padding: "6px 16px",
          marginBottom: 32,
          fontSize: 13,
          fontWeight: 600,
          color: C.gold,
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.03em",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: C.gold,
            animation: "pulse 2s infinite",
          }}
        />
        AI Regulation is Accelerating
      </div>
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 700,
          color: C.textPrimary,
          lineHeight: 1.1,
          maxWidth: 800,
          margin: "0 0 24px",
          letterSpacing: "-0.02em",
        }}
      >
        Navigate AI Compliance{" "}
        <span
          style={{
            background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          with Confidence
        </span>
      </h1>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 19,
          color: C.textSecondary,
          maxWidth: 580,
          lineHeight: 1.65,
          margin: "0 0 40px",
        }}
      >
        Expert regulatory guidance for a fast-moving landscape. Clear analysis of
        AI laws, practical compliance frameworks, and tools to manage your
        obligations — all in one place.
      </p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="#assessment"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: `linear-gradient(135deg, ${C.gold}, #a67c3d)`,
            color: C.bg,
            padding: "14px 28px",
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "none",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 4px 24px rgba(200,164,110,0.2)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(200,164,110,0.3)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 24px rgba(200,164,110,0.2)";
          }}
        >
          Free Risk Assessment →
        </a>
        <a
          href="#guide"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.04)",
            border: `1px solid rgba(255,255,255,0.1)`,
            color: C.textPrimary,
            padding: "14px 28px",
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
        >
          Explore the Guide
        </a>
      </div>
      <div
        style={{
          marginTop: 64,
          display: "flex",
          gap: 48,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          ["6+", "Regulatory Frameworks"],
          ["50+", "Compliance Guides"],
          ["Free", "Risk Assessment Tool"],
        ].map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32,
                fontWeight: 700,
                color: C.gold,
              }}
            >
              {num}
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: C.textMuted,
                marginTop: 4,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ label }) {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: C.gold,
        marginBottom: 12,
      }}
    >
      {label}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 36,
        fontWeight: 700,
        color: C.textPrimary,
        margin: 0,
      }}
    >
      {children}
    </h2>
  );
}

function SectionDesc({ children }) {
  return (
    <p
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 16,
        color: C.textSecondary,
        marginTop: 12,
        maxWidth: 540,
        margin: "12px auto 0",
        lineHeight: 1.6,
      }}
    >
      {children}
    </p>
  );
}

function GuideSection() {
  return (
    <section id="guide" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <SectionLabel label="Compliance Guide" />
        <SectionTitle>Every Framework. Clearly Explained.</SectionTitle>
        <SectionDesc>
          Plain-language breakdowns of the regulations that matter, with
          practical guidance on what they require and who they affect.
        </SectionDesc>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 16,
        }}
      >
        {REGULATIONS.map((reg) => (
          <div
            key={reg.id}
            style={{
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: 28,
              transition: "border-color 0.3s, background 0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = C.borderHover;
              e.currentTarget.style.background = C.bgCardHover;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = C.border;
              e.currentTarget.style.background = C.bgCard;
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 12,
              }}
            >
              <span style={{ fontSize: 28 }}>{reg.icon}</span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: C.gold,
                  background: C.goldBg,
                  padding: "4px 10px",
                  borderRadius: 100,
                }}
              >
                {reg.tag}
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                fontWeight: 700,
                color: C.textPrimary,
                margin: "0 0 8px",
              }}
            >
              {reg.title}
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "#7a7a82",
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              {reg.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AssessmentTool() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (option) => {
    const newAnswers = [
      ...answers,
      { qId: QUESTIONS[step].id, value: option.value, risk: option.risk },
    ];
    setAnswers(newAnswers);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setResult(getRiskProfile(newAnswers));
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section id="assessment" style={{ padding: "80px 24px", maxWidth: 720, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <SectionLabel label="Free Tool" />
        <SectionTitle>AI Compliance Risk Assessment</SectionTitle>
        <SectionDesc>
          Answer 7 questions. Get your risk profile and the regulations that
          likely apply to you.
        </SectionDesc>
      </div>
      <div
        style={{
          background: C.bgCard,
          border: `1px solid rgba(255,255,255,0.08)`,
          borderRadius: 16,
          padding: "36px 40px",
        }}
      >
        {!result ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: C.textMuted,
                  fontWeight: 600,
                }}
              >
                Question {step + 1} of {QUESTIONS.length}
              </span>
              <div
                style={{
                  width: 120,
                  height: 4,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 100,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${((step + 1) / QUESTIONS.length) * 100}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, ${C.gold}, ${C.goldLight})`,
                    borderRadius: 100,
                    transition: "width 0.4s ease",
                  }}
                />
              </div>
            </div>
            <h3
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 20,
                fontWeight: 600,
                color: C.textPrimary,
                marginBottom: 24,
                lineHeight: 1.4,
              }}
            >
              {QUESTIONS[step].text}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {QUESTIONS[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt)}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid rgba(255,255,255,0.08)`,
                    borderRadius: 10,
                    padding: "14px 20px",
                    color: "#c0c0c6",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = C.borderHover;
                    e.currentTarget.style.background = "rgba(200,164,110,0.06)";
                    e.currentTarget.style.color = C.textPrimary;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.color = "#c0c0c6";
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: C.textSecondary,
                  marginBottom: 8,
                }}
              >
                Your Risk Level
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 48,
                  fontWeight: 700,
                  color: result.color,
                  lineHeight: 1,
                }}
              >
                {result.level}
              </div>
              <div
                style={{
                  width: "100%",
                  height: 6,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 100,
                  margin: "20px 0",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${result.pct}%`,
                    height: "100%",
                    background: result.color,
                    borderRadius: 100,
                    transition: "width 1s ease",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: C.textSecondary,
                  lineHeight: 1.6,
                  maxWidth: 500,
                  margin: "0 auto",
                }}
              >
                {result.summary}
              </p>
            </div>
            <div style={{ marginBottom: 32 }}>
              <h4
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: C.gold,
                  marginBottom: 16,
                }}
              >
                Regulations Likely Applicable to You
              </h4>
              {result.regulations.map((reg, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 0",
                    borderBottom: `1px solid rgba(255,255,255,0.04)`,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    color: "#c0c0c6",
                  }}
                >
                  <span style={{ color: C.gold, fontSize: 14 }}>●</span>
                  {reg}
                </div>
              ))}
            </div>
            <div
              style={{
                background: C.goldBg,
                border: `1px solid ${C.goldBorder}`,
                borderRadius: 10,
                padding: 20,
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: C.gold,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                <strong>Coming soon:</strong> Detailed compliance roadmaps,
                documentation templates, and automated tracking for each
                regulation. Join the newsletter to get early access.
              </p>
            </div>
            <button
              onClick={reset}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid rgba(255,255,255,0.1)`,
                borderRadius: 8,
                padding: "12px 24px",
                color: C.textSecondary,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = C.textPrimary)}
              onMouseOut={(e) => (e.currentTarget.style.color = C.textSecondary)}
            >
              ← Retake Assessment
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function BlogSection() {
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <section id="blog" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <SectionLabel label="Latest Analysis" />
        <SectionTitle>Insights & Guides</SectionTitle>
        <SectionDesc>
          Practical analysis of AI regulations, enforcement trends, and
          compliance strategies you can act on.
        </SectionDesc>
      </div>
      <div
        style={{
          background: C.bgCard,
          border: `1px solid ${C.border}`,
          borderRadius: 14,
          padding: 36,
          marginBottom: 16,
          cursor: "pointer",
          transition: "border-color 0.3s, background 0.3s",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = C.borderHover;
          e.currentTarget.style.background = C.bgCardHover;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = C.border;
          e.currentTarget.style.background = C.bgCard;
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
          }}
        />
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: C.gold,
              background: C.goldBg,
              padding: "4px 10px",
              borderRadius: 100,
            }}
          >
            Featured
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: C.textMuted,
            }}
          >
            {featured.category} · {featured.date} · {featured.readTime}
          </span>
        </div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 26,
            fontWeight: 700,
            color: C.textPrimary,
            margin: "0 0 12px",
            lineHeight: 1.3,
          }}
        >
          {featured.title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            color: C.textSecondary,
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 700,
          }}
        >
          {featured.excerpt}
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 16,
        }}
      >
        {rest.map((post) => (
          <div
            key={post.title}
            style={{
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: 28,
              cursor: "pointer",
              transition: "border-color 0.3s, background 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = C.borderHover;
              e.currentTarget.style.background = C.bgCardHover;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = C.border;
              e.currentTarget.style.background = C.bgCard;
            }}
          >
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: C.textMuted,
                marginBottom: 12,
              }}
            >
              {post.category} · {post.date} · {post.readTime}
            </div>
            <h3
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                fontWeight: 700,
                color: C.textPrimary,
                margin: "0 0 10px",
                lineHeight: 1.35,
              }}
            >
              {post.title}
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "#7a7a82",
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding: "80px 24px", maxWidth: 760, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <SectionLabel label="FAQ" />
        <SectionTitle>Common Questions About AI Compliance</SectionTitle>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            style={{
              background: C.bgCard,
              border: `1px solid ${open === i ? C.borderHover : C.border}`,
              borderRadius: 12,
              overflow: "hidden",
              transition: "border-color 0.3s",
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                padding: "20px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                gap: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: open === i ? C.gold : C.textPrimary,
                  textAlign: "left",
                  transition: "color 0.3s",
                }}
              >
                {item.q}
              </span>
              <span
                style={{
                  color: C.textMuted,
                  fontSize: 20,
                  fontWeight: 300,
                  flexShrink: 0,
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s, color 0.3s",
                }}
              >
                +
              </span>
            </button>
            {open === i && (
              <div style={{ padding: "0 24px 20px" }}>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    color: C.textSecondary,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolsTeaser() {
  const tools = [
    {
      title: "Compliance Tracker",
      desc: "Monitor your compliance status across every applicable regulation in a single dashboard.",
      status: "Coming Q3 2026",
    },
    {
      title: "Policy Generator",
      desc: "Generate customized AI governance policies, acceptable use documents, and risk assessments.",
      status: "Coming Q4 2026",
    },
    {
      title: "Regulatory Alerts",
      desc: "Real-time monitoring of new AI regulations, enforcement actions, and guidance updates.",
      status: "Coming Q3 2026",
    },
  ];

  return (
    <section id="tools" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <SectionLabel label="On the Horizon" />
        <SectionTitle>Compliance Tools, Built for the Real World</SectionTitle>
        <SectionDesc>
          Not another AI chatbot. Real compliance infrastructure designed by
          people who understand enforcement.
        </SectionDesc>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool.title}
            style={{
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: 28,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: `linear-gradient(90deg, transparent, rgba(200,164,110,0.25), transparent)`,
              }}
            />
            <h3
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                fontWeight: 700,
                color: C.textPrimary,
                margin: "0 0 8px",
              }}
            >
              {tool.title}
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "#7a7a82",
                lineHeight: 1.55,
                margin: "0 0 16px",
              }}
            >
              {tool.desc}
            </p>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: C.gold,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {tool.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{ padding: "80px 24px", maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
      <div
        style={{
          background: C.goldBg,
          border: `1px solid ${C.goldBorder}`,
          borderRadius: 16,
          padding: 48,
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 30,
            fontWeight: 700,
            color: C.textPrimary,
            margin: "0 0 12px",
          }}
        >
          Stay Ahead of AI Regulation
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            color: C.textSecondary,
            lineHeight: 1.6,
            margin: "0 0 28px",
          }}
        >
          Weekly analysis of new AI laws, enforcement actions, and compliance
          strategies. No spam, no fluff.
        </p>
        {!submitted ? (
          <div style={{ display: "flex", gap: 10, maxWidth: 420, margin: "0 auto" }}>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: `1px solid rgba(255,255,255,0.1)`,
                borderRadius: 8,
                padding: "12px 16px",
                color: C.textPrimary,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              onClick={() => email && setSubmitted(true)}
              style={{
                background: `linear-gradient(135deg, ${C.gold}, #a67c3d)`,
                color: C.bg,
                padding: "12px 24px",
                borderRadius: 8,
                border: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </button>
          </div>
        ) : (
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              color: C.gold,
              fontWeight: 600,
            }}
          >
            ✓ You're in. Watch your inbox.
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        padding: "40px 24px",
        borderTop: `1px solid ${C.border}`,
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: C.textMuted,
          margin: 0,
        }}
      >
        © 2026 RegulateAI. Expert AI compliance guidance.
        <br />
        <span style={{ fontSize: 12, marginTop: 4, display: "inline-block" }}>
          Content is educational and does not constitute legal advice. Consult
          qualified counsel for specific compliance obligations.
        </span>
      </p>
    </footer>
  );
}

export default function RegulateAI() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        color: C.textPrimary,
        overflowX: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
      <NavBar />
      <Hero />
      <GuideSection />
      <AssessmentTool />
      <BlogSection />
      <FAQSection />
      <ToolsTeaser />
      <Newsletter />
      <Footer />
    </div>
  );
}
