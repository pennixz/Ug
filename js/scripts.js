function toggleNav() {
    var mobileNav = document.getElementById('mobilenav');
    var menu = document.getElementById('menu');
    // if class hidden, set class showing, else set class hidden
    if(mobileNav.className == "container hidden") {
        mobileNav.className = "container showing";
        menu.innerHTML = "skjul meny";
    }
    else {
        mobileNav.className = "container hidden";
        menu.innerHTML = "meny"
    }
}