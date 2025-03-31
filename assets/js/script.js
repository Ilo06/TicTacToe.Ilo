const cross1 = document.getElementById("cross1");
const cross2 = document.getElementById("cross2");
const cross3 = document.getElementById("cross3");
const cross4 = document.getElementById("cross4");
const cross5 = document.getElementById("cross5");
const cross6 = document.getElementById("cross6");
const cross7 = document.getElementById("cross7");
const cross8 = document.getElementById("cross8");
const cross9 = document.getElementById("cross9");

const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");
const circle4 = document.getElementById("circle4");
const circle5 = document.getElementById("circle5");
const circle6 = document.getElementById("circle6");
const circle7 = document.getElementById("circle7");
const circle8 = document.getElementById("circle8");
const circle9 = document.getElementById("circle9");

const turn = document.querySelector(".turn");
const winner = document.querySelector(".winner")
const restart = document.getElementById("restart")

const circledraw = document.getElementById("circledraw")
const crossdraw = document.getElementById("crossdraw")
const crosswin = document.getElementById("crosswin")
const circlewin = document.getElementById("circlewin")
const circlelose = document.getElementById("circlelose")
const crosslose = document.getElementById("crosslose")

const refreshIcon = document.getElementById("refresh_icon")
const toggleStats = document.getElementById("toggle_stats")
const stats = document.querySelector(".stats")


let currentTab = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."]
]

const emptyTab = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."]
]

toggleStats.addEventListener("click", () => {
    stats.classList.toggle("hide")
    if (stats.classList.contains("hide") == false) {
        toggleStats.innerHTML = "✖️"
        toggleStats.style.paddingInline = "10px"
    } else {
        toggleStats.style.paddingInline = "20px"
        toggleStats.innerHTML = "Show Stats"
    }
})

let currentPlayer = "cross"
let currentState = "playing"


turn.innerHTML = `-It's CROSS' s turn now`

restart.addEventListener("click", () => {
    if (currentState == "pause") {
        cross1.classList.remove("remove")
        cross2.classList.remove("remove")
        cross3.classList.remove("remove")
        cross4.classList.remove("remove")
        cross5.classList.remove("remove")
        cross6.classList.remove("remove")
        cross7.classList.remove("remove")
        cross8.classList.remove("remove")
        cross9.classList.remove("remove")

        circle1.classList.remove("remove")
        circle2.classList.remove("remove")
        circle3.classList.remove("remove")
        circle4.classList.remove("remove")
        circle5.classList.remove("remove")
        circle6.classList.remove("remove")
        circle7.classList.remove("remove")
        circle8.classList.remove("remove")
        circle9.classList.remove("remove")

        cross1.style.opacity = 0;
        cross2.style.opacity = 0;
        cross3.style.opacity = 0;
        cross4.style.opacity = 0;
        cross5.style.opacity = 0;
        cross6.style.opacity = 0;
        cross7.style.opacity = 0;
        cross8.style.opacity = 0;
        cross9.style.opacity = 0;

        cross1.style.height = "50px";
        cross2.style.height = "50px";
        cross3.style.height = "50px";
        cross4.style.height = "50px";
        cross5.style.height = "50px";
        cross6.style.height = "50px";
        cross7.style.height = "50px";
        cross8.style.height = "50px";
        cross9.style.height = "50px";

        circle1.style.opacity = 0;
        circle2.style.opacity = 0;
        circle3.style.opacity = 0;
        circle4.style.opacity = 0;
        circle5.style.opacity = 0;
        circle6.style.opacity = 0;
        circle7.style.opacity = 0;
        circle8.style.opacity = 0;
        circle9.style.opacity = 0;

        winner.style.opacity = 0;
        winner.style.scale = 0.5;

        restart.style.opacity = 0;
        restart.style.scale = 0.5;

        currentState = "playing"
        currentTab = [
            [".", ".", "."],
            [".", ".", "."],
            [".", ".", "."]
        ]

    }
})


