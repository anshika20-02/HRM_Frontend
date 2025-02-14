import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'https://hrm-backend-9u1w.onrender.com/feedback';


  constructor(private http: HttpClient) {}

  submitFeedback(feedbackData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, feedbackData);
  }
}
