# Rabbit MQ

- Open source message broker software (also called queuing software)
- Implemented Advanced Message Queuing Protocol (AMQP)
- Supported Plugins
  - Streaming Text Oriented Messaging Protocol (STOMP)
  - Message Queuing Telemetry Transport (MQTT)
  - etc.
- Built on Erlang

## Core Concepts

- Producer
  - Producer never send messages directly to the queue
- Consumer
- Queue
- Exchange
  - Binding connects an exchange with a queue using binding key
  - Exchange compares routing key with binding key (one to one or using pattern)