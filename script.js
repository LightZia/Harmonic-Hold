const circ = document.querySelector('.circ');
const bcirc = document.querySelector('.bcirc')
const body = document.querySelector('body')
const text = document.querySelector('.text')
const textDisplay = document.querySelector('.text-display')
const btext = document.querySelector('.btext')
const cover = document.querySelector('.cover')
const plbord = document.querySelector('.cover-border')
const play = document.querySelector('.play')
const fwd = document.querySelector('.fwd')
const bwd = document.querySelector('.bwd')
const line = document.querySelector('.line-ctrl')
const playFill = document.querySelector('.play svg')
const playFillPause = document.querySelector('.play svg:nth-child(2)')
const fwdFill = document.querySelector('.fwd svg');
const bwdFill = document.querySelector('.bwd svg');
const infoText = document.querySelector('.song-details')
const main = document.querySelector('.player')
const currentSec = document.getElementById('current-sec')
const durationSec = document.getElementById('duration-sec')
const playSVG = document.getElementById('play-icon')
const pauseSVG = document.getElementById('pause-icon')
const menuBar = document.querySelector('.menu-bar')
const close = document.getElementById('cross')
const menuIcon = document.querySelector('.menu-icon')

const downSrc = 'down.mp3';
const upSrc = 'up.mp3';

const colors = ['#F08080', '#5E3558', '#36454F', '#142727'];
const bgColor = ['#87CEEB', '#004225', '#2A0202', '#0A0A0A']
const bColor = ['#333333', '#D88C9A', '#D4AF37', '#E5E4E2'];
const shortTexts = ['LS', 'RG', 'MR', 'CB']//Light Sky, Royal Green, Matte Red, Classy Black
const fullTexts = ['Light Sky', 'Royal Green', 'Matte Red', 'Classy Black'];
const txtcolors = ['#87CEEB', '#004225', '#2A0202', '#0A0A0A'];
const txtFont = ['Petit Formal Script', 'Almendra Display', 'Imperial Script', 'Poiret One'];
const txtSize = ['1.3vw', '1.5vw', '2vw', '1.5vw'];
const bgEffect = ['0 0 40px 10px rgba(0, 0, 80, 0.6), inset 0 0 20px rgba(0, 0, 50, 0.5)',
    '0 0 40px 10px rgba(200, 255, 200, 0.5), inset 0 0 20px rgba(180, 255, 180, 0.4)',
    '0 0 40px 10px rgba(255, 50, 50, 0.6), inset 0 0 20px rgba(255, 0, 0, 0.5)',
    '0 0 50px 20px rgba(52, 152, 219, 0.3), inset 0 0 20px rgba(255,255,255,0.1)'];
const buttonEffect = ['0.3vw 0.3vw 0.6vw rgba(5, 32, 42, 0.9), -0.3vw -0.3vw 0.6vw rgba(255, 255, 255, 0.6), inset -0.3vw -0.3vw 0.6vw rgba(255, 255, 255, 0.6), inset 0.3vw 0.3vw 0.6vw rgba(5, 32, 42, 0.6)',
    '0.3vw 0.3vw 0.6vw rgba(15, 30, 8, 0.8), -0.3vw -0.3vw 0.6vw rgba(200, 255, 200, 0.3), inset -0.3vw -0.3vw 0.6vw rgba(255, 255, 255, 0.5), inset 0.3vw 0.3vw 0.6vw rgba(66, 20, 69, 0.5)',
    '0.3vw 0.3vw 0.6vw rgba(0, 0, 0, 0.9), -0.3vw -0.3vw 0.6vw rgba(255, 100, 100, 0.3), inset -0.3vw -0.3vw 0.6vw rgba(255, 255, 255, 0.5), inset 0.3vw 0.3vw 0.6vw rgba(65, 53, 27, 0.5)',
    '0.3vw 0.3vw 0.6vw rgba(0, 0, 0, 0.9), -0.3vw -0.3vw 0.6vw rgba(255, 255, 255, 0.2), inset -0.3vw -0.3vw 0.6vw rgba(255, 255, 255, 0.2), inset 0.3vw 0.3vw 0.6vw rgba(17, 15, 15, 0.5)'];
