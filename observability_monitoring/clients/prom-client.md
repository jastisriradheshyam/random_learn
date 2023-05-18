# Prom Client Library

- If managing metrics in a nodejs application like Gauge and previous labels set has to be cleared before setting new metric values with new labels,
  then metric should be reset with primary labels as parameters to the function (`.reset({...})`)

## References:

[1]: [siimon/prom-client: Prometheus client for node.js](https://github.com/siimon/prom-client)