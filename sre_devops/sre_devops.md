# SRE (Site Reliability Engineer) and DevOps

## DevOps

- DevOps is set of practices and a culture designed to break barriers between developers, Operators and other parts of the organization.
- Reduce Organization silos
  - with breaking the barriers between teams, we can increase collaboration and throughput.
- Accept failure as normal
  - computers are inherently unreliable and adding humans into the mix makes it even more imperfect.
- Implement gradual change
  - small changes are easier to review and if there is a failure then it reduces mean time to recover form the failure event by rolling back.
- Leverage tooling & automation
- Measure everything


## SRE

- SRE implements the DevOps philosophies
- Share ownership of the production with Developers, have same tooling in order to make sure everyone has the same view and same approach to working with production
- Failures don't happens more than once, accept failure as a concept of error budgets how much the system go out of spec.
- Canary the changes
- Automate the jobs based on the effort used to do it manually, higher the toil, higher the priority to automate.
- Measure the toil and reliability of the system


## Reliability Principles

1. Reliability is the most important feature
2. Users, not monitoring, decide reliability
3. Well Engineered
  - Software = 99.9%
    - Distributed components
  - Operations = 99.99%
    - Maintain reliability through both reactive and proactive engineering
    - Reactive : Well trained incident response
    - Proactive : Removing bottlenecks, automating processes, and isolating failure domains.
  - Business = 99.999%
    - Gradual roll out, so that failure can be detected quickly and rolled back without human involvement.

- Each additional 9 makes your system 10 times more reliable than before
- Roughly, it will also costs business 10 times more for each 9.