cross1.addEventListener("click", () => {
    if (currentPlayer == "cross") {
        cross1.style.opacity = 1
        cross1.style.height = "5px"
        currentPlayer = "circle"
        circle1.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[0].splice(0, 1, "X"))
        console.log(currentTab)
        turn.innerHTML = `It's CIRCLE' s turn now`
    }
})
cross2.addEventListener("click", () => {
    if (currentPlayer == "cross") {
        cross2.style.opacity = 1
        cross2.style.height = "5px"
        currentPlayer = "circle"
        circle2.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[0].splice(1, 1, "X"))
        console.log(currentTab)
        turn.innerHTML = `It's CIRCLE' s turn now`
    }
})
cross3.addEventListener("click", () => {
    if (currentPlayer == "cross") {
        cross3.style.opacity = 1
        cross3.style.height = "5px"
        currentPlayer = "circle"
        circle3.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[0].splice(2, 1, "X"))
        console.log(currentTab)
        turn.innerHTML = `It's CIRCLE' s turn now`
    }
})
cross4.addEventListener("click", () => {
    if (currentPlayer == "cross") {
        cross4.style.opacity = 1
        cross4.style.height = "5px"
        currentPlayer = "circle"
        circle4.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[1].splice(0, 1, "X"))
        console.log(currentTab)
        turn.innerHTML = `It's CIRCLE' s turn now`
    }
})
cross5.addEventListener("click", () => {
    if (currentPlayer == "cross") {
        cross5.style.opacity = 1
        cross5.style.height = "5px"
        currentPlayer = "circle"
        circle5.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[1].splice(1, 1, "X"))
        console.log(currentTab)
        turn.innerHTML = `It's CIRCLE' s turn now`
    }
})
cross6.addEventListener("click", () => {
    if (currentPlayer == "cross") {
        cross6.style.opacity = 1
        cross6.style.height = "5px"
        currentPlayer = "circle"
        circle6.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[1].splice(2, 1, "X"))
        console.log(currentTab)
        turn.innerHTML = `It's CIRCLE' s turn now`
    }
})
cross7.addEventListener("click", () => {
    if (currentPlayer == "cross") {
        cross7.style.opacity = 1
        cross7.style.height = "5px"
        currentPlayer = "circle"
        circle7.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[2].splice(0, 1, "X"))
        console.log(currentTab)
        turn.innerHTML = `It's CIRCLE' s turn now`
    }
})
cross8.addEventListener("click", () => {
    if (currentPlayer == "cross") {
        cross8.style.opacity = 1
        cross8.style.height = "5px"
        currentPlayer = "circle"
        circle8.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[2].splice(1, 1, "X"))
        console.log(currentTab)
        turn.innerHTML = `It's CIRCLE' s turn now`
    }
})
cross9.addEventListener("click", () => {
    if (currentPlayer == "cross") {
        cross9.style.opacity = 1
        cross9.style.height = "5px"
        currentPlayer = "circle"
        circle9.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[2].splice(2, 1, "X"))
        console.log(currentTab)
        turn.innerHTML = `It's CIRCLE' s turn now`
    }
})


