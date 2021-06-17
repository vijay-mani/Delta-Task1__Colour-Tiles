let Clock = document.querySelector("#StopWatch");
let T4x4 = document.querySelectorAll(".A4x4");
let T6x6 = document.querySelectorAll(".B6x6");
let RC = () => {
    return Math.floor(Math.random() * 255) + 1;
}
let CD = [`rgb(${RC()},${RC()},${RC()})`, `rgb(${RC()},${RC()},${RC()})`, `rgb(${RC()},${RC()},${RC()})`, `rgb(${RC()},${RC()},${RC()})`, `rgb(${RC()},${RC()},${RC()})`, `rgb(${RC()},${RC()},${RC()})`]

T4x4[0].style.backgroundColor = CD[0];
T4x4[1].style.backgroundColor = CD[1];
T4x4[2].style.backgroundColor = CD[2];
T4x4[3].style.backgroundColor = CD[3];
T4x4[4].style.backgroundColor = CD[4];
T4x4[5].style.backgroundColor = CD[5];
T4x4[6].style.backgroundColor = CD[4];
T4x4[7].style.backgroundColor = CD[3];
T4x4[8].style.backgroundColor = CD[1];
T4x4[9].style.backgroundColor = CD[0];
T4x4[10].style.backgroundColor = CD[2];
T4x4[11].style.backgroundColor = v[5];
T4x4[12].style.backgroundColor = CD[3];
T4x4[13].style.backgroundColor = CD[4];
T4x4[14].style.backgroundColor = CD[5];
T4x4[15].style.backgroundColor = CD[0];

T6x6[0].style.backgroundColor = CD[5]
T6x6[1].style.backgroundColor = CD[3]
T6x6[2].style.backgroundColor = CD[4]
T6x6[3].style.backgroundColor = CD[2]
T6x6[4].style.backgroundColor = CD[1]
T6x6[5].style.backgroundColor = CD[0]
T6x6[6].style.backgroundColor = CD[4]
T6x6[7].style.backgroundColor = CD[3]
T6x6[8].style.backgroundColor = CD[5]
T6x6[9].style.backgroundColor = CD[1]
T6x6[10].style.backgroundColor = CD[2]
T6x6[11].style.backgroundColor = CD[5]
T6x6[12].style.backgroundColor = CD[0]
T6x6[13].style.backgroundColor = CD[4]
T6x6[14].style.backgroundColor = CD[0]
T6x6[15].style.backgroundColor = CD[1]
T6x6[16].style.backgroundColor = CD[2]
T6x6[17].style.backgroundColor = CD[3]
T6x6[18].style.backgroundColor = CD[5]
T6x6[19].style.backgroundColor = CD[1]
T6x6[20].style.backgroundColor = CD[2]
T6x6[21].style.backgroundColor = CD[4]
T6x6[22].style.backgroundColor = CD[0]
T6x6[23].style.backgroundColor = CD[3]
T6x6[24].style.backgroundColor = CD[5]
T6x6[25].style.backgroundColor = CD[3]
T6x6[26].style.backgroundColor = CD[4]
T6x6[27].style.backgroundColor = CD[2]
T6x6[28].style.backgroundColor = CD[0]
T6x6[29].style.backgroundColor = CD[1]
T6x6[30].style.backgroundColor = CD[0]
T6x6[31].style.backgroundColor = CD[5]
T6x6[32].style.backgroundColor = CD[2]
T6x6[33].style.backgroundColor = CD[4]
T6x6[34].style.backgroundColor = CD[3]
T6x6[35].style.backgroundColor = CD[1]

