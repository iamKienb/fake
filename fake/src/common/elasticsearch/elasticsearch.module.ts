import { Module } from "@nestjs/common";
import {ElasticsearchModule as NestElasticsearchModule} from '@nestjs/elasticsearch';
import ElasticsearchService from "./elasticsearch.service";
@Module({
    imports:[
        NestElasticsearchModule.register({
            node: 'http://elasticsearch:9200',
        }),
    ],
    providers: [ElasticsearchService]
})

export default class ElasticsearchModule O