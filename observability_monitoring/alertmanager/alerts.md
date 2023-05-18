# Alerts

# Predict linear

- `predict_linear` function will predict data based on previous trends [2] [3]
  - `predict_linear(node_filesystem_free_bytes{job="node"}[1h], 4 * 3600) < 0`
    - here based on past 1 hour trend, we can check the value after 4 hours and 
      if value is less then 0 then we can say free space will be utilized within 4 hours.

## References:

[1]: [You should know about... these useful Prometheus alerting rules | Grafana Labs](https://grafana.com/blog/2021/04/01/you-should-know-about...-these-useful-prometheus-alerting-rules/)

[2]: [How to configure alerts in Prometheus for diskspace - Stack Overflow](https://stackoverflow.com/questions/52843351/how-to-configure-alerts-in-prometheus-for-diskspace)

[3]: [Reduce Noise From Disk Space Alerts – Robust Perception | Prometheus Monitoring Experts](https://www.robustperception.io/reduce-noise-from-disk-space-alerts/)