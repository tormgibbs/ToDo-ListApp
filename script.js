const addButton = document.getElementById('addButton')
const textBox = document.getElementById('textBox')
const listContainer = document.getElementById('lower')

addButton.addEventListener('click', addNewList);


function addNewList(){
  const taskText = textBox.value.trim()

  if (taskText !== ''){
    // Creating a task container
    const taskContainer = document.createElement('div')
    taskContainer.classList.add("list-container")

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add("buttons")

    // Creating a paragraph for the task text
    const taskParagraph = document.createElement('p')
    taskParagraph.innerHTML = taskText
    
    // Create buttons for marking and deleting
    const checkButton = document.createElement('button')
    checkButton.classList.add('done')
    checkButton.innerHTML = '<img class="check" src="check.svg" alt="">'
    
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('del')
    deleteButton.innerHTML = '<img class="cross" src="cross.svg" alt="">'

    // Append the task container to the list
    listContainer.appendChild(taskContainer);

    taskContainer.appendChild(buttonContainer)

    // Append elements to the task container
    taskContainer.appendChild(taskParagraph);
    buttonContainer.appendChild(checkButton);
    buttonContainer.appendChild(deleteButton);

    textBox.value = ''
    saveTask()
  }

  else{
    alert('You cannot add an empty list')
  }
}


listContainer.addEventListener("click", function (event){
  let checked = false
  if (event.target.parentElement.className === 'done' && checked === false){
    let text = event.target.parentElement.parentElement.parentElement.querySelector('p')
    text.style.textDecoration = 'line-through'
    checked = true
    console.log(checked, 'task has been checked')
    saveTask()
  }else if (event.target.parentElement.className === 'done' && checked === true){
    let text = event.target.parentElement.parentElement.parentElement.querySelector('p')
    text.style.textDecorationStyle = 'none'
    checked = false
    console.log(checked, 'task has been unchecked')
    saveTask()
  }else if (event.target.parentElement.className === 'del'){
    let taskContainer = event.target.parentElement.parentElement.parentElement
    taskContainer.remove()
    saveTask()
  }
})


function saveTask(){
  localStorage.setItem('data', listContainer.innerHTML)
}


function showTask(){
  listContainer.innerHTML = localStorage.getItem('data')
}


showTask()
