 
let doors = document.querySelectorAll(".door"),
    doorSales = document.querySelectorAll(".door__sales"),
    doorWrapper = document.querySelector(".door__wrapper"),
    spinResultWrapper = document.querySelector(".spin-result-wrapper"),
    orderBlock = document.querySelector("#order"),
    door1 = document.getElementById("door__1"),
    door2 = document.getElementById("door__2"),
    door3 = document.getElementById("door__3"),
    doorSale1 = document.getElementById("door__sales1"),
    doorSale2 = document.getElementById("door__sales2"),
    doorSale3 = document.getElementById("door__sales3"),
    discount = "50%";
doors.forEach((function (e) {
    e.addEventListener("click", openDoor)
}));
var closePopup = document.querySelector(".close-popup");

function openDoor(e) {
    e.currentTarget.classList.add("open"), setTimeout((function () {
        spinResultWrapper.style.display = "block", setTimeout((function () {
            orderBlock.style.display = "block", doorWrapper.style.display = "none", start_timer && start_timer()
        }), 3500)
    }), 1500), doorSales.forEach((function (e) {
        door1.classList.contains("open") ? (doorSale1.innerHTML = discount, doorSale2.innerHTML = "50%" === discount ? "25%" : "50%", doorSale3.innerHTML = "50%" === discount ? "10%" : "25%") : door2.classList.contains("open") ? (doorSale2.innerHTML = discount, doorSale1.innerHTML = "50%" === discount ? "10%" : "25%", doorSale3.innerHTML = "50%" === discount ? "25%" : "50%") : door3.classList.contains("open") && (doorSale1.innerHTML = "50%" === discount ? "25%" : "50%", doorSale3.innerHTML = discount, doorSale2.innerHTML = "50%" === discount ? "10%" : "25%")
    }));
    for (let e = 0; e < doors.length; e++) doors[e].classList.contains("open") || setTimeout((function () {
        doors[e].classList.add("open")
    }), 2500);
    for (let e = 0; e < doors.length; e++) doors[e].removeEventListener("click", openDoor)
}
$(".pop-up-button").click((function (e) {
    $(".spin-result-wrapper").fadeOut(), e.preventDefault()
})), $(".close-popup").click((function (e) {
    $(".spin-result-wrapper").fadeOut(), e.preventDefault()
}));
var intr, time = 600;

function start_timer() {
    intr = setInterval(tick, 1e3)
}

function tick() {
    time -= 1;
    var e = Math.floor(time / 60),
        t = time - 60 * e;
    0 == e && 0 == t && clearInterval(intr), t = t >= 10 ? t : "0" + t, e = e >= 10 ? e : "0" + e, $("#min").html(e), $("#sec").html(t)
}
const months = ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "septembra", "október", "november", "december"],
    monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
    days = ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"],
    daysMin = ["", "", "", "", "", "", ""],
    seasons = ["zimné", "jar", "leto", "jeseň"];

function postDate(e, t, o, n, r) {
    for (let e = 0; e < 60; e++) l(e, "date-"), l(e, "date");

    function l(e, t) {
        let o;
        o = "date-" === t ? -e : e;
        const n = new Date(Date.now() + 864e5 * o),
            r = n.getDate(),
            l = n.getMonth() + 1,
            a = n.getFullYear(),
            d = i(r),
            c = d + "." + i(l) + "." + a,
            u = t + e,
            m = document.querySelectorAll("." + u);
        for (let e = 0; e < m.length; e++) {
            const t = m[e].dataset.format;
            m[e].innerHTML = void 0 !== t && "" !== t ? String(s(d, l, a, t, o)) : c
        }
    }

    function s(e, t, n, r, l) {
        let s = r;
        const c = ["dd", "mm", "yyyy", "monthFull", "monthOnly", "year"],
            u = {
                dd: e,
                mm: i(t),
                yyyy: n,
                monthFull: a(t, o, !1),
                monthOnly: a(t, o, !1, l),
                year: d(n, l)
            };
        for (let e = 0; e < c.length; e++) {
            let t = c[e],
                o = new RegExp(t);
            s = s.replace(o, u[t])
        }
        return s.split(" ").join(" ")
    }

    function a(e, t, o, n) {
        const r = n || 0;
        let l;
        return l = e + r > 12 ? r - (12 - e) : e + r, l = e + r <= 0 ? 12 + r + 1 : e + r, s = o, a = t[l - 1], s && a && a.length > 0 ? a[0].toUpperCase() + a.slice(1) : a;
        var s, a
    }

    function d(e, t) {
        return e + t
    }

    function i(e) {
        return e < 10 ? "0" + e : e
    }
}
document.body.classList.contains("ev-date") && document.addEventListener("DOMContentLoaded", (function () {
    postDate(days, daysMin, months, monthMin, seasons)
}));
 