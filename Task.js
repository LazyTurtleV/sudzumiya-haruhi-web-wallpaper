export let gTasksArr = [];

export class Task{
    static ID = 0;

    creationDate;
    taskName;
    taskDetails;
    importancyClass;
    taskID;

    constructor(createDate, taskName, taskDetails){
        this.creationDate = createDate;
        this.taskName = taskName;
        this.taskDetails = taskDetails;
        this.importancyClass = 1;
        this.taskID = ++Task.ID;
    }

    static calculateImportancyClass(creationDate) {
        let hoursDifference = new Date().getUTCHours() - creationDate.getUTCHours();
        const TIME_QUANT = 12; //[Hours]
        
        let importancyClass = Math.floor(hoursDifference / TIME_QUANT) + 1;
        if(importancyClass > importancyClassEnum.critical){ 
            importancyClass = importancyClassEnum.critical
        } 

        return importancyClass;
    }
}

export const importancyClassEnum = {
    "initial": 1,
    "underNormal": 2,
    "normal":3,
    "aboveNormal":4,
    "critical":5
};

const TASK_STATE_MAP = new Map([
    [importancyClassEnum.initial, `rgba(40, 150, 180, 0.2)`],
    [importancyClassEnum.underNormal, `rgba(50, 160, 190, 0.4)`],
    [importancyClassEnum.normal, `rgba(60, 170, 200, 0.6)`],
    [importancyClassEnum.aboveNormal, `rgba(70, 180, 210, 0.8)`],
    [importancyClassEnum.critical, `rgba(80, 190, 220 ,  1)`]
]);

export function loadTasks(){
    let localStorageItem = window.localStorage.getItem("tasksArr");
    if(localStorageItem){
        gTasksArr = JSON.parse(localStorageItem);
    }

    let tasksQueue = document.getElementById("tasksQueue");
    for(let task of gTasksArr){
        tasksQueue.appendChild(createTaskNode(TASK_STATE_MAP.get(task.importancyClass), task.taskName, task.taskID))
    }
}

export function reloadTaskQueue() {
    let renewedTasksQueue = JSON.parse(window.localStorage.getItem("tasksArr"));

    let difference = renewedTasksQueue.filter(x => !gTasksArr.includes(x));
    console.log(difference);
}

function createTaskNode(importancyClass, taskName, ID){
    let el = document.createElement("div");
    el.classList.add("taskNode");
    el.classList.add("panelElementStyle");
    el.id = ID;
    
    let child2 = el.appendChild(document.createElement("div"));
    child2.classList.add("NodeCircle");
    child2.style.background = importancyClass;
    child2.style.borderColor = importancyClass;
    
    let child1 = el.appendChild(document.createElement("div"));
    child1.classList.add("nodeText");
    child1.innerText = taskName;

    return el;
}