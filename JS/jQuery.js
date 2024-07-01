$(document).ready(function() {
    $('.faq-card__toggle-button').click(function() {
        // Toggle the visibility of the answer text associated with the clicked button
        $(this).closest('.faq-card__item').find('.faq-card__answer').toggle();
        $(this).toggleClass('rotate-icon');
        $(this).closest('.faq-card__item').find('.faq-card__question-text').toggleClass('active-question');
    });
    $('.faq-card__question-text').click(function() {
        // Toggle the visibility of the answer text associated with the clicked button
        $(this).closest('.faq-card__item').find('.faq-card__answer').toggle();
        $(this).closest('.faq-card__item').find('.faq-card__toggle-button').toggleClass('rotate-icon')
        $(this).closest('.faq-card__item').find('.faq-card__question-text').toggleClass('active-question');
    });
});
