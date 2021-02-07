function isLannisterSoldier(color, lion) {
    if (((color === 'red') && ((lion === 'lion') || (lion === 'null'))) || (lion === 'lion')) {
     return alert('true');   
    } else {
     return alert('false');   
    }
}

var isColor = prompt('What is color?');
var isLion = prompt('What is shield?');
isLannisterSoldier(isColor, isLion);