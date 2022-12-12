import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MakeUpService } from '../service/make-up.service';
import { makeUp } from '../model/makeUp.model';
import { Marque } from '../model/marque.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-update-produit-make-up',
  templateUrl: './update-produit-make-up.component.html',
  styles: [
  ]
})
export class UpdateProduitMakeUpComponent implements OnInit {
  currentProduit = new makeUp();
  marque!:Marque[];
  updatedMarqId!:number ;
  constructor(private activatedRoute : ActivatedRoute,
              private router : Router,
             private MakeUpService : MakeUpService) { }

  ngOnInit(): void {  
 
 this.MakeUpService.consulterProduitMakeUp(this.activatedRoute.snapshot.params['id']).subscribe( mak => {
  this.currentProduit= mak;
  this.updatedMarqId=this.currentProduit.marque.idMarq ; 
 });
 
   this.MakeUpService.listeMarque().subscribe(marq => {this.marque=marq;
         console.log(marq); });
  }
  updateMakeUp()
  { //console.log(this.currentProduit);
 // this.currentProduit.marque=this.MakeUpService.consulterMarque(this.updatedMarqId)
 this.currentProduit.marque=this.marque.find(marq => marq.idMarq == this.updatedMarqId)!;
  this.MakeUpService.updateMakeUp(this.currentProduit).subscribe(make =>{
    this.currentProduit=make;
    this.router.navigate(['makeUp']);
  },(error)=>{alert ("probleme lors de la modification !");
});
 
  }
}
