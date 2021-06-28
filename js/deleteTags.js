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
        cleanAllDropDown();
        cleanTempArrays();
        recipes.forEach(function(object) {
            displayRecipes(object);
        });
        treatmentsForElementsInDropDown();
    }
    if (tagsInsideContainer.length >= 1) {
        cleanBothDiv();
        cleanAllDropDown();
        cleanTempArrays();
        let tempArray = recipes;
        for (let i = 0; i < tagsInsideContainer.length; i++) {
            let firstTagValue = tagsInsideContainer[i].textContent;
            let firstTagClass = tagsInsideContainer[i].className;
            let array = filterArrayWithTags(tempArray, firstTagValue, firstTagClass);
            tempArray = array;
        }
        tempArray.forEach(function(object) {
            displayRecipes(object);
        });
        treatmentsForElementsInDropDown();
    }
}