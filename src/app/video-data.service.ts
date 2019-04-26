import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Video } from './app-types';


@Injectable()
export class VideoDataService {

  constructor(private http: HttpClient) { }

  loadVideoData() {
    return this.http
        .get<Video[]>('https://api.angularbootcamp.com/videos')
          .pipe(
            map(videos => [...videos, {title: 'ADD from map', author: "Me", id: "added", viewDetails: []} ])
          );
  }

  loadVideo(id: string): Observable<Video> {
    return this.http.get<Video>('https://api.angularbootcamp.com/videos/'+ id);
  }

}