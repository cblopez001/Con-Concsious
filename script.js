const inputBox=document.getElementId("input_box");
const listContainer=document.getElementId("list_container");
function addItem(){
    if(inputBox.value === ''){
        alert("Please enter a item name");
}
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="X";
        li.appendChild(span);
    }
    inputBox.value='';
    }