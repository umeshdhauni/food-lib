import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

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

}
