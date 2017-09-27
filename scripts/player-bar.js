$(document).ready(function(){
  $('button#play-pause').click(function(){
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  //next button
  $('button#next').click(function(){
    if(player.playState !== 'playing') {return;}

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if(nextSongIndex >= album.songs.length) {return}

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  //previous button
  $('button#previous').click(function(){
    if(player.playState !== 'playing') {return}

    let currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    let previousSongIndex = currentSongIndex - 1;
    if(previousSongIndex < 0) {console.log("asdf");return}

    let previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });

  $('#time-control input').on('input', function (event){
    player.skipTo(event.target.value);
  });

  setInterval( () => {
     const currentTime = player.getTime();
     const duration = player.getDuration();
     const percent = (currentTime / duration) * 100;
     $('#time-control .current-time').text(currentTime);
     $('#time-control input').val(percent);
   }, 1000);

   $('#volume-control input').click(function (event){
     player.setVolume(event.target.value);
   });
 });
