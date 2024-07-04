// Add smooth scroll for navigation
$(document).ready(function(){
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Modal functionality for larger image view
    $('.achievement-image').on('click', function() {
        const imageSrc = $(this).data('image');
        $('#modalImage').attr('src', imageSrc);
    });
});
