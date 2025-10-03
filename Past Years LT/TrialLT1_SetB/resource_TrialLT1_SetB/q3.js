// Name:
// Email:

// DO NOT MODIFY
const items = [
  {
    name: "rice",
    price: 12,
    quantity: 0,
    subtotal: 0.0,
  },
  {
    name: "milk",
    price: 5,
    quantity: 0,
    subtotal: 0.0,
  },
  {
    name: "oil",
    price: 8,
    quantity: 0,
    subtotal: 0.0,
  },
];
// END

function addToCart() {
  var groceryItem = document.getElementById("groceryItem");
  var quantity = document.getElementById("quantity");

  if (
    groceryItem.validity.valid &&
    quantity.validity.valid &&
    quantity.value > 0
  ) {
    var selectedOption = groceryItem.options[groceryItem.selectedIndex];

    // Part B - To complete code for add item feature
    //
    //
    // End of Part B
    for (let item of items) {
      if (item.name == selectedOption.value.toLowerCase()) {
        item.quantity += parseInt(quantity.value);
        item.subtotal = item.quantity * item.price;
        if (document.getElementById(item.name) != null) {
          document.getElementById(
            item.name
          ).firstElementChild.innerText = `${selectedOption.value} - Quantity: ${item.quantity}, Subtotal: $${item.subtotal}`;
        } else {
          let div = document.createElement("div");
          div.id = item.name;
          div.className = "d-inline-flex m-1";
          let p = document.createElement("p");
          p.className = "align-items-center";
          p.innerText = `${selectedOption.value} - Quantity: ${item.quantity}, Subtotal: $${item.subtotal}`;
          let button = document.createElement("button");
          button.innerText = "Delete Item";
          button.className = "btn btn-danger ms-2";
          div.appendChild(p);
          div.appendChild(button);
          document.getElementById("cart").appendChild(div);
          button.addEventListener("click", function () {
            // Remove the item's div
            div.remove();

            // Reset the item’s quantity and subtotal
            item.quantity = 0;
            item.subtotal = 0.0;
          });
        }
        console.log(
          `${selectedOption.value} - Quantity: ${item.quantity}, Subtotal: $${item.subtotal}`
        );
      }
    }

    // Part C - To complete code for delete button
    //
    //
    // End of Part C
    // Reset the form
    document.getElementById("groceryForm").reset();
  }
}

function showFinalDetails() {
  // Part D - To complete code for showFinalDetails()
  //
  //
  // End of Part D
  
}
