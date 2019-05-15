class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    $('total-time').text(player.prettyTime(song.duration));
  };
}

//only way to call methods inside a class is to instantiate a variable
const helper = new Helper();
