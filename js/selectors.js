// DOM ELEMENTS
// MAIN INPUT
const input = document.querySelector('.input-field');
const inputContainer = document.querySelector(".search-container");
//// INGREDIENTS
const ingredientsInput = document.querySelector('.input--ingredients input');
const ingredientsBtn = document.querySelector('.input--ingredients button');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsListUl = document.querySelector('.ingredients__list ul');
//// DEVICES
const devicesInput = document.querySelector('.input--devices input');
const devicesBtn = document.querySelector('.input--devices button');
const devicesList = document.querySelector('.devices__list');
const devicesListUl = document.querySelector('.devices__list ul');
//// UTENSILES
const utensilsInput = document.querySelector('.input--utensils input');
const utensilsBtn = document.querySelector('.input--utensils button');
const utensilsList = document.querySelector('.utensils__list');
const utensilsListUl = document.querySelector('.utensils__list ul');
//// ALL INPUTS & BTNS & LISTS SELECTORS
const allInputs = document.querySelectorAll('.inputs-container input');
const allBtns = document.querySelectorAll('.inputs-container button');
let liInsideEachLists;
// INSIDE SECTION
const sectionRecipes = document.querySelector('.recipes');
const divError = document.querySelector('.error');
// DIV
const tagsContainer = document.querySelector('.tags-container');
let tagsButtons = document.querySelector('.search__tags button');