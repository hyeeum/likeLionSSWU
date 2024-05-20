//사용변수
const GAME_TIME = 5;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let words = [];
let checkInterval;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.world-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

init();

function init(){
    buttonChange('게임로딩중...')
    getWords()
    wordInput.addEventListener('input',checkMatch)
}

//게임실행
function run(){
    if(isPlaying){
        return //게임 중 게임종료를 눌러도 시간이 달라지지 않음 클릭방지
    }
    isPlaying = true;
    time = GAME_TIME;
    wordInput.focus();
    scoreDisplay.innerText=0;
    timeInterval = setInterval(countDown,1000);
    checkInterval = setInterval(checkStatus,50); //50초마다 상태 체크
    buttonChange('게임중...')
}

function checkStatus(){
    if(!isPlaying && time ===0){
        buttonChange('게임시작')
        clearInterval(checkInterval)
    }
}

//단어 불러오기
function getWords(){
    // Make a request for a user with a given ID
    axios.get('https://random-word-api.herokuapp.com/word?number=100')
    .then(function (response) {
    // handle success
    response.data.forEach((word) => {
        if(word.length < 10) {
            words.push(word);
        }
    })
    buttonChange('게임시작');
    console.log(response.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
    // always executed
    });
}

//단어 일치 체크
function checkMatch(){
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
        wordInput.value="";
        if(!isPlaying){
            return; //함수 종료됨
        }
        score++;
        scoreDisplay.innerText = score;
        time = GAME_TIME;
        const randomIndex = Math.floor(Math.random()*words.length);
        wordDisplay.innerText = words[randomIndex];
    }
}

function countDown(){
    time > 0 ? time-- : isPlaying = false; 
    if(!isPlaying){
        clearInterval(timeInterval)
    }
    timeDisplay.innerText = time;
}

function buttonChange(text) {
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading')
}
