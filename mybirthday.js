const countdown = () => {
    const now = new Date().getTime()
    const countdate = new Date("November 27, 2022 00:00:00").getTime();
    const gap = countdate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textday = Math.floor(gap / day);
    const texthour = Math.floor((gap % day) / hour);
    const textminute = Math.floor((gap % hour) / minute);
    const textsecond = Math.floor((gap % minute) /second);

    document.querySelector(".day").innerText = textday;
    document.querySelector(".hour").innerText = texthour;
    document.querySelector(".minute").innerText = textminute;
    document.querySelector(".second").innerText = textsecond;

    console.log(gap)
    
};

setInterval(countdown, 1000);