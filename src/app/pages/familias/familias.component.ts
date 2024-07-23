import { Component, OnInit, ViewChild } from '@angular/core';
import {  Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-familias',
  standalone: true,
  imports: [TableModule,ButtonModule,TagModule, IconFieldModule, InputTextModule, InputIconModule, DropdownModule, HttpClientModule, CommonModule],

  templateUrl: './familias.component.html',
  styleUrl: './familias.component.scss'
})
export class FamiliasComponent implements OnInit {
  @ViewChild('dt2') table!: Table

  families: any[] = []; 

  cols!: any[];


  ngOnInit() {
    this.families = [
      { id: 1, name: 'prueba' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
      { id: 2, name: 'H' },
    ];

    
  }

  onGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    if (this.table) {
      this.table.filterGlobal(input.value, 'contains');
    }
  }

}
  


