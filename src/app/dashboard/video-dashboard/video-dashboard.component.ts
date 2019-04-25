import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { Video } from '../../app-types';

import { VideoDataService } from '../../video-data.service'

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video;
  videoList: Observable<Video[]>;

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }

  constructor(private svc: VideoDataService) {
    this.videoList = svc.loadVideoData().pipe(
      tap(videos => this.selectedVideo = videos[0])
    );
  }

  ngOnInit() {
  }

}