let form = document.querySelector('.form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
let search = document.querySelector('[placeholder="Search"]')
let data_all = document.querySelector(".parent_data_all");
data_all.innerHTML = ''
let search_value = search.value
Makeup(search_value)
console.log(search_value);

})

 
async function Makeup(data_brand) {
  let res = fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${data_brand}`);
  let out = await res;
  let result = out.json();
  let output = await result;
  console.log(output);
  for (let i of output) {
    try {
  let br_tag = document.getElementsByTagName('br')
      for(let i of br_tag){
        i.remove()
      }

      let data_all = document.querySelector(".parent_data_all");
      let div_data = document.createElement("div");
      div_data.classList.add("head");
      // brand
      console.log(i.brand);
      let brand = document.createElement("h3");
      brand.innerText = `Brand : ${i.brand}`
      div_data.append(brand);

      // name
      console.log(i.name);
      let name = document.createElement("span");
      name.innerText = `Name : ${i.name}`
      div_data.append(name);

      // price
      console.log(i.price);
      let price = document.createElement("h4");
      price.innerText = `$ : ${i.price}`
      div_data.append(price);

      // imgde
      if(i.image_link){
        console.log(i.image_link);
      let image = document.createElement("img");
      image.setAttribute("src", i.image_link);
      div_data.append(image);
      }
      

      // product_link
      console.log(i.product_link);
      let link = document.createElement("a");
      link.setAttribute("href", i.product_link);
      link.innerText = "Product Link Click here";
      div_data.append(link);

      // description
      console.log(i.description);
      let desc = document.createElement("p");
      desc.innerText = `Description : ${i.description}`
      div_data.append(desc);

      data_all.append(div_data);
    } catch {
      console.log("error");
    }
  }
}
Makeup('covergirl')