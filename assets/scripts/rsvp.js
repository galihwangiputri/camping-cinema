var header = document.querySelector('header');
var footer = document.querySelector('footer');
var main = document.querySelector('main');
var aside = document.querySelector('aside');

var pop_up_window = document.querySelector('.pop_up_window');

function add(id) {
    document.querySelector(id).innerText++;
}

function sub(id) {
    let current_num = document.querySelector(id).innerText;

    if (current_num === '0') {
        document.querySelector(id).innerText = '0';
    } else {
        document.querySelector(id).innerText--;
    }
}

function makeReservation() {
    // get value
    let id_meals = ['#cilok-num', '#mie-num', '#hottang-num', '#roti-num', '#pisang-num', '#kentang-num'];
    let id_result_meals = ['#result-cilok', '#result-mie', '#result-hottang', '#result-roti', '#result-pisang', '#result-kentang'];
    let class_result_meals = ['.tbl-cilok', '.tbl-mie', '.tbl-hottang', '.tbl-roti', '.tbl-pisang', '.tbl-kentang']

    for (let id_meal of id_meals) {
        temp_number = document.querySelector(id_meal).innerText;
        index_result = id_meals.indexOf(id_meal);

        if (temp_number === '0') {
            document.querySelector(class_result_meals[index_result]).style.display = "none";
        } else {
            document.querySelector(id_result_meals[index_result]).innerText = temp_number;
        }
    }

    document.querySelector('#movie-name').innerText = document.querySelector('#input_movie').value;
    document.querySelector('#name-final').innerText = document.querySelector('#input_name').value
    document.querySelector('#ppl-final').innerText = document.querySelector('#input_people').value;

    // appear
    pop_up_window.style.display = "block";
    header.style.filter = "blur(3px)";
    footer.style.filter = "blur(3px)";
    aside.style.filter = "blur(3px)";
    main.style.filter = "blur(3px)";
}

var ex = document.querySelector('.ex');
ex.addEventListener("click", closeX)
function closeX(){
    pop_up_window.style.display = "none";
    header.style.filter = "blur(0px)";
    footer.style.filter = "blur(0px)";
    aside.style.filter = "blur(0px)";
    main.style.filter = "blur(0px)";

    document.location.reload(true);
}