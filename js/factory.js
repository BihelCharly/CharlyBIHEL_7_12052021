// TO CREATE EACH RECIPES FROM RECIPES ARRAY
function Factory() {

    this.createCard = function(object) {

        // INIATE NEW OBJECT
        let newCard;
        const newRecipe = function() {};
        newCard = new newRecipe();

        // CONTAINER
        newCard.container = (() => {
            let element = document.createElement('article');
            element.className = 'card';
            return element;
        })();
        // IMG
        newCard.image = (() => {
            let element = document.createElement('div');
            element.className = 'card__img';
            return element;
        })();
        // DESCRIPTION
        newCard.description = (() => {
            let element = document.createElement('div');
            element.className = 'card__description';
            return element;
        })();
        // INGREDIENT CONTAINER
        newCard.ingredientsContainer = ((title, ingredients) => {
            let element = document.createElement('div');
            element.className = 'ingredients';
            element.insertAdjacentHTML("beforeend", '<p>' + title + '</p>');
            ingredients.forEach(object => {
                // FUNCTION CAN BE FOUND IN THE BOTTOM OF CURRENT FACTORY.JS SCRIPT
                let details = recipesDetails(object);
                element.insertAdjacentHTML("beforeend", details);
            });
            return element;
        })(object.name, object.ingredients);
        // RECIPE PART / HOW TO PART
        newCard.howTo = ((recipe, time) => {
            let element = document.createElement('div');
            element.className = 'howto';
            element.insertAdjacentHTML("beforeend", '<p><i class="far fa-clock"></i>' + time + ' min</p>');
            element.insertAdjacentHTML("beforeend", '<p>' + recipe + '</p>');
            return element;
        })(object.description, object.time);
        // PUSH ELEMENTS TO DROPDOWNS
        newCard.dropDowns = (() => {
            for (let i = 0; i < object.ingredients.length; i++) {
                let elements = object.ingredients[i].ingredient;
                //let elementsTreatement = elements.substr(0, elements.indexOf(' ')).replace(/\./g, "");
                arrayIngredients.push(elements);
            }
            // GET UTENSILS
            for (let i = 0; i < object.ustensils.length; i++) {
                let elements = object.ustensils[i].charAt(0).toUpperCase() + object.ustensils[i].slice(1);
                arrayUtensils.push(elements);
            }
            // GET DEVICES
            let elements = object.appliance;
            arrayDevices.push(elements);
        })(object.ingredients, object.ustensils, object.appliance);

        // APPEND ELEMENT TROUGHT THE DOM
        newCard.container.append(newCard.image);
        newCard.container.append(newCard.description);
        newCard.description.append(newCard.ingredientsContainer);
        newCard.description.append(newCard.howTo);
        sectionRecipes.appendChild(newCard.container);

        // RETURN OBJECT
        return newCard;
    };
}


// FUNCTION TO HANDLE UNDEFINED IN RECIPES DETAILS
function recipesDetails(object) {
    let details;
    if (object.quantity !== undefined && object.unit !== undefined) {
        details = '<p>' + object.ingredient + ': ' + object.quantity + ' ' + object.unit + '</p>';
    } else if (object.quantity !== undefined && object.unit == undefined) {
        details = '<p>' + object.ingredient + ': ' + object.quantity + '</p>';
    } else if (object.quantity == undefined && object.unit !== undefined) {
        details = '<p>' + object.ingredient + object.unit + '</p>';
    } else {
        details = '<p>' + object.ingredient + '</p>';
    }
    return details;
}