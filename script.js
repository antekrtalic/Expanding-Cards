const panels = document.querySelectorAll('.panel')
const headings = document.querySelectorAll('h3');



panels.forEach(panel => { 
    if (panel.classList.contains('active')) panel.childNodes[0].nextSibling.style.display = "inline-block";

    panel.addEventListener('click', (e) => {
        e.preventDefault();
        removeActiveClasses()
        panel.classList.add('active')
        panel.childNodes[0].nextSibling.style.display = "inline-block";
        
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
        
    });
}

