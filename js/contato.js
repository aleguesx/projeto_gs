document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('show-more-btn').addEventListener('click', function() {
        var extraContent = document.getElementById('extra-content');
        if (extraContent.style.display === 'none' || extraContent.style.display === '') {
            extraContent.style.display = 'block';
        } else {
            extraContent.style.display = 'none';
        }
    });
});