import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reclamation } from 'app/api/reclamation';
import { ReclamationService } from 'app/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  filterTerm!: string;
reclamation: any ;
listReclamations : any;
form : any;
closeResult! : string;
p:number =1;

  constructor(private reclamationService: ReclamationService, private modalService: NgbModal, private router: Router) { }


  ngOnInit(): void {
    this.getAllReclamations();
 
    this.reclamation = {
      idReclamation: null,
      titre : null,
      description : null,
      date_reclamation : null
    }
  }
    getAllReclamations(){
      this.reclamationService.getAllReclamations().subscribe(res => this.listReclamations = res)
    }
    addReclamation(reclamation : any){
      console.log(reclamation)
      this.reclamationService.addReclamation(reclamation).subscribe(() => {
        this.getAllReclamations();
        this.form = false;
      });
    }
  editReclamation(reclamation:Reclamation) {
    this.reclamationService.editReclamation(reclamation).subscribe();
  }
  deleteReclamation(idReclamation:any) {
    this.reclamationService.deleteReclamation(idReclamation).subscribe(()=> this.getAllReclamations());
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
  }
  