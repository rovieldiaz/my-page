
//mostrar secciones
$("#show-bio").click(function() {
    //cuando muestre bio, esconde las demas secciones    
    $( "#projects,#contact,#resume" ).slideUp();    
    //muestra bioinfo
    $( "#bio" ).slideDown();    
});

//mostrar secciones
$("#show-projects").click(function() {
    $( "#bio,#contact,#resume" ).slideUp(); 
    // muestra projectsinfo
    $( "#projects" ).slideDown();    
});
//mostrar secciones
$("#show-contact").click(function() {
    $( "#bio,#projects,#resume" ).slideUp(); 
    // muestra contactinfo
    $( "#contact" ).slideDown();    
});
//mostrar secciones
$("#show-resume").click(function() {
    $( "#bio,#contact,#projects" ).slideUp(); 
    // muestra resume info
    $( "#resume" ).slideDown();    
});