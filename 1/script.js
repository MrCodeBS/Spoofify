document.addEventListener('DOMContentLoaded', () => {
    const playPauseButton = document.getElementById('play-pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const songTitle = document.getElementById('song-title');
    const artist = document.getElementById('artist');

    let isPlaying = false;

    const playlist = [
        { title: 'Song 1', artist: 'Artist 1' },
        { title: 'Song 2', artist: 'Artist 2' },
        { title: 'Song 3', artist: 'Artist 3' },
    ];

    let currentSongIndex = 0;

    function updateNowPlaying() {
        const currentSong = playlist[currentSongIndex];
        songTitle.textContent = currentSong.title;
        artist.textContent = currentSong.artist;
    }

    function togglePlayPause() {
        isPlaying = !isPlaying;
        playPauseButton.textContent = isPlaying ? 'Pause' : 'Play';
    }

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        updateNowPlaying();
        if (!isPlaying) {
            togglePlayPause();
        }
    }

    function playPreviousSong() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        updateNowPlaying();
        if (!isPlaying) {
            togglePlayPause();
        }
    }

    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', playNextSong);
    prevButton.addEventListener('click', playPreviousSong);

    updateNowPlaying();
});