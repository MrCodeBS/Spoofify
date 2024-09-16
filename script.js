document.addEventListener('DOMContentLoaded', () => {
    // Matrix rain effect
    const matrixRain = document.getElementById('matrix-rain');
    const characters = 'ا	ب	ج	د	ه	و	ز	ح	ط	ي	ك	ل	م	ن	ص	ع	ف	ض	ق	ر	س	ت	ث	خ	ذ	ظ	غ	ش0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        matrixRain.appendChild(column);

        let y = 0;
        const intervalId = setInterval(() => {
            const char = document.createElement('span');
            char.textContent = characters[Math.floor(Math.random() * characters.length)];
            column.appendChild(char);
            y += 20;
            char.style.top = `${y}px`;
            char.style.opacity = 1;

            setTimeout(() => {
                char.style.opacity = 0;
                setTimeout(() => {
                    column.removeChild(char);
                }, 1000);
            }, 5000);

            if (y > window.innerHeight) {
                clearInterval(intervalId);
            }
        }, 100);
    }

    // Hide the loading screen after 10 seconds
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
    }, 10000); // 10 seconds

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