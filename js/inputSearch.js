// EVENTLISTENER TO SEARCH
input.addEventListener("keyup", searchBegins);

// TO SEARCH INSIDE ARRAY RECIPES
function searchBegins(element) {
    let results;
    let value = deleteLastCharIfS(element.explicitOriginalTarget.value);
    let valueToLowerCase = value.toLowerCase();
    let firstLetterToCap = firstCharCap(valueToLowerCase);
    if (value.length >= 3) {
        results = searchinAllArray(recipes, valueToLowerCase, firstLetterToCap);
        if (results.length === 0) {
            showError();
            cleanAllDropDown();
            cleanTempArrays();
        } else {
            cleanBothDiv();
            cleanAllDropDown();
            cleanTempArrays();
            sortElementsAZ(results);
            console.log(results);
            results.forEach(function(object) {
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
    let filter = array.filter(function(object) {
        let foundIt = false;
        if (object.name.includes(firstLetterToCap) || object.name.includes(valueToLowerCase)) {
            foundIt = true;
        }
        object.ingredients.filter(function(element) {
            if (element.ingredient.includes(firstLetterToCap) || object.name.includes(valueToLowerCase)) {
                foundIt = true;
            }
        });
        if (object.description.includes(valueToLowerCase)) {
            foundIt = true;
        }
        if (foundIt) {
            return foundIt;
        }
    });
    return filter;
}