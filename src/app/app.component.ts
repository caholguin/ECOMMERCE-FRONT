import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from "./dashboard/footer/footer.component";
import { TopbarComponent } from './dashboard/topbar/topbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { PagesComponent } from "./pages/pages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, FooterComponent, TopbarComponent, SidebarComponent,  PagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';

  
}
