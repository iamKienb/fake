import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { CassandraModule } from "./infra/modules/cassandra/cassandra.module";

import { ElasticsearchModule } from "./infra/modules/elasticsearch/elasticsearch.module";
import { RedisModule } from "./infra/modules/redis/redis.module";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ElasticsearchModule,
    RedisModule,
    CassandraModule

  ],
})
export class AppModule {}
