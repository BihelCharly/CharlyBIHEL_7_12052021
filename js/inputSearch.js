// EVENTLISTENER TO SEARCH
input.addEventListener("keyup", searchBegins);

// TO SEARCH INSIDE ARRAY RECIPES
function searchBegins(element) {
    let result;
    let value = deleteLastCharIfS(element.explicitOriginalTarget.value);
    let valueToLowerCase = value.toLowerCase();
    let firstLetterToCap = firstCharCap(valueToLowerCase);
    if (value.length >= 3) {
        result = searchinAllArray(recipes, valueToLowerCase, firstLetterToCap);
        if (result.length === 0) {
            showError();
            cleanAllDropDown();
            cleanTempArrays();
        } else {
            cleanBothDiv();
            cleanAllDropDown();
            cleanTempArrays();
            result.forEach(function(object) {
                displayRecipes(object);
            });
            treatmentsForElementsInDropDown();
        }
    } else if (value.length < 3) {
        cleanBothDiv();
        cleanAllDropDown();
        cleanTempArrays();
        recipes.forEach(function(object) {
            displayRecipes(object);
        });
        treatmentsForElementsInDropDown();
    }
    // TO CLOSE ALL DROPDOWN LIST
    hideList();
    // TO TURN ARROWS INSIDE DROPDOWNS TO THE BOTTOM
    allBtns.forEach(function(element) {
        arrowDown(element);
    });
}

// TO SEARCH INSIDE ARRAY RECIPES STEP BY STEP
function searchinAllArray(array, valueToLowerCase, firstLetterToCap) {
    let tempArray = [];
    let status = false;
    for (let index = 0; index < array.length; index++) {
        let object = array[index];
        if (object.name.includes(firstLetterToCap || valueToLowerCase)) {
            tempArray.push(object);
            status = true;
        } else if (object.appliance.includes(valueToLowerCase)) {
            tempArray.push(object);
            status = true;
        } else if (object.ustensils.includes(firstLetterToCap)) {
            tempArray.push(object);
            status = true;
        } else if (object.description.includes(valueToLowerCase)) {
            tempArray.push(object);
            status = true;
        } else if (status === false) {
            object.ingredients.filter(function(element) {
                if (element.ingredient.includes(valueToLowerCase)) {
                    tempArray.push(object);
                    status = true;
                }
            });
        }
    }
    return tempArray;
}