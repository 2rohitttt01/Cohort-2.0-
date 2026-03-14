var img =document.querySelector('img');
var h2 =document.querySelector('h2 span');
var bd =document.body;

img.addEventListener('mouseenter',function(){
    h2.innerHTML = "dorr hoja BSDK";
    bd.style.backgroundColor='red';

})

img.addEventListener('mouseleave',function(){
    h2.innerHTML="good! door he rahh";
    bd.style.backgroundColor='black';
})