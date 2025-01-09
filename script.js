const localStorageKey = 'to-do-list-vm';

function validadeIfExistNewTask(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let inputValue = document.getElementById('input-task').value;
    let exists = values.find(x => x.name == inputValue);
    return !exists ? false : true;
}

function newTask(){
    let input = document.getElementById('input-task');
    input.style.border = '';
    
    if(!input.value){
        input.style.border = '1px solid red';
        alert('Digite sua tarefa');
    }
    else if(validadeIfExistNewTask()){
        alert('Tarefa já existente na lista');

    }
    else{
        let values = JSON.parse(localStorage.getItem(localStorageKey)) || [];
        values.push({
            name: input.value
        });
        localStorage.setItem(localStorageKey, JSON.stringify(values));
        showValues();
    }
    input.value = '';
}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById('to-do-list');
    list.innerHTML = '';
    for(let i = 0; i < values.length; i++){
        list.innerHTML +=`<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/></svg> </button></li>`;
    };
}

function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = values.findIndex(x => x.name == data);
    values.splice(index, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    alert('Tarefa removida com sucesso');
    showValues();
}   

showValues();