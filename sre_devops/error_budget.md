# Error Budget

- How much down-time is permissible over a given time-span? This unreliability is your error budget.
- you need executive buy-in for your error budgets
  - When teams have executive obligations to meet agreed-upon SLOs, that means there’s backing to make sure that both the dev and SRE teams can do their jobs while staying within SLO.
- Developers can self-regulate and manage risk better with error budgets.
- Error budgets help to balance development velocity and reliability.

## Examples

- 28-day / 4 week error budget
  - 99.9% = 40 minutes downtime
    - Example: Global outage
    - Monitoring system can detect and humans can investigate, find and fix the root cause.
  - 99.99% = 4 minutes downtime
    - A certain fraction of the system is exposed to a change at once.
  - 99.999% = 24 seconds downtime
    - Restricting the rate of change such that less than 1% of your system or its users can be affected at any given time, so that humans can be in loop.


## Tolerable errors accommodate

- Rolling out new software versions
- Releasing new features
- Planned downtime
- Inevitable hardware failures

## Authority

- The operations team must have the clout to effect change in the dev team's practices.
  - They must have and use authority to halt feature launces when there's no remaining error budget.

## Techniques to maintain reliability under error budget

- Dynamic release cadence
  - Based on remaining error budget
- "Rainy Day" fund
  - Covers unexpected events

- Error budget based alerts
  - Exhaustion rate drives alerting

- "Silver bullets"
  - For "critical" new features
  - Doing a release even error budget blown over and but with approval of senior stack-holder
