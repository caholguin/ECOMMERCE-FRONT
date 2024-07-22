import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { AppMenuitemComponent } from '../menuitem/menuitem.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterModule,AppMenuitemComponent],
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
              { label: 'Dashboard', icon: 'dashboard', routerLink: ['/'] },
              { label: 'Familias', icon: 'inventory_2', routerLink: ['/'] },
              { label: 'Categorias', icon: 'category', routerLink: ['/g'] },
              { label: 'SubCategorias', icon: 'label_important', routerLink: ['/g'] },
              { label: 'Opciones', icon: 'settings', routerLink: ['/gg'] },
              { label: 'Productos', icon: 'inventory', routerLink: ['/g'] },
              { label: 'Caracteristicas', icon: 'featured_play_list', routerLink: ['/g'] },
          ]
      }     
      
  ];
  }

}
