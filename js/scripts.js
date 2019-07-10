// BUSINESS LOGIC

function Pizza(size, toppings, style) {
  this.size = size;
  this.toppings = toppings;
  this.style = style;
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
    return (size,style)
  });
});
console.log(toppings)
console.log(size)
console.log(style)