const playIcon = ['Cover/Hope.jpg', 'Cover/rISE\ oF\ dAWN.jpg', 'Cover/Wind\ of\ fire.jpg', 'Cover/Fall\ on\ Grass.jpg']
const sideColor = [
    'rgba(0, 0, 50, 0.5)',
    'rgba(180, 255, 180, 0.2)',
    'rgba(255, 0, 0, 0.14)',
    'rgba(255,255,255,0.1)'
]

let root = document.documentElement;

let colorIndex = 0;
// let bgColorIndex = 0
// let bColorIndex = 0
// let textIndex = 0
// let bIndex = 0
// let txtcindx = 0
// let txtFontIndex = 0
// let txtSizeIndex = 0
// let bgEffectIndex = 0
// let buttonFXIndex = 0
// let playIconIndex = 0
// let iconIndex = 0
// let sideColorIndex = 0



circ.addEventListener('mousedown', function () {
    circ.style.transition = 'transform 0s, background-color 0.3s';
    circ.style.transform = 'scale(0.8)';

    const clickSound = new Audio(downSrc);
    clickSound.play();

    btext.style.transition = 'opacity 0.2s ease-in-out'
    btext.style.opacity = 0;
});

circ.addEventListener('mouseup', function() {
    circ.style.transition = 'transform 0s, background-color 0.3s';
    circ.style.transform = 'scale(1)';

    const clickSound = new Audio(upSrc);
    clickSound.play();

    console.log('Color Index: ' + colorIndex)

    circ.style.backgroundColor = colors[colorIndex];
    playFill.style.fill = colors[colorIndex];
    playFillPause.style.fill = colors[colorIndex];
    fwdFill.style.fill = colors[colorIndex];
    bwdFill.style.fill = colors[colorIndex];
    
    
    
    plbord.style.transition = 'box-shadow 0.3s ease-in-out'
    plbord.style.boxShadow = bgEffect[colorIndex];
    // bgEffectIndex = (bgEffectIndex + 1) % bgEffect.length;

    body.style.transition = 'background-color 0.3s ease-in-out';
    body.style.backgroundColor = bgColor[colorIndex];
    // bgColorIndex = (bgColorIndex + 1) % bgColor.length;

    bcirc.style.transition = 'background-color 0.3s ease-in-out';
    bcirc.style.backgroundColor = bColor[colorIndex];
    plbord.style.transition = 'box-shadow 0.5s, background-color 0.3s ease-in-out';
    plbord.style.borderColor = bColor[colorIndex];
    play.style.transition = 'background-color 0.9s ease-in-out';
    play.style.backgroundColor = bColor[colorIndex]
    fwd.style.transition = 'background-color 0.9s ease-in-out';
    fwd.style.backgroundColor = bColor[colorIndex]
    bwd.style.transition = 'background-color 0.9s ease-in-out';
    bwd.style.backgroundColor = bColor[colorIndex]    
    infoText.style.transition = 'color 0.3s ease-in-out';
    infoText.style.color = bColor[colorIndex];
    currentSec.style.transition = 'color 0.3s ease-in-out';
    currentSec.style.color = bColor[colorIndex];
    durationSec.style.transition = 'color 0.3s ease-in-out';
    durationSec.style.color = bColor[colorIndex];

    // bColorIndex = (bColorIndex + 1) % bColor.length;

    text.innerText = shortTexts[colorIndex];
    // textIndex = (textIndex + 1) % shortTexts.length

    btext.innerText = fullTexts[colorIndex];
    // bIndex = (bIndex + 1) % fullTexts.length;

    btext.style.color = txtcolors[colorIndex];
    // txtcindx = (txtcindx + 1) % txtcolors.length;

    btext.style.transition = 'opacity 0.2s ease-in-out'
    btext.style.opacity = 1;

    btext.style.fontFamily = txtFont[colorIndex];
    infoText.style.fontFamily = txtFont[colorIndex];
    currentSec.style.fontFamily = txtFont[colorIndex];
    durationSec.style.fontFamily = txtFont[colorIndex];

    // txtFontIndex = (txtFontIndex + 1) % txtFont.length;

    btext.style.fontSize = txtSize[colorIndex];
    // txtSizeIndex = (txtSizeIndex + 1) % txtSize.length;

    play.style.transition = 'box-shadow 0.3s ease-in-out';
    fwd.style.transition = 'box-shadow 0.3s ease-in-out';
    bwd.style.transition = 'box-shadow 0.3s ease-in-out';
    play.style.boxShadow = buttonEffect[colorIndex];
    fwd.style.boxShadow = buttonEffect[colorIndex];
    bwd.style.boxShadow = buttonEffect[colorIndex];
    // buttonFXIndex = (colorIndex + 1) % buttonEffect.length;

    // sidePanel.style.transition = 'background-color 0.3s ease-in-out';
    // sidePanel.style.backgroundColor = sideColor[colorIndex];
    // sideColorIndex = (sideColorIndex + 1) % sideColor.length;

    colorIndex = (colorIndex + 1) % shortTexts.length;
});

