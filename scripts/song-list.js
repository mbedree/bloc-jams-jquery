$(document).ready(function() {
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
        <td>index</td>
        <td>song.title</td>
        <td>song.duration</td>
      </tr>
      `)
  )};
});
