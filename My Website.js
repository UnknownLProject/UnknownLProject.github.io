window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0); 
})

const parallaxvid1 = document.querySelector('.parallaxvid1 video');




function myFunction() {
    document.getElementById('input').value = '' /* could be removed*/
    alert("Form summitted! Thank you");
    location.reload();
}

