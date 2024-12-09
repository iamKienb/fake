// src/cassandra/cassandra.module.ts

import { Module } from '@nestjs/common';
import { CassandraService } from 'src/infra/services/cassandra/cassandra.service';


@Module({
  providers: [CassandraService],
  exports: [CassandraService],
})
export class CassandraModule {}
