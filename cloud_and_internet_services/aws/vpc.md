# VPC

-  The resources are placed inside the Subnets
- Internet Gateway (IGW)
    - To allow public traffic inside the VPC
    - public subnets have access to Internet gateway, but private subnets don't
- Virtual Private Gateway
    - Allows traffic from approved networks
    - VPN is used to connect to VPG
    - Also can be done by AWS Direct Connect

## Subnets

- Network Packets are checked by "Network acces control list" (Network ACL) on entering the subnets
    - Network ACL checks both entering and leaving of packets (basically ingress and egress traffic is checked)
- Security Groups are part of Instances
    - The AWS account's subnet allows all the inbound and outbound traffic, if you create a new subnet then the network ACL denies all inbound and outbound traffic by default for that subnet
    - By default security group does not allow any traffic inside the instance.
    - By default all traffic toward outside (egress) is allowed
- **Network ACL is stateless and Security Group is stateful**
    - If a connection is created between two instances in two different subnets then Network ACL will check each packet (stateless) inbound and outbound but security group remembers (stateful) the connection context and don't go through the list each time only the first time one way. 
