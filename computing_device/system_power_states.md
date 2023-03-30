## System Power States

- Full On:
  - `S0` state (as per Microsoft)
- Suspend-To-RAM (STR)
- Suspend-To-Disk (STD)
- Mechanical OFF: no power either from battery or direct power supply
  - `S5` state (shut down)

## Hibernate (generally Suspend-To-Disk)

State number as per Microsoft [3]: `S4`

## Sleep (generally Suspend-To-RAM)

There are four sleeping states as per microsoft [3]

- `Modern Standby`
  - while being in `S0` state (power on), the system can go to sleep with some background activity being present.
  - Here networking might take place, due to processor support.
- `S1`
  - Processor clock is off and bus clocks are stopped.
- `S2`
  - ? (why it exists - fill in when answer is found)
- `S3`
  - Actual sleep mode
  - Processor is off and some chips on the motherboard also might be off.

### MS Windows

- To check all the available sleep states: `powercfg /a`

### Problem in laptops with Modern Standby [1]
- For laptops with modern windows (window 8.1 or higher), there is a chance that you system might be running on battery even power is not connected.
- But as one would expect that power that system will go to sleep without any background activity when on battery.
- This happens when laptop is connected and sent to sleep and unplugged, this would let the background tasks to be active.
- But if we disconnect the laptop from power and then sent to sleep, this would stop all the background tasks to be inactive as one would expect from sleep mode.
- So, If any power connection and disconnection happens with the laptop does not matter when laptop has already been in sleep mode, it only matters before the system goes to sleep.
- This happens on windows due to `Modern Standby` mode.


## References:

[1]: [Microsoft is Forcing me to Buy MacBooks - Windows Modern Standby - YouTube](https://www.youtube.com/watch?v=OHKKcd3sx2c)
[2]: [Advanced Configuration and Power Interface (ACPI) States Supported - 010 - ID:655258 | 12th Generation Intel® Core™ Processors](https://edc.intel.com/content/www/us/en/design/ipla/software-development-platforms/client/platforms/alder-lake-desktop/12th-generation-intel-core-processors-datasheet-volume-1-of-2/010/advanced-configuration-and-power-interface-acpi-states-supported/)
[3]: [System Sleeping States - Windows drivers | Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/system-sleeping-states)
[4]: [Modern Standby vs S3 | Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/modern-standby-vs-s3)