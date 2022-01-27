import { Component, OnInit } from '@angular/core';
import { MidiService } from 'src/app/services/midi.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-midis',
  templateUrl: './midis.component.html',
  styleUrls: ['./midis.component.css']
})
export class MidisComponent implements OnInit {
  
  
  videos: any[] = [];
  public sanitizedVideos: SafeResourceUrl[] = [];
  c = 0;
  
  constructor(public midSer: MidiService,
    private sanitizer: DomSanitizer) {
    this.videos = midSer.midi.map(url => url.url);
    this.sanitizedVideos = this.videos.map(url => this.sanitizer.bypassSecurityTrustResourceUrl(url));
    console.log(this.sanitizedVideos);
  }
  
  ngOnInit(): void {
  }
}
