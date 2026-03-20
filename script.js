//scroll button script
const topBtn = document.getElementById("topBtn");

topBtn.onclick = function(){
    window.scrollTo({
    top:0,
    behavior:"smooth"
    });
};

//animation scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".section, .project-card, .content-box, .skill-group");

hiddenElements.forEach((el) => observer.observe(el));

//animated bars on scroll
const bars = document.querySelectorAll(".progress");

const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.width = entry.target.getAttribute("style").split(":")[1];
        }
    });
});

bars.forEach(bar => barObserver.observe(bar));
