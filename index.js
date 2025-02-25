// DOM

const list=[]

function valueTaking(){
  

  let valueOfInput=document.getElementById('add-section-inputId').value.trim()

  if(valueOfInput===""){
    alert('Please fill out!!!')
    return
  }
  if(list.includes(valueOfInput)){
    alert('Item exist!!!')
    return
  } 
  
  list.push(valueOfInput)
  let UIitaration=''
  list.forEach(item=>{
      UIitaration +=`
            <div class="list-of-items-main-container" id="list-of-items-main-containerId">
                <div>
                 <input type="checkbox" name="radio-of-list" id="radio-of-list" class="list-of-items-input" id="list-of-items-inputId">
                 <label for="item" class="list-of-items-label" id="list-of-items-labelId">${item}</label>
                </div>
                <button class="list-of-items-btn" id="list-of-items-btnId">x</button>
            </div>
      `})  
    
    const appealToUI=document.getElementById('list-of-items1')
    appealToUI.innerHTML=UIitaration
    valueOfInput=""
}

