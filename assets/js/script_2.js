
function pintar(objeto,color){
    objeto.style.backgroundColor = color;
}  

document.addEventListener("keydown",function(event) {
    if ( event.key === "a" || event.key === "A" || event.key === "s" || event.key === "S" || event.key === "d" || event.key === "D"   ) {
        // Si es "a", "s" "d" , Evaluamos la letra especifica para asignar el color al primer div. 
        const div_1 = document.querySelector('.ele_1');
        if (event.key === "a" || event.key === "A") {
            pintar(div_1,'pink');
        } else if (event.key === "s" || event.key === "S") {
            pintar(div_1,'orange');
        } else {
            pintar(div_1,'lightblue');
        };
    } else if (event.key === "q" || event.key === "Q" || event.key === "w" || event.key === "W" || event.key === "e" || event.key === "E") {
        // Si es "q", "w" o "e", , Evaluamos la letra especifica para asignar el color y al div que corresponde.
        const div_2 = document.querySelector('.ele_2');
        const div_3 = document.querySelector('.ele_3');
        const div_4 = document.querySelector('.ele_4');        
        if (event.key === "q" || event.key === "Q") {
            pintar(div_2,'purple');
        } else if (event.key === "w" || event.key === "W") {
            pintar(div_3,'gray');
        } else {
            pintar(div_4,'brown');
        };
    }   
    }                       
);

