// menuButton = document.getElementsByClassName('menuButton');
// menuButton.addEventListener('ontouchstart', ()=>{
//     document.getElementsByClassName('list').style.display = 'block';
// });

function openFunction(){
    document.querySelector('.menuButtonOpen').style.display = 'none';
    document.querySelector('.menuButtonClose').style.display = 'block';
    document.querySelector('.list').style.display = 'block';
    document.querySelector('.items').style.display = 'inline-block';
}

function closeFunction(){
    document.querySelector('.menuButtonOpen').style.display = 'block';
    document.querySelector('.menuButtonClose').style.display = 'none';
    document.querySelector('.list').style.display = 'none';
    document.querySelector('.items').style.display = 'none';
}