import { Jogo } from './../model/jogo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  private rota: string = "http://localhost:8080/jogos";

  constructor(private httpClient: HttpClient) { }

  public getJogos(): Observable<Jogo[]>{
    return this.httpClient.get<Jogo[]>(this.rota);
  }

  public postJogo(jogo: Jogo): Observable<Jogo>{
    return this.httpClient.post<Jogo>(this.rota, jogo);
  }

  public favoritarJogo(id: number): Observable<Jogo> {
    return this.httpClient.put<Jogo>(this.rota + "/favoritar/" + id , null);
  }
}
