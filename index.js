// Elements collector array

const list=[]


// Function for show items on list section
function valueTaking(){
  

  let input=document.getElementById('add-section-inputId')
  let valueOfInput=input.value.trim()

  
  if(valueOfInput===""){
    const appealToInput=document.getElementById("inputContainer")
    appealToInput.classList.add("inputAnimation")
    return
  }
  
  if(list.includes(valueOfInput)){
   alert('This item already exist...')   
   return
   } 
  
  list.push(valueOfInput)
  let UIitaration=''
  list.forEach(item=>{
      UIitaration +=`
            <div class="list-of-items-main-container"  >
                <div>
                   <input type="checkbox" name="radio-of-list" id="radio-of-list" for="to-do" class="list-of-items-input">
                   <label for="item" class="list-of-items-label" data-list-item="${item}">${item}</label>
                </div>
                <button class="list-of-items-btn">x</button>
            </div>
      `})  
    
    const appealToUI=document.getElementById('list-of-items1')
    appealToUI.innerHTML=UIitaration
    input.value=""


    const appealToInput=document.getElementById("inputContainer")
    appealToInput.classList.remove("inputAnimation")

}


// Deleting list of items
const appealToParentElement=document.getElementById('list-of-items1')

appealToParentElement.addEventListener('click',(event)=>{

   if(event.target.classList.contains('list-of-items-btn')){
    const labelContainer=event.target.parentElement
    const labelText=labelContainer.querySelector('.list-of-items-label').textContent
  

    const findIndex=list.indexOf(labelText)
    if(findIndex !== -1){
      list.splice(findIndex,1)
     }
    
     labelContainer.remove()

   }
  
})

