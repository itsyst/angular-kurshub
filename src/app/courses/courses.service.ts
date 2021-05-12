import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CoursesService
{
  getCourses() {
    return [
      {
        title: "The complete Angular course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016,3,1)
      },
      {
        title: "The complete React course",
        rating: 6.9745,
        students: 20123,
        price: 200.95,
        releaseDate: new Date(2019,3,1)
      }
    ]
  }
}
