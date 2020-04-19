function getOrders(){
    var ordersString = localStorage.getItem("orders");
    var orders; 
    if(ordersString) {
      orders = JSON.parse(ordersString);
    } else {
      orders = [];
    };
    return orders;
  };

  function saveOrders(orders){
    var ordersString = JSON.stringify(orders);
    localStorage.setItem("orders", ordersString);
  }