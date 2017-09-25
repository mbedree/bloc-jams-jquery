$(document).ready(function(){
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src',album.albumArtUrl);
  //artist
  $('.artist').text(album.artist);
  //releaseInfo
  $('#release-info').text(album.releaseInfo);
});
