import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../dashboard/components/sidebar/sidebar.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  img={
    src:'dish6.svg',
    index:5
  };
  allImages = ['dish1.svg','dish2.svg','dish3.svg','dish4.svg','dish5.svg','dish6.svg'];
  dark_mode = true;
  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit() {
    this.cycle(0);
  }

  cycle(i) {
    
    setTimeout(() => {
      document.getElementById('dishAnimate').classList.remove('animate');
      setTimeout(() =>{
        document.getElementById('dishAnimate').classList.add('animate');
        this.img = {
          src:this.allImages[i],
          index:i
        }
      },300)
      i++;
      if (i > 5) {
        i = 0;
      }
      this.cycle(i);
    }, 4000);
    // }
  }

  darkMode(){
    this.dark_mode = !this.dark_mode;
    if(this.dark_mode){
      document.getElementsByTagName('body')[0].classList.add('dark-mode');

    }
    else{
      document.getElementsByTagName('body')[0].classList.remove('dark-mode');
    }
  }

  sidePanel(){
    let dialogRef = this.dialog.open(SidebarComponent, {
      height: '100%',
      width: '100%', 
      panelClass:'full',
      data:'home'     
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
