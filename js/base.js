// REGEX
const reGexFirstWord = new RegExp('^([\S]+)');

// TO PUSH ALL INGREDIENTS/INGREDIENTS/UTENSILS FROM ALL RECIPES
//// STEP 1 - ARRAYS
let arrayIngredients = [];
let arrayDevices = [];
let arrayUtensils = [];
//// STEP 2 - FUNCTION TO GET DATAS
recipes.forEach(item => {
    // GET INGREDIENTS
    for (let i = 0; i < item.ingredients.length; i++) {
        let elements = item.ingredients[i].ingredient;
        let elementsTreatement = elements.substr(0, elements.indexOf(' ')).replace(/\./g, "");
        arrayIngredients.push(elementsTreatement);
    }
    // GET UTENSILS
    for (let i = 0; i < item.ustensils.length; i++) {
        let elements = item.ustensils[i].charAt(0).toUpperCase() + item.ustensils[i].slice(1);
        arrayUtensils.push(elements);
    }
    // GET DEVICES
    let elements = item.appliance;
    arrayDevices.push(elements);
    // FACTORY METHOD TO CREATE ARTICLES/CARDS
    let factory = new Factory();
    let factoryObjects = factory.createCard(item);
});
// DELETE DUPLICATED ELEMENTS INSIDE ARRAYS
arrayIngredients = [...new Set(arrayIngredients)];
arrayDevices = [...new Set(arrayDevices)];
arrayUtensils = [...new Set(arrayUtensils)];

// PUSH DATAS FROM ARRAYS TO DROPDOWN LISTS
((array1, array2, array3) => {
    array1.forEach(element => {
        ingredientsList.insertAdjacentHTML("beforeend", '<li>' + element + '</li>');
    });
    array2.forEach(element => {
        devicesList.insertAdjacentHTML("beforeend", '<li>' + element + '</li>');
    });
    array3.forEach(element => {
        utensilsList.insertAdjacentHTML("beforeend", '<li>' + element + '</li>');
    });
})(arrayIngredients, arrayDevices, arrayUtensils);


// EVENT LISTENERS TO SHOW OR HIDE DROPDOWNS
allInputs.forEach(function(element) {
    element.addEventListener('keyup', function(element) {
        let capturedValue = element.explicitOriginalTarget.value;
        let capturedParent = element.explicitOriginalTarget.parentElement;
        let capturedParentValue = element.explicitOriginalTarget.parentElement.className;
        let capturedBtn = element.explicitOriginalTarget.nextElementSibling;
        if (capturedValue.length >= 3) {
            // PLACE TO ADD FUTUR FUNCTION TO MATCH ITEMS IN RECIPES
            let whatList = returnElements(capturedParentValue);
            let matchedElementsInList = returnElementsInList(whatList, capturedValue);
            console.log(matchedElementsInList);
            console.log(whatList);
            arrowUp(capturedBtn);
            displayOn(capturedParentValue, 'input');
        } else if (capturedValue.length < 3) {
            arrowDown(capturedBtn);
            displayOff(capturedParentValue);
        }
    });
});

// FUNCTION TO SHOW LIST IN PARAMETER
function showList(list) {
    list.style.display = 'flex';
}
// FUNCTION TO HIDE LIST IN PARAMETER
function hideList(list, list2) {
    list.style.display = 'none';
    if (list2 != undefined) {
        list2.style.display = 'none';
    }
}
// FUNCTION TO CHANGE THE ARROWS
//// UP
function arrowUp(element) {
    element.classList.replace('arrowhead--down', 'arrowhead--up');
    element.innerHTML = '&#8963;';
}
//// DOWN
function arrowDown(element) {
    element.classList.replace('arrowhead--up', 'arrowhead--down');
    element.innerHTML = '&#8964;';
}

// FUNCTION ON CLICK TO SHOW OR HIDE DROPDOWN LIST AND CHANGE THE ICON 
allBtns.forEach(function(element) {
    element.addEventListener('click', function(element) {
        // PARAMETER TO KNOW WHAT TO DISPLAY INSIDE CONDITION
        let parentElementClassName = element.explicitOriginalTarget.parentElement.className;
        // CONDITIONS
        console.log(element.target.className);
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

// TO ADD SELECTED VALUE INSIDE DROPDOWNS INTO A TAG
allLists.forEach(function(element) {
    addElements(element);
});

function addElements(element) {
    let childrens = element.children;
    for (var i = 0; i < childrens.length; i++) {
        let children = childrens[i];
        // EVENTLISTENER
        childrens[i].addEventListener("click", function() {
            let newElement = document.createElement('button');
            let parent = children.parentElement.className;
            let className = whatClassName(parent);
            newElement.className = className;
            newElement.textContent = children.textContent;
            newElement.addEventListener('click', removeElement);
            newElement.insertAdjacentHTML("beforeend", '<i class="far fa-times-circle"></i>');
            tagsContainer.appendChild(newElement);
            displayOff(element.className);
            arrowDown(ingredientsBtn);
            arrowDown(devicesBtn);
            arrowDown(utensilsBtn);
        });
    }
}

// TO REMOVE TAGS ON CLICK
function removeElement(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.remove();
    } else {
        e.target.parentElement.remove();
    }
}

// TO FILTER RESULTS IN LIST
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