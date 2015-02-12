// Load API asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var scriptTag = document.getElementsByTagName('script')[0];
scriptTag.parentNode.insertBefore(tag, scriptTag);

// Set up shitty globals
var virgin = true, index = Math.floor( Math.random()*92 );

// Create Player
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        playerVars: {
            list: 'PL3IfWK8YCzkdgmpvUPFBW6kxl92oOZLZb',
            listType: 'playlist',
            controls: '2',
            showinfo: '1',
            autoplay: '1',
            autohide: '1',
            loop: '1',
            rel: '0',
            index: index
        },
        events: {
            onStateChange: onPlayerStateChange
        }
    })
}

function onPlayerStateChange (event) {
    if (event.data === -1 && virgin) {
        player.setShuffle(true);
        virgin = false;
    }
}