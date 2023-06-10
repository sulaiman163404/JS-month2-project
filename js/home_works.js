const emailCheck = prompt('Введите ваш email ...   (пример - xxxxxxxxxx@gmail.com)')
const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/ig

if (emailCheck.match(regExp)){
    console.log('Вы авторизованы')
}else {
    console.log('Не правильно введен email')
}




function moveBlock(position) {
    const smallBlock = document.querySelector("#smallBlock");
    smallBlock.style.left = position + "px";


    if (position < 450) {
        setTimeout(function() {
            moveBlock(position + 10);
        },120);
    }
}

moveBlock(0);