const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('artist');
const prevBtn = document.getElementById('prev-btn');
const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');

// Song information (replace with your actual playlist data)
let songs = [
  {
    title: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    src: "Media/despacito.mp3",
    image: "Media/EAF62C93-ADB1-4394-9B5E-19BE880C5E5F.jpg"
  },
  // Add more songs here
  {
    title: 'Let Me Down Slowly',
    artist: 'Song by Alec Benjamin',
    src: "Media/let me down slowly.mp3",
    image: "Media/EAF62C93-ADB1-4394-9B5E-19BE880C5E5F.jpg"

  },

  {
    title: 'Let Me Love You',
    artist: 'Song by Justin Bieber ft.DJ Snake',
    src: "Media/let me love you.mp3",
    image: "Media/EAF62C93-ADB1-4394-9B5E-19BE880C5E5F.jpg"

  },
  {
    title: 'Faded',
    artist: 'Song by Alan Walker',
    src: "Media/faded.mp3",
    image: "Media/EAF62C93-ADB1-4394-9B5E-19BE880C5E5F.jpg"
  },
  {
    title: 'Style',
    artist: 'Song by Taylor Swift',
    src: "Media/style.mp3",
    image: "Media/EAF62C93-ADB1-4394-9B5E-19BE880C5E5F.jpg"
  },
  {
    title: 'Ai Mama Adare',
    artist: 'Song by Piyath Rajapakse',
    src: "Media/Ai mama Adare.mp3",
    image: "Media/EAF62C93-ADB1-4394-9B5E-19BE880C5E5F.jpg"
  },
  {
    title: 'Sadak Wela',
    artist: 'Song by SANA',
    src: "Media/Sadak Wela.mp3",
    image: "Media/EAF62C93-ADB1-4394-9B5E-19BE880C5E5F.jpg"
  },
  {
    title: 'Nadaaniyan',
    artist: 'Song by Akshath',
    src: "Media/Nadaniyan.mp3",
    image: "Media/EAF62C93-ADB1-4394-9B5E-19BE880C5E5F.jpg"
  },
  {
    title: 'Chaleya',
    artist: 'Song by Arijit Singh',
    src: "Media/Chaleya.mp3",
    image: "Media/EAF62C93-ADB1-4394-9B5E-19BE880C5E5F.jpg"
  },
  {
    title: 'Cheap Thrills',
    artist: 'Song by Sia',
    src: "Media/Cheap Thrills.mp3",
    image: "Media/EAF62C93-ADB1-4394-9B5E-19BE880C5E5F.jpg"
  },

];

let currentSongIndex = 0;

function loadSong() {
  audioPlayer.src = songs[currentSongIndex].src;
  songTitle.textContent = songs[currentSongIndex].title;
  songArtist.textContent = songs[currentSongIndex].artist;
}

function pauseSong() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playBtn.textContent = 'Play';
  }
}

function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  loadSong();
  pauseSong(); // Automatically play the previous song
}

function nextSong() {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }
  loadSong();
  pauseSong(); // Automatically play the next song
}

loadSong();

playBtn.addEventListener('click', pauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

