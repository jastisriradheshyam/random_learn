## System Power States

- Full On:
  - `S0` state
- Suspend-To-RAM (STR)
- Suspend-To-Disk (STD)
- Mechanical OFF: no power either from battery or direct power supply
  - `S5` state (shut down)

## Hibernate (generally Suspend-To-Disk)

State number [3]: `S4`

## Sleep (generally Suspend-To-RAM)

There are four sleeping states [3]

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

## Different types of power management states

### Sleep (S) State [9]

- Also know as "System states"
- S1-S4 are types of sleeping states within the global system state, G1.
- List of `S States`

  - `S0`
    - Active and can be in low power state (C states) and will be in G0 state
  - `S1`
    - Sleeping state
  - `S2`
    - Sleeping state
  - `S3`
    - Sleeping state
  - `S4`
    - Sleeping state
  - `S5`
    - Soft Off State

### Global (G) State

- Defined in ACPI (Advanced Configuration and Power Interface) Specification and maintained by "Unified Extensible Firmware Interface Forum" [8]
- G states refer to the various system power states that a computer or device can enter in order to conserve power.
- Also known as `Global System States`
- Manufacturers can define additional `G states` beyond the standard `G states`

- List of `G States`
  - `G0`
    - all components are fully powered on and functional
  - `G1`
    - low-power state (sleep or standby)
  - `G2`
    - deeper sleep state
  - `G3`
    - deepest sleep state / powered off

### Processor Package (C) State (May be only related to Intel / AMD processor - X86 / X86_64) [5]

- Only applicable when in `G0` and `S0`, basically when system is in running state but parts of processor are powered down
- `C states` are used to go to low power state while system being active to save power when less processing capabilities are required
- The Higher the C state number the longer (exit latency duration) it takes to achieve C0
- Evert core in processor have individual `C states`.
- Also referred as "C-modes"
- List of `C States`
  - `C0`
    - Active state
  - `C1`
  - `C1E`
  - `C2`
    - software cannot request to enter these states explicitly. (intermediate states between C0 and C6)
  - `C2E`
  - `C3`
    - software cannot request to enter these states explicitly. (intermediate states between C0 and C6)
  - `C4`
  - `C4E/C5`
  - `C6`
    - Deep Power Down
    - Reduces the CPU internal voltage to any value, including 0 Volts
  - `C8`
  - `C10`

### P-states (performance states) (May be only related to Intel / AMD processor - X86 / X86_64) [5],[7]

- `P-states` are applicable when in `C0` state

- There can be n number of P state start from `P0` state
- List of `P-States`
  - `P0`
    - `P0` is the highest frequency (with the highest voltage).

## References:

[1]: [Microsoft is Forcing me to Buy MacBooks - Windows Modern Standby - YouTube](https://www.youtube.com/watch?v=OHKKcd3sx2c)

[2]: [Advanced Configuration and Power Interface (ACPI) States Supported - 010 - ID:655258 | 12th Generation Intel® Core™ Processors](https://edc.intel.com/content/www/us/en/design/ipla/software-development-platforms/client/platforms/alder-lake-desktop/12th-generation-intel-core-processors-datasheet-volume-1-of-2/010/advanced-configuration-and-power-interface-acpi-states-supported/)

[3]: [System Sleeping States - Windows drivers | Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/system-sleeping-states)

[4]: [Modern Standby vs S3 | Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/modern-standby-vs-s3)

[5]: [C-State](https://www.intel.com/content/www/us/en/docs/vtune-profiler/user-guide/2023-0/c-state.html)

[6]: [What is the C-State? | Dell India](https://www.dell.com/support/kbdoc/en-in/000060621/what-is-the-c-state)

[7]: [Processor P-states and C-states - Thomas-Krenn-Wiki](https://www.thomas-krenn.com/en/wiki/Processor_P-states_and_C-states)

[8]: [Specifications | Unified Extensible Firmware Interface Forum](https://uefi.org/specifications)

[9]: [Advanced Configuration and Power Interface (ACPI) Specification, Version 6.4 - ACPI_Spec_6_4_Jan22.pdf](https://uefi.org/sites/default/files/resources/ACPI_Spec_6_4_Jan22.pdf)