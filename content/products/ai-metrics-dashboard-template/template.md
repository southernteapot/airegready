# AI Metrics & Monitoring Dashboard — Template

**Purpose:** A reference set of metrics for monitoring AI systems in production and rolling up to governance. Use as the spec for a GRC / BI dashboard. Not every system needs every metric; scale to risk tier.

---

## 1. Why metrics

- **Detect** drift, bias, and misbehavior before users do
- **Demonstrate** accountability to users, customers, and regulators
- **Decide** when to retrain, retire, or expand a system
- **Defend** — evidence for audits, examinations, litigation

Pick metrics tied to decisions you're willing to make. Vanity metrics erode trust.

## 2. Tiered metric framework

### Tier 1 — Every AI system in production

1. **Availability / uptime**
2. **Call volume** (requests per day)
3. **Latency** (p50, p95)
4. **Error rate**
5. **Cost per call / per user / per outcome**
6. **User adoption** (unique users, sessions)

### Tier 2 — Add for customer-facing or consequential-decision systems

7. **Accuracy / quality** (task-specific)
8. **Hallucination / confabulation rate** (for generative)
9. **Refusal rate** (and reasons)
10. **User satisfaction** (CSAT on AI interactions)
11. **Complaints involving AI** (volume, category, resolution)
12. **Overrides** (how often human overrides AI decision)
13. **Appeals** (volume, outcomes)
14. **Time to resolution** for appeals

### Tier 3 — Add for high-risk / regulated systems

15. **Subgroup performance** — accuracy, selection rate, impact ratio by protected class
16. **Drift** — data drift, concept drift, prediction drift
17. **Fairness trend** — changes in bias metrics over time
18. **Incident count** (by severity)
19. **Regulatory notifications made / pending**
20. **Safety-category hit rate** (CSAM, self-harm, etc., if applicable)
21. **Prompt-injection / abuse attempts blocked**
22. **Audit readiness index** — % of systems with current documentation

## 3. Dashboard views

### For engineers

- Performance, latency, error, drift, cost
- Per-model and per-deployment views
- Drill-down by request, by user, by version
- Alerts when thresholds breached

### For business owners

- User adoption and task outcomes
- Complaints and their resolution
- Cost vs. value
- Roadmap alignment

### For AI Governance / Risk

- Inventory snapshot by tier and status
- Incident and complaint rollups
- Fairness and drift trends
- Audit readiness

### For Executive / Board

- One-page AI posture
- Top 3-5 risks
- Incident summary
- Regulatory items
- Investment vs. outcome

## 4. Metric definitions — specimens

### Hallucination rate

`(AI responses containing fabricated, incorrect, or unsupported claims) / (AI responses total) × 100`

- Measured on a sampled + labeled benchmark
- Cadence: weekly
- Threshold: <X% (set per use case)

### Impact ratio (for hiring / credit / similar)

`(Selection rate for subgroup) / (Selection rate for reference subgroup)`

- Calculated per protected class and intersectional categories
- Cadence: quarterly (or per audit cadence)
- Threshold: ≥0.80 (four-fifths rule) or tighter per risk appetite

### Drift

- **Data drift**: distributional distance (KL, PSI) on input features over time
- **Concept drift**: performance degradation on held-out labeled data over time
- **Prediction drift**: distribution of outputs over time
- Threshold-based alerts

### Complaint rate

`Complaints with AI as primary cause / Active users per month × 1000`

- Cadence: monthly
- Trend alerts on sustained change

### Override rate

`Decisions where human reviewer changed AI output / Decisions reviewed`

- Per system and per reviewer
- High override rate suggests low model quality or mis-alignment with business needs

### Appeal rate and success

`Appeals filed / Adverse AI-assisted decisions`
`Appeals successful / Appeals filed`

- Per system
- High success rate on appeal suggests AI quality issue

### Audit readiness index

- % of systems with: current impact assessment / current bias audit / current technical documentation / tracked incidents
- Target: 100% for Tier 3; ≥80% for Tier 2

## 5. Alert rules (examples)

| Metric | Warning | Critical |
| --- | --- | --- |
| p95 latency | +20% w/w | +50% w/w |
| Error rate | +0.5pp | +2pp |
| Hallucination rate | +1pp | +3pp |
| Impact ratio | <0.85 | <0.80 |
| Drift | PSI ≥ 0.1 | PSI ≥ 0.25 |
| Complaints | +25% MoM | +100% MoM |
| Override rate | +15% w/w | +30% w/w |

Alerts route to the system owner and (for critical) AI Governance Lead and on-call.

## 6. Instrumentation

- **Event schema**: timestamp, system id, user id (if privacy-permitting), model version, prompt, output, decision, reviewer actions, feedback
- **Sampling**: full capture for Tier 3; sampled for Tier 1/2
- **Retention**: long enough to support trending and audits (12-24 months typical; longer where sector rules dictate)
- **Privacy**: redact or hash PII in monitoring stores; separate sensitive logs

## 7. Governance rhythm

- Weekly: owner-level review of performance and drift
- Monthly: program-level review (AI Governance Lead)
- Quarterly: AI Review Committee; board report components
- Annually: full program review and metric refresh

## 8. Common pitfalls

- **Too many metrics** — people stop looking
- **Single-number fairness** — oversimplifies; report metric suites
- **No action paths** — dashboards that don't drive change waste effort
- **No privacy** — PII in dashboards is itself a risk
- **No baselines** — you can't know drift without a baseline

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice.
