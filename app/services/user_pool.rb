class UserPool
  def initialize redis: Redis.new
    @redis = redis
  end

  def add pool:, id:
    @redis.sadd pool, id
  end

  def remove pool:, id:
    @redis.srem pool, id
  end

  def all pool:
    @redis.smembers pool
  end
end