let Item36 = () => {
    let R6x6 = Math.floor(Math.random() * 36);
    return parseInt(R6x6);
}
let Empty = Item36();
let RefreshB = document.querySelector("#Refresh");
T6x6[Empty].style.backgroundColor = "rgb(202, 199, 199)";
function reload() {
    reload = location.reload();
    alert("This page will get refreshed!!");
}
refreshButton.addEventListener("click", reload, false);
let k = 0;
let c = 0;
let CNo = 0;
function index() {
    for (let k of T6x6) {
        k.addEventListener("click", () => {
            c = k.id;
            swap();
        })
    }
    function swap() {
        win();
        if (displayClock.innerText === "00:00:00" && k === 0) {
            alert("Please click on start button!!");
            k = 1;
        }
        if (Empty - 6 >= 0) {
            if (parseInt(c) === Empty - 5) {
                T6x6[Empty].style.backgroundColor = T6x6[Empty - 6].style.backgroundColor;
                T6x6[Empty - 6].style.backgroundColor = "rgb(202, 199, 199)";
                Empty = Empty - 6;
                CNo++;
                localStorage.setItem("counts", CNo)
            }
        }
        if (Empty + 6 < 36) {
            if (parseInt(c) === Empty + 7) {
                T6x6[Empty].style.backgroundColor = T6x6[Empty + 6].style.backgroundColor;
                T6x6[Empty + 6].style.backgroundColor = "rgb(202, 199, 199)";
                Empty = Empty + 6;
                CNo++;
                localStorage.setItem("counts", CNo)
            }
        }
        if (Empty % 6 != 0) {
            if (parseInt(c) === Empty) {
                T6x6[Empty].style.backgroundColor = T6x6[Empty - 1].style.backgroundColor;
                T6x6[Empty - 1].style.backgroundColor = "rgb(202, 199, 199)";
                Empty = Empty - 1;
                CNo++;
                localStorage.setItem("counts", CNo)
            }
        }
        if ((Empty + 1) % 6 != 0) {
            if (parseInt(c) === Empty + 2) {
                divColT6x6or2[Empty].style.backgroundColor = T6x6[Empty + 1].style.backgroundColor;
                T6x6[Empty + 1].style.backgroundColor = "rgb(202, 199, 199)";
                Empty = Empty + 1;
                CNo++;
                localStorage.setItem("counts", CNo)
            }
        }
    }
}
setInterval(index, 500);
function score() {
    let score = Math.floor(100000 / ((parseInt(displayMinutes) * 60) + displaySeconds));
    localStorage.setItem("score", score);
}
function win() {
    if (T4x4[0].style.backgroundColor === T6x6[7].style.backgroundColor) {
        if (T4x4[1].style.backgroundColor === T6x6[8].style.backgroundColor) {
            if (T4x4[2].style.backgroundColor === T6x6[9].style.backgroundColor) {
                if (T4x4[3].style.backgroundColor === T6x6[10].style.backgroundColor) {
                    if (T4x4[4].style.backgroundColor === T6x6[13].style.backgroundColor) {
                        if (T4x4[5].style.backgroundColor === T6x6[14].style.backgroundColor) {
                            if (T4x4[6].style.backgroundColor === T6x6[15].style.backgroundColor) {
                                if (T4x4[7].style.backgroundColor === T6x6[16].style.backgroundColor) {
                                    if (T4x4[8].style.backgroundColor === T6x6[19].style.backgroundColor) {
                                        if (T4x4[9].style.backgroundColor === T6x6[20].style.backgroundColor) {
                                            if (T4x4[10].style.backgroundColor === T6x6[21].style.backgroundColor) {
                                                if (T4x4[11].style.backgroundColor === T6x6[22].style.backgroundColor) {
                                                    if (T4x4[12].style.backgroundColor === T6x6[25].style.backgroundColor) {
                                                        if (T4x4[13].style.backgroundColor === T6x6[26].style.backgroundColor) {
                                                            if (T4x4[14].style.backgroundColor === T6x6[27].style.backgroundColor) {
                                                                if (T4x4[15].style.backgroundColor === T6x6[28].style.backgroundColor) {
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
let status = "stopped";
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
    if (status === "stopped") {
        Int = window.setInt(stopWatch, 1000);
        document.getElementById("SS").innerHTML = "Stop";
        status = "started";
    }
    else {
        window.clearInt(Int);
        document.getElementById("SS").innerHTML = "Start";
        status = "stopped";
    }
}