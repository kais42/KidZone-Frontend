import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Classe } from 'app/api/classe';
import { ClasseService } from 'app/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
filterTerm!: string;
classe: any ;
listClasses : any;
form : any;
closeResult! : string;
p:number =1;
  constructor(private classeService: ClasseService, private modalService: NgbModal, private router: Router) { }
  ngOnInit(): void {

    this.getAllClasses();
 
    this.classe = {
      idClasse: null,
      nom : null,
      nbr_Place : null,
      niveaux : null
    }
  }
    getAllClasses(){
      this.classeService.getAllClasses().subscribe(res => this.listClasses = res)
    }
    addClasse(classe : any){
      console.log(classe)
      this.classeService.addClasse(classe).subscribe(() => {
        this.getAllClasses();
        this.form = false;
      });
    }
  editClasse(classe:Classe) {
    this.classeService.editClasse(classe).subscribe();
  }
  deleteClasse(idClasse:any) {
    this.classeService.deleteClasse(idClasse).subscribe(()=> this.getAllClasses());
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
    closeForm(){
  
    }
    cancel(){
      this.form = false;
    }
    key : string = 'idClasse';
  reverse : boolean= false ;
  sort(key){
    this.key = key ;
    this.reverse =!this.reverse ;
  }
}