let addItem=document.querySelector("#add-task")
let addPTask=document.querySelector("#add-p-ptask")
let deletAllTask=document.querySelector("#delete-alltasks")
let input=document.querySelector(".taskList")
let inputedValue=document.getElementById("input")
addItem.addEventListener("click",addition)
addPTask.addEventListener("click",additionPriority)
deletAllTask.addEventListener("click",deletAllTasks)
inputedValue.addEventListener("change",names)
let text=""
function names (e)
{
    text=e.target.value
    console.log(text)
}


// function performingTask()
// {
//     let div=document.createElement("div")
//     let element=document.createElement("li")
//     element.textContent=text
//     let completed=document.createElement("button")
//     let deletetask=document.createElement("button")
//     div.classList.add("todo")
//     element.classList.add("odo-item")
//     completed.classList.add("complete-btn")
//     deletetask.classList.add("delete-btn")
//     div.appendChild(element)
//     div.append(completed)
//     div.append(deletetask)
// }

function addition()
{
    if( text.length){
    let div=document.createElement("div")// creating div
    let element=document.createElement("li")//creating elemnt 
    element.textContent=text//to give text to list
    element.style.color="aliceblue";
    let completed=document.createElement("button")// creating button
    completed.textContent="completed"//give text to a button 
    completed.addEventListener("click",()=>{// giving event on clicked
        div.style.opacity=0.5//style light in color
        div.style.pointerEvents="none"// not clickable
    })
    let deletetask=document.createElement("button")// to create another button 
    deletetask.addEventListener("click",()=>{//giving action by addlistner click
        div.remove(element)//removing the elemnt when clicked from the div
    })
    deletetask.textContent="delete task"//ving name to delete button
    div.classList.add("todo")// giving class to a div for styles
    element.classList.add("todo-item")//adding class to element
    completed.classList.add("complete-btn")//giving class to nutton for stle
    deletetask.classList.add("delete-btn")// giving stle to butrton for style
    div.appendChild(element)//inside div the element is inserted
    div.append(completed)//inside div the button is appended
    div.append(deletetask)//inside div the button is inserted
    input.append(div)//inside ul the div get inserted
    console.log("Hii this is kuanl")//to cheak wheather the button is woekig or not
}

}
function additionPriority()
{
    
    let div=document.createElement("div")
    let element=document.createElement("li")
    element.textContent=text
    element.style.color="aliceblue";
    let completed=document.createElement("button")
    completed.textContent="completed"
    completed.addEventListener("click",()=>{
        div.style.opacity=0.5
        div.style.pointerEvents="none"
    })
    let deletetask=document.createElement("button")
    deletetask.textContent="delete task"
    deletetask.textContent="delete task"
    deletetask.addEventListener("click",()=>{
        div.remove(element)
    })
    div.classList.add("todo")
    element.classList.add("todo-item")
    completed.classList.add("complete-btn")
    deletetask.classList.add("delete-btn")
    div.appendChild(element)
    div.append(completed)
    div.append(deletetask)
    input.prepend(div)
    text.value=""
    console.log("This is the best for me to write the code")
}
function deletAllTasks()
{
    let div=document.createElement("div")
    let element=document.createElement("li")
    element.textContent=text
    element.style.color="aliceblue";
    let completed=document.createElement("button")
    completed.textContent="completed"
    let deletetask=document.createElement("button")
    deletetask.textContent="delete task"
    div.classList.add("todo")
    element.classList.add("todo-item")
    completed.classList.add("complete-btn")
    deletetask.classList.add("delete-btn")
    div.appendChild(element)
    div.append(completed)
    div.append(deletetask)
    input.remove(div)
    text.value=""
    console.log("the code is wroking fine till this point")

}




// let kiran=document.querySelector(".newbutton")
// function deleteone()
// {
//     console.log("Hii its done")
//     console.log(kiran)
//     kiran.style.backgroundColor="red"/// to kjsut cheak some things
//     kiran.style.opacity=0.5
//     kiran.style.cursor="pointer"
//     kiran.style.pointerEvents="none"
    
// }