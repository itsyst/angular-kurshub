import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CoursesService
{
  getCourses() {
    return [
      {
        id:1,
        title: "The complete Angular course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1),
        category: 'Development'
      },
      {
        id:2,
        title: "The complete React course",
        rating: 6.9745,
        students: 20123,
        price: 200.95,
        releaseDate: new Date(2019, 3, 1),
        category: 'Art'
      },
      {
        id:3,
        title: "The complete Java course",
        rating: 6.9745,
        students: 20123,
        price: 200.95,
        releaseDate: new Date(2019, 3, 1),
        category: 'Languages'
      }
    ]
  }
}
