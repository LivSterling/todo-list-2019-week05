const inputText = document.getElementById('inputText')
const listBox = document.getElementById('list')
const add = document.getElementById('add')

let addTask = () => {
        if (inputText.value === '') {
        alert('must write something')
    } else{
        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        listBox.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputText.value = ''
    saveOnExit()
}

listBox.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveOnExit()    
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveOnExit()
    }
}, false)  

function saveOnExit() {
    localStorage.setItem('tasks', listBox.innerHTML)
  }

  function showTask(){
    listBox.innerHTML = localStorage.getItem('tasks')
  }
  showTask()
add.addEventListener('click', addTask)
// function addTask() {


//     if (inputText.value === '') {
//         alert('must write something')
//     } 
//         else{
    
//     let li = document.createElement('li');
//     li.innerHTML = inputText.value;
//     listBox.appendChild(li)
 
//     }
// }

