
const categoryList = document.getElementById('category-list');
const categoryForm = document.getElementById('category-form');

// Define key for category data in local storage
const CATEGORY_KEY = 'categories';
// Read category data from local storage
let categories = JSON.parse(localStorage.getItem(CATEGORY_KEY)) || [];
// Display each category as a clickable element
function updateCategoryList() {
categoryList.innerHTML = '';
categories.forEach(category => {
const categoryElement = document.createElement('option');
categoryElement.classList.add('category');
categoryElement.textContent = category;
categoryList.appendChild(categoryElement);
});
}


updateCategoryList();

// Create new category
categoryForm.addEventListener('submit', function(event) {
event.preventDefault();
const newCategory = document.getElementById('new-category').value.trim();
if (!newCategory) {
// Show error message for empty category
alert("some thing went wrong !!");
// return;
}
if (categories.includes(newCategory)) {
return;
}
categories.push(newCategory);
localStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
updateCategoryList();
categoryForm.reset();
});

// Edit category
const category = document.getElementById("category-list").value;
function editCategory(category) {
const index  = categories.indexOf(category);
const value_ = document.getElementById("new-category");
value_.value = categories[index].category;
}
// Edit 
const editButton = document.getElementById('buttonEdit');
editButton.addEventListener('click',() => editCategory(category));

// Delete category
function deleteCategory(category){
const index = categories.indexOf(category);
if (index !== -1) {
categories.splice(index, 1);
localStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
updateCategoryList();
}
}