'use strict'

HTMLVideoElement.prototype.videoReverse = function() {
    this.pause();

    var video = this;

    var fps = 25;
    var intervalRewind = setInterval(function() {
        if(video.currentTime == 0){
           clearInterval(intervalRewind);
           video.pause();
        }
        else {
            video.currentTime += -(1/fps);
        }
    }, 1000 / fps);
};