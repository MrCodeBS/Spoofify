document.addEventListener('DOMContentLoaded', () => {
    const playPauseButton = document.getElementById('play-pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const songTitle = document.getElementById('song-title');
    const artist = document.getElementById('artist');

    let isPlaying = false;

    function togglePlayPause() {
        isPlaying = !isPlaying;
        playPauseButton.textContent = isPlaying ? 'Pause' : 'Play';
        // In a real implementation, you would control the embedded player here
        console.log(isPlaying ? 'Playing' : 'Paused');
    }

    function playNextSong() {
        // In a real implementation, you would skip to the next song in the embedded player
        console.log('Next song');
    }

    function playPreviousSong() {
        // In a real implementation, you would go back to the previous song in the embedded player
        console.log('Previous song');
    }

    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', playNextSong);
    prevButton.addEventListener('click', playPreviousSong);

    // Update the now playing info based on the embedded player (this is a mock implementation)
    songTitle.textContent = "Embedded Player Song";
    artist.textContent = "Embedded Player Artist";
});