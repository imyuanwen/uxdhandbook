function showhide(id) {
    var divId = id + "-hide";
    var b = document.getElementById(id);
    var d = document.getElementById(divId);
    if (d.style.display == "flex") {
        d.style.display = "none";
        b.innerHTML = "Show more 👇";
    } else {
        d.style.display = "flex";
        b.innerHTML = "Hide 👆";
    }
}