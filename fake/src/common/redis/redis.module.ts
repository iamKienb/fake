import { Inject, Logger, Module, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisService } from './redis.service';

@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: (): Redis => {
        return new Redis({
          host: 'localhost', // Tên container Redis trong docker-compose
          port: 6379,    // Cổng mặc định
          retryStrategy: (times) => Math.min(times * 50, 2000), // Retry strategy
        });
      },
    },
    RedisService, // Đăng ký RedisService trong providers
  ],
  exports: [RedisService], // Export RedisService để sử dụng ở các module khác
})
export class RedisModule implements OnModuleInit {
  private readonly logger = new Logger(RedisModule.name);

  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis) {}

  async onModuleInit() {
    try {
      const isConnected = await this.redisClient.ping(); // Kiểm tra kết nối Redis
      this.logger.log('Redis connected successfully: ' + isConnected);
    } catch (err) {
      this.logger.error(`Error connecting to Redis: ${err.message}`);
    }
  }
}
