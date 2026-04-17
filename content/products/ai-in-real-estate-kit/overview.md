# AI in Real Estate & Housing — Compliance Kit Overview

**Regulatory landscape:**

- **Fair Housing Act (FHA)** — prohibits discrimination in the sale, rental, and financing of housing based on race, color, national origin, religion, sex, familial status, disability
- **HUD** — enforcement, including the disparate impact rule
- **Equal Credit Opportunity Act (ECOA)** for mortgage lending
- **HMDA** — Home Mortgage Disclosure Act
- **State fair housing laws** — often broader classes than federal
- **CFPB** — where mortgage and rental credit products are involved
- **ADA** — accessibility (including AI-powered platforms)
- **State landlord-tenant laws** — application processes, deposits, screening
- **FCRA** — tenant screening, credit-based decisions
- **Colorado AI Act** — housing is a consequential-decision category
- **EU AI Act** — essential services (housing access) within Annex III scope for some uses

> **How to use this kit.** For real estate brokerages, property management companies, tenant screening services, mortgage lenders, iBuyers, proptech vendors, and landlords. Pair with the AI Governance Framework and the Financial Services Kit (for mortgage).

---

## 1. Why real estate AI is different

Housing is one of the most heavily protected categories in U.S. law because of a long history of discrimination. AI that affects access to housing draws:

- Disparate-impact scrutiny from HUD and state AGs
- Private class-action exposure under FHA and state fair housing laws
- Press attention when systems affect vulnerable tenants
- Enforcement attention from CFPB and FTC on tenant screening and mortgage AI

## 2. AI use cases in housing

### Rental screening

- AI scoring of tenant applications
- Automated denials and conditional approvals
- Deposit and rent-setting recommendations

### Mortgage / home finance

- Automated underwriting
- AVMs (Automated Valuation Models) for pricing
- Default risk modeling
- Marketing targeting for mortgage products

### Property search and recommendation

- "You might also like" suggestions
- Neighborhood suggestions / exclusions

### Valuation and appraisal

- AVMs for transaction pricing
- iBuyer instant offers

### Property management

- Pricing algorithms (revenue management systems)
- Maintenance scheduling
- AI-enabled smart-home / access systems

### Leasing communications

- AI leasing agents (chatbots, voice)
- Appointment scheduling

## 3. Fair Housing Act essentials

- Prohibits discrimination on race, color, national origin, religion, sex (including sexual orientation and gender identity per recent interpretations), disability, and familial status
- State and local laws often add: source of income, age (beyond familial status), marital status, military status, criminal history
- **Disparate impact** doctrine applies — facially neutral practices with a disproportionate effect can violate FHA
- Advertising rules prohibit discriminatory preferences in listings

AI implications:

- Tenant screening models using proxies (ZIP, surname, school) can create disparate impact
- Ad targeting that suppresses certain audiences can violate FHA advertising rules (Meta settlement with HUD is a reference case)
- Neighborhood recommendation systems can steer (a long-standing FHA concern)

## 4. HUD guidance on AI

HUD has issued guidance on AI in housing, including:

- Disparate impact rule application to AI
- Tenant screening — specificity of adverse-action reasons; limits on criminal-history-based denials
- Advertising — platforms can be liable for discriminatory ad delivery

## 5. Tenant screening specifics

- FCRA applies when a consumer report is used (which is most cases)
- Adverse-action notice with specific reasons
- Pre-adverse-action notice when an adverse decision is likely based on a consumer report
- Access to information for dispute
- Tenant screening scores that combine multiple factors must be explainable

Many states have specific tenant screening laws (e.g., California, New York, Washington, Oregon) restricting the use of certain factors.

## 6. Rent pricing and revenue management

Revenue management platforms using AI (and data-sharing consortia) have attracted DOJ antitrust scrutiny. Pricing algorithms that coordinate rents across landlords may raise Sherman Act issues.

## 7. Appraisal and AVM bias

- Documented bias in home valuations by race/neighborhood
- CFPB/HUD interagency quality-control rule for AVMs addresses fairness
- AVM developers and users should implement bias testing and remediation

## 8. Mortgage AI

Mortgage is covered separately in the AI in Financial Services Kit. Key intersections for real estate:

- ECOA fair-lending analysis
- Adverse-action notices
- HMDA reporting implications
- Alternative-data underwriting fair-lending testing

## 9. Ad targeting and FHA

- Protected-class targeting or suppression in housing ads is prohibited
- "Lookalike" audiences can unlawfully exclude protected classes
- Platforms have been held liable for discriminatory ad delivery
- Platform-provided fair-housing tools (e.g., special category for housing ads) should be used

## 10. Colorado AI Act — housing

Colorado AI Act treats housing as a consequential-decision category. Deployers must:

- Conduct impact assessments
- Provide consumer notice
- Provide adverse-action explanations
- Offer appeal to human review
- Report algorithmic discrimination to the AG within 90 days

## 11. Practical readiness path

1. **Inventory** AI systems across leasing, screening, valuation, pricing, mortgage, advertising
2. **Fair housing analysis** — disparate impact testing, proxy review, less-discriminatory-alternative search
3. **Adverse-action notice** workflows for tenant screening and mortgage
4. **Ad targeting review** — housing ads use fair-housing tools provided by platforms
5. **AVM quality control** per interagency rule
6. **Rent pricing practices** reviewed for antitrust risk
7. **Accessibility** — ADA compliance for apps, portals, smart-home features
8. **State-specific compliance** for tenant screening laws
9. **Colorado AI Act obligations** for deployers in scope
10. **Training** for leasing agents, brokers, adjusters, screeners on AI policy

## 12. Common traps

- **Ad platforms without fair-housing mode** — massive exposure
- **Criminal-history-based screening** without case-by-case review (HUD scrutinized)
- **Source-of-income discrimination** in state/local jurisdictions
- **AVMs without bias testing**
- **Revenue management participating in an industry data pool** without antitrust analysis
- **Tenant denials without specific reasons**
- **Accessibility gaps** in AI leasing agents

## 13. Kit contents

- `overview.md` — this document
- `checklist.md` — operational readiness checklist

Pair with AI in Financial Services Kit (for mortgage), AI Impact Assessment, and Customer AI Disclosure Templates (adverse action).

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Housing AI compliance intersects FHA, ECOA, CFPB rules, state fair-housing and tenant-screening laws, and antitrust law. Consult qualified counsel.
