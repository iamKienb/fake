import { Injectable, OnModuleInit } from "@nestjs/common";
import {Client, mapping, auth} from "cassandra-driver";
@Injectable()
export class CassandraService implements OnModuleInit{
    private client: Client;
   
    async onModuleInit(){
        this.client = new Client({
            contactPoints: ['127.0.0.1'],
            localDataCenter: 'datacenter1',
            authProvider: new auth.PlainTextAuthProvider('cassandra', 'cassandra')
        });
        try{
            await this.client.connect();
            await this.createKeySpaceIfNotExists();
            console.log('CONNECTED TO CASSANDRA SUCCESSFUL'); 
        }
        catch(error){
            console.error('ERROR CONNECTING TO CASSANDRA', error);
        }
        
    }
    async createKeySpaceIfNotExists(){
        const keySpaceQuery = `CREATE KEYSPACE IF NOT EXISTS shopify_ecommerce_platform_user_service_db WITH 
        replication = {'class': 'SimpleStrategy', 'replication_factor': 3};
        `
        try {
            await this.client.execute(keySpaceQuery);
        } catch (error) {
            console.error('ERROR CREATING KEYSPACE', error);
            throw error; // Ném lỗi chính xác
        }
    }

    async executeQuery(query:string, params:any[]){
        try{
            const outcome = await this.client.execute(query, params, {prepare: true});
            return outcome.rows;
        }catch(error: any){
            console.error('ERROR EXECUTING CQL', error);
            throw error;
        }
    }

}