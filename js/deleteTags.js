// TO REMOVE TAGS ON CLICK
function removeElement(e) {
    if (e.target.tagName !== 'BUTTON') {
        e.target.parentElement.remove();
        resultsAfterTagRemoved = searchAfterTagRemoved();
    }
}

function searchAfterTagRemoved() {
    let tagsInsideContainer = tagsContainer.children;
    if (tagsInsideContainer.length === 0) {
        cleanBothDiv();
        recipes.forEach(function(object) {
            displayRecipes(object);
        });
    }
    if (tagsInsideContainer.length >= 1) {
        let tempArray = [];
        let firstTagValue = tagsInsideContainer[0].textContent;
        let firstTagClass = tagsInsideContainer[0].className;
        let firstSearch = filterArrayWithTags(recipes, firstTagValue, firstTagClass);
        for (let i = 1; i < tagsInsideContainer.length; i++) {
            let tagsAfterTheFirst = tagsInsideContainer[i];
            tempArray.push(tagsAfterTheFirst.textContent);
        }
        let result = newTest(firstSearch, tempArray);
        console.log(result);
    }
}


function newTest(firstSearch, tempArray) {
    let array = [];
    for (let i = 0; i < tempArray.length; i++) {
        let value = tempArray[i];
        let valueToLowerCase = value.toLowerCase();
        let firstLetterToCap = firstCharCap(valueToLowerCase);
        let filter = firstSearch.forEach(function(object) {
            let testDevice = object.appliance.includes(valueToLowerCase);
            if (testDevice) {
                array.push(object);
            }
            let testUtensils = object.ustensils.includes(firstLetterToCap);
            if (testUtensils) {
                array.push(object);
            }
            let testDescription = object.description.includes(valueToLowerCase);
            if (testDescription) {
                array.push(object);
            }
            object.ingredients.filter(function(element) {
                let testIngredient = element.ingredient.includes(valueToLowerCase);
                if (testIngredient) {
                    array.push(object);
                }
            });
        });
        return filter;
    }
}