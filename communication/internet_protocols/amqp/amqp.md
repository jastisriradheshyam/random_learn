# AMQP (Advanced Messaging Queuing Protocol)

- Designed for asynchronous communication
- Standardizes the behavior of messaging publisher and consumer
- Platform independent
- Technology independent


## AMQP Message

- Message components
  - Header
    - key/value pair
    - Defined by AMQP Specification
  - Properties
    - key/value pair
    - Application specific information holder
  - Body
    - byte array (byte[])

- Message limit is 2GB
- Messages are sent in frames
  - Default frame size is 131 KB in Rabbit MQ
  - Larger value improves throughput
  - Smaller value improves latency