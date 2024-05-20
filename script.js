const sr = ScrollReveal({
    distance: '100px',
    duration: 1700,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    interval: 1000, 
});

sr.reveal('.PersonalDesign .Personalboxone', {
    origin: 'top',
    delay:350,  
});

sr.reveal('.PersonalDesign .Personalboxtwo', {
    origin: 'bottom',
    delay:250,
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
