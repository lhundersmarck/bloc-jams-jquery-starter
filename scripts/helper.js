class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    const totalTime = player.currentlyPlaying.duration;
    $('#time-control .total-time').text(player.prettyTime(totalTime));
  };
}

//only way to call methods inside a class is to instantiate a variable
const helper = new Helper();
