// Your answer goes here

// Feel free to add more code
const api_endpoint_url = "api/products.php"
function populateCategories() {
   // TODO
   console.log('populateCategories()');
   axios
   .get(api_endpoint_url)
   .then((response) => {
      console.log(response.data);
      for (item in response.data){
         console.log(item);
         let option = document.createElement("option");
         option.value = item;
         option.innerText = item;
         document.getElementById("category").appendChild(option);
      }
   }
   )
}


async function updateProductTable() {
   // TODO
   console.log('updateProductTable()');

   const categoryEle = document.getElementById('category');
   const outputEle = document.getElementById('output');

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

   while (outputEle.lastChild) outputEle.lastChild.remove();

   
}


function doAdd() {
   // TODO
   console.log('doAdd()');
}