// general code
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const section = document.getElementById('section')
const totalTag = document.getElementById('total');


function escapeString(str) {
    // Check if the string starts with a quote and does not end with one
    if (str.startsWith('"') && !str.endsWith('"')) {
        return str + '"'; // Add closing quote
    }
    return str; // Return the string as is if no issue
}
//add to the cart function
function addtocart(item){

    //check if item exist in the cart first
    const exist = cart.find(product => product.id === item.id);

    if(exist){
        exist.qty += 1;
        sessionStorage.setItem('notification', 'Another item has been added to the cart')
        // console.log('another one added')
    }else{
        // add item to cart
        const product = {
            id: item.id,
            title: item.title,
            price: item.price,
            qty: 1
        }
        cart.push(product);
        sessionStorage.setItem('notification', 'New item added')
         
    }
    
    showNotification()
    localStorage.setItem('cart', JSON.stringify(cart))
    displayTotal()
    
}

//display notification 
function showNotification(){
    const notification = sessionStorage.getItem('notification');
    added.innerText = notification
    added.style.display = 'block'

    setTimeout(() => {
        added.style.display = 'none'
    }, 3000);
}

// display total cart items
function displayTotal(){
    const cart = JSON.parse(localStorage.getItem('cart'))
    let total = 0;
    // console.log(cart)
    for(x of cart){
        total += x.qty
    }
    if(total > 0 ){
        totalTag.style.display = 'block'
    } 
    totalTag.innerText = JSON.stringify(total)
    // console.log(total)
}
displayTotal()

//display error IF the id doesnt exist
function displayErr(){
    section.innerHTML += `<p>Sorry, this item does not exist</p>`
}