import { Injectable } from '@angular/core';
import  { HttpClient, HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postBookMarkDetails(data: any){
    return this.http.post<any>('http://localhost:3000/posts', data)
    .pipe(map((res: any) => {
      return res;
      }))
  }
  getBookMarkDetails(){
    return this.http.get<any>('http://localhost:3000/posts')
    .pipe(map((res: any) => {
      return res;
      }))
  }

  updateBookMarkDetails(data: any, id:number){
    return this.http.put<any>('http://localhost:3000/posts/'+id, data)
    .pipe(map((res: any) => {
      return res;
      }))
  }
  deleteBookMarkDetails( id : number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res: any) => {
      return res;
      }))
  }
  getById(id : number){
    return this.http.get("http://localhost:9090/api/posts/"+id);   
  }

}
