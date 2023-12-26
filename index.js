const url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";
let listEl = document.getElementById("list");

let categoryType;
let apiData;

let mensCategoryEl = document.getElementById("mensCategory");
let womensCategoryEl = document.getElementById("womensCategory");
let kidsCategoryEl = document.getElementById("kidsCategory");


// function categorySeclection(choice="Men"){
// categoryType = choice;
// console.log(choice)
// console.log(apiData)
// for(let item of apiData){
//    // if(item.category_name === categoryType)
//     //check(item);
//     console.log(item)
// // console.log(item)

// }

// // console.log(item)



// }
function categorySeclection(){
    categoryType = "Women";
}

function againCategorySeclection(cat){
   
    categoryType = cat;
   
    for(let item of apiData){
      
        if(item.category_name === cat){

     
    let count = 0;        
            for(let pdt of item.category_products){
    let {title, price, compare_at_price, vendor, image, second_image, badge_text } = pdt;
    count++
    let cardTitle2 = document.getElementById("cardTitle"+count.toString());
    let listItemEl2 = document.getElementById("listItem"+count.toString());
    let priceEl2 = document.getElementById("price"+count.toString());
    let comparedPriceEl2 = document.getElementById("comparedPrice"+count.toString());
   //let offerPercentageEl2 = document.getElementById("offerPercentage"+count.toString());
    let productImageEl2 = document.getElementById("productImage"+count.toString());
    let productBadgeEl2 = document.getElementById("productBadge"+count.toString());

    //console.log(cardTitle2)
    if(badge_text == null){
        console.log("yes")
        let badgeTextEl2 = document.getElementById("productBadge"+count.toString());
        badgeTextEl2.classList.remove("product-badge");
        console.log(badge_text)

    }
   
    if(badge_text !== null){
        console.log("yes")
        let badgeTextEl2 = document.getElementById("productBadge"+count.toString());
        badgeTextEl2.classList.add("product-badge");
        console.log(badge_text)

    }
    cardTitle2.textContent = title;
    listItemEl2.textContent = vendor;
    priceEl2.textContent = price;
    comparedPriceEl2.textContent = compare_at_price;
    productImageEl2.style.backgroundImage = "url('" + image +"')";
    productBadgeEl2.textContent = badge_text;
   // console.log(typeof(badge_text))
        }
            
        }
    }
    console.log(cat)
}

mensCategoryEl.addEventListener("click",()=>{
    againCategorySeclection("Men");
    
    
    

  });
  womensCategoryEl.addEventListener("click",()=>{
    //document.getElementById("productsContainer").remove();
    againCategorySeclection("Women");
  });
  kidsCategoryEl.addEventListener("click",()=>{
    againCategorySeclection("Kids");
  })
categorySeclection();
const doNetworkCall = async()=>{
    try{
        const response = await fetch(url);
        const jsonData = await response.json();
        let {categories} = jsonData
         for(let item of categories){
            apiData = categories;
            if(item.category_name === categoryType)
            check(item);
        //againCategorySeclection("Men");
       // console.log(item)

        }
    
        
    }catch(err){
        console.log(err);
    }
};

doNetworkCall()

function check(item){
    let add = 1;

    for(let product of item.category_products){
      
    
      let { title, price, compare_at_price, vendor, image, second_image, badge_text } = product;
      let id = add++;
      //console.log(typeof(id))
      //console.log(id)
      //console.log(typeof(id))
      document.body.style.backgroundImage = "url(${image})";
      
    let productsContainerEl = document.getElementById("productsContainer");

    let cardContainerEl = document.createElement("div");
    cardContainerEl.classList.add("card-container");
    cardContainerEl.id = "cardContainer";
    productsContainerEl.appendChild(cardContainerEl);

    let cardTopContainerEl = document.createElement("div");
    cardTopContainerEl.classList.add("card-top-container");
    cardTopContainerEl.id = "cardTopContainer";
    cardContainerEl.appendChild(cardTopContainerEl);

    
    let productImageEl = document.createElement("div");
    productImageEl.classList.add("product-image");
    productImageEl.id = "productImage"+ id;
    productImageEl.style.backgroundImage = "url('" + image +"')";
    cardTopContainerEl.appendChild(productImageEl);
//console.log("productImage"+id)
    //if(typeof(" ") == typeof(badge_text)){
        
    
    let productBadgeEl = document.createElement("span");
    productBadgeEl.classList.add("product-badge");
    productBadgeEl.id = "productBadge" + id;
    productBadgeEl.textContent = badge_text;
    productImageEl.appendChild(productBadgeEl);
    
   if(badge_text == null){
        productBadgeEl.classList.remove("product-badge");
   }
   
   
    let cardBottomContainerEl = document.createElement("div");
    cardBottomContainerEl.classList.add("card-bottom-container");
    cardBottomContainerEl.id = "cardBottomContainer";
    cardContainerEl.appendChild(cardBottomContainerEl);

    let cardTitleDetailsContainerEl = document.createElement("div");
    cardTitleDetailsContainerEl.classList.add("card-title-details-container");
    cardTitleDetailsContainerEl.id = "cardTitleDetailsContainer";
    cardBottomContainerEl.appendChild(cardTitleDetailsContainerEl);

    let cardTitleEl = document.createElement("span");
    cardTitleEl.classList.add("card-title");
    cardTitleEl.id = "cardTitle"+ id;
    cardTitleEl.textContent = title;

    cardTitleDetailsContainerEl.appendChild(cardTitleEl);

    let listContainerEl = document.createElement("ul");
    listContainerEl.classList.add("list-container");
    listContainerEl.id = "listContainer";
    cardTitleDetailsContainerEl.appendChild(listContainerEl);

    let listItemEl = document.createElement("li");
    listItemEl.classList.add("list-item");
    listItemEl.id = "listItem" + id;
    listItemEl.textContent = vendor;
    listContainerEl.appendChild(listItemEl);

    let cardPriceDetailsContainerEl = document.createElement("div");
    cardPriceDetailsContainerEl.classList.add("card-price-details-container");
    cardPriceDetailsContainerEl.id = "cardPriceDetailsContainer";
    cardBottomContainerEl.appendChild(cardPriceDetailsContainerEl);

    let priceEl = document.createElement("span");
    priceEl.classList.add("price");
    priceEl.id = "price" + id;
    priceEl.textContent = price;
    cardPriceDetailsContainerEl.appendChild(priceEl);

    let comparedPriceEl = document.createElement("span");
    comparedPriceEl.classList.add("compared-price");
    comparedPriceEl.id = "comparedPrice" + id;
    comparedPriceEl.textContent = compare_at_price;
    cardPriceDetailsContainerEl.appendChild(comparedPriceEl);

    let offerPercentageEl = document.createElement("span");
    offerPercentageEl.classList.add("offer-percentage");
    offerPercentageEl.id = "offerPercentage" + id;
    offerPercentageEl.textContent = "50% Off";
    cardPriceDetailsContainerEl.appendChild(offerPercentageEl);

    let cartBtnContainerEl = document.createElement("div");
    cartBtnContainerEl.classList.add("card-btn-container");
    cartBtnContainerEl.id = "cartBtnContainer";
    cardBottomContainerEl.appendChild(cartBtnContainerEl);

    let cartBtnEl = document.createElement("button");
    cartBtnEl.classList.add("cart-btn");
    cartBtnEl.id = "cartBtn" + id;
    cartBtnEl.textContent = "Add to Cart";
    cartBtnContainerEl.appendChild(cartBtnEl);

    }
}

