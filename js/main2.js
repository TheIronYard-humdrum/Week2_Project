/// filters


//gets all item prices filter
var priceFilter = function(items) {
  prices = []
  items.filter(function(item) {
    prices.push(item.price)
  });
  return prices;
};

prices = priceFilter(items)

var avePrice = function(prices) {
  var total = prices.reduce(function(a, b) {
    return a + b;
  });
  return (total/prices.length).toFixed(2)
}

averagePrice = avePrice(prices)

//returns list of items (with full specs) with in price range
var inPriceRange = function(minPrice, maxPrice, items) {
  var itemsInRange = [];
  items.forEach(function(item) {
    if (item.price > minPrice && item.price < maxPrice) {
      itemsInRange.push(item)
    }
  });
  return itemsInRange
}


// gets all item titles filter
var itemNameFilter = function(items) {
  titles = [];
  items.filter(function(item) {
    titles.push(item.title)
  })
  return titles;
}

titles = itemNameFilter(items)

/// Returns a list of item names within the given price range
var itemsInPriceRange = itemNameFilter(inPriceRange(14, 18, items))

/// get all items of currency type filter

var currencyTypeFilter = function(items, currency) {
  var itemsOfCurrencyType = items.filter(function(item) {
    if (item.currency_code == currency) {
      return item;
    }
  })
  return itemsOfCurrencyType
}

var GBPItem = currencyTypeFilter(items, "GBP")



//// display all items made of specified material

var itemMaterialFilter = function(items, material) {
  itemsOfMaterial = [];
  items.filter(function(item) {
    if (item.materials.includes(material)) {
      itemsOfMaterial.push(item)
    }
  });
  return itemsOfMaterial
}

//all items made of wood
woodItems = itemMaterialFilter(items, "wood")

var materialCount = function(items, count) {
  itemsOfMaterialCount = [];
  items.filter(function(item) {
    if (item.materials.length >= count) {
      itemsOfMaterialCount.push(item)
    }
  });
  return itemsOfMaterialCount;
}

//items made of at least 8 materials
eightPlusMaterials = materialCount(items, 8);

// displays all material

//made by seller filter
var madeBySeller = function(items) {
  sellerMade = [];
  items.filter(function(item) {
    if (item.who_made == "i_did") {
      sellerMade.push(item);
    }
  });
  return sellerMade;
}
sellerMade = madeBySeller(items)

////////////////////////////////////////////////
////////////////////////////////////////////////
////////
//////// Document Selectors
////////      
////////////////////////////////////////////////
////////////////////////////////////////////////


////////////////////////////////////////////////
//////// Answer One - Averge Item Price
////////////////////////////////////////////////

var answerOne = document.createElement("P")

var answerOneText = document.createTextNode(averagePrice)

answerOne.appendChild(answerOneText)

document.getElementById("answer1").appendChild(answerOne)

////////////////////////////////////////////////
//////// Answer Two - Items within Price Range
////////////////////////////////////////////////

var answerTwoList = document.createElement("UL");
answerTwoList.setAttribute("id", "answerTwoList");
document.getElementById("answer2").appendChild(answerTwoList);

var answerTwoGenerator = function(items) {
  for (i in items) {
  var answerTwo = document.createElement("LI")
  var answerTwoText = document.createTextNode(items[i]);
  answerTwo.appendChild(answerTwoText);
  document.getElementById("answerTwoList").appendChild(answerTwo);
  }
}
answerTwoGenerator(itemsInPriceRange)

////////////////////////////////////////////////
//////// Answer Three - Items Sold in GBP
////////////////////////////////////////////////

var answerThree = document.createElement("P");
var answerThreeText = document.createTextNode(GBPItem[0].title + " \xA3 " + GBPItem[0].price);
answerThree.appendChild(answerThreeText);
document.getElementById("answer3").appendChild(answerThree);

////////////////////////////////////////////////
//////// Answer Four - Display All Items Made of Wood
////////////////////////////////////////////////

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
answerFourGenerator(woodItems)

////////////////////////////////////////////////
//////// Answer Five - Display All Items Made from 8 or More Items
////////////////////////////////////////////////

var answerFiveGen = function(items) {
  /// create master ul
  var masterUl = document.createElement("UL");
  // loop through items
  for (i in items) {
    /// create li
    var masterLi = document.createElement("LI");
    /// create text for li filled with item title
    var masterLiText = document.createTextNode(items[i].title)
    /// give li text
    masterLi.appendChild(masterLiText);
    /// create subList ul
    var subUl = document.createElement("UL");
    ///loop through materials
    for (a in items[i].materials) {
      ///create li
      var subLi = document.createElement("LI");
      ///create text for li filled with material
      var subLiText = document.createTextNode(items[i].materials[a])
      ///give li text
      subLi.appendChild(subLiText);
      ///give ul li
      subUl.appendChild(subLi);
    }
    /// give master li sub ul
    masterLi.appendChild(subUl);
    /// give master Ul master li
    masterUl.appendChild(masterLi);
  }
  /// give answer div master ul
  answerFive = document.getElementById("answer5");
  answerFive.appendChild(masterUl);
}


answerFiveGen(eightPlusMaterials);



////////////////////////////////////////////////
//////// Answer Six - Display Items Made by Seller
////////////////////////////////////////////////

var answerSix = document.createElement("P");
var asnwerSixText = document.createTextNode(String(sellerMade.length  + " were made by their sellers"));
answerSix.appendChild(asnwerSixText);
document.getElementById("answer6").appendChild(answerSix);








