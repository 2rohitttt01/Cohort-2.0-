var img =document.querySelector('img');
var love = document.querySelector('#love');

img.addEventListener('dblclick',()=>{
    love.style.opacity =1;
    love.style.transform = 'translate(-50%,-50%) scale(1.5) rotate(0deg)';

    setTimeout(()=>{
        love.style.opacity =0;
        love.style.transform = 'translate(-50%,-300%) scale(1) rotate(0deg)';
    },1000)
})
 
