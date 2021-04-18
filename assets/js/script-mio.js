//References
// variabili di richiamo per HTML
var nomeInserito = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var coupon = document.getElementById('coupon');
var button = document.getElementById('button');
var price = document.getElementById('price');

//settings
//variabili globali
var priceDefault = 50;
var coupons = ['sconto2021', 'sconto-bool'];
var discount = 0.3;

writePrice(priceDefault, price);
//events
button.addEventListener('click', function(){

  var nameUser = nomeInserito.value.trim();
  if(nameUser.length === 0){
    alert("Inserisci un nome con almeno un carattere");
  }else{
    var ingredientsPrice = 0;

    for(var i = 0; i < ingredients.length; i++){
     var singleIngredient = ingredients[i];
     if(singleIngredient.checked === true){
       ingredientsPrice += parseInt(singleIngredient.value);
     }  
    }

    var totalPrice = priceDefault + ingredientsPrice;
    if(coupons.includes(coupon.value) === true){
      totalPrice = totalPrice * (1 - discount);
    }

    writePrice(totalPrice, price);
  }
});
//funzione
function writePrice(val, target){
  target.innerHTML = val.toFixed(2);
}

