// Your answer goes here

// Feel free to add more code
const url = './api/products.php';

async function populateCategories() {
   // TODO
   // console.log('populateCategories()');
   const categoryEle = document.getElementById('category');

   try {
      const response = await axios.get(url);
      // console.log(response.data);

      for (let category in response.data) {
         let option = categoryEle.appendChild(document.createElement('option'));
         option.value = category;
         option.innerText = category;
      }
   } catch (error) {
      console.error(error);
   }
}


async function updateProductTable() {
   // TODO
   // console.log('updateProductTable()');

   const categoryEle = document.getElementById('category');
   const outputEle = document.getElementById('output');

   // If no category selected
   if (categoryEle.value === "") {
      outputEle.innerText = "Select a product category."
      return;
   }

   try {
      const response = await axios.get(url, {
         params: {
            category: categoryEle.value
         }
      });
      // console.log(response.data);

      // clear contents of outputEle
      while (outputEle.lastChild) outputEle.lastChild.remove();

      // <table class="table table-primary table-striped ">
      let table = outputEle.appendChild(document.createElement('table'));
      table.className = "table table-primary table-striped ";

      //    <thead>
      let thead = table.appendChild(document.createElement('thead'));
      {
         //       <tr>
         let tr = thead.appendChild(document.createElement('tr'));
         //          <th scope="col">Name</th>
         //          <th scope="col">Price</th>
         let firstProduct = response.data[0];
         for (let fieldName in firstProduct) {
            let th = tr.appendChild(document.createElement('th'));
            th.setAttribute('scope', 'col');
            th.innerText = fieldName;
         }
         //       </tr>
      }
      //    </thead>

      //    <tbody>
      let tbody = table.appendChild(document.createElement('tbody'));
      for (let product of response.data) {
         //       <tr>
         let tr = tbody.appendChild(document.createElement('tr'));

         //          <td>Example</th>
         //          <td>4.95</td>
         for (let fieldName in product) {
            let td = tr.appendChild(document.createElement('td'));
            td.innerText = product[fieldName];
         }
         //       </tr>
      }
      //    </tbody>
      // </table>

   } catch (error) {
      console.error(error);
   }
}


async function doAdd() {
   // TODO
   // console.log('doAdd()');
   const categoryEle = document.getElementById('category');
   const nameInput = document.getElementById('nameInput');
   const priceInput = document.getElementById('priceInput');

   // Form validation is not graded.  Included here for completeness sake.
   const errors = [];
   // If no category selected
   if (categoryEle.value === "") {
      errors.push("Select a product category.");
   }

   // if name is blank
   let nameValue = nameInput.value.trim();
   if (nameValue === "") {
      errors.push("Enter a name.");
   }

   // If price is invalid
   let priceValue = priceInput.value.trim();
   if (priceValue === "" || isNaN(priceValue)) {
      errors.push("Enter a price.");
   }

   if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
   }

   try {
      const response = await axios.post(url, {
         category: categoryEle.value,
         name: nameValue,
         price: priceInput.value,
      });
      // console.log(response.data);

      updateProductTable();

      nameInput.value = '';
      priceInput.value = '';
   } catch (error) {
      console.error(error);
   }
}