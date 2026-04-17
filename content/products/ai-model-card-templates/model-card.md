# AI Model Card — Template

**Model name:** ______________________________
**Version:** ______________________________
**Release date:** ______________________________
**Owner:** ______________________________ (name, email)
**Status:** ☐ Development  ☐ Staging  ☐ Production  ☐ Deprecated  ☐ Retired
**Risk tier:** ☐ 1  ☐ 2  ☐ 3

> **What this is.** A Model Card is a short, structured document describing an AI model: what it does, how it was built, its performance, limitations, and intended uses. Model Cards make it easier for users, deployers, auditors, and regulators to make informed decisions. Based on the Mitchell et al. (2019) "Model Cards for Model Reporting" framework, extended with AI Act and sector requirements.

---

## 1. Model details

- **Model name and version**:
- **Model type** (classifier, regression, sequence-to-sequence, diffusion, transformer, etc.):
- **Developed by**:
- **License** (internal / commercial / open source):
- **Contact**:
- **Related research / documentation**:

## 2. Intended use

- **Primary intended uses**:
- **Primary intended users** (developers / end users / specific roles):
- **Out-of-scope uses** (explicitly):
- **Known misuses to guard against**:

## 3. Factors

Factors that affect model performance, separated into foreseeable salient ones and any instrumentation-specific ones.

- **Relevant factors**:
- **Evaluation factors** (subgroups analyzed):
- **Limitations of factor analysis**:

## 4. Metrics

- **Performance measures** (e.g., accuracy, F1, AUC, BLEU, perplexity, calibration, fairness ratios):
- **Decision thresholds**:
- **Variation approaches** (confidence intervals, bootstrap, etc.):

## 5. Evaluation data

- **Datasets** (names, sizes, sources):
- **Motivation** for those datasets:
- **Preprocessing**:
- **Label quality**:

## 6. Training data

*Reveal what you can; consider legal, competitive, and privacy constraints.*

- **Sources**:
- **Size and composition**:
- **Collection method**:
- **Cleaning, labeling, annotation**:
- **Known biases in training data**:
- **Consent / license basis**:

## 7. Quantitative analyses

- **Unitary results** (by each individual factor):
- **Intersectional results** (combinations):
- **Fairness metrics** (selection rate, impact ratio, equal opportunity, calibration):
- **Robustness** (performance under distribution shift, adversarial inputs):
- **Safety** (unsafe-output rate, by category):

Include plots and tables. Reference companion Bias Testing Report for detail.

## 8. Ethical considerations

- **Sensitive populations**:
- **Protected classes directly or via proxy in inputs / outputs**:
- **Dual-use risks**:
- **Environmental impact** (compute for training, inference):
- **Mitigations applied**:

## 9. Caveats and recommendations

- **Known limitations**:
- **Recommendations for safe and effective use**:
- **Conditions for future revisions**:
- **How to report issues or bias**:

## 10. Governance

- **Approved use cases at [COMPANY NAME]**:
- **Approval authority**:
- **Review committee and date**:
- **Next review date**:
- **Retirement criteria**:

## 11. Security

- **Known attack vectors** (prompt injection, adversarial, data poisoning, model extraction):
- **Defenses in place**:
- **Incident response contact**:

## 12. Regulatory posture

- **EU AI Act classification**: prohibited / high-risk (Annex I or III) / limited-risk (Art 50) / minimal-risk
- **Colorado AI Act — consequential-decision category** (yes/no):
- **Sector rules** (HIPAA / GLBA / FCRA / FERPA / etc.):
- **Bias audit** (if applicable, date and auditor):

## 13. Change log

| Version | Date | Changes | Author |
| --- | --- | --- | --- |
|  |  |  |  |

---

## Disclaimer

This document is educational only. It is not legal advice.
