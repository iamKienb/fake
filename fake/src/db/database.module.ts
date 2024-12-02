// import { RedisModule, RedisModuleAsyncOptions } from "@nestjs-modules/ioredis";
// import { Logger, Module, OnModuleInit } from "@nestjs/common";
// import { ConfigModule, ConfigService } from "@nestjs/config";
// import { TypeOrmModule } from "@nestjs/typeorm";

// @Module({
//   imports: [
//     ConfigModule,
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         type: "postgres",
//         host: "localhost",
//         port: 5555,
//         username: "postgres",
//         password: "admin",
//         database: "shopify_ecommerce_platform_user_service_db",
//         entities: ["dist/**/*.entity{.ts,.js}"],
//         synchronize: true,
//       }),
//     }),

//     RedisModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         config: {
//           type: 'single',
//           host: configService.get<string>("redis.redis_host"),
//           port: configService.get<number>("redis.redis_port"),
//         },
//       } as RedisModuleAsyncOptions),
//     }),
//   ],
  
//   providers: [RedisService],
//   exports: [TypeOrmModule],
// })
// export class DatabaseModule implements OnModuleInit {
//   private readonly logger = new Logger(DatabaseModule.name);
//   async onModuleInit() {
//     this.logger.log("Database connected successfully");
//   }
// }
