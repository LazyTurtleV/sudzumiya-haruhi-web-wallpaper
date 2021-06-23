import {changeButtonAppearance} from "./UIfuncs.js";
import { isButtonActive, showPanel, hidePanel } from "./button.js";

//chevron-button clicked
for(let htmlEl of document.getElementsByClassName("chevron")){
    htmlEl.addEventListener("click", function(){
        changeButtonAppearance(this)

        if(isButtonActive(this)){
            showPanel(this);
        }else{
            hidePanel(this);
        }
    });
}