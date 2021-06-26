import { gTasksArr, reloadTaskQueue } from "./Task.js";
import { Task } from "./Task.js";

//uses JQuery slide 'cuz haven't succeeded animating it by my own
export function showPanel(htmlEl){
    if(htmlEl.id === "enterPanelButton"){
        $("#enterPanel").slideDown();
    }else{
        $("#tasksQueue").slideDown();
    }
}

export function hidePanel(htmlEl){
    if(htmlEl.id === "enterPanelButton"){
        $("#enterPanel").slideUp();

        //clear entered input
        window.setTimeout(function (params) {
            document.getElementById("taskName").value = "";
            document.getElementById("taskDetails").value = "";
        }, 300);
    }else{
        $("#tasksQueue").slideUp();
    }
}

export function isButtonActive(htmlEl){
    return htmlEl.classList.contains("down");
}

export function changeButtonAppearance(HTMLel){
    let elClassList = HTMLel.classList;

    if(elClassList.contains("up")){
        HTMLel.classList.remove("up");
        HTMLel.classList.add("down");
    }else{
        HTMLel.classList.remove("down");
        HTMLel.classList.add("up");
    }
}


export function addTask(){
    let taskName = document.getElementById("taskName").value;
    let taskDetails = document.getElementById("taskDetails").value;
    
    if(!taskName || !taskDetails) return;

    gTasksArr.push(new Task(new Date(), taskName, taskDetails));
    window.localStorage.setItem("tasksArr", JSON.stringify(gTasksArr));

    reloadTaskQueue();
}