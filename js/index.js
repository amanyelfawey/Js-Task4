// Exercise 1
//-----------------------------------------------------------------------------------------------------

// let userData =document.getElementById('user-data');
// let user = {
//     name:'ahmed',
//     age:22,
//     track:"Frontend Developer",
//     getTools : function getTools() {
//         return (console.log("Html,Css,Js"));
        
//     }
// };


// function getUserData(user) {
//     for (let prop in user) {
//         if (typeof(user[prop]) !== 'function') {
//            userData.innerHTML+=`<p> ${prop} :  ${user[prop]}</p>`
//         }

//     }

// }
// getUserData(user);

//----------------------------------------------------------------------------------------------------------
// Exercise 2

// let prodData =document.getElementById('user-data');
// let product ={
//     name:"Mobile",
//     price:5000,
//     discount:1000,
//     category:"Technology"
// };

// function getProductData(product) {
//     for (let prop in product) {
        
//            prodData.innerHTML+=`<p> ${prop} :  ${product[prop]}</p>`
//         }
//     }
// getProductData(product);

// let total=document.getElementById("price");
// function getTotalPrice(product){
//     let totalPrice =product.price - product.discount;
//     total.innerHTML=`<p>The Total price is: ${totalPrice}</p>`

// }
// getTotalPrice(product)

//----------------------------------------------------------------------------------------------------------
// Exercise 4
// Persist Theme Choice Using LocalStorage
// ● make simple web page [html+css] with some text
// ● Create a toggle button for light and dark themes.
// ● When the user selects a theme, save their choice in localStorage and apply the theme on page load.
// ● light theme [background white, color black]
// ● dark theme [background black, color white]
// ● on page refresh for the first time it should be light theme [default theme]
// ● on selecting a theme from btn click store the option in localstorage and apply the  chosen theme color  palette

let theme =document.getElementById("section")
let button=document.getElementById("btn")
let icon= button.querySelector('i')

function applyDarkTheme(){
    theme.style.color="white";
    theme.style.backgroundColor="black",
    button.style.color="black",
    button.style.backgroundColor="white"
    icon.classList.remove('fa-moon'); 
    icon.classList.add('fa-sun'); 
}

function applyLightTheme(){
    theme.style.backgroundColor="white";
    theme.style.color="black",
    button.style.backgroundColor="black",
    button.style.color="white"
    icon.classList.add('fa-moon'); 
    icon.classList.remove('fa-sun'); 
}


function toggleTheme() {
    let currentTheme = localStorage.getItem('theme');
  
    if (currentTheme === 'dark') {
      localStorage.setItem('theme', 'light');
      applyLightTheme(); 
    } else {
      localStorage.setItem('theme', 'dark');
      applyDarkTheme(); 
    }
  }



button.addEventListener('click', toggleTheme);