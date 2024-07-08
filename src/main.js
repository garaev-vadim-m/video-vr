import './style.css'
import Video  from "clappr";
import PluginVideo from "clappr-video360";

const videoUrl = 'videoVr.mp4'



const PlayerInstance = new Video.Player({
    source: videoUrl,
    plugins: {
        container: [PluginVideo],
    },
    parentId: '#player',
})

PlayerInstance.getPlugin('click_to_pause').disable();
