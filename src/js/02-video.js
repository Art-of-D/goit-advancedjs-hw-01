import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', 
          throttle(function(data) {
                       localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
        }, 1000));


const { seconds = 0 } = JSON.parse(localStorage.getItem("videoplayer-current-time")) || {};
player.setCurrentTime(seconds);
        
