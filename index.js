// DOM

const list=[]

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
            <div class="list-of-items-main-container" id="list-of-items-main-containerId">
                <div>
                 <input type="checkbox" name="radio-of-list" id="radio-of-list" class="list-of-items-input" id="list-of-items-inputId" >
                 <label for="item" class="list-of-items-label" data-list-item="${item}">${item}</label>
                </div>
                <button class="list-of-items-btn" id="list-of-items-btnId" onclick="deletingItem()">x</button>
            </div>
      `})  
    
    const appealToUI=document.getElementById('list-of-items1')
    appealToUI.innerHTML=UIitaration
    input.value=""


    const appealToInput=document.getElementById("inputContainer")
    appealToInput.classList.remove("inputAnimation")

}



 
const deleteableContent=document.querySelectorAll(".list-of-items-label")
const checkboxInput=document.querySelectorAll(".list-of-items-input")
console.log(checkboxInput);


function deletingItem(){
 console.log("Checked!!!");

 deleteableContent.forEach(content=>{
 
  const item=content.innerHTML.trim()
 
  const indexOfItem=list.indexOf(item)
  console.log(indexOfItem);
  
  // if(indexOfItem !==-1){
  //   list.splice(item)
  // }
 })

}