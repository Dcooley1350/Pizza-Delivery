// BUSINESS LOGIC

function Pizza(size,topping,style) {
  this.sizes = size;
  this.topping = topping;
  this.style = style;
} 

Pizza.prototype.price = function() {
  if (this.size = "Bagel Bite") {
    10 + (this.topping.length * .5)
  }
  else if (this.size = "small") {
    15 + (this.topping.length * .75)
  }
  else if (this.size = "medium") {
    20 + (this.topping.length *  1)
  }
  else if (this.size = "large") {
    25 + (this.topping.length * 1.5)
  }
  else if (this.size = "F*$% ME UP FAM") {
    30 + (this.topping.length * 2)
  }
}











// USER INTERFACE LOGIC

$(document).ready(function(){
  $("form#pizza-survey").submit(function(event) {
    var size = $("#size").val();
    var style = $("#style").val();;
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var meatToppings = $(this).val();
      toppings.push(meatToppings);
    });
    $("input:checkbox[name=veggie-toppings]:checked").each(function(){
      var veggieToppings = $(this).val();
      toppings.push(veggieToppings);
    });
  });
});
