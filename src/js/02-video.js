// import Player from '@vimeo/player';
// var _ = require('lodash');

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// let videoStartTime = 0;
// const startVideo = localStorage.getItem('videoStart');
// if (startVideo) {
//   videoStartTime = JSON.parse(startVideo);
// }
// player.setCurrentTime(videoStartTime);

// player.on('play', onPlay);
// player.on('pause', onPause);

// function onPlay() {
//   console.log('played the video!');
//   player.on('timeupdate', _.throttle(setTime, 1000));
// }
// function onPause() {
//   console.log('pause the video!');
//   player.off('timeupdate');
// }
// function setTime({ seconds }) {
//   localStorage.setItem('videoStart', JSON.stringify(seconds));
// }

// Change code below this line
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
    console.log(totalPrice);
  });
  console.log(totalPrice);
};

calculateTotalPrice([23, 9, 9, 9, 18]);
// Change code above this line
