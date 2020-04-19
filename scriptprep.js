$(document).ready(function(){
    getForm();
})

function getForm()
{
 var orders = getOrders();
 
 for (var i = 0; i < orders.length; i++){
    var appendTable = document.getElementById("orderTable");
    var orderRow = document.createElement("tr");
    var fNameTd = document.createElement("td");
    var lNameTd = document.createElement("td");
    var dateTd = document.createElement("td");
    var timeTd = document.createElement("td");
    var ordListTd = document.createElement("td");
   
    appendTable.appendChild(orderRow);
    orderRow.appendChild(fNameTd);
    orderRow.appendChild(lNameTd);
    orderRow.appendChild(dateTd);
    orderRow.appendChild(timeTd);
    orderRow.appendChild(ordListTd);

    var firstName = orders[i].firstName; 
    var lastName = orders[i].lastName; 
    var datepicker = orders[i].datepicker; 
    var timepicker = orders[i].timepicker;
    var orderArea = orders[i].orderArea; 
    fNameTd.innerHTML = firstName;
    lNameTd.innerHTML = lastName;
    dateTd.innerHTML = datepicker;
    timeTd.innerHTML = timepicker;
    ordListTd.innerHTML = orderArea;
 }
 
};

