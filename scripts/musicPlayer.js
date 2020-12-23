export const musicPlayerInit = () => {

   console.log('musicPlayerInit ');
   

   // audio-player
   //       audio-button__prev
   //       audio-button__play
   //       audio-button__next

   //       audio-time audio-time__passed
   //       audio-progress
   //       audio-progress__timing
   //       audio-time audio-time__total


   const audioPlayer = document.querySelector('.audio-player');
   const audioButtonPlay = document.querySelector('.audio-button__play');
   const audioProgress = document.querySelector('.audio-progress__timing');
   const audioTimePassed = document.querySelector('.audio-time__passed');
   const audioTimeTotal = document.querySelector('.audio-time__total');

      // const audioButtonStop = document.querySelector('.audio-button__stop');
      
      const audio = new Audio();
      audio.type = 'audio/mp3';


      const toggleIcon = () => {
         if (audioPlayer.paused) {
            audioButtonPlay.classList.remove('fa-pause');
            audioButtonPlay.classList.add('fa-play');
         } else {
            audioButtonPlay.classList.add('fa-pause');
            audioButtonPlay.classList.remove('fa-play');
         }
      };

      const togglePlay = () => {
         if (audioPlayer.paused) {
         audioPlayer.play();
      } else {
         audioPlayer.pause();}
      };
   










};