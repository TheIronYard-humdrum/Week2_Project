// //////////////////////////////////////////
// ----------
// Week 2 Project
// Data Gathering Functions
// -------------------
// //////////////////////////////////////////

document.write("<!DOCTYPE html><html><head><title>My First JS Generated Page</title></head><body></body></html>")

var bodyNode = document.getElementsByTagName("body")

// //////////////////////////////////////////
// ------   Answer 1 ------------------------
// ------    Return Average Price of Items --
// ------    --------------------------------
// ------    - itemPrice takes an array of 
// ------       items and returns and array of
// ------       prices
// ------    - avg takes an array of prices
// ------       and returns the average price.
// //////////////////////////////////////////

var itemPrice = function(items) {
  var prices = items.map(function(item) {
    return item.price;
  });
  return prices;
};

var prices = itemPrice(items);

var avg = function(prices) {
  var total = prices.reduce(function(price, next) {
    return price + next
  });
  return (total/prices.length);
};

var averagePrice = avg(prices).toFixed(2);

// -------------------------
// -- Answer 1 Page Population
// -------------------------

var answerOne = document.createElement("P");
var answerOneText = document.createTextNode(averagePrice);
answerOne.appendChild(answerOneText);
document.getElementById("answer1").appendChild(answerOne);

// //////////////////////////////////////////
// ------   Answer 2 -------------------
// ------    Items within Price Range --
// ------    ------------------------------
// ------    Takes an array of items, a min 
// ------      price, and a max price as
// ------      arguments.
// //////////////////////////////////////////


var priceRange = function(items, min, max) {
  var inRange = items.filter(function(item) {
    if (item.price > min && item.price < max) {
      return item
    }
  });
  return inRange;
};

var inPriceRange = priceRange(items, 14, 18);

// -------------------------
// -- Answer 2 Page Population
// -------------------------

  var answerTwoList = document.createElement("UL");
  answerTwoList.setAttribute("id", "answerTwoList");
  document.getElementById("answer2").appendChild(answerTwoList);

  var answerTwoGenerator = function(items) {
    for (i in items) {
      var answerTwo = document.createElement("LI");
      var answerTwoText = document.createTextNode(items[i].title);
      answerTwo.appendChild(answerTwoText);
      document.getElementById("answerTwoList").appendChild(answerTwo);
    }
  };
  answerTwoGenerator(inPriceRange);

// //////////////////////////////////////////
// ------   Answer 3 ----------------------
// ------    Items Sold in GBP ------------
// ------    ------------------------------
// ------    Takes an array of items and a 
// ------      currency type as arguments.
// //////////////////////////////////////////


var currencyType = function(items, type) {
  var ofType = items.filter(function(item) {
    if (item.currency_code == type) {
      return item;
    }
  });
  return ofType
};

var ofCurrencyType = currencyType(items, "GBP")

// -------------------------
// -- Answer 3 Page Population
// -------------------------
 
 function answerThreeGenerator(items) {
  for (i in items) {
    var answerThree = document.createElement("P");
    var answerThreeText = document.createTextNode(ofCurrencyType[i].title + " \xA3 " + ofCurrencyType[i].price);
    answerThree.appendChild(answerThreeText);
    document.getElementById("answer3").appendChild(answerThree);
  }
 }

 answerThreeGenerator(ofCurrencyType);

// //////////////////////////////////////////
// ------   Answer 4 ----------------------
// ------    Display all tiems made of wood.
// ------    ------------------------------
// ------    Takes an array of items and 
// ------      returns the items made of 
// ------      the specified material.
// //////////////////////////////////////////

var materialType = function(items, material) {
  var ofType = items.filter(function(item) {
    if ((item.materials).includes(material)) {
      return item
    }
  });
  return ofType
}

var madeOfWood = materialType(items, "wood");

// -------------------------
// -- Answer 4 Page Population
// -------------------------

 var answerFourList = document.createElement("UL");
 answerFourList.setAttribute("id", "answerFourList");
 document.getElementById("answer4").appendChild(answerFourList);
 
 var answerFourGenerator = function(items) {
   for (i in items) {
   var answerFour = document.createElement("LI")
   var answerFourText = document.createTextNode(items[i].title);
   answerFour.appendChild(answerFourText);
   document.getElementById("answerFourList").appendChild(answerFour);
   }
 }
 answerFourGenerator(madeOfWood)

// //////////////////////////////////////////
// ------   Answer 5 ----------------------
// ------    Display all tiems made of n+ 
// ------     materials
// ------    ------------------------------
// ------    Takes an array of items and 
// ------      returns the items made with
// ------      n+ materials.
// //////////////////////////////////////////

var materialCount = function(items, n) {
  var inRange = items.filter(function(item) {
    if ((item.materials).length >= n) {
      return item
    }
  });
  return inRange;
};

var eightPlusMatierals = materialCount(items, 8);

// -------------------------
// -- Answer 5 Page Population
// -------------------------

 var answerFiveGen = function(items) {
   var masterUl = document.createElement("UL");
   for (i in items) {
     var masterLi = document.createElement("LI");
     var masterLiText = document.createTextNode(items[i].title)
     masterLi.appendChild(masterLiText);
     var subUl = document.createElement("UL");
     for (a in items[i].materials) {
       var subLi = document.createElement("LI");
       var subLiText = document.createTextNode(items[i].materials[a])
       subLi.appendChild(subLiText);
       subUl.appendChild(subLi);
     }
     masterLi.appendChild(subUl);
     masterUl.appendChild(masterLi);
   }
   answerFive = document.getElementById("answer5");
   answerFive.appendChild(masterUl);
 }
 
 
 answerFiveGen(eightPlusMatierals);

// //////////////////////////////////////////
// ------   Answer 6 ----------------------
// ------    Display all tiems made specified
// ------     manufacturer.
// ------    ------------------------------
// ------    Takes an array of items and 
// ------      returns the items made by
// ------      specified manufacturer.
// //////////////////////////////////////////

var madeBy = function(items, manufacturer) {
  var authentic = items.filter(function(item) {
    if (item.who_made == manufacturer) {
      return item
    }
  });
  return authentic;
};

var sellerMade = madeBy(items, "i_did");

// -------------------------
// -- Answer 6 Page Population
// -------------------------

var answerSix = document.createElement("P");
var asnwerSixText = document.createTextNode(String(sellerMade.length  + " were made by their sellers"));
answerSix.appendChild(asnwerSixText);
document.getElementById("answer6").appendChild(answerSix);



