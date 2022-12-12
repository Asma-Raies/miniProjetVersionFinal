import { Component, OnInit } from '@angular/core';
import { makeUp } from '../model/makeUp.model';
import { MakeUpService } from '../service/make-up.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
newMakeUp = new makeUp ();
message :string ="";
marque ! :Marque [];

newIdMarq!:number ;
newMarque ! :Marque ;

  constructor(
              private MakeUpService : MakeUpService ,
               private router : Router) { }

  ngOnInit(): void {
   // this.marque=this.MakeUpService.listeMarque();
   this.MakeUpService.listeMarque().subscribe(marq=>{this.marque = marq ; 
       console.log(marq);
      });
  }
  addProduitMakeUP(){
    this.newMakeUp.marque = this.marque.find(marq => marq.idMarq == this.newIdMarq)!;

    this.MakeUpService.ajouterProduitsMakeUP(this.newMakeUp).subscribe(make => {
      console.log(make);
      this.router.navigate(['makeUp']).then(() => {
        window.location.reload();
        // this.router.navigate(['makeUp']);
    });
    //this.message = "Produits "+this.newMakeUp.nomMakeUp +" ajouté avec succés !" ;
   
      });}
  }


