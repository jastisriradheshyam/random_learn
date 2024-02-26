# AWS Security

- AWS Shared Responsibility Model
    - AWS provides security to underlying infra -> physical, hypervisor, etc.
    - User of the AWS has to be manage security for their own services on top of AWS infra like OS, applications, etc.

## User permissions and Access

- Root user
- MFA (Multi factor authentication)

### AWS IAM (Identity and Access Management)

- IAM users don't have any permissions by default (Principle of least privilege)

#### Permission statement
```json
"Version": "2012-10-17",
"Statement": {
  "Effect": "Allow",
  "Acton": "s3:ListBucket",
  "Resource": "arn:aws:s3:::bucket_name"
}
```
- Effect
    - "Allow" or "Deny"
- Action
    - Any AWS api call
- Resource
    - which AWS resource the API call is for

#### IAM Groups
- Grouping of users
- Attach policies to group then policy will apply to all the users in the group

### IAM Policies

### IAM Roles
- Role of the user
- When a role is attached to the user then all the previous permissions are not applied
- Roles are temporary in nature bounded by time period
- Associated permissions that allow or deny permission
- No username or password

## Organizations

-   