const result = document.querySelector("#Result");
const buttons = document.querySelectorAll("button");

let concatText = "";
function buttonPuressed(){
    const text =event.target.textContent;
    
      if(text === "="){
            concatText = eval(concatText);
        
        } else if(text === "AC"){
            concatText = "";
        } else if (concatText === "0" && text === "0") {
        concatText = "0";
        }  else if (concatText === "" && text === "0") {
        concatText = "0";
        } else if (concatText === "" && text === "00") {
        concatText = "0";
        } else if (concatText === "0" && text === ".") {
        concatText = "0.";
        } else if (concatText === "0" && text !== "0") {
        concatText = text;
        } else if (concatText === "" && text === ".") {
        concatText = "0.";
        } else if (text == "." && concatText.slice(-1) === "."){
            return;
        } else if (text == "+" && concatText.slice(-1) === "+"){
            return;
        }else if (text == "+" && concatText.slice(-1) === "-"){
            return;
        }else if (text == "+" && concatText.slice(-1) === "*"){
            return;
        }else if (text == "+" && concatText.slice(-1) === "/"){
            return;
        }else if (text == "-" && concatText.slice(-1) === "+"){
            return;
        }else if (text == "-" && concatText.slice(-1) === "-"){
            return;
        }else if (text == "-" && concatText.slice(-1) === "*"){
            return;
        }else if (text == "-" && concatText.slice(-1) === "/"){
            return;
        }else if (text == "*" && concatText.slice(-1) === "+"){
            return;
        }else if (text == "*" && concatText.slice(-1) === "-"){
            return;
        }else if (text == "*" && concatText.slice(-1) === "*"){
            return;
        }else if (text == "*" && concatText.slice(-1) === "/"){
            return;
        }else if (text == "/" && concatText.slice(-1) === "+"){
            return;
        }else if (text == "/" && concatText.slice(-1) === "-"){
            return;
        }else if (text == "/" && concatText.slice(-1) === "*"){
            return;
        }else if (text == "/" && concatText.slice(-1) === "/"){
            return;
      } else {
                concatText += text;
      }
    result.textContent = concatText;
}

buttons.forEach(button => button.addEventListener('click', buttonPuressed));


