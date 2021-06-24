// TO CALL THE FACTORY METHOD TO CREATE ARTICLES/CARDS
function displayRecipes(element) {
    let factory = new Factory();
    factoryObjects = factory.createCard(element);
}

// TO CALL THE FACTORY METHOD TO CREATE ARTICLES/CARDS W ARRAY IN PARAMETER
function displayAllRecipesFromArray(array) {
    array.forEach(item => {
        displayRecipes(item);
    });
}

// RETURN TRUE IF VALUE IS PRESENT IN OBJECT PROPERTY
function testsValue(objectProperty, value1, value2) {
    let test1 = objectProperty.includes(value1);
    let test2 = objectProperty.includes(value2);
    return test1 || test2;
}

// TO DELETE LAST CHARACTER IF S
function deleteLastCharIfS(string) {
    let lastChar = string.slice(-1);
    if (lastChar === 's' || lastChar === 'S') {
        let newString = string.substring(0, string.length - 1);
        return newString;
    } else {
        return string;
    }
}

function sortElementsAZ(array) {
    array.sort();
}

// TO RETURN THE STRING WITH A CAPITAL FOR THE FIRST CHAR
function firstCharCap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ----- HTML -----

// TO DELETE EVERYTHING IN DIV ERROR + RECIPES
function cleanBothDiv() {
    divError.innerHTML = '';
    sectionRecipes.innerHTML = '';
}

// TO SHOW 'NO RESULT FOUND'
function showError() {
    cleanBothDiv();
    divError.innerHTML = 'Aucun résultat trouvé.';
}

// TO CLEAN DROPDOWN
function cleanDropDown(element) {
    element.innerHTML = '';
}

function cleanAllDropDown() {
    ingredientsList.innerHTML = '';
    devicesList.innerHTML = '';
    utensilsList.innerHTML = '';
}

// FUNCTION TO SHOW LIST IN PARAMETER
function showList(list) {
    list.style.display = 'flex';
}

// FUNCTION TO HIDE LIST IN PARAMETER
function hideList(list, list2) {
    if (list === undefined && list2 === undefined) {
        ingredientsList.style.display = 'none';
        devicesList.style.display = 'none';
        utensilsList.style.display = 'none';
    } else {
        list.style.display = 'none';
        if (list2 != undefined) {
            list2.style.display = 'none';
        }
    }
}

// FUNCTION TO CHANGE THE ARROWS
//// UP
function arrowUp(element) {
    element.classList.replace('arrowhead--down', 'arrowhead--up');
    element.innerHTML = '&#8963;';
}
//// DOWN
function arrowDown(element) {
    element.classList.replace('arrowhead--up', 'arrowhead--down');
    element.innerHTML = '&#8964;';
}