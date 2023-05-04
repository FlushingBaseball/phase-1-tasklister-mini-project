document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  //create a varaible to store the div form 
  // that div includes the lable , txtbox and submit button
  const form = document.querySelector(`#create-task-form`)


  const task =document.getElementById('tasks') //adding an EventListener to the submit button that fires on click
  const select = document.getElementById('colorCode')
  

  form.addEventListener('submit', (event)=> { //start an event listiner 
    event.preventDefault() //prevents page refresh
    const taskTxt = event.target['new-task-description'].value //make a variable taskTxt that is assigned the value of whats entered
    //into the new-task-description 
    const list = document.querySelector('#tasks')
    const newLi = document.createElement('Li')
    const newbtn = document.createElement('button')
    // const selectPriority = document.createElement('select')
    newLi.textContent = taskTxt 
    newbtn.textContent = 'Delete Task';
    newbtn.addEventListener('click', handleDelete)
  //  select.addEventListener('click',(event)=>{

        if (select.value =='HighestPriority'){
          newLi.classList.add('HighestPriority')
        }
        else if(select.value ==='mediumPriority'){
          newLi.classList.add('mediumPriority')
        }
        else if (select.value ==='lowPriority'){
          newLi.classList.add('lowPriority')        }


   // })

    list.appendChild(newLi).appendChild(newbtn)
    //console.log(newLi);
    
  })  

  
  function handleDelete(event){
    event.target.parentNode.remove()
  }

  



  // task.hasChildNodes.target.addEventListener('click', (event)=>{
  //  // const element =document.getElementById("newbtn")
  // remove()
  
  // })


});





