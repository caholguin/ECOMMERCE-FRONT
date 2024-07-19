import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { AppMenuitemComponent } from '../menuitem/menuitem.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgIf,RouterModule,AppMenuitemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {   
    this.model = [
      {
          label: 'Home',
          items: [
              { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
          ]
      },
      {
          label: 'UI Components',
          items: [
              { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/httyy'] },
              { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/thyyy'] },
           
          ]
      },     
      {
          label: 'Get Started',
          items: [
              {
                  label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['']
              },
              {
                  label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
              }
          ]
      }
  ];
  }

}