circle1.addEventListener("click", () => {
    if (currentPlayer == "circle") {
        circle1.style.opacity = 1
        circle1.style.width = "35px"
        circle1.style.backgroundColor = "transparent"
        currentPlayer = "cross"
        cross1.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[0].splice(0, 1, "O"))
        console.log(currentTab)
        turn.innerHTML = `-It's CROSS' s turn now`
    }
})
circle2.addEventListener("click", () => {
    if (currentPlayer == "circle") {
        circle2.style.opacity = 1
        circle2.style.width = "35px"
        circle2.style.backgroundColor = "transparent"
        currentPlayer = "cross"
        cross2.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[0].splice(1, 1, "O"))
        console.log(currentTab)
        turn.innerHTML = `-It's CROSS' s turn now`
    }
})
circle3.addEventListener("click", () => {
    if (currentPlayer == "circle") {
        circle3.style.opacity = 1
        circle3.style.width = "35px"
        circle3.style.backgroundColor = "transparent"
        currentPlayer = "cross"
        cross3.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[0].splice(2, 1, "O"))
        console.log(currentTab)
        turn.innerHTML = `-It's CROSS' s turn now`
    }
})
circle4.addEventListener("click", () => {
    if (currentPlayer == "circle") {
        circle4.style.opacity = 1
        circle4.style.width = "35px"
        circle4.style.backgroundColor = "transparent"
        currentPlayer = "cross"
        cross4.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[1].splice(0, 1, "O"))
        console.log(currentTab)
        turn.innerHTML = `-It's CROSS' s turn now`
    }
})
circle5.addEventListener("click", () => {
    if (currentPlayer == "circle") {
        circle5.style.opacity = 1
        circle5.style.width = "35px"
        circle5.style.backgroundColor = "transparent"
        currentPlayer = "cross"
        cross5.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[1].splice(1, 1, "O"))
        console.log(currentTab)
        turn.innerHTML = `-It's CROSS' s turn now`
    }
})
circle6.addEventListener("click", () => {
    if (currentPlayer == "circle") {
        circle6.style.opacity = 1
        circle6.style.width = "35px"
        circle6.style.backgroundColor = "transparent"
        currentPlayer = "cross"
        cross6.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[1].splice(2, 1, "O"))
        console.log(currentTab)
        turn.innerHTML = `-It's CROSS' s turn now`
    }
})
circle7.addEventListener("click", () => {
    if (currentPlayer == "circle") {
        circle7.style.opacity = 1
        circle7.style.width = "35px"
        circle7.style.backgroundColor = "transparent"
        currentPlayer = "cross"
        cross7.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[2].splice(0, 1, "O"))
        console.log(currentTab)
        turn.innerHTML = `-It's CROSS' s turn now`
    }
})
circle8.addEventListener("click", () => {
    if (currentPlayer == "circle") {
        circle8.style.opacity = 1
        circle8.style.width = "35px"
        circle8.style.backgroundColor = "transparent"
        currentPlayer = "cross"
        cross8.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[2].splice(1, 1, "O"))
        console.log(currentTab)
        turn.innerHTML = `-It's CROSS' s turn now`
    }
})
circle9.addEventListener("click", () => {
    if (currentPlayer == "circle") {
        circle9.style.opacity = 1
        circle9.style.width = "35px"
        circle9.style.backgroundColor = "transparent"
        currentPlayer = "cross"
        cross9.classList.add("remove")
        currentTab = currentTab.splice(0, 3, currentTab[2].splice(2, 1, "O"))
        console.log(currentTab)
        turn.innerHTML = `-It's CROSS' s turn now`
    }
})

if (currentState == "playing") {
    setInterval(() => {
        // CROSS WIN CASES

        if (currentTab[0][0] == currentTab[0][1] && currentTab[0][0] == currentTab[0][2] && currentTab[0][0] == "X") {
            winner.innerHTML = `<h2>CROSS WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            crosswin.innerHTML++;
            circlelose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[1][0] == currentTab[1][1] && currentTab[1][0] == currentTab[1][2] && currentTab[1][0] == "X") {
            winner.innerHTML = `<h2>CROSS WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            crosswin.innerHTML++;
            circlelose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[2][0] == currentTab[2][1] && currentTab[2][0] == currentTab[2][2] && currentTab[2][0] == "X") {
            winner.innerHTML = `<h2>CROSS WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            crosswin.innerHTML++;
            circlelose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[0][0] == currentTab[1][0] && currentTab[0][0] == currentTab[2][0] && currentTab[0][0] == "X") {
            winner.innerHTML = `<h2>CROSS WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            crosswin.innerHTML++;
            circlelose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[0][1] == currentTab[1][1] && currentTab[0][1] == currentTab[2][1] && currentTab[0][1] == "X") {
            winner.innerHTML = `<h2>CROSS WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            crosswin.innerHTML++;
            circlelose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[0][2] == currentTab[1][2] && currentTab[0][2] == currentTab[2][2] && currentTab[0][2] == "X") {
            winner.innerHTML = `<h2>CROSS WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            crosswin.innerHTML++;
            circlelose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[0][0] == currentTab[1][1] && currentTab[0][0] == currentTab[2][2] && currentTab[0][0] == "X") {
            winner.innerHTML = `<h2>CROSS WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            crosswin.innerHTML++;
            circlelose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[0][2] == currentTab[1][1] && currentTab[0][2] == currentTab[2][0] && currentTab[0][2] == "X") {
            winner.innerHTML = `<h2>CROSS WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            crosswin.innerHTML++;
            circlelose.innerHTML++;
            currentState = "pause"

        }

        // CIRCLE WIN case
        else if (currentTab[0][0] == currentTab[0][1] && currentTab[0][0] == currentTab[0][2] && currentTab[0][0] == "O") {
            winner.innerHTML = `<h2>CIRCLE WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            circlewin.innerHTML++;
            crosslose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[1][0] == currentTab[1][1] && currentTab[1][0] == currentTab[1][2] && currentTab[1][0] == "O") {
            winner.innerHTML = `<h2>CIRCLE WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            circlewin.innerHTML++;
            crosslose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[2][0] == currentTab[2][1] && currentTab[2][0] == currentTab[2][2] && currentTab[2][0] == "O") {
            winner.innerHTML = `<h2>CIRCLE WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            circlewin.innerHTML++;
            crosslose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[0][0] == currentTab[1][0] && currentTab[0][0] == currentTab[2][0] && currentTab[0][0] == "O") {
            winner.innerHTML = `<h2>CIRCLE WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            circlewin.innerHTML++;
            crosslose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[0][1] == currentTab[1][1] && currentTab[0][1] == currentTab[2][1] && currentTab[0][1] == "O") {
            winner.innerHTML = `<h2>CIRCLE WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            circlewin.innerHTML++;
            crosslose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[0][2] == currentTab[1][2] && currentTab[0][2] == currentTab[2][2] && currentTab[0][2] == "O") {
            winner.innerHTML = `<h2>CIRCLE WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            circlewin.innerHTML++;
            crosslose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[0][0] == currentTab[1][1] && currentTab[0][0] == currentTab[2][2] && currentTab[0][0] == "O") {
            winner.innerHTML = `<h2>CIRCLE WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            circlewin.innerHTML++;
            crosslose.innerHTML++;
            currentState = "pause"

        } else if (currentTab[0][2] == currentTab[1][1] && currentTab[0][2] == currentTab[2][0] && currentTab[0][2] == "O") {
            winner.innerHTML = `<h2>CIRCLE WON</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab;
            circlewin.innerHTML++;
            crosslose.innerHTML++;
            currentState = "pause"

        }

        // DRAW CASE
        else if ((currentTab.flat(2)).includes(".") == false) {
            winner.innerHTML = `<h2>IT'S A DRAW</h2>`
            winner.style.opacity = 1
            winner.style.scale = 1
            restart.style.opacity = 1
            restart.style.scale = 1
            currentTab = emptyTab
            circledraw.innerHTML++
            crossdraw.innerHTML++
            currentState = "pause"
        }

    }, 100);
}

