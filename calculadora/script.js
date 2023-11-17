let p = document.querySelector('#resultado')

function insert(num){
    p.innerHTML = p.innerHTML + num
}


function apagar(){
    p.innerHTML = ''
}

function back(){
    p.innerHTML = p.innerHTML.substring(0, p.innerHTML.length - 1)
}

function calcular(){
    if(p.innerHTML){
        p.innerHTML = eval(p.innerHTML)
    }
}

