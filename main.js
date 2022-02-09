const main = document.querySelector('.main');
const reset = document.querySelector('.reset');
const timer = document.querySelector('div');

let flag = true
let time = 0
let trigger

const startStop = () => {
    if (flag) {
        flag = !flag;
        main.textContent = 'Stop';
        trigger = setInterval(timeFlow, 10)
    } else {
        flag = !flag;
        main.textContent = 'Start';
        clearInterval(trigger);
    }
}

const timeFlow = () => {
    time++;
    timer.textContent = (time / 100).toFixed(2);
}

const resetTimer = () => {
    flag = true;
    time = 0;
    main.textContent = 'Start';
    timer.textContent = '---';
    clearInterval(trigger);

}

main.addEventListener('click', startStop)
reset.addEventListener('click', resetTimer)