//KEYDOWN RESTART

document.addEventListener("keydown", (e) => {
    if (e.key == " ") {
        currentState = "pause"

        cross1.classList.remove("remove")
        cross2.classList.remove("remove")
        cross3.classList.remove("remove")
        cross4.classList.remove("remove")
        cross5.classList.remove("remove")
        cross6.classList.remove("remove")
        cross7.classList.remove("remove")
        cross8.classList.remove("remove")
        cross9.classList.remove("remove")

        circle1.classList.remove("remove")
        circle2.classList.remove("remove")
        circle3.classList.remove("remove")
        circle4.classList.remove("remove")
        circle5.classList.remove("remove")
        circle6.classList.remove("remove")
        circle7.classList.remove("remove")
        circle8.classList.remove("remove")
        circle9.classList.remove("remove")

        cross1.style.opacity = 0;
        cross2.style.opacity = 0;
        cross3.style.opacity = 0;
        cross4.style.opacity = 0;
        cross5.style.opacity = 0;
        cross6.style.opacity = 0;
        cross7.style.opacity = 0;
        cross8.style.opacity = 0;
        cross9.style.opacity = 0;

        cross1.style.height = "50px";
        cross2.style.height = "50px";
        cross3.style.height = "50px";
        cross4.style.height = "50px";
        cross5.style.height = "50px";
        cross6.style.height = "50px";
        cross7.style.height = "50px";
        cross8.style.height = "50px";
        cross9.style.height = "50px";

        circle1.style.opacity = 0;
        circle2.style.opacity = 0;
        circle3.style.opacity = 0;
        circle4.style.opacity = 0;
        circle5.style.opacity = 0;
        circle6.style.opacity = 0;
        circle7.style.opacity = 0;
        circle8.style.opacity = 0;
        circle9.style.opacity = 0;

        winner.style.opacity = 0;
        winner.style.scale = 0.5;

        restart.style.opacity = 0;
        restart.style.scale = 0.5;

        currentTab = [
            [".", ".", "."],
            [".", ".", "."],
            [".", ".", "."]
        ]
        currentState = "playing"
    }
})

refreshIcon.addEventListener("click", () => {
    refreshIcon.style.rotate = "-90deg"
})