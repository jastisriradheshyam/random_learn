# CPU Frequency

## Get Max frequency on Linux
- `/sys/devices/system/cpu/cpu${CORE}/cpufreq/scaling_max_freq`
  - For Core 0: `/sys/devices/system/cpu/cpu0/cpufreq/scaling_max_freq`

## Set CPU Freq

- ```sudo cpufreq-set -f `cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_max_freq` ```

## References

[1]: [performance - CPU frequency is always at minimum, even if CPU usage is 100% - Ask Ubuntu](https://askubuntu.com/questions/802170/cpu-frequency-is-always-at-minimum-even-if-cpu-usage-is-100)