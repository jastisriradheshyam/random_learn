# Pub/Sub

- Pub sub don't retain the data the data, if not subscribed to channel the data will be dropped.
- PSUBSCRIBE -> Pattern Subscribe
- SSUBSCRIBE -> Shared Subscribe, used in Redis cluster mode

## References:

[1]: [node-redis/pub-sub.md at master · redis/node-redis](https://github.com/redis/node-redis/blob/master/docs/pub-sub.md)
[2]: [database - What are the main differences between Redis Pub/Sub and Redis Stream? - Stack Overflow](https://stackoverflow.com/questions/59540563/what-are-the-main-differences-between-redis-pub-sub-and-redis-stream)