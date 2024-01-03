import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-post';
  noWrap = false;
  video =
    {
      id: 1,
      src: './assets/videos/pexels-yaroslav-shuraev-8464662 (1080p).mp4'
    }
  slidesChangeMessage = '';

  slides = [
    {
      id: 1,
      src: './assets/images/slider1.jpg'
    },
    {
      id: 2,
      src: './assets/images/slider2.jpg'
    },
    {
      id: 3,
      src: './assets/images/slider3.jpg'
    },

  ]
  onSlideRangeChange(indexes: number[] | void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }


}
