# Relabel Config

## Add a label

- It will add label `node_name` to the metrics with value `radhe`

```yaml
relabel_configs:
    - action: replace
      target_label: node_name
      replacement: 'radhe'
```


## References

[1] : [Configuration | Prometheus](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config)