import { setCurrentDate, setCurrentTime } from "./UIfuncs.js";
import { loadTasks } from "./Task.js";
import {addListeners} from "./listeners.js"

setCurrentTime();
setCurrentDate();

window.setInterval(setCurrentTime, 1000);
window.setInterval(setCurrentDate, 60000);

loadTasks();
addListeners();