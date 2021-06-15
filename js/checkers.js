// SWITCH FUNCTIONS OF DISPLAY OR NOT THE DROPDOWNS
//// ON - SHOW THE ELEMENT IN PARAMETER
function displayOn(element) {
    switch (element) {
        case 'input--ingredients':
            hideList(devicesList, utensilsList);
            showList(ingredientsList);
            break;
        case 'input--devices':
            hideList(ingredientsList, utensilsList);
            showList(devicesList);
            break;
        case 'input--utensils':
            hideList(ingredientsList, devicesList);
            showList(utensilsList);
            break;
    }
}
//// OFF - HIDE THE ELEMENT IN PARAMETER
function displayOff(element) {
    switch (element) {
        case 'input--ingredients':
            hideList(ingredientsList);
            break;
        case 'ingredients__list list':
            hideList(ingredientsList);
            break;
        case 'input--devices':
            hideList(devicesList);
            break;
        case 'devices__list list':
            hideList(devicesList);
            break;
        case 'input--utensils':
            hideList(utensilsList);
            break;
        case 'utensils__list list':
            hideList(utensilsList);
            break;
    }
}

// CHECK WHAT CLASS SENT IN PARAMETER AND RETURN THE RIGHT CLASS
function whatClassName(element) {
    let className;
    switch (element) {
        case 'ingredients__list list':
            className = 'style--ingredients';
            break;
        case 'devices__list list':
            className = 'style--devices';
            break;
        case 'utensils__list list':
            className = 'style--utensils';
            break;
    }
    return className;
}

// TO RETURN ELEMENTS IN LISTS WHO MATCHES WITH CAPTURED VALUES
function returnElements(parent) {
    let list;
    switch (parent) {
        case 'input--ingredients':
            list = arrayIngredients;
            break;
        case 'input--devices':
            list = arrayDevices;
            break;
        case 'input--utensils':
            list = arrayUtensils;
            break;
    }
    return list;
}

function returnListSelector(list) {
    if (list === 'input--ingredients') {
        list = ingredientsList;
    } else if (list === 'input--devices') {
        list = devicesList;
    } else if (list === 'input--utensils') {
        list = utensilsList;
    } else {
        list = list;
    }
    return list;
}