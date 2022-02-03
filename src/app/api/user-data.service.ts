import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MapData } from './MapDataDto';
import { UserDataDTO } from './UserDataDto';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  public getUserData(steamId: string, ip: string): Observable<UserDataDTO> {
    return this.http.get<UserDataDTO>(`${environment.uDataApi}/udata?steamID=${steamId}&ip=${ip}`);
  }
  
  public clearCache(steamId: string): Observable<string> {
    return this.http.get(`${environment.uDataApi}/invalidate?steamID=${steamId}`, {responseType: 'text'});
  }

  public getMap(seed: string, size: string) {
    return this.http.get<MapData>(`${environment.uDataApi}/mapdata?seed=${seed}&size=${size}`);
  }
}
