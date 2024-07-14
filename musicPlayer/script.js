const musicContainer = document.querySelector(".music-container");
const progressContainer = document.querySelector(".progress-container");
const progressElement = document.querySelector(".progress");
const previousBTn = document.querySelector(".prev");
const playBTn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".next");

const audioElement = document.querySelector("audio");
const imageElement = document.querySelector(".cover");
const titleElement = document.querySelector(".title");
const songsList = document.querySelector(".songs-list");

const songs = ["hey", "summer", "ukulele", "nationalSweetheart", "LishGrooves"];

let songIndex = 4;

// event listeners

playBTn.addEventListener("click", () => {
  const isPlaying = playBTn.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
previousBTn.addEventListener("click", previousSong);
nextBtn.addEventListener("click", nextSong);
audioElement.addEventListener("timeupdate", updateProgressBar);
audioElement.addEventListener("ended", nextSong);

loadSongs(songs[songIndex]);

function playSong() {
  playBTn.classList.add("play");
  musicContainer.classList.add("play");
  const iconElement = playBTn.querySelector(".fas");
  iconElement.classList.remove("fa-play");
  iconElement.classList.add("fa-pause");
  audioElement.play();
}

function pauseSong() {
  playBTn.classList.remove("play");
  musicContainer.classList.remove("play");
  const iconElement = playBTn.querySelector(".fas");
  iconElement.classList.remove("fa-pause");
  iconElement.classList.add("fa-play");
  audioElement.pause();
}

function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSongs(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSongs(songs[songIndex]);
  playSong();
}

//set progress bar
function loadSongs(song) {
  titleElement.innerHTML = song;
  audioElement.src = `./assets/assets/audio/music-player_music_${song}.mp3`;
  imageElement.src = `./assets/assets/images/${song}.jpg`;
  renderSongsList();
  const className = "." + song;
  const element = document.querySelector(className);
  element.classList.add("active");
}

//update progress bar
function updateProgressBar(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progressElement.style.width = `${progressPercent}%`;
}

function renderSongsList() {
  songsList.innerHTML = "";

  for (let i = 0; i < songs.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${songs[i]}`;
    const className = songs[i];
    listItem.classList.add(className);
    listItem.classList.add("song");
    songsList.append(listItem);
  }
}
