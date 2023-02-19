# SLO : Service Level Objectives

- SLO : Service Level Objectives -> Targeting specific level of reliability
- Helps in answering the question:
  - If reliability is a feature, when do you prioritize it versus other features ?
  - How fast is "too fast" ?
    - Basically how fast are we developing and rolling out new features, so that we are or want to attain certain level of reliability.
  - What is the right level of reliability for the system you support ? - Operational team
    - 
- With SLO we acknowledge the specific quantity of unreliability and factor in during development and maintenance which help adding reliability related effort to remaining budget.
- SLO can become a common language across organizations teams or verticals to converse about reliability of the product.
  - Can turn arguments into data-driven decisions.
- SLO can drive Ops response and long-term prioritization.

- Edge cases
  - Like black friday for E-Commerce applications where there is 4 times the traffic than usual, then we might have to increase SLO from 99.9% -> 99.99%'

- SLO should be reviewed in certain intervals so that the SLO be set is relevant to current state of the system.

# SLA : Service Level Agreements

- Agreements with customers about the reliability of your service
- The thresholds are your SLO's.
  - The SLO's should be stricter than SLA so that the customer will have higher reliability then agreed upon terms and better service for the customer.


# SLI : Service Level Indicator

- Quantitative measurements or metric of a user experience.