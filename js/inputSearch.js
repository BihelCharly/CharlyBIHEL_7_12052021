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
        } else {
            cleanBothDiv();
            result.forEach(function(object) {
                displayRecipes(object);
            });
        }
    } else if (value.length < 3) {
        cleanBothDiv();
        recipes.forEach(function(object) {
            displayRecipes(object);
        });
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
        let testName1 = object.name.includes(valueToLowerCase);
        let testName2 = object.name.includes(firstLetterToCap);
        if (testName1 || testName2) {
            return object;
        }
        let testDevice = object.appliance.includes(valueToLowerCase);
        if (testDevice) {
            return object;
        }
        let testUtensils = object.ustensils.includes(firstLetterToCap);
        if (testUtensils) {
            return object;
        }
        let testDescription = object.description.includes(valueToLowerCase);
        if (testDescription) {
            return object;
        }
        object.ingredients.filter(function(element) {
            let testIngredient = element.ingredient.includes(valueToLowerCase);
            if (testIngredient) {
                return object;
            }
        });
    });
    return filter;
}