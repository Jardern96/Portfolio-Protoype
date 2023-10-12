let teaCozyMax = document.getElementById("tcHead");
let teaCozyMin = document.getElementById("tcMin");

const teaCozyExpand = event => {
    document.getElementById("tcHidden").style.display = "block"
}
teaCozyMax.onclick = teaCozyExpand

const teaCozyMinimise = event => {
    document.getElementById("tcHidden").style.display = "none"
}
teaCozyMin.onclick = teaCozyMinimise



let dgMax = document.getElementById("dgHead");
let dgMin = document.getElementById("dgMin");

const dgExpand = event => {
    document.getElementById("dgHidden").style.display = "block"
}
dgMax.onclick = dgExpand

const dgMinimise = event => {
    document.getElementById("dgHidden").style.display = "none"
}
dgMin.onclick = dgMinimise



let tcsMax = document.getElementById("tcsHead");
let tcsMin = document.getElementById("tcsMin");

const tcsExpand = event => {
    document.getElementById("tcsHidden").style.display = "block"
}
tcsMax.onclick = tcsExpand

const tcsMinimise = event => {
    document.getElementById("tcsHidden").style.display = "none"
}
tcsMin.onclick = tcsMinimise