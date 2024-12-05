import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";

import { UsersModule } from "./users/users.module";
import { ElasticsearchModule } from "./common/elasticsearch/elasticsearch.module";
import { RedisModule } from "./common/redis/redis.module";
import { CassandraModule } from "./common/cassandra/cassandra.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    ElasticsearchModule,
    RedisModule,
    CassandraModule

  ],
})
export class AppModule {}
