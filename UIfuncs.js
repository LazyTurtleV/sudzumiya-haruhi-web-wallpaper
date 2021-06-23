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

export function loadTasks(){
    let tasksQueue = document.getElementById("tasksQueue");

    let opacity = "0.3"
    let colors = [ `rgba(80, 190, 220 , 1)`, `rgba(70, 180, 210, 0.8)`, `rgba(60, 170, 200, 0.6)`, `rgba(50, 160, 190, 0.4)`, `rgba(40, 150, 180, 0.2)`];
    for(let color of colors){
        tasksQueue.appendChild(createTaskNode(color));
    }
}

function createTaskNode(color){
    let el = document.createElement("div");
    el.classList.add("taskNode");
    el.classList.add("panelElementStyle");

    let child1 = el.appendChild(document.createElement("div"));
    child1.classList.add("nodeText");

    let child2 = el.appendChild(document.createElement("div"));
    child2.classList.add("NodeCircle");
    child2.style.background = color;
    child2.style.borderColor = color;

    return el;
}