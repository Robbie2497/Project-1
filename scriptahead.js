
$(document).ready(function(){
    $('.datepicker').datepicker();
  });

$(document).ready(function(){
    $('.timepicker').timepicker();
  });

 //setItem()	Add key/value in LocalStorage
// getItem()	Get a value from LocalStorage
// removeItem()	Remove item by its key
// clear()	Remove all items from LocalStorage
// key()	Get a key of an item from LocalStorage


// localStorage.clear();

//to let us get the local storage submitted

  function submitForm()
{
  var firstName = document.getElementById("first_name");
  var lastName = document.getElementById("last_name"); 
  var datepicker = document.getElementById("datepicker");
  var timepicker = document.getElementById("timepicker");
  var orderArea = document.getElementById("order_list");
  
  var orders = getOrders();
  var newOrder = {
    firstName: firstName.value,
    lastName: lastName.value,
    datepicker: datepicker.value,
    timepicker: timepicker.value,
    orderArea: orderArea.value
  }
 
  orders.push(newOrder);
  saveOrders(orders);
  console.log("formsubmitted");
}

document.getElementById("submitBtn").addEventListener("click", submitForm);

var i;
console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}
console.log(localStorage);