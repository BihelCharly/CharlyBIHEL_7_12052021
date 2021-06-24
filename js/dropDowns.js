// ARRAYS
let arrayIngredients = [];
let arrayDevices = [];
let arrayUtensils = [];

// TO DISPLAY ALL RECIPES
displayAllRecipesFromArray(recipes);

// TO DELETE DUPLICATED ELEMENTS, SORT THEM THEN PUSH THEM TO DROPDOWNS
treatmentsForElementsInDropDown();

function treatmentsForElementsInDropDown() {
    // DELETE DUPLICATED ELEMENTS INSIDE ARRAYS
    arrayIngredients = [...new Set(arrayIngredients)];
    arrayDevices = [...new Set(arrayDevices)];
    arrayUtensils = [...new Set(arrayUtensils)];
    // FUNCTION CALLED TO SORT ARRAYS FROM A TO Z
    sortElementsAZ(arrayIngredients);
    sortElementsAZ(arrayDevices);
    sortElementsAZ(arrayUtensils);
    // PUSH ELEMENTS IN DROPDOWNS - AT DROPDOWN.JS
    arrayToDropDown(arrayIngredients, ingredientsList);
    arrayToDropDown(arrayDevices, devicesList);
    arrayToDropDown(arrayUtensils, utensilsList);
}

// TO PUSH DATAS FROM ARRAYS TO DROPDOWN LISTS
function arrayToDropDown(array, list) {
    let whatDropDown = returnListSelector(list);
    cleanDropDown(whatDropDown);
    let newUl = document.createElement('ul');
    whatDropDown.appendChild(newUl);
    array.forEach(element => {
        newUl.insertAdjacentHTML("beforeend", '<li>' + element + '</li>');
    });
    liInsideEachLists = document.querySelectorAll('.list ul');
    liInsideEachLists.forEach(element => {
        addDropDownsListeners(element);
    });
}

// EVENT LISTENERS TO SHOW OR HIDE DROPDOWNS
addListenersToDropDown(allInputs);

function addListenersToDropDown(nodes) {
    nodes.forEach(function(element) {
        element.addEventListener('keyup', function(element) {
            let capturedValue = element.explicitOriginalTarget.value;
            let capturedParentValue = element.explicitOriginalTarget.parentElement.className;
            let capturedBtn = element.explicitOriginalTarget.nextElementSibling;
            if (capturedValue.length >= 3) {
                // PLACE TO ADD FUTUR FUNCTION TO MATCH ITEMS IN RECIPES
                let whatList = returnElements(capturedParentValue);
                let matchedElementsInList = returnElementsInList(whatList, capturedValue);
                if (matchedElementsInList.length === 0) {
                    let whatDropDown = returnListSelector(capturedParentValue);
                    cleanDropDown(whatDropDown);
                    whatDropDown.insertAdjacentHTML("beforeend", '<li>Aucun résultat</li>');
                } else if (matchedElementsInList.length >= 1) {
                    arrayToDropDown(matchedElementsInList, capturedParentValue);
                }
                arrowUp(capturedBtn);
                displayOn(capturedParentValue, 'input');
            } else if (capturedValue.length < 3) {
                arrowDown(capturedBtn);
                displayOff(capturedParentValue);
                arrayToDropDown(arrayIngredients, ingredientsList);
                arrayToDropDown(arrayDevices, devicesList);
                arrayToDropDown(arrayUtensils, utensilsList);
            }
        });
    });
}


// FUNCTION ON CLICK TO SHOW OR HIDE DROPDOWN LIST AND CHANGE THE ICON 
showOrHideDropdown(allBtns);

function showOrHideDropdown(nodes) {
    nodes.forEach(function(element) {
        element.addEventListener('click', function(element) {
            // PARAMETER TO KNOW WHAT TO DISPLAY INSIDE CONDITION
            let parentElementClassName = element.explicitOriginalTarget.parentElement.className;
            // CONDITIONS
            if (element.target.className.includes('arrowhead--down')) {
                // TO CHANGE THE ARROW ICON
                arrowUp(element.target);
                // TO SHOW LIST
                displayOn(parentElementClassName);
            } else if (element.target.classList.contains('arrowhead--up')) {
                // TO CHANGE THE ARROW ICON
                arrowDown(element.target);
                // TO HIDE LIST
                displayOff(parentElementClassName);
            }
        });
    });
}

// TO ADD LISTENERS WHO WILL A CREATE A TAG ON CLICK - FOR EACH ELEMENTS IN DROPDOWNS
function addDropDownsListeners(element) {
    let childrens = element.children;
    for (var i = 0; i < childrens.length; i++) {
        let children = childrens[i];
        children.addEventListener("click", createTag);
    }
}

// TO CREATE A TAG ON CLICK IN DROPDOWNS
function createTag(element) {
    let newTag = document.createElement('button');
    let tagText = element.target.textContent;
    let parent = element.target.parentElement.parentElement;
    let parentClassName = element.target.parentElement.parentElement.className;
    newTag.textContent = tagText;
    newTag.className = parentClassName;
    newTag.addEventListener('click', removeElement);
    newTag.insertAdjacentHTML("beforeend", '<i class="far fa-times-circle"></i>');
    tagsContainer.append(newTag);
    searchWithTags(status, tagText, parentClassName);
    displayOff(parentClassName);
    arrowDown(ingredientsBtn);
    arrowDown(devicesBtn);
    arrowDown(utensilsBtn);
}


// TO FILTER RESULTS IN DROPDOWNS LISTS
function returnElementsInList(list, value) {
    let array = [];
    let valueCase = value.toLowerCase();
    let filter = list.filter(function(e) {
        let test = e.toLowerCase().indexOf(valueCase) > -1;
        if (test === true) {
            array.push(e);
            return array;
        }
    });
    return filter;
}