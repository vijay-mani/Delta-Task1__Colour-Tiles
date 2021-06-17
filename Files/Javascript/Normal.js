let Clock = document.querySelector("#StopWatch");
let T3x3 = document.querySelectorAll(".A3x3");
let T5x5 = document.querySelectorAll(".B5x5");
let RC = () => {
    return Math.floor(Math.random() * 255) + 1;
}
let CD = [`rgb(${RC()},${RC()},${RC()})`, `rgb(${RC()},${RC()},${RC()})`, `rgb(${RC()},${RC()},${RC()})`, `rgb(${RC()},${RC()},${RC()})`, `rgb(${RC()},${RC()},${RC()})`, `rgb(${RC()},${RC()},${RC()})`]
T3x3[0].style.backgroundColor = CD[0];
T3x3[1].style.backgroundColor = CD[5];
T3x3[2].style.backgroundColor = CD[2];
T3x3[3].style.backgroundColor = CD[5];
T3x3[4].style.backgroundColor = CD[4];
T3x3[5].style.backgroundColor = CD[3];
T3x3[6].style.backgroundColor = CD[2];
T3x3[7].style.backgroundColor = CD[1];

T5x5[0].style.backgroundColor = CD[5]
T5x5[1].style.backgroundColor = CD[3]
T5x5[2].style.backgroundColor = CD[4]
T5x5[3].style.backgroundColor = CD[2]
T5x5[4].style.backgroundColor = CD[1]
T5x5[5].style.backgroundColor = CD[0]
T5x5[6].style.backgroundColor = CD[4]
T5x5[7].style.backgroundColor = CD[3]
T5x5[8].style.backgroundColor = CD[5]
T5x5[9].style.backgroundColor = CD[1]
T5x5[10].style.backgroundColor = CD[2]
T5x5[11].style.backgroundColor = CD[0]
T5x5[12].style.backgroundColor = CD[5]
T5x5[13].style.backgroundColor = CD[0]
T5x5[14].style.backgroundColor = CD[4]
T5x5[15].style.backgroundColor = CD[1]
T5x5[16].style.backgroundColor = CD[2]
T5x5[17].style.backgroundColor = CD[3]
T5x5[18].style.backgroundColor = CD[5]
T5x5[19].style.backgroundColor = CD[1]
T5x5[20].style.backgroundColor = CD[2]
T5x5[21].style.backgroundColor = CD[4]
T5x5[22].style.backgroundColor = CD[0]
T5x5[23].style.backgroundColor = CD[3]
T5x5[24].style.backgroundColor = CD[5]

let Item25 = () => {
    let R5x5 = Math.floor(Math.random() * 25);
    return parseInt(R5x5);
}
let Empty = Item25();
let RefreshB = document.querySelector("#Refresh");
T5x5[Empty].style.backgroundColor = "rgb(202, 199, 199)";
function reload() {
    reload = location.reload();
    alert("This page will get refreshed!!");
}
RefreshB.addEventListener("click", reload, false);
let k = 0;
let C = 0;
let CNo = 0;
function index() {
        for (let k of T5x5) {
        k.addEventListener("click", () => {
            C = k.id;
            swap();
        })
    }
    function swap() { 
        win();
        if (Clock.innerText === "00:00:00" && k === 0) {
            alert("Please click on start button!!");
            k = 1;
        }
        if (Empty - 5 >= 0) {
            if (parseInt(C) === Empty - 4) {
                T5x5[Empty].style.backgroundColor = T5x5[Empty - 5].style.backgroundColor;
                T5x5[Empty - 5].style.backgroundColor = "rgb(255, 255, 255)";
                Empty = Empty - 5;
                CNo++;
                localStorage.setItem("counts", CNo)
            }
        }
        if (Empty + 5 < 25) {
            if (parseInt(C) === Empty + 6) {
                T5x5[Empty].style.backgroundColor = T5x5[Empty + 5].style.backgroundColor;
                T5x5[Empty + 5].style.backgroundColor = "rgb(255, 255, 255)";
                Empty = Empty + 5;
                CNo++;
                localStorage.setItem("counts", CNo)
            }
        }
        if (Empty % 5 != 0) {
            if (parseInt(C) === Empty) {
                T5x5[Empty].style.backgroundColor = T5x5[Empty - 1].style.backgroundColor;
                T5x5[Empty - 1].style.backgroundColor = "rgb(255, 255, 255)";
                Empty = Empty - 1;
                CNo++;
                localStorage.setItem("counts", CNo)
            }
        }
        if ((Empty + 1) % 5 != 0) {
            if (parseInt(C) === Empty + 2) {
                T5x5[Empty].style.backgroundColor = T5x5[Empty + 1].style.backgroundColor;
                T5x5[Empty + 1].style.backgroundColor = "rgb(255, 255, 255)";
                Empty = Empty + 1;
                CNo++;
                localStorage.setItem("counts", CNo)
            }
        }
    }
}
setInterval(index, 500);
let ScoreNo = document.querySelector("score");
function score() {
    let score = Math.floor(100000 / ((parseInt(displayMinutes) * 60) + displaySeconds));
    localStorage.setItem("score", score);
}
let startBtn = document.querySelector("#startAgain")
function win() {
    if (T3x3[0].style.backgroundColor === T5x5[6].style.backgroundColor) {
        if (T3x3[1].style.backgroundColor === T5x5[7].style.backgroundColor) {
            if (T3x3[2].style.backgroundColor === T5x5[8].style.backgroundColor) {
                if (T3x3[3].style.backgroundColor === T5x5[11].style.backgroundColor) {
                    if (T3x3[4].style.backgroundColor === T5x5[12].style.backgroundColor) {
                        if (divCT3x3olor[5].style.backgroundColor === T5x5[13].style.backgroundColor) {
                            if (T3x3[6].style.backgroundColor === T5x5[16].style.backgroundColor) {
                                if (T3x3[7].style.backgroundColor === T5x5[17].style.backgroundColor) {
                                    if (T3x3[8].style.backgroundColor === T5x5[18].style.backgroundColor) {
                                        window.location = "win.html"
                                        score();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
let Sec = 0;
let Min = 0;
let Hrs = 0;
let SecDis = 0;
let MinDis = 0;
let HrDis = 0;
let Int = null;
let Status = "stopped";
function stopWatch() {
    Sec++;
    if (Sec / 60 === 1) {
        Sec = 0;
        Min++;
        if (Min / 60 === 1) {
            Min = 0;
            Hrs++;
        }
    }
    if (Sec < 10) {
        SecDis = "0" + Sec.toString();
    }
    else {
        SecDis = Sec;
    }
    if (Min < 10) {
        MinDis = "0" + Min.toString();
    }
    else {
        MinDis = Min;
    }
    if (Hrs < 10) {
        HrDis = "0" + Hrs.toString();
    }
    else {
        HrDis = Hrs;
    }
    document.getElementById("StopWatch").innerHTML = HrDis + ":" + MinDis + ":" + SecDis;

}
let StartBt = document.querySelector("#SS");
function startStop() {
    if (Status === "stopped") {
        Int = window.setInt(stopWatch, 1000);
        document.getElementById("SS").innerHTML = "Stop";
        Status = "started";
    }
    else {
        window.clearInt(Int);
        document.getElementById("SS").innerHTML = "Start";
        Status = "stopped";
    }
}
