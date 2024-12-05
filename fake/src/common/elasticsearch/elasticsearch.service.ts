import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export default class ESearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  // Thêm tài liệu vào index
  async indexDocument(index: string, id: string, body: any): Promise<any> {
    try {
      const result = await this.elasticsearchService.index({
        index,
        id,
        body,
      });
      return result;
    } catch (error) {
      throw new Error(`Error indexing document: ${error.message}`);
    }
  }

  // Tìm kiếm tài liệu
  async search(index: string, query: any): Promise<any> {
    try {
      const result = await this.elasticsearchService.search({
        index,
        body: query,
      });
      return result.hits.hits;
    } catch (error) {
      throw new Error(`Error searching documents: ${error.message}`);
    }
  }
}
