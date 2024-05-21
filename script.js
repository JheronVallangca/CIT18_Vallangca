const sr = ScrollReveal({
    distance: '100px',
    duration: 1700,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    interval: 1000, 
});

sr.reveal('.PersonalDesign .Personalboxone', {
    origin: 'top',
    delay: 350,  
});

sr.reveal('.PersonalDesign .Personalboxtwo', {
    origin: 'bottom',
    delay: 250,
});

sr.reveal('.AboutDesign .Aboutboxone', { 
    origin: 'right',
});

sr.reveal('.AboutDesign .Aboutboxtwo', { 
    origin: 'right',
    delay: 200,
});

sr.reveal('.AboutDesign .Aboutboxthree', { 
    origin: 'right',
    delay: 400,
});

sr.reveal('.WorksDesign .Worksboxone', { 
    origin: 'top',
});

sr.reveal('.WorksDesign .Worksboxtwo', { 
    origin: 'top',
    delay: 200,
});

sr.reveal('.WorksDesign .Worksboxthree', { 
    origin: 'top',
    delay: 400,
});

document.addEventListener('DOMContentLoaded', function() {
    const worksBoxes = document.querySelectorAll('.WorksDesign div');

    worksBoxes.forEach(box => {
        box.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});