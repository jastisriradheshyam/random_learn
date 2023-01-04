# Software Observability introduction

- 

- Observability has to be engineered specific to each programming language or framework.
  - This specificity arises due to the fact that internals have to invoked during instrumentation of the given system.

- For good Observability application code must emit signals such as traces, metrics, and logs. [2]
  - The emitted data as traces, metrics and logs are known as Telemetry data.

-

## Tools

- Dtrace
  - processes data in situ
- Google’s Sawzall [1]
  - post-processes data

## Keywords

- instrumentation


## References

[1]: [Hidden in Plain Sight: Improvements in the observability of software can help you diagnose your most crippling performance problems.](https://dl.acm.org/doi/pdf/10.1145/1117389.1117401)
[2]: [Observability Primer | OpenTelemetry](https://opentelemetry.io/docs/concepts/observability-primer/)