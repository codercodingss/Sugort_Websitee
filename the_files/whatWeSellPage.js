    let sugarTypeSelect = document.querySelector('select[name="sugarType"]');
    let dcountriesSelect = document.querySelector('select[name="dcountries"]');
    let tcountriesSelect = document.querySelector('select[name="tcountries');


    //Working on the price btn when it's clicked to display the default price
const tpricesButton = document.getElementById('tprices');
tpricesButton.addEventListener('click', updateButtonText);
let mytexts = '$ 10.00';
function updateButtonText() {
    tpricesButton.textContent = mytexts; 
}

//Working on when the add to cart btn is clicked
const cartbtnButtons = document.getElementsByClassName('cartbtn');
for (let i = 0; i < cartbtnButtons.length; i++) {
    cartbtnButtons[i].addEventListener('click', updateBtncart);
    cartbtnButtons[i].addEventListener('click', justCart);
}

// Working on the checkout button like checkout: 1, checkout 2
const checkOutBtn = document.getElementsByClassName('checkoutbtn')[0]; 
let defaultCheckout = 0;

function updateBtncart() {
    defaultCheckout++;
    checkOutBtn.textContent = `Checkout ${defaultCheckout}`;
}

//Working on the add to cart USING OBJ

let myArr = [];
function justCart() {
    
    let sugarTypeSelect = document.querySelector('select[name="sugarType"]');
    let dcountriesSelect = document.querySelector('select[name="dcountries"]');
    let tcountriesSelect = document.querySelector('select[name="tcountries');
    
    myArr.push(sugarTypeSelect);
    myArr.push(dcountriesSelect);
    myArr.push(tcountriesSelect);
    myArr.push(mytexts);
    console.log(myArr);
}


// Function to capture selected values and add to cart
function addToCart() {
    const sugarTypeSelect = document.querySelector('select.sugarType0');
    const dcountriesSelect = document.querySelector('select[name="dcountries"]');
    const tcountriesSelect = document.querySelector('select[name="tcountries"]');
    
    // Get the selected values from the dropdowns
    const selectedValues = {
        sugarType: sugarTypeSelect.value,
        dcountries: dcountriesSelect.value,
        tcountries: tcountriesSelect.value
    };

    // Store the selected values in localStorage
    localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
}

// Attach the addToCart function to the "Add to cart" button
const cartButton = document.getElementById('boughtgoods');
cartButton.addEventListener('click', addToCart);
