import { Component, OnInit, Input } from '@angular/core';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// Custom dialog class for showing view in a popup.
@Component({
    selector: 'video-dialog',
    template: `<div>
                <h3 class="modal-title">Workout Video</h3>
            </div>
            <div>
                <iframe width="100%" height="480" [src]="videoId" frameborder="0" allowfullscreen></iframe>
            </div>
            `,
})
export class VideoDialogComponent implements OnInit {
   videoId: SafeResourceUrl;
   @Input() videoIdInput:string;
   private youtubeUrlPrefix = '//www.youtube.com/embed/';

    constructor( private sanitizer: DomSanitizer ) { }

    ngOnInit() {
        this.videoId = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + this.videoId);
    }

    ok() {
        //this.dialog.close();
    }
}