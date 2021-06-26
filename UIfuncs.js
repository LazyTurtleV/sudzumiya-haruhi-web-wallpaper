export function setCurrentTime(){
    document.getElementById("time").innerText = getCurrentTime();
}

export function setCurrentDate(){
    document.getElementById("date").innerText = getCurrentDate();
}

function getCurrentDate(){
    let date = new Date();

    let weekday = date.toLocaleDateString('en-us', { weekday: 'long'}).substr(0, 3);
    let numberFormatOptions = {
        minimumIntegerDigits: 2,
        useGrouping: false
    }

    return  `${date.getFullYear()}-${date.getMonth().toLocaleString('en-ua', numberFormatOptions)}-`
             + `${date.getDate().toLocaleString('en-ua', numberFormatOptions)} ${weekday}.`;
}

function getCurrentTime(){
    let time = new Date();

    let numberFormatOptions = {
        minimumIntegerDigits: 2,
        useGrouping: false
    }

    return `${time.getHours()}:${time.getMinutes().toLocaleString('en-ua', numberFormatOptions)}:`
            + `${time.getSeconds().toLocaleString('en-ua', numberFormatOptions)}`;
}