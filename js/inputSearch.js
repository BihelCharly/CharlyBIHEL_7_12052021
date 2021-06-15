// EVENTLISTENER TO SEARCH
input.addEventListener("keyup", searchBegins);

// TO SEARCH INSIDE ARRAY RECIPES
function searchBegins(element) {
    let result;
    let value = deleteLastCharIfS(element.explicitOriginalTarget.value);
    let valueLowerCase = value.toLowerCase();
    let valueFirstChar = firstCharCap(valueLowerCase);
    if (value.length >= 3) {
        result = searchinAllArray(recipes, valueLowerCase, valueFirstChar);
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

// TO SEARCH INSIDE ARRAY RECIPES
function searchinAllArray(array, valueLowerCase, valueFirstChar) {
    let filter = array.filter(function(object) {
        let testName1 = object.name.includes(valueLowerCase);
        let testName2 = object.name.includes(valueFirstChar);
        if (testName1 || testName2) {
            return object;
        }
        let testAppliance = object.appliance.includes(valueLowerCase);
        if (testAppliance) {
            return object;
        }
        let testUtensils = object.ustensils.includes(valueFirstChar);
        if (testUtensils) {
            return object;
        }
        let testDescription = object.description.includes(valueLowerCase);
        if (testDescription) {
            return object;
        }
        object.ingredients.filter(function(element) {
            let testIngredient = element.ingredient.includes(valueLowerCase);
            if (testIngredient) {
                return object;
            }
        });
    });
    return filter;
}