import { Injectable } from "@nestjs/common";
import {ElasticsearchService as NestElasticsearchService} from "@nestjs/elasticsearch"


@Injectable()

export default class ElasticsearchService{
    constructor(private readonly elasticsearchService: NestElasticsearchService) {}

    async indexDocument(index: string, id: string, body: any): Promise<any>{
        return this.elasticsearchService.index({
            index,
            id,
            body
        })
    }

    async search(index: string, query: any):Promise<any>{
        return this.elasticsearchService.search({
            index,
            body: query
        })
    }
}