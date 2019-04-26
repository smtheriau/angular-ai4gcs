import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'
import { map, switchMap, shareReplay, filter, first } from 'rxjs/operators'

import { Video } from '../../app-types';
import { VideoDataService } from '../../video-data.service'

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  video: Observable<Video>;

  constructor(route: ActivatedRoute, svc: VideoDataService) {
    this.video = route.queryParams.pipe(
      map(params => params['videoId']),
      filter(id => id),
      switchMap(id => svc.loadVideo(id)),
      shareReplay(1)
    )
  }

  ngOnInit() {
  }

}