function toggleFullscreen(element) {
    // Check if the element or its parent is fullscreen
    var isFullscreen = element.classList.contains('fullscreen') || element.parentNode.classList.contains('fullscreen');
    if (!isFullscreen) {
        element.classList.add('fullscreen');
        document.body.style.overflow = 'hidden';
    } else {
        element.classList.remove('fullscreen');
        document.body.style.overflow = '';
    }
}