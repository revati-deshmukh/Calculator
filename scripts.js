const userInput = document.querySelector("#expression");
var expressions = "";

const press = (num) => {
    expressions += num;
    userInput.value = expressions;
}

const equal = () => {
    userInput.value = eval(expressions);
    expressions = "";
}

const erase = () => {
    expressions = "";
    userInput.value = expressions;
}