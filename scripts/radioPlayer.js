export const radioPlayerInit = () => {
   console.log('Radio Player');

   const radio = document.querySelector('.radio');
   const radioNavigation = document.querySelector('.radio-navigation');
   const radioCoverImg = document.querySelector('.radio-cover__img');
   const radioItem = document.querySelectorAll('.radio-item');
   const radioHeaderBig = document.querySelector('.radio-header__big');
   const radioStop = document.querySelector('.radio-stop');
   const radioVolume = document.querySelector('.radio-volume');

   const audio = new Audio();
   audio.type = 'audio/aac';

   radioStop.disabled = true;

   const changeIconPlay = () => {
      if (audio.paused) {
         radio.classList.remove('play');
         radioStop.classList.add('fa-play');
         radioStop.classList.remove('fa-stop');

      } else {
         radio.classList.add('play');
         radioStop.classList.add('fa-stop');
         radioStop.classList.remove('fa-play');
      }
   };

   const selectItem = elem => {
      radioItem.forEach(item => item.classList.remove('select'));
      elem.classList.add('select');
   }

   radioNavigation.addEventListener('change', event => {
      const target = event.target;
      const parrent = target.closest('.radio-item');
      // выбор елемент (движ вверх)
      selectItem(parrent);

      const title = parrent.querySelector('.radio-name').textContent;
      // получаем имя станции из тега с классом .radio-name.
      // .textConten достает текст \содержимое 
      radioHeaderBig.textContent = title;

      const urlImg = parrent.querySelector('.radio-img').src;
      radioCoverImg.src = urlImg
      // сменить изображенеи 

      radioStop.disabled = false;
      audio.src = target.dataset.radioStantion;

      audio.play();
      changeIconPlay();

      // data-radio-stantion

   });
   // переключать мужду радио (1 раз на станцию, пока не переключишь)

   radioStop.addEventListener('click', () => {
      if (audio.paused) {
         audio.play();
      } else {
         audio.pause();
      }
      changeIconPlay();
   });

   radioVolume.addEventListener('input', () => {
      audio.volume = radioVolume.value / 100;
      // настройка зваука
   });
};


// pause    метод
// paused   свойство