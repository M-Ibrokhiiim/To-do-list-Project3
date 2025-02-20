 
// DOM

function valueTaking(){

    const list=[]
    const inputValue=document.getElementById('add-section-inputId').value
    const obj={toDo:inputValue}

    list.push(obj)
    
    let todos=''
    list.forEach((listItem)=>{      
    
    todos+=`
     <div class="list-of-items-main-container" id="list-of-items-main-containerId">
            <div>
             <input type="checkbox" name="radio-of-list" id="radio-of-list" class="list-of-items-input" id="list-of-items-inputId">
             <label for="item" class="list-of-items-label" id="list-of-items-labelId">${listItem.toDo}</label>
            </div>
            <button class="list-of-items-btn" id="list-of-items-btnId">x</button>
          </div>
    `
    
    })
    const listOfToDos=document.getElementById('list-of-items1')
    listOfToDos.innerHTML=todos
}