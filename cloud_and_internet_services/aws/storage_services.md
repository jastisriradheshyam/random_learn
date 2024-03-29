# AWS Storage Services

- EBS (Elastic Block store)
    - Block storage (like in HDD, SSD) are virtual hard drive
    - Snapshots (backups)
        - Incremental
    - upto 16 TiB
    - AZ level resource
    - Instance need to be in same AZ
    - Volumes do not automatically scale
- S3 (simple storage service)
    - Store data as objects (write whole files if there is even a bit change)
    - Store objects in buckets
    - unlimited storage
    - Upload a maximum object of 5 TB
    - Version objects
    - Storage classes
        - S3 standard
            - frequently accessed data
            - 99.999999999% Durability (per year)
            - stored in atleast three seperate facilities (Availability zones)
        - S3 static website hosting
        - S3 Standard - Infrequent Access (S3 Standard-IA)
            - lower storage price and higher retrieval price than S3 standard
        - S3 Glacier Flexible Retrieval
            - can create vaults
            - we can apply: WORM (write once read many) can be used for audit data which should be altered
            - retrieve objects within a 1 minutes to 12 hours
        - S3 one zone infreqent access
            - stores data in single AZ
            - lower stoage price than S3 Standard IA 
        - S3 glacier instant retrival
            - Retrieval storage class within milliseconds
        - S3 glacier deep archive
            - Lowest-cost object storage class
            - ideall for data that might be accessed once or twice in a year
            - retrieve objects within a 12 to 48 hours
            - All objects from this storage class are replicated and stored across at least three geographically dispersed Availability Zones.
        - S3 Intelligent-Tiering
            - moves data automatically between storage classes based on usage patterns
            - costs monthly monitoring and automation fee per object
        - Amazon S3 Outposts
    - S3 Lifecycle management
        - Can move data automatically between tiers
- EFS (Elastic File System)
    - Network file system
    - Multiple instances can access the data in EFS at the same time
    - regional resource
    - Automatically scales (storage size)

## Databases

- RDS (Relational Database Service)
    - Supported servers
        - MySQL (Arora)
        - PostgreSQL (Arora)
        - Oracle
        - Microsoft SQL server
    - Lift and shift migration to migrate data from on premis to cloud
    - Automated patching
    - Backups
    - Redundancy
    - Failover
    - Disaster recovery
    - Arora
        - MySQL, PostgreSQL
            - It is up to five times faster than standard MySQL databases and up to three times faster than standard PostgreSQL databases.
        - 1/10th the cost of commercial databases
        - data replication
            - It replicates six copies of your data across three Availability Zones
        - upto 15  read replicas
        - continous backup to S3
        - Point in time recovery
- Dynamo DB
    - key value pairs
        - items (keys)
        - attributes (values)
    - delivers single-digit millisecond performance at any scale.
    - serverless, no instances to manage
    - highly scalable (Petabyte potential)
    - Granular API access
- Redshift
    - Data werehousing solution
- DMS (Database Migration service)
    - The source database remains fully operational during the migration
    - Downtime is minimized for applications that rely on that database
    - The source and target databases don't have to be of the same type
    - few use cases
        - Development and test database migrations
            - copy data from prod to test or dev database
        - database consolidation
            - multiple databases to single database
        - Continuous database replication
- Document DB
    - MongoDB compatibility
- Neptune
    - Graph database
- Amazon Managed Blokchain
- QLDB (Quantum Ledger database)
    - Immutable system of records
- Database accelerators
    - caching requests (Amazon ElastiCache)
        - MemcacheD
        - Redis
    - Amazon Dynamo DB Accelerator (DAC)
        - in-memory cache for DynoamoDB
        - single-digit milliseconds to microseconds
