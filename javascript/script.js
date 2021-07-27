function rollOut() {
    document.getElementById("menu").style.width="75%";
    document.getElementById("rollout_bars").style.display="none";
    document.getElementById("rollin_bars").style.display="block";
}

function rollIn() {
    document.getElementById("menu").style.width="0px";
    document.getElementById("rollout_bars").style.display="block";
    document.getElementById("rollin_bars").style.display="none";
}