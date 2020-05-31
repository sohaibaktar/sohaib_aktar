/**
 * Created by Sohaib Aktar.
 */
const tilt = $('.js-tilt').tilt();
$('.js-destroy').on('click', function () {
    const element = $(this).closest('.js-parent').find('.js-tilt');
    element.tilt.destroy.call(element);
});
$('.js-getvalue').on('click', function () {
    const element = $(this).closest('.js-parent').find('.js-tilt');
    const test = element.tilt.getValues.call(element);
    console.log(test[0]);
});
$('.js-reset').on('click', function () {
    const element = $(this).closest('.js-parent').find('.js-tilt');
    element.tilt.reset.call(element);
});

$('.js-tilt-web').tilt({
    glare: true,
    maxGlare:0.1
});
$('.js-tilt-web').tilt({
    scale:1.1
});
$('.js-tilt-blog').tilt({
    glare:true,
    maxGlare:.5
});
$('.js-tilt-blog').tilt({
    scale:1.1
});