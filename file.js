const inputBoxEl = document.getElementById("inputBox");
const listContainerEl = document.getElementById("listContainer");




function addTask(){
    if (inputBoxEl.value===""){
        alert("You must write something!")
    }else{
        let listElement = document.createElement("li");
        listElement.innerHTML = inputBoxEl.value;
        listContainerEl.appendChild(listElement);
        let crossImg = document.createElement("span");
        crossImg.innerHTML="\u00d7";
        listElement.appendChild(crossImg);
    }
    inputBoxEl.value =  '';
    saveData();

}

listContainerEl.addEventListener("click", function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        saveData();
    }else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainerEl.innerHTML);

}

function showTask(){
    listContainerEl.innerHTML= localStorage.getItem("data");
}
showTask();