// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
        if (state.mushrooms) {
          oneMushroom.style.visibility = 'visible';
        } else {
          oneMushroom.style.visibility = 'hidden';
        }
      });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGP) => {
    if (state.greenPeppers) {
      oneGP.style.visibility = 'visible';
    } else {
      oneGP.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  const crustSection = document.querySelector('.crust');
  const cheeseSection = crustSection.querySelector('.cheese');

  cheeseSection.style.visibility = 'visible';

  if (state.glutenFreeCrust) {
    crustSection.classList.add('crust-gluten-free');
  } else {
    crustSection.classList.remove('crust-gluten-free');
  }
   
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceSection = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceSection.classList.add('sauce-white');
  } else {
    sauceSection.classList.remove('sauce-white');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
  const mushroomsButton = document.querySelector('.btn.btn-mushrooms');
  const greenPeppersButton = document.querySelector('.btn.btn-green-peppers');
  const whiteSauceButton = document.querySelector('.btn.btn-sauce');
  const glutenFreeCrustButton = document.querySelector('.btn.btn-crust');

  if (state.pepperoni) {
    pepperoniButton.classList.add('active');
  } else {
    pepperoniButton.classList.remove('active');
  }

  if (state.mushrooms) {
    mushroomsButton.classList.add('active');
  } else {
    mushroomsButton.classList.remove('active');
  }

  if (state.greenPeppers) {
    greenPeppersButton.classList.add('active');
  } else {
    greenPeppersButton.classList.remove('active');
  }

  if (state.whiteSauce) {
    whiteSauceButton.classList.add('active');
  } else {
    whiteSauceButton.classList.remove('active');
  }

  if (state.glutenFreeCrust) {
    glutenFreeCrustButton.classList.add('active');
  } else {
    glutenFreeCrustButton.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  const priceList = document.querySelector('.price ul');
  priceList.innerHTML = '';

  let totalPrice = basePrice;

  for (const ingredient in ingredients) {
    if (state[ingredient]) {
      const Name = ingredients[ingredient].name;
      const Price = ingredients[ingredient].price;

      const listItem = document.createElement('li');
      listItem.innerText = `$${Price} ${Name}`;
      priceList.appendChild(listItem);

      totalPrice += Price;
    }
  }
  const totalPriceElement = document.querySelector('.price strong');
  totalPriceElement.innerText = `$${totalPrice}`;
}

//////////////////////////////////////////////////////////////////////////////

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

