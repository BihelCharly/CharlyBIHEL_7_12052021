// TO REMOVE TAGS ON CLICK
function removeElement(e) {
    if (e.target.tagName !== 'BUTTON') {
        e.target.parentElement.remove();
        searchAfterTagRemoved();
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
        let temporaryArray = [];
        for (let i = 0; i < tagsInsideContainer.length; i++) {
            let tag = tagsInsideContainer[i];
            let tagClass = tag.className;
            let tagValue = tag.textContent;
            //let valueToLowerCase = tag.textContent.toLowerCase();
            //let firstLetterToCap = firstCharCap(valueToLowerCase);
            //let search = searchinAllArray(recipes, valueToLowerCase, firstLetterToCap);
            let search = filterArrayWithTags(recipes, tagValue, tagClass);
            search.forEach(function(element) {
                temporaryArray.push(element);
            });
        }
        //console.log(temporaryArray);
    }
}