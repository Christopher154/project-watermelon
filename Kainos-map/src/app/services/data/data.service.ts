import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../classes/course';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }

  courses = this.http.get<Course[]>('api/courses')

  public getCourses() {
    return this.http.get<Course[]>('/api/courses');
  }
}