circ.addEventListener('mouseenter', function(){
    circ.style.transition = 'transform 0s';
    circ.style.transform = 'scale(1)';
    bcirc.style.transition = 'width 0.3s ease-in-out';
    bcirc.style.width = '15vw';
    bcirc.style.right = '-45%';
    bcirc.style.borderRadius = '5vw';

    btext.style.transition = 'opacity 1s ease-in-out'
    btext.style.opacity = 1;
})
circ.addEventListener('mouseleave', function(){
    circ.style.transition = 'transform 0s';
    circ.style.transform = 'scale(1)';
    bcirc.style.transition = 'width 0.3s ease-in-out';
    bcirc.style.width = '4vw';
    bcirc.style.right = '-45%'
    bcirc.style.borderRadius = '5vw';
    text.style.transform = 'translateX(0%)'

    btext.style.transition = 'opacity 0.2s ease-in-out';
    btext.style.opacity = 0;
})

cover.addEventListener('mouseenter', () => {
    plbord.style.transition = 'transform 1s ease-in-out'
    plbord.style.transform = 'scale(1.05)'
    cover.style.transition = 'transform 0.4s ease-in-out'
    cover.style.transform = 'scale(1.05)'
})
cover.addEventListener('mouseleave', () => {
    plbord.style.transform = 'scale(1)';
    cover.style.transform = 'scale(1)';
});

play.addEventListener('click', () => {
    const isOpen = pauseSVG.style.display === 'block';
    playSVG.style.display = isOpen ? 'block' : 'none';
    pauseSVG.style.display = isOpen ? 'none' : 'block';
})
play.addEventListener('mouseenter', () => {
    play.style.transition = 'opacity 0.3s, transform 0.2s ease-in-out';
    play.style.transform = 'scale(1.05)';
    play.style.opacity = 1;
})
play.addEventListener('mouseleave', () => {
    play.style.transform = 'scale(1)';
    play.style.opacity = 0.7;
})


fwd.addEventListener('click', () => {

})

bwd.addEventListener('click', () => {

})

fwd.addEventListener('mouseenter', () => {
    fwd.style.transition = 'opacity 0.3s, transform 0.2s ease-in-out';
    fwd.style.transform = 'scale(1.05)';
    fwd.style.opacity = 1;
})
fwd.addEventListener('mouseleave', () => {
    fwd.style.transform = 'scale(1)';
    fwd.style.opacity = 0.7;
})

bwd.addEventListener('mouseenter', () => {
    bwd.style.transition = 'opacity 0.3s, transform 0.2s ease-in-out';
    bwd.style.transform = 'scale(1.05)';
    bwd.style.opacity = 1;
})
bwd.addEventListener('mouseleave', () => {
    bwd.style.transform = 'scale(1)';
    bwd.style.opacity = 0.7;
})

close.addEventListener('click', () => {
    menuBar.style.transition = 'transform 0.5s ease'
    menuBar.style.transform = 'translateX(-100%)'
})

menuIcon.addEventListener('click', () => {
    menuBar.style.transition = 'transform 0.5s ease'
    menuBar.style.transform = 'translateX(0%)'
})