import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly http = inject(HttpClient);

  // Change to your Spring Boot endpoint later
  private readonly apiUrl = 'http://localhost:8080/api/chat';

  sendMessage(message: string): Observable<string> {
    if (!message.trim()) return of(''); // guarded

    // expects { reply: string } from backend
    return this.http.post<{ reply: string }>(this.apiUrl, { message })
      .pipe(
        map(r => r?.reply ?? ''),
        catchError(err => {
          console.error('ChatService error', err);
          return of('सर्व्हर से संपर्क नहीं हो पाया — बाद में कोशिश करो।');
        })
      );
  }
}
