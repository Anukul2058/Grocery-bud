// selectors
let text = document.getElementById('text');
let addbtn = document.getElementById('add_btn');
let todo_list = document.getElementById('todo-list');




// event listeners
addbtn.addEventListener('click', additem);
todo_list.addEventListener('click', delete_item)


// functions
function additem(e) {
    e.preventDefault();

    var todo = document.createElement('div');
    todo.className = 'todo';
    // creating list
    var list = document.createElement('li')
    list.innerText = text.value;
    // creating delete button
    var delete_btn = document.createElement('button')
    delete_btn.className = 'delete_btn'
    delete_btn.innerHTML = '<i class="fas fa-trash"></i>'

    // creating checked button 

    var checked_btn = document.createElement('button')
    checked_btn.className = 'checked_btn'
    checked_btn.innerHTML = '<i class="fas fa-check-square"></i>'

    if (text.value != '') {

        // inserting the values
        todo.appendChild(list);
        todo.appendChild(delete_btn);
        todo.appendChild(checked_btn);
        todo_list.appendChild(todo);
        text.value = '';

    }
    else{
        alert("Item isn't inserted.")
    }




}

function delete_item(event) {
    console.log(event.target);
    var redo_btn = document.createElement('button')
    redo_btn.className = 'redo_btn'
    redo_btn.innerHTML = '<i class="fas fa-redo"></i>'

    var checked_btn = document.createElement('button')
    checked_btn.className = 'checked_btn'
    checked_btn.innerHTML = '<i class="fas fa-check-square"></i>'

    var item = event.target
    if (item.className === 'delete_btn') {
        console.log('hi')
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function hatau() {
            todo.remove();

        })

    }
    if (item.className === 'checked_btn') {



        console.log('kchaa')
        const todo = item.parentElement;
        todo.classList.toggle('check')
        item.replaceWith(redo_btn);

    }
    if (item.className === 'redo_btn') {
        const todo = item.parentElement;
        todo.classList.toggle('check');
        item.replaceWith(checked_btn);
    }



}