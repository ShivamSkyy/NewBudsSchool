import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from 'src/app/modalClass/Contact';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contact: Contact;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.contact = new Contact();
  }

  onSubmit(formN: NgForm) {
    this.openSnackBar("Thank you for your involvement....",this.contact.name); 
    this.contact = new Contact();
    formN.resetForm();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
