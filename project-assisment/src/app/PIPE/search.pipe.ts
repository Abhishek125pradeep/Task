import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchbar: any):any {
    console.log('data',data);
    console.log('searchbar',searchbar);
    if(!searchbar){
      return data
    }
    let value = searchbar.toLowerCase();
    return data.filter((itom:any)=>{
      return JSON.stringify(itom).toLowerCase().includes(value)
    })
    
  }

}
