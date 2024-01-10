import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-post';
  likes : number = 0 ;
  slides: any[] = [
    {
      src: './../assets/images/about.jpg',
      id: '1',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam, asperiores nisi fugit animi
      repudiandae? Architecto ratione quia facilis esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, impedit doloribus ab, voluptatem possimus aut quos minima inventore repellendus dolor et maxime ducimus illum magni eius eum, sequi nihil laboriosam.
      `,
      title : 'title -1 '
    },

    {
      src: './../assets/images/bg.jpg',
      id: '1',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam, asperiores nisi fugit animi
                    repudiandae? Architecto ratione quia facilis esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, impedit doloribus ab, voluptatem possimus aut quos minima inventore repellendus dolor et maxime ducimus illum magni eius eum, sequi nihil laboriosam.
                    `,
                    title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam, asperiores nisi fugit animi'
    },
    {
      src: './../assets/images/h3.jpg',
      id: '1',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam, asperiores nisi fugit animi
      repudiandae? Architecto ratione quia facilis esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, impedit doloribus ab, voluptatem possimus aut quos minima inventore repellendus dolor et maxime ducimus illum magni eius eum, sequi nihil laboriosam.
      `,
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam, asperiores nisi fugit animi'
    },
    {
      src: './../assets/images/d2.jpg',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam, asperiores nisi fugit animi
      repudiandae? Architecto ratione quia facilis esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, impedit doloribus ab, voluptatem possimus aut quos minima inventore repellendus dolor et maxime ducimus illum magni eius eum, sequi nihil laboriosam.
      `,
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam, asperiores nisi fugit animi'
    },
    {
      src: './../assets/images/w4.jpg',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam, asperiores nisi fugit animi
      repudiandae? Architecto ratione quia facilis esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, impedit doloribus ab, voluptatem possimus aut quos minima inventore repellendus dolor et maxime ducimus illum magni eius eum, sequi nihil laboriosam.
      `,
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam, asperiores nisi fugit animi'
    },
    {
      src: './../assets/images/w3.jpg',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam, asperiores nisi fugit animi
      repudiandae? Architecto ratione quia facilis esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, impedit doloribus ab, voluptatem possimus aut quos minima inventore repellendus dolor et maxime ducimus illum magni eius eum, sequi nihil laboriosam.`,
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam, asperiores nisi fugit animi'
    },

  ];




  constructor() {

  }


  countLike(){
    this.likes++ ;
  }





}
