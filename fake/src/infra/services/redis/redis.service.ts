import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis) {}

  async setValue(key: string, value: string, ttl?: number): Promise<string> {
    try {
      if (ttl) {
        return await this.redisClient.set(key, value, 'EX', ttl); // Lưu giá trị có TTL
      }
      return await this.redisClient.set(key, value); // Lưu giá trị không TTL
    } catch (error) {
      throw new Error(`Error setting value in Redis: ${error.message}`);
    }
  }

  async getValue(key: string): Promise<string | null> {
    try {
      return await this.redisClient.get(key); // Lấy giá trị từ Redis
    } catch (error) {
      throw new Error(`Error getting value from Redis: ${error.message}`);
    }
  }

  async deleteKey(key: string): Promise<number> {
    try {
      return await this.redisClient.del(key); // Xóa khóa trong Redis
    } catch (error) {
      throw new Error(`Error deleting key in Redis: ${error.message}`);
    }
  }
}
