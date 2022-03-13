import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { course } from 'src/app/interfaces/course';


const baseURL = environment.baseAPI;

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getCourse() {
    return this.http.get<course[]>(baseURL + 'course');
  }

  createCourse(newCourse : course) {
    return this.http.post(baseURL + 'course', newCourse)
  }

  deleteCourse(id: number) {
    return this.http.delete(baseURL + 'course/' + id);
  }
}
