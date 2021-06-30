// EVENTLISTENER TO SEARCH
input.addEventListener("keyup", searchBegins);

// ALGO2 - TO SEARCH INSIDE ARRAY RECIPES
function searchBegins(element) {
    let results = [];
    let duplicatedRecipes = recipes;
    let value = deleteLastCharIfS(element.explicitOriginalTarget.value);
    let valueToLowerCase = value.toLowerCase();
    let firstLetterToCap = firstCharCap(valueToLowerCase);
    if (value.length >= 3) {
        duplicatedRecipes = searchInNameArray(duplicatedRecipes, firstLetterToCap, valueToLowerCase, results);
        duplicatedRecipes = searchInIngredientsArray(duplicatedRecipes, firstLetterToCap, valueToLowerCase, results);
        searchInDescriptionArray(duplicatedRecipes, valueToLowerCase, results);
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
        duplicatedRecipes = recipes;
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

function addToNewArray(newArray, object) {
    newArray.push(object);
}

// TO SEARCH INSIDE NAME PROPERTY
function searchInNameArray(array, firstLetterToCap, valueToLowerCase, results) {
    let filter = array.filter(function(object) {
        if (object.name.includes(firstLetterToCap) || object.name.includes(valueToLowerCase)) {
            addToNewArray(results, object);
        } else {
            return object;
        }
    });
    return filter;
}

// TO SEARCH INSIDE INGREDIENTS PROPERTY
function searchInIngredientsArray(array, firstLetterToCap, valueToLowerCase, results) {
    let filter = array.filter(function(object) {
        let foundIt = false;
        object.ingredients.forEach(function(element) {
            if (element.ingredient.includes(firstLetterToCap) || element.ingredient.includes(valueToLowerCase)) {
                foundIt = true;
            }
        });
        if (foundIt) {
            addToNewArray(results, object);
        } else {
            return !foundIt;
        }
    });
    return filter;
}

// TO SEARCH INSIDE DESCRIPTION PROPERTY
function searchInDescriptionArray(array, valueToLowerCase, results) {
    array.filter(function(object) {
        if (object.description.includes(valueToLowerCase)) {
            addToNewArray(results, object);
        }
    });
}