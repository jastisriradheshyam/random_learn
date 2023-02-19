# Improvements to reliability

## TTD : Time to detect
- Time from a user is impacted and then someone such as your SRE on-call is informed to fix the issue. 

## TTR : Time to resolution / Time To Repair
- The time it takes for someone being informed of the issue to actually fixing it and recovering the service.

## TTF : Time to failure / TBF : Time between failures

- How frequently you expect this particular failure to occur


## ε is expected impact by a particular error on error budget

ε ~ ((TTD+TTR)*impact%) / TTF

## In summary

- Reducing detection time (time to detect / TTD)
  - Automating Monitoring and paging the person directly instead of a person looking the graphs for abnormality
- Reducing repair time (time to resolution / TTR)
  - Developing a playbook
  - Automating and making easier the processes that have to be executed in the time of outage or error for both routing to different path and investigation of the issue.
- Reducing impact % (users / functionality)
  - Engineering the service to run in a degraded mode during a failure.
- Reducing frequency (increasing time to failure / TTF)
  - Running service in multiple failure domains and automatically directing traffic away from a zone or region that has failed.


# Operational improvements

- Periodically report the worst customer or worst region or another category to find cases where error budget is not evenly distributed and apply extra effort in these services or particulars to improve reliability.

- Provide input on the feasibility of achieving targets

- Standardizing infrastructure
- Build safe release and rollback
- Author postmortems
- Use phased roll-outs