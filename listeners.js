import { isButtonActive, showPanel, hidePanel, addTask, changeButtonAppearance } from "./button.js";

//chevron-button clicked
export function addListeners(params) {
    for(let htmlEl of document.getElementsByClassName("chevron")){
        htmlEl.addEventListener("click", onChevronButtonClick);
    }
    
    document.getElementById("addTaskButton").addEventListener("click", addTask);
}

function onChevronButtonClick(){
    changeButtonAppearance(this)
    
    if(isButtonActive(this)){
        showPanel(this);
    }else{
        hidePanel(this);
    }
}