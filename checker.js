function checkboardAfterInput(caller) {
    if(caller.value == '')  {
        caller.style.border = "solid 1px #36a8d1";
    } else {
        if(!checkBoard(_board, caller.id.substring(0, 1), caller.id.substring(2,3), caller.value)) {
            caller.style.border = "solid 1px red";
        } else {
            caller.style.border = "solid 1px #36a8d1";
        }
    }
}