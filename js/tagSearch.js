// TABLEAU DUPLIQUé ET UTILISé POUR ENCHAINER LES RECHERCHES A CHAQUE CLICK
let duplicatedArray = [];
// VARIABLE UTILISéE SI AUCUN ELEMENT N'EST TROUVé
let status = true;

// DEFINIT DANS QUEL TABLEAU FAIRE LA RECHERCHE PUIS APPEL LA FONCTION DE FILTRE
function searchWithTags(status, value, where) {
    cleanBothDiv();
    if (status === false) {
        showError();
    } else if (status === true) {
        let arrayToWorkWith = [];
        if (duplicatedArray.length === 0) {
            arrayToWorkWith = recipes;
        } else {
            arrayToWorkWith = duplicatedArray;
        }
        duplicatedArray = filterArrayWithTags(arrayToWorkWith, value, where);
        if (duplicatedArray.length === 0) {
            showError();
        } else {
            status = true;
            duplicatedArray.forEach(function(object) {
                displayRecipes(object);
            });
        }
    }
}

// FONCTION DE FILTRE QUI RETOURNE LES OBJETS CORRESPONDANT A LA VALEUR ENVOYé PAR LE LISTENER
function filterArrayWithTags(array, value, parentClassName) {
    let test1;
    let test2;
    let temporaryArray = [];
    let valueToLowerCase = value.toLowerCase();
    let firstLetterToCap = firstCharCap(valueToLowerCase);
    array.filter(function(object) {
        switch (parentClassName) {
            case 'ingredients__list list':
                object.ingredients.filter(function(element) {
                    //console.log(element.ingredient);
                    test1 = element.ingredient.includes(valueToLowerCase);
                    test2 = element.ingredient.includes(firstLetterToCap);
                });
                break;
            case 'devices__list list':
                test1 = object.appliance.includes(valueToLowerCase);
                test2 = object.appliance.includes(firstLetterToCap);
                break;
            case 'utensils__list list':
                object.ustensils.filter(function(element) {
                    test1 = element.includes(valueToLowerCase);
                    test2 = element.includes(firstLetterToCap);
                });
                break;
        }
        if (test1 || test2) {
            temporaryArray.push(object);
        }
    });
    return temporaryArray;
}