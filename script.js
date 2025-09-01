        const playBtn = document.querySelectorAll('.playBtn');
        const logo = document.querySelector('.logo');
        const tokenMenu = document.querySelector('.tokenMenu');
        const optionPiece = document.querySelectorAll('.optionPiece');
        const gameMenu = document.querySelector('.gameMenu');
        const iconPiece = document.querySelectorAll('.pieceOfMenu');
        const form = document.querySelector('#form');
        const startBtn = document.querySelector('.startBtn');
        const playerName = document.querySelectorAll('.playerName');
        const selectPlayer = document.querySelectorAll('selectPlayer');

playBtn[0].addEventListener('click', () => {
    playBtn[0].style.opacity ="0";
    playBtn[1].style.opacity ="0";
    playBtn[2].style.opacity ="0";
    logo.style.opacity ="0";
    tokenMenu.style.visibility ="visible";
    tokenMenu.style.transform ="scale(1)"
    
}) 

optionPiece[0].addEventListener('click', () => {
    tokenMenu.style.opacity ="0";
    tokenMenu.style.transform ="scale(0.5)";
    gameMenu.style.visibility ="visible";
    gameMenu.style.transform ="scale(1)";
    startBtn.style.visibility ="visible";
    startBtn.style.transform ="scale(1)";    
    iconPiece[8].src ="./images/Rpiece(coin).svg";
    iconPiece[9].src ="./images/Gpiece(coin).svg";
    iconPiece[10].src ="./images/Bpiece(coin).svg";
    iconPiece[11].src ="./images/Ypiece(coin).svg";
    sessionStorage.setItem('Rpiece', './images/Rpiece(coin).svg');
    sessionStorage.setItem('Gpiece', './images/Gpiece(coin).svg');
    sessionStorage.setItem('Bpiece', './images/Bpiece(coin).svg');
    sessionStorage.setItem('Ypiece', './images/Ypiece(coin).svg'); 
    sessionStorage.setItem('height', '21px');
    sessionStorage.setItem('width', '21px');
    sessionStorage.setItem('margin', '0 0 0 0');
})


optionPiece[1].addEventListener('click', () => {
    tokenMenu.style.opacity ="0";
    tokenMenu.style.transform ="scale(0.5)";
    gameMenu.style.visibility ="visible";
    gameMenu.style.transform ="scale(1)";
    startBtn.style.visibility ="visible";
    startBtn.style.transform ="scale(1)";
    iconPiece[8].src ="./images/Rpiece(arrow).svg";
    iconPiece[9].src ="./images/Gpiece(arrow).svg";
    iconPiece[10].src ="./images/Bpiece(arrow).svg";
    iconPiece[11].src ="./images/Ypiece(arrow).svg";
    sessionStorage.setItem('Rpiece', './images/Rpiece(arrow).svg');
    sessionStorage.setItem('Gpiece', './images/Gpiece(arrow).svg');
    sessionStorage.setItem('Bpiece', './images/Bpiece(arrow).svg');
    sessionStorage.setItem('Ypiece', './images/Ypiece(arrow).svg');
    sessionStorage.setItem('height', '35px');
    sessionStorage.setItem('width', '35px');
    sessionStorage.setItem('margin', '0 0 25px 0');
}) 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const firstPlayerName = playerName[0].value;
    const secondPlayerName = playerName[1].value;
    const thirdPlayerName = playerName[2].value;
    const fourthPlayerName = playerName[3].value;
    
    sessionStorage.setItem('firstPlayer', firstPlayerName);
    sessionStorage.setItem('secondPlayer', secondPlayerName);
    sessionStorage.setItem('thirdPlayer', thirdPlayerName);
    sessionStorage.setItem('fourthPlayer', fourthPlayerName);
    
    
    window.location.href ="game.html";
}) 
