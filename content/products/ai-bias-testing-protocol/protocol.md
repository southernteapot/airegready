# AI Bias Testing Protocol

**Purpose:** A repeatable methodology for evaluating an AI system for harmful bias before deployment and on a continuing basis. Supports Colorado AI Act obligations, EU AI Act Art 10 data governance and Art 15 accuracy, NYC LL 144 bias audit methodology, EEOC scrutiny on employment tools, NAIC Model Bulletin on AI in insurance, and general good practice.

---

## 1. Scope

Apply this protocol to any AI system that:

- Makes or materially informs a decision about a person
- Serves a population where harm from disparate outcomes is plausible
- Is subject to statutory fairness testing (NYC LL 144, CAIA high-risk, etc.)
- Operates at scale across diverse populations

## 2. Pre-work: frame the fairness question

Before testing, document:

- **What does fairness mean for this system?** (There are many definitions; they are not all compatible.)
- **Which fairness metrics matter?** Demographic parity, equal opportunity, predictive parity, calibration, accuracy parity?
- **Which protected classes apply?** Federal (race, color, national origin, sex, religion, age, disability), state (sexual orientation, gender identity, marital status, source of income), sector-specific (children, military status)
- **Which thresholds require action?** Document your acceptable and unacceptable ranges.
- **Which tradeoffs do you accept?** (E.g., fairness-accuracy tradeoff, false-positive vs. false-negative balance.)

A bias test without a framing document is a bias test without a conclusion.

## 3. Data preparation

### 3.1 Acquire demographic labels

Options:

- **Self-identified** data from the population (best if available)
- **Inferred** labels (Bayesian Improved Surname Geocoding for race, where appropriate; self-identified sex at application)
- **Proxy** features (ZIP code, name — known to be imperfect)

Document how labels were obtained and the limitations.

### 3.2 Sample size

- Ensure sufficient sample in each subgroup (rule of thumb: ≥200 per subgroup; more for small-effect testing)
- If insufficient, disclose and use test data or synthetic augmentation per NYC LL 144 rules
- Pay attention to intersectional subgroups (sex × race/ethnicity) — these often have small Ns

### 3.3 Labels for outcomes

- Ground-truth labels where possible
- For in-production systems, capture both predicted and actual outcomes
- Handle missing data carefully; document assumptions

## 4. Metrics

Compute and report at least the following across every protected class and intersection:

### 4.1 Selection rate (positive outcomes)

The rate at which each subgroup receives a positive outcome (approval, hire, high score, etc.). Baseline for all downstream metrics.

### 4.2 Impact ratio

Ratio of each subgroup's selection rate to the most-selected subgroup's rate. **The four-fifths rule (0.80)** is a regulatory threshold in several contexts. Ratios below 0.8 indicate potential adverse impact.

### 4.3 Demographic parity gap

Absolute difference in selection rates between subgroups.

### 4.4 Equal opportunity gap

True-positive rate (recall) gap between subgroups. "Among qualified candidates, are all subgroups advanced at similar rates?"

### 4.5 False-positive / false-negative rate gaps

Critical in safety, fraud, and screening contexts where errors have different costs across groups.

### 4.6 Calibration

For probabilistic scores: does a score of X mean the same probability of outcome across subgroups?

### 4.7 Predictive parity

Among those predicted positive, is the true-positive rate similar across subgroups?

### 4.8 Score distribution

Histograms / violin plots of scores by subgroup. Reveals distributional differences beyond threshold-based metrics.

## 5. Testing method

### 5.1 Historical data

Run the model on recent historical data with known outcomes. Compute the metrics above. Identify disparities.

### 5.2 Test data

When historical data is limited or bias potential isn't yet realized, use synthetic or curated test data. Disclose clearly.

### 5.3 Paired testing

Pair inputs that differ only in protected attribute. Measure how often outputs differ materially. Useful for generative systems.

### 5.4 Challenger models

Compare outputs to a simpler baseline or alternative model. Sometimes a less-accurate simpler model is more fair; the tradeoff is documented.

### 5.5 Subgroup deep-dives

For subgroups with disparity:

- Examine feature importance
- Identify features correlated with protected class
- Test whether removing / modifying features reduces disparity
- Search for less-discriminatory alternatives

## 6. Less-discriminatory alternative (LDA) search

Required under fair-housing / fair-lending doctrines; good practice elsewhere. Process:

1. Document the business necessity of the model as-is
2. Enumerate alternatives: feature removal, threshold adjustment, alternative target variable, different model family
3. Evaluate each alternative on business utility and fairness
4. Select the alternative that meets business needs with least disparate impact
5. Document the analysis

## 7. Mitigation approaches

When disparity found:

### 7.1 Pre-processing

- Remove or transform biased features
- Balance training data
- Synthetic minority oversampling

### 7.2 In-processing

- Fairness constraints during training
- Adversarial debiasing
- Regularization penalties on disparity

### 7.3 Post-processing

- Threshold adjustment
- Group-specific calibration (note legal limits)
- Rejection option classification

### 7.4 Workflow

- Human review for flagged outputs
- Escalation triggers
- Opt-out paths
- Alternative selection process

Combinations are often needed.

## 8. Documentation

For each bias test, produce:

- **Scope and framing document**
- **Methodology**: data, metrics, tools, versions
- **Results**: all metrics for all subgroups, with visualizations
- **Interpretation**: what the results mean in context
- **Mitigations**: what was changed and why
- **Residual disparities**: what remains and why it's acceptable
- **Timeline**: when tested, when re-test is due

## 9. Reporting

- **Internal**: business owner, AI governance, legal, board reporting
- **Regulator-ready** pack: methodology + results + mitigations in a format suitable for examiners
- **Public** where required: NYC LL 144 audit summary, CAIA public statement content
- **Customer-facing** for buyers who ask

## 10. Cadence

- **Pre-deployment**: mandatory
- **Annual minimum** for production systems
- **Semi-annual** for high-stakes systems (credit, insurance, employment, health)
- **On material change**: any change to training data, features, or model architecture

## 11. Limitations to acknowledge

Every bias test has limits. Document:

- Protected-class labels may be missing or inferred
- Historical bias in labels/outcomes can confound results
- Metrics can conflict; no single number captures fairness
- Proxy features may reintroduce bias even after protected-class removal
- Testing cannot prove absence of bias; it can only detect bias that is measured

## 12. Roles

- **Business owner** — interprets results in context
- **Data scientist / ML engineer** — runs tests and reports
- **Independent reviewer** — for LL 144 and other regulated contexts, use an independent auditor
- **Legal** — reviews interpretation and mitigation decisions
- **Governance / Risk** — signs off on residual risk

## 13. Common mistakes

- Testing once and never again
- Reporting only marginal metrics (no intersections)
- No less-discriminatory-alternative analysis
- Vendor-paid "bias audits" used where independence is required
- Hiding adverse findings
- Claiming "unbiased" based on a single metric
- Not retraining or retiring a model with sustained adverse impact

---

## Disclaimer

This document is educational only. It is not legal advice. Bias testing is required or expected under various laws with specific methodology requirements (NYC LL 144, NAIC Model Bulletin, fair-lending regulatory guidance). Consult qualified counsel and assurance professionals.
