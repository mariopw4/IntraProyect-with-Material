import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidebarService } from '../services/sidebar/sidebar.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;

  constructor(public _sbs: SidebarService) { }

  ngOnInit(): void {
    if(window.innerWidth > 576){
      setTimeout(()=>{
        this.drawer.toggle();
      },100);
    }
  }


}
