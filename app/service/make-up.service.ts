import { Injectable } from '@angular/core';
import { makeUp } from '../model/makeUp.model';
import { Marque } from '../model/marque.model';
import {  Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { MarqueWrapped } from '../model/MarqueWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})

export class MakeUpService {
  apiURL: string = 'http://localhost:8980/MakeUp/api';
  apiURLMarq: string = 'http://localhost:8980/MakeUp/marq';
  
  makeUp !: makeUp[];
make! : makeUp ;
marque !: Marque [];
makeUpRecherche!:makeUp[];
  constructor(private http : HttpClient) {
      /* this.marque =[{idMarq : 1 , nomMarq : "chanel"},
                    {idMarq : 2 , nomMarq : "sephora"},
                    {idMarq : 3 , nomMarq : "kiko"}];*/
 
     /* { this.makeUp=[
        {referenceMakeUp :100 , nomMakeUp: "mascara" , prixMakeUp : 18.500 , quantiteMakeUp :50 },//marque :{idMarq : 1 , nomMarq : "chanel"}},
        {referenceMakeUp: 101 , nomMakeUp :"eyeliner" ,prixMakeUp : 26.850 ,quantiteMakeUp :20 },//marque :{idMarq : 2 , nomMarq : "sephora"}},
        {referenceMakeUp : 102 , nomMakeUp :"palette", prixMakeUp : 75.000 ,quantiteMakeUp :15},//marque :{idMarq : 1 , nomMarq : "chanel"} },
        {referenceMakeUp : 103 , nomMakeUp :"Rouge à lévres", prixMakeUp : 55.000 , quantiteMakeUp :40},//marque :{idMarq : 1 , nomMarq : "chanel"}},
        {referenceMakeUp : 102 , nomMakeUp :"Fond de teint", prixMakeUp : 175.000 ,quantiteMakeUp :55 },//marque :{idMarq : 3 , nomMarq : "kiko"}},
        {referenceMakeUp : 102 , nomMakeUp :"Blush", prixMakeUp : 85.000 ,quantiteMakeUp :30},//marque :{idMarq : 2 , nomMarq : "sephora"} }
      ];*/

    }
    
   
   listeMakeUp(): Observable<makeUp[]>{
    return this.http.get<makeUp[]>(this.apiURL);
   }

   
   ajouterProduitsMakeUP( make: makeUp):Observable<makeUp>{
    return this.http.post<makeUp>(this.apiURL, make , httpOptions);
    }
   supprimerMakeUP(id : number )
   {
    const url = `${this.apiURL}/${id}`;
     return this.http.delete(url, httpOptions);
    }

   
    consulterProduitMakeUp(id: number): Observable<makeUp> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<makeUp>(url);
      }
    updateMakeUp(m :makeUp):Observable<makeUp>{
      return  this.http.put<makeUp>(this.apiURL , m , httpOptions);
     // this.supprimerMakeUp(m);
      //this.ajouterProduitsMakeUP(m);
    }
     listeMarque() :Observable<Marque[]>{
      return this.http.get<Marque[]>(this.apiURL+"/marq") ;
    }
    consulterMarque(id:number):Marque{
      return this.marque.find(marq=>marq.idMarq == id)!;
    } 
   /*  rechercherParMarque(idMarq:number) : makeUp[] {
      this.makeUpRecherche=[];
      this.makeUp.forEach((cur,index) => {
          if(idMarq == cur.marque.idMarq){
              console.log("cur",cur);
              this.makeUpRecherche.push(cur);
                  }
              });
      return this.makeUpRecherche;
              } */
    rechercherParCategorie(idMarq: number):Observable< makeUp[]> {
                const url = `${this.apiURL}/prodsMarq/${idMarq}`;
                return this.http.get<makeUp[]>(url);
                }
    rechercherParNom(nom: string):Observable< makeUp[]> {
                  const url = `${this.apiURL}/prodsByName/${nom}`;
                  return this.http.get<makeUp[]>(url);
                  }
ajouterMarque( marq: Marque):Observable<Marque>{
return this.http.post<Marque>(this.apiURLMarq, marq, httpOptions);
}
}

