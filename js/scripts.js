// BUSINESS LOGIC

function Pizza(size,toppings,style) {
  this.size = size;
  this.toppings = toppings;
  this.style = style;
} 

Pizza.prototype.price = function() {
  if (this.size = "Bagel Bite") {
    return(10 + (this.toppings.length * .5))
  }
  else if (this.size = "small") {
    return(15 + (this.toppings.length * .75))
  }
  else if (this.size = "medium") {
    return(20 + (this.toppings.length *  1))
  }
  else if (this.size = "large") {
    return(25 + (this.toppings.length * 1.5))
  }
  else if (this.size = "F*$% ME UP FAM") {
    return(30 + (this.toppings.length * 2))
  }
};

// USER INTERFACE LOGIC

Pizza.prototype.display = function (){
  $("#pizza-price").text(this.price())
  $("#pizza-total-price").text(this.price() + 5)
  $("#pizza-size").text(this.size)
  $("#pizza-style").text(this.style)
  this.toppings.forEach(function(topping) {
    $("#pizza-toppings").append("<li>" + topping + "</li>")
  });
}

var allToppings = []
$(document).ready(function(){
  $("form#pizza-survey").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var style = $("#style").val();;
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var meatToppings = $(this).val();
      allToppings.push(meatToppings);
    });
    $("input:checkbox[name=veggie-toppings]:checked").each(function(){
      var veggieToppings = $(this).val();
      allToppings.push(veggieToppings);
    });
    var newPizza = new Pizza(size, allToppings, style)
   
    newPizza.display()
    $("#user-orders").show();
  });
});
