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
            <div class="list-of-items-main-container">
                <div>
                 <input type="checkbox" name="radio-of-list" id="radio-of-list" for="to-do" class="list-of-items-input">
                 <label for="item" class="list-of-items-label" data-list-item="${item}">${item}</label>
                </div>
                <button class="list-of-items-btn" >x</button>
            </div>
      `})  
    
    const appealToUI=document.getElementById('list-of-items1')
    appealToUI.innerHTML=UIitaration
    input.value=""


    const appealToInput=document.getElementById("inputContainer")
    appealToInput.classList.remove("inputAnimation")

}








const element=document.querySelectorAll('.list-of-items-btn')

const allButtons=element.forEach(button=>{
  button.addEventListener('click',()=>{
    console.log("Pressed");
    
  })
})