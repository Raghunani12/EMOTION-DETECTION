document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video-feed');
    video.src = "{{ url_for('video_feed') }}";
});

