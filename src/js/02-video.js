import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', 
          throttle(function({seconds}) {
                       localStorage.setItem(CURRENT_TIME, seconds);
        }, 1000));


const savedTime = localStorage.getItem(CURRENT_TIME) || 0;
player.setCurrentTime(savedTime);
        
