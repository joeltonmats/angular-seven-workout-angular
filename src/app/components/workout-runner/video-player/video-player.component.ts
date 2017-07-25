import { Component, Input, Injector, EventEmitter, Output } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { VideoDialogComponent } from './video-dialog.component';

@Component({
    selector: 'video-player',
    templateUrl: './video-player.html'
})
export class VideoPlayerComponent {
    @Input() videos: Array<string>;
    @Output() playbackStarted: EventEmitter<any> = new EventEmitter<any>();
    @Output() playbackEnded: EventEmitter<any> = new EventEmitter<any>();
    closeResult: string;

    constructor(private modalService: NgbModal) { }

    playVideo(content: any, videoId: string) {
        this.playbackStarted.emit(null);
        //this.modal.open(VideoDialogComponent, overlayConfigFactory(new VideoDialogContext(videoId)));
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}