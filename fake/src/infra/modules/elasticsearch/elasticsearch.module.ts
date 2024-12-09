import { ElasticsearchService, ElasticsearchModule as NestElasticsearchModule  } from '@nestjs/elasticsearch';

import { Logger, Module, OnModuleInit } from '@nestjs/common';
import ESearchService from 'src/infra/services/elasticsearch/elasticsearch.service';


@Module({
  imports: [
    NestElasticsearchModule.register({
      node: 'http://localhost:9200',
      auth: {
        username: 'elastic',        
        password: 'elastic', 
      },
    }),
  ],
  providers: [ESearchService],
  exports: [ESearchService]
})
export class ElasticsearchModule implements OnModuleInit {
  private readonly logger = new Logger(ElasticsearchModule.name);

  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async onModuleInit() {
    try {
      const info = await this.elasticsearchService.ping(); // Kiểm tra kết nối
      this.logger.log(`Elasticsearch connected successfully: ${JSON.stringify(info)}`);
    } catch (error) {
      this.logger.error(`Error connecting to Elasticsearch: ${error.message}`);
    }
  }
}
