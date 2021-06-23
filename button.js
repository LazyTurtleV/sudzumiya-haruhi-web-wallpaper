
//uses JQuery slide 'cuz haven't succeeded animating it by my own
export function showPanel(htmlEl){
    if(htmlEl.id === "enterPanelButton"){
        $("#enterPanel").slideDown();
    }else if(htmlEl.id === "tasksQueueButton"){
        $("#tasksQueue").slideDown();
    }
}

export function hidePanel(htmlEl){
    if(htmlEl.id === "enterPanelButton"){
        $("#enterPanel").slideUp();
    }else if(htmlEl.id === "tasksQueueButton"){
        $("#tasksQueue").slideUp();
    }
}

export function isButtonActive(htmlEl){
    return htmlEl.classList.contains("down");
}