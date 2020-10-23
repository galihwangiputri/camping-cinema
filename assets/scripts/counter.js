

function add(id){
    // number_now++
    document.querySelector(id).innerText++;
}

function minus(){
    number_now = document.querySelector('#number').innerText;

    if (number_now === '0'){
        document.querySelector('#number').innerText = '10';
    }else {
        document.querySelector('#number').innerText--;
    }
}

function nul(){
    var pop_up_window = document.querySelector('.modal-parent');
    
    var main= document.querySelector('main')
    document.querySelector('#result').innerText = document.querySelector('#number').innerText;
    
    pop_up_window.style.display = "block"
    main.style.filter = "blur(3px)"
}

var main= document.querySelector('main');
var modal_parent = document.querySelector('.modal-parent');
var ex = document.querySelector('.ex');
ex.addEventListener("click", closeX)
function closeX(){
    modal_parent.style.display = "none";
    main.style.filter = "blur(0px)"
}


// var modal_parent = document.querySelector('.modal-parent');
// modal_parent.addEventListener("click", closeParent);
// function closeParent(e){
//     if(e.target.className = "modal-parent"){
//         modal_parent.style.display = "none";
//         main.style.filter = "blur(0px)"
//     }
// }




