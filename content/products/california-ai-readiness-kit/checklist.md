# California AI — Readiness Checklist

**Company:** [COMPANY NAME]
**Completed by:** ______________________________
**Date:** ______________________________

> Mark each item Done / In progress / Not applicable with evidence. California AI law is a patchwork — start by identifying which of the laws below apply to you.

---

## Phase 1 — Scope

- [ ] **1.1** AI System Inventory updated with California exposure flag
- [ ] **1.2** For each system, identified which California AI laws potentially apply:
  - [ ] SB 942 (AI-generated content disclosure) — **in scope if**: gen AI provider with >1M monthly CA users producing image/video/audio
  - [ ] AB 2013 (training data disclosure) — **in scope if**: you develop a gen AI system/service made publicly available in CA after 1/1/2022
  - [ ] SB 53 / TFAIA (frontier) — **in scope if**: developing frontier AI above the compute/performance thresholds
  - [ ] SB 1001 (bot disclosure) — **in scope if**: automated commercial/political account communicating with Californians
  - [ ] CCPA/CPRA ADMT — **in scope if**: significant decisions or profiling of Californians via AI
  - [ ] AB 2655 (election deepfakes) — **in scope if**: platform hosting UGC or generator producing election media touching CA
  - [ ] AB 3030 / SB 1120 (healthcare AI) — **in scope if**: providing or deploying AI in CA healthcare
  - [ ] AB 2905 (AI voice robocalls) — **in scope if**: using AI-synthesized voices in automated calls to CA numbers

## Phase 2 — SB 942 — AI Transparency Act (providers)

- [ ] **2.1** Confirmed monthly visitor/user threshold (above or below 1M CA)
- [ ] **2.2** Manifest disclosure available on-demand for AI-generated image/video/audio outputs
- [ ] **2.3** Latent disclosure (machine-readable provenance) embedded where technically feasible
- [ ] **2.4** Public-facing **AI detection tool** available free of charge
- [ ] **2.5** Third-party contracts require preservation of latent disclosure
- [ ] **2.6** Documentation of the provenance methodology (hash, signature scheme, metadata standard used)
- [ ] **2.7** Periodic testing that manifest/latent marks round-trip through common platforms

## Phase 3 — AB 2013 — Training Data Transparency

- [ ] **3.1** Public documentation posted on the developer's website listing training data
- [ ] **3.2** Documentation covers: sources, data ownership, purpose alignment, data points count, personal info presence, aggregate consumer info, copyrighted/trademarked/patented material, purchased/licensed data, time period of collection, modifications/cleaning, synthetic data
- [ ] **3.3** For fine-tuners and downstream developers: documentation inherited from upstream plus additions
- [ ] **3.4** Retention plan for training data records
- [ ] **3.5** Update process when training data changes materially

## Phase 4 — SB 53 / TFAIA (if frontier developer)

- [ ] **4.1** Safety and security framework drafted and published
- [ ] **4.2** Framework covers identification of catastrophic risks and mitigation
- [ ] **4.3** Critical safety incident reporting to California Office of Emergency Services wired up
- [ ] **4.4** Whistleblower policy and non-retaliation protection in place
- [ ] **4.5** Framework reviewed and updated on the cadence called for by statute

## Phase 5 — SB 1001 (Bot Disclosure)

- [ ] **5.1** Chatbots / automated accounts in commercial contexts targeting Californians disclose "bot" status clearly and conspicuously
- [ ] **5.2** Disclosure reviewed against "reasonably likely to be deceived" standard
- [ ] **5.3** Political / election automated communication with Californians includes bot disclosure
- [ ] **5.4** Disclosure shown at the start of interaction

## Phase 6 — CCPA / CPRA — Automated Decisionmaking

- [ ] **6.1** Pre-use notice of ADMT presence and purpose embedded in consumer flows
- [ ] **6.2** Opt-out mechanism implemented where required
- [ ] **6.3** Access request workflow can provide meaningful information about the logic, use, and likely outcomes of the ADMT
- [ ] **6.4** Risk assessments completed for high-risk processing (sensitive inferences, profiling for significant decisions, etc.)
- [ ] **6.5** Training of CCPA request handlers covers ADMT-specific responses
- [ ] **6.6** Privacy policy updated to address ADMT
- [ ] **6.7** Vendor contracts (service providers/contractors) reflect ADMT obligations

## Phase 7 — AB 2655 — Election Deepfakes

- [ ] **7.1** Platform policy prohibits materially deceptive audio/visual media about candidates during statutory windows
- [ ] **7.2** Detection + reporting mechanism for election-adjacent deepfakes
- [ ] **7.3** Takedown process in place with SLAs
- [ ] **7.4** Generative tools include election-context guardrails (refuse to generate certain candidate impersonations, especially during windows)
- [ ] **7.5** Records of takedown actions retained

## Phase 8 — Sector (if applicable)

**Healthcare (AB 3030 / SB 1120):**

- [ ] **8.1** Disclosure that AI-generated content / recommendations were made or assisted by AI in clinical communications
- [ ] **8.2** Clinical utilization review using AI complies with SB 1120 human-clinician oversight requirements
- [ ] **8.3** Governance documentation tied to professional and HIPAA obligations

**AI voice robocalls (AB 2905):**

- [ ] **8.4** Automated calls to California numbers using AI-generated voices include required disclosure

## Phase 9 — Governance and contracts

- [ ] **9.1** California exposure reflected in AI Governance Framework
- [ ] **9.2** Marketing claims about AI capabilities reviewed for FTC and California consumer protection compliance
- [ ] **9.3** Customer contracts disclose AI features and limitations
- [ ] **9.4** Vendor DPAs reviewed for California-specific terms

## Phase 10 — Records and audit readiness

- [ ] **10.1** Training data documentation retained with version history
- [ ] **10.2** Provenance / detection tool documentation retained
- [ ] **10.3** Bot disclosure evidence (screenshots, copy versions) retained
- [ ] **10.4** ADMT risk assessments retained per CPPA retention rules

---

## Summary dashboard

| Phase | Items | Done | In progress | N/A |
| --- | ---: | ---: | ---: | ---: |
| 1. Scope | 9 |  |  |  |
| 2. SB 942 | 7 |  |  |  |
| 3. AB 2013 | 5 |  |  |  |
| 4. SB 53 / TFAIA | 5 |  |  |  |
| 5. SB 1001 | 4 |  |  |  |
| 6. CCPA / CPRA ADMT | 7 |  |  |  |
| 7. AB 2655 | 5 |  |  |  |
| 8. Sector | 4 |  |  |  |
| 9. Governance | 4 |  |  |  |
| 10. Records | 4 |  |  |  |

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. California AI law is a rapidly evolving patchwork of statutes and regulations; consult qualified California counsel before relying on this document.
