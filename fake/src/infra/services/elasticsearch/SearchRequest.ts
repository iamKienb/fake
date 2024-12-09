export class SearchRequest{
    q?: string = null;
    searchText?: string = "";
    sort?: string | string[] ="";
    offset:number = 0;
    limit: number =10;
   


}