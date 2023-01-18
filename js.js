//check if page is loaded
/*window.onload = function() {
    document.querySelector("main").classList.add('opacity_change');
    document.querySelector("nav").classList.add('opacity_change');
}*/

/*//get scroll
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
*/

//------------------------------------
// SCROLL MAGIC

// init controller
var controller = new ScrollMagic.Controller();

//———————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Artigo 1 - Título
//———————————————————————————————————————————————————————————————————————————————————————————————————————————————————

//Vai buscar os elementos HTML necessários
var track1 = document.querySelector('#track1');
var artigo1imgCapa = document.querySelector('#artigo1imgCapa');
var artigo1autor = document.querySelector('#artigo1autor');
var artigo1titulo1 = document.querySelector('#artigo1titulo1');
var artigo1titulo2 = document.querySelector('#artigo1titulo2');

//Cria um Tween para cada animação
var artigo1imgCapa_opacity = TweenMax.fromTo(
    [artigo1imgCapa,artigo1autor], 1,
    {opacity:0}, {opacity:1, ease:  Power2.easeIn});
var artigo1titulo1_position1 = TweenMax.fromTo(
    artigo1titulo1, 1,
    {left: '42%', top: '31%'}, {left: '2%', top: '5%', ease:  Power2.easeInOut});
var artigo1titulo1_position2 = TweenMax.fromTo(
    artigo1titulo2, 1,
    {right: '39%', bottom: '30.5%'}, {right: '2%', bottom: '5%', ease:  Power2.easeInOut});

//Animação opacidade
var scene1 = new ScrollMagic.Scene({
    triggerElement: track1,
    triggerHook: 0,
    duration: '100%'
})
    // animate color and top border in relation to scroll position
    .setTween(artigo1imgCapa_opacity)
    //.setTween("#artigo1imgCapa", {opacity: 1}) // the tween duration can be omitted and defaults to 1
    .addIndicators({name: "artigo 1 título"}) // add indicators (requires plugin)
    .addTo(controller)
    .removeIndicators();

//Animação Título 1
var scene2 = new ScrollMagic.Scene({
    triggerElement: track1,
    triggerHook: 'onLeave',
    duration: '100%'
})
    .setTween(artigo1titulo1_position1)
    .addIndicators({name: "artigo 1 título"})
    .addTo(controller)
    .removeIndicators();

//Animação Título 2
var scene3 = new ScrollMagic.Scene({
    triggerElement: track1,
    triggerHook: 'onLeave',
    duration: '100%'
})
    .setTween(artigo1titulo1_position2)
    .addIndicators({name: "artigo 1 título"})
    .addTo(controller)
    .removeIndicators();

//———————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Artigo 1 - Horizontal Scroll
//———————————————————————————————————————————————————————————————————————————————————————————————————————————————————

//Elementos HTML
var track2 = document.querySelector('#track2');

var horizontalScroll = document.querySelector('.horizontal-scroll');

//Tween
var horizontalScrollAnim = TweenMax.fromTo(
    horizontalScroll, 1,
    {left: '2vw'}, {left: '-442vw'});

//Horizontal Scroll Animation
var scene4 = new ScrollMagic.Scene({
    triggerElement: track2,
    triggerHook: 'onLeave',
    duration: '300%'
})
    .setTween(horizontalScrollAnim)
    .addIndicators({name: "artigo 1 scroll"})
    .addTo(controller)
    .removeIndicators();

//———————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Artigo 2 - Título
//———————————————————————————————————————————————————————————————————————————————————————————————————————————————————

//Elementos HTML
var artigo2titulo = document.querySelector('#artigo2titulo');

var artigo2TitImg1 = document.querySelector('#artigo2TitImg1');
var artigo2TitImg2 = document.querySelector('#artigo2TitImg2');
var artigo2TitImg3 = document.querySelector('#artigo2TitImg3');
var artigo2TitImg4 = document.querySelector('#artigo2TitImg4');

//Imagem 1
var scene5 = new ScrollMagic.Scene({
    triggerElement: artigo2titulo,
    triggerHook: 'onLeave',
    duration: '200%'
})
    .setTween(TweenMax.fromTo(
        artigo2TitImg1, 1,
        {top: '80vh'}, {top: '5vh'}))
    .addIndicators({name: "artigo 2 título"})
    .addTo(controller)
    .setPin(artigo2titulo)
    .removeIndicators();

//Imagem 2
var scene6 = new ScrollMagic.Scene({
    triggerElement: artigo2titulo,
    triggerHook: 'onLeave',
    duration: '200%'
})
    .setTween(TweenMax.fromTo(
        artigo2TitImg2, 1,
        {top: '50vh'}, {top: '30vh'}))
    .addIndicators({name: "artigo 2 título"})
    .addTo(controller)
    .removeIndicators();

//Imagem 3
var scene7 = new ScrollMagic.Scene({
    triggerElement: artigo2titulo,
    triggerHook: 'onLeave',
    duration: '200%'
})
    .setTween(TweenMax.fromTo(
        artigo2TitImg3, 1,
        {top: '90vh'}, {top: '1vh'}))
    .addIndicators({name: "artigo 2 título"})
    .addTo(controller)
    .removeIndicators();

//Imagem 4
var scene8 = new ScrollMagic.Scene({
    triggerElement: artigo2titulo,
    triggerHook: 'onLeave',
    duration: '200%'
})
    .setTween(TweenMax.fromTo(
        artigo2TitImg4, 1,
        {top: '20vh'}, {top: '10vh'}))
    .addIndicators({name: "artigo 2 título"})
    .addTo(controller)
    .removeIndicators();

//———————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Artigo 2
//———————————————————————————————————————————————————————————————————————————————————————————————————————————————————

//Elementos HTML
var part1 = document.querySelector('#part1');

var artigo2img1 = document.querySelector('#artigo2img1');
var artigo2img2 = document.querySelector('#artigo2img2');
var artigo2img3 = document.querySelector('#artigo2img3');

var scene9 = new ScrollMagic.Scene({
    triggerElement: part1,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img1, 1,
        {top: '100vh'}, {top: '30vh'}))
    .addIndicators({name: "part1"})
    .addTo(controller)
    .removeIndicators();

var scene10 = new ScrollMagic.Scene({
    triggerElement: part1,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img2, 1,
        {top: '150vh'}, {top: '0vh'}))
    .addIndicators({name: "part1"})
    .addTo(controller)
    .removeIndicators();

var scene11 = new ScrollMagic.Scene({
    triggerElement: part1,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img3, 1,
        {top: '90vh'}, {top: '15vh'}))
    .addIndicators({name: "part1"})
    .addTo(controller)
    .removeIndicators();

//Elementos HTML
var part2 = document.querySelector('#part2');

var artigo2img4 = document.querySelector('#artigo2img4');
var artigo2img5 = document.querySelector('#artigo2img5');
var artigo2img6 = document.querySelector('#artigo2img6');

var scene12 = new ScrollMagic.Scene({
    triggerElement: part2,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img4, 1,
        {top: '160vh'}, {top: '50vh'}))
    .addIndicators({name: "part2"})
    .addTo(controller)
    .removeIndicators();

var scene13 = new ScrollMagic.Scene({
    triggerElement: part2,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img5, 1,
        {top: '50vh'}, {top: '20vh'}))
    .addIndicators({name: "part2"})
    .addTo(controller)
    .removeIndicators();

var scene14 = new ScrollMagic.Scene({
    triggerElement: part2,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img6, 1,
        {top: '130vh'}, {top: '20vh'}))
    .addIndicators({name: "part2"})
    .addTo(controller)
    .removeIndicators();


//Elementos HTML
var part3 = document.querySelector('#part3');

var artigo2img7 = document.querySelector('#artigo2img7');

var scene15 = new ScrollMagic.Scene({
    triggerElement: part3,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img7, 1,
        {top: '100vh'}, {top: '-10vh'}))
    .addIndicators({name: "part3"})
    .addTo(controller)
    .removeIndicators();

//Elementos HTML
var part5 = document.querySelector('#part5');

var artigo2img8 = document.querySelector('#artigo2img8');
var artigo2img9 = document.querySelector('#artigo2img9');

var scene16 = new ScrollMagic.Scene({
    triggerElement: part5,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img8, 1,
        {top: '10vh'}, {top: '0vh'}))
    .addIndicators({name: "part5"})
    .addTo(controller)
    .removeIndicators();

var scene17 = new ScrollMagic.Scene({
    triggerElement: part5,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img9, 1,
        {top: '180vh'}, {top: '0vh'}))
    .addIndicators({name: "part5"})
    .addTo(controller)
    .removeIndicators();

//Elementos HTML
var part6 = document.querySelector('#part6');

var artigo2img10 = document.querySelector('#artigo2img10');
var artigo2img11 = document.querySelector('#artigo2img11');

var scene18 = new ScrollMagic.Scene({
    triggerElement: part6,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img10, 1,
        {top: '10vh'}, {top: '0vh'}))
    .addIndicators({name: "part6"})
    .addTo(controller)
    .removeIndicators();

var scene19 = new ScrollMagic.Scene({
    triggerElement: part6,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img11, 1,
        {top: '180vh'}, {top: '0vh'}))
    .addIndicators({name: "part6"})
    .addTo(controller)
    .removeIndicators();

//Elementos HTML
var part7 = document.querySelector('#part7');

var artigo2img14 = document.querySelector('#artigo2img14');
var artigo2img15 = document.querySelector('#artigo2img15');

var scene20 = new ScrollMagic.Scene({
    triggerElement: part7,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img14, 1,
        {top: '50vh'}, {top: '0vh'}))
    .addIndicators({name: "part7"})
    .addTo(controller)
    .removeIndicators();

var scene21 = new ScrollMagic.Scene({
    triggerElement: part7,
    triggerHook: 'onEnter',
    duration: '150%'
})
    .setTween(TweenMax.fromTo(
        artigo2img15, 1,
        {top: '50vh'}, {top: '0vh'}))
    .addIndicators({name: "part7"})
    .addTo(controller)
    .removeIndicators();