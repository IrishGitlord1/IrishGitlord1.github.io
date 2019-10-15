var elements = [
      { "number": "1", "name": "Hydrogen", "symbol": "H", "weight": "1.008", "state": "gas", "groups": "Other nonmetals" },
      { "number": "2", "name": "Helium", "symbol": "He", "weight": "4.003", "state": "gas", "groups": "Noble Gases" },
      { "number": "3", "name": "Lithium", "symbol": "Li", "weight": "6.941", "state": "solid", "groups": "Alkali Metals" },
      { "number": "4", "name": "Beryllium", "symbol": "Be", "weight": "9.012", "state": "solid", "groups": "Alkaline Earth Metals" },
    	{ "number": "5", "name": "Boron", "symbol": "B", "weight": "10.811", "state": "solid", "groups": "Metalloids" },
	    { "number": "6", "name": "Carbon", "symbol": "C", "weight": "12.011", "state": "solid", "groups": "Other nonmetals" },
	    { "number": "7", "name": "Nitrogen", "symbol": "N", "weight": "14.007", "state": "gas", "groups": "Other nonmetals" },
	    { "number": "8", "name": "Oxygen", "symbol": "O", "weight": "15.999", "state": "gas", "groups": "Other nonmetals" },
	    { "number": "9", "name": "Fluorine", "symbol": "F", "weight": "18.998", "state": "gas", "groups": "Other nonmetals" },
	    { "number": "10", "name": "Neon", "symbol": "Ne", "weight": "20.18", "state": "gas", "groups": "Noble Gases" },
	    { "number": "11", "name": "Sodium", "symbol": "Na", "weight": "22.99", "state": "solid", "groups": "Alkali Metals" },
	    { "number": "12", "name": "Magnesium", "symbol": "Mg", "weight": "24.305", "state": "solid", "groups": "Alkaline Earth Metals" },
	    { "number": "13", "name": "Aluminum", "symbol": "Al", "weight": "26.982", "state": "solid", "groups": "Post-Transition Metals" },
	    { "number": "14", "name": "Silicon", "symbol": "Si", "weight": "28.086", "state": "solid", "groups": "Metalloids" },
	    { "number": "15", "name": "Phosphorus", "symbol": "P", "weight": "30.974", "state": "solid", "groups": "Other nonmetals" },
	    { "number": "16", "name": "Sulfur", "symbol": "S", "weight": "32.065", "state": "solid", "groups": "Other nonmetals" },
	    { "number": "17", "name": "Chlorine", "symbol": "Cl", "weight": "35.453", "state": "gas", "groups": "Other nonmetals" },
	    { "number": "18", "name": "Argon", "symbol": "Ar", "weight": "39.948", "state": "gas", "groups": "Noble Gases" },
	    { "number": "19", "name": "Potassium", "symbol": "K", "weight": "39.098", "state": "solid", "groups": "Alkali Metals" },
	    { "number": "20", "name": "Calcium", "symbol": "Ca", "weight": "40.078", "state": "solid", "groups": "Alkaline Earth Metals" },
	    { "number": "21", "name": "Scandium", "symbol": "Sc", "weight": "44.956", "state": "solid", "groups": "Transition Metals" },
	    { "number": "22", "name": "Titanium", "symbol": "Ti", "weight": "47.867", "state": "solid", "groups": "Transition Metals" },
	    { "number": "23", "name": "Vanadium", "symbol": "V", "weight": "50.942", "state": "solid", "groups": "Transition Metals" },
	    { "number": "24", "name": "Chromium", "symbol": "Cr", "weight": "51.996", "state": "solid", "groups": "Transition Metals" },
	    { "number": "25", "name": "Manganese", "symbol": "Mn", "weight": "54.938", "state": "solid", "groups": "Transition Metals" },
	    { "number": "26", "name": "Iron", "symbol": "Fe", "weight": "55.845", "state": "solid", "groups": "Transition Metals" },
	    { "number": "27", "name": "Cobalt", "symbol": "Co", "weight": "58.933", "state": "solid", "groups": "Transition Metals" },
	    { "number": "28", "name": "Nickel", "symbol": "Ni", "weight": "58.693", "state": "solid", "groups": "Transition Metals" },
	    { "number": "29", "name": "Copper", "symbol": "Cu", "weight": "63.546", "state": "solid", "groups": "Transition Metals" },
	    { "number": "30", "name": "Zinc", "symbol": "Zn", "weight": "65.39", "state": "solid", "groups": "Transition Metals" },
	    { "number": "31", "name": "Gallium", "symbol": "Ga", "weight": "69.723", "state": "solid", "groups": "Post-Transition Metals" },
	    { "number": "32", "name": "Germanium", "symbol": "Ge", "weight": "72.64", "state": "solid", "groups": "Metalloids" },
	    { "number": "33", "name": "Arsenic", "symbol": "As", "weight": "74.922", "state": "solid", "groups": "Metalloids" },
	    { "number": "34", "name": "Selenium", "symbol": "Se", "weight": "78.96", "state": "solid", "groups": "Other nonmetals" },
	    { "number": "35", "name": "Bromine", "symbol": "Br", "weight": "79.904", "state": "liquid", "groups": "Other nonmetals" },
	    { "number": "36", "name": "Krypton", "symbol": "Kr", "weight": "83.8", "state": "gas", "groups": "Noble Gases" },
	    { "number": "37", "name": "Rubidium", "symbol": "Rb", "weight": "85.468", "state": "solid", "groups": "Alkali Metals" },
	    { "number": "38", "name": "Strontium", "symbol": "Sr", "weight": "87.62", "state": "solid", "groups": "Alkaline Earth Metals" },
	    { "number": "39", "name": "Yttrium", "symbol": "Y", "weight": "88.906", "state": "solid", "groups": "Transition Metals" },
	    { "number": "40", "name": "Zirconium", "symbol": "Zr", "weight": "91.224", "state": "solid", "groups": "Transition Metals" },
	    { "number": "41", "name": "Niobium", "symbol": "Nb", "weight": "92.906", "state": "solid", "groups": "Transition Metals" },
	    { "number": "42", "name": "Molybdenum", "symbol": "Mo", "weight": "95.94", "state": "solid", "groups": "Transition Metals" },
	    { "number": "43", "name": "Technetium", "symbol": "Tc", "weight": "98", "state": "solid", "groups": "Transition Metals" },
	    { "number": "44", "name": "Ruthenium", "symbol": "Ru", "weight": "101.07", "state": "solid", "groups": "Transition Metals" },
	    { "number": "45", "name": "Rhodium", "symbol": "Rh", "weight": "102.906", "state": "solid", "groups": "Transition Metals" },
	    { "number": "46", "name": "Palladium", "symbol": "Pd", "weight": "106.42", "state": "solid", "groups": "Transition Metals" },
	    { "number": "47", "name": "Silver", "symbol": "Ag", "weight": "107.868", "state": "solid", "groups": "Transition Metals" },
	    { "number": "48", "name": "Cadmium", "symbol": "Cd", "weight": "112.411", "state": "solid", "groups": "Transition Metals" },
	    { "number": "49", "name": "Indium", "symbol": "In", "weight": "114.818", "state": "solid", "groups": "Post-Transition Metals" },
	    { "number": "50", "name": "Tin", "symbol": "Sn", "weight": "118.71", "state": "solid", "groups": "Post-Transition Metals" },
	    { "number": "51", "name": "Antimony", "symbol": "Sb", "weight": "121.76", "state": "solid", "groups": "Metalloids" },
	    { "number": "52", "name": "Tellurium", "symbol": "Te", "weight": "127.6", "state": "solid", "groups": "Metalloids" },
	    { "number": "53", "name": "Iodine", "symbol": "I", "weight": "126.905", "state": "solid", "groups": "Other nonmetals" },
	    { "number": "54", "name": "Xenon", "symbol": "Xe", "weight": "131.293", "state": "gas", "groups": "Noble Gases" },
	    { "number": "55", "name": "Cesium", "symbol": "Cs", "weight": "132.906", "state": "solid", "groups": "Alkali Metals" },
	    { "number": "56", "name": "Barium", "symbol": "Ba", "weight": "137.327", "state": "solid", "groups": "Alkaline Earth Metals" },
	    { "number": "57", "name": "Lanthanum", "symbol": "La", "weight": "138.906", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "58", "name": "Cerium", "symbol": "Ce", "weight": "140.116", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "59", "name": "Praseodymium", "symbol": "Pr", "weight": "140.908", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "60", "name": "Neodymium", "symbol": "Nd", "weight": "144.24", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "61", "name": "Promethium", "symbol": "Pm", "weight": "145", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "62", "name": "Samarium", "symbol": "Sm", "weight": "150.36", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "63", "name": "Europium", "symbol": "Eu", "weight": "151.964", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "64", "name": "Gadolinium", "symbol": "Gd", "weight": "157.25", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "65", "name": "Terbium", "symbol": "Tb", "weight": "158.925", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "66", "name": "Dysprosium", "symbol": "Dy", "weight": "162.5", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "67", "name": "Holmium", "symbol": "Ho", "weight": "164.93", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "68", "name": "Erbium", "symbol": "Er", "weight": "167.259", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "69", "name": "Thulium", "symbol": "Tm", "weight": "168.934", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "70", "name": "Ytterbium", "symbol": "Yb", "weight": "173.04", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "71", "name": "Lutetium", "symbol": "Lu", "weight": "174.967", "state": "solid", "groups": "Lanthanoids" },
	    { "number": "72", "name": "Hafnium", "symbol": "Hf", "weight": "178.49", "state": "solid", "groups": "Transition Metals" },
	    { "number": "73", "name": "Tantalum", "symbol": "Ta", "weight": "180,948", "state": "solid", "groups": "Transition Metals" },
	    { "number": "74", "name": "Tungsten", "symbol": "W", "weight": "183.84", "state": "solid", "groups": "Transition Metals" },
	    { "number": "75", "name": "Rhenium", "symbol": "Re", "weight": "186.207", "state": "solid", "groups": "Transition Metals" },
	    { "number": "76", "name": "Osmium", "symbol": "Os", "weight": "190.23", "state": "solid", "groups": "Transition Metals" },
	    { "number": "77", "name": "Iridium", "symbol": "Ir", "weight": "192.217", "state": "solid", "groups": "Transition Metals" },
	    { "number": "78", "name": "Platinum", "symbol": "Pt", "weight": "195.078", "state": "solid", "groups": "Transition Metals" },
	    { "number": "79", "name": "Gold", "symbol": "Au", "weight": "196.967", "state": "solid", "groups": "Transition Metals" },
	    { "number": "80", "name": "Mercury", "symbol": "Hg", "weight": "200.59", "state": "liquid", "groups": "Transition Metals" },
	    { "number": "81", "name": "Thallium", "symbol": "Tl", "weight": "204.383", "state": "solid", "groups": "Post-Transition Metals" },
	    { "number": "82", "name": "Lead", "symbol": "Pb", "weight": "207.2", "state": "solid", "groups": "Post-Transition Metals" },
	    { "number": "83", "name": "Bismuth", "symbol": "Bi", "weight": "208.98", "state": "solid", "groups": "Post-Transition Metals" },
	    { "number": "84", "name": "Polonium", "symbol": "Po", "weight": "209", "state": "solid", "groups": "Post-Transition Metals" },
	    { "number": "85", "name": "Astatine", "symbol": "At", "weight": "210", "state": "solid", "groups": "Metalloids" },
	    { "number": "86", "name": "Radon", "symbol": "Rn", "weight": "222", "state": "gas", "groups": "Noble Gases" },
	    { "number": "87", "name": "Francium", "symbol": "Fr", "weight": "223", "state": "solid", "groups": "Alkali Metals" },
	    { "number": "88", "name": "Radium", "symbol": "Ra", "weight": "226", "state": "solid", "groups": "Alkaline Earth Metals" },
	    { "number": "89", "name": "Actinium", "symbol": "Ac", "weight": "227", "state": "solid", "groups": "Actinoids" },
	    { "number": "90", "name": "Thorium", "symbol": "Th", "weight": "232.038", "state": "solid", "groups": "Actinoids" },
	    { "number": "91", "name": "Protactinium", "symbol": "Pa", "weight": "231.036", "state": "solid", "groups": "Actinoids" },
	    { "number": "92", "name": "Uranium", "symbol": "U", "weight": "238.029", "state": "solid", "groups": "Actinoids" },
	    { "number": "93", "name": "Neptunium", "symbol": "Np", "weight": "237", "state": "solid", "groups": "Actinoids" },
	    { "number": "94", "name": "Plutonium", "symbol": "Pu", "weight": "244", "state": "solid", "groups": "Actinoids" },
	    { "number": "95", "name": "Americium", "symbol": "Am", "weight": "243", "state": "solid", "groups": "Actinoids" },
	    { "number": "96", "name": "Curium", "symbol": "Cm", "weight": "247", "state": "solid", "groups": "Actinoids" },
	    { "number": "97", "name": "Berkelium", "symbol": "Bk", "weight": "247", "state": "solid", "groups": "Actinoids" },
	    { "number": "98", "name": "Californium", "symbol": "Cf", "weight": "251", "state": "solid", "groups": "Actinoids" },
	    { "number": "99", "name": "Einsteinium", "symbol": "Es", "weight": "252", "state": "solid", "groups": "Actinoids" },
	    { "number": "100", "name": "Fermium", "symbol": "Fm", "weight": "257", "state": "solid", "groups": "Actinoids" },
	    { "number": "101", "name": "Mendelevium", "symbol": "Md", "weight": "258", "state": "solid", "groups": "Actinoids" },
	    { "number": "102", "name": "Nobelium", "symbol": "No", "weight": "259" , "state": "solid", "groups": "Actinoids" },
	    { "number": "103", "name": "Lawrencium", "symbol": "Lr", "weight": "262", "state": "solid", "groups": "Actinoids" },
	    { "number": "104", "name": "Rutherfordium", "symbol": "Rf", "weight": "261", "state": "solid", "groups": "Transition Metals" },
	    { "number": "105", "name": "Dubnium", "symbol": "Db", "weight": "262", "state": "solid", "groups": "Transition Metals" },
	    { "number": "106", "name": "Seaborgium", "symbol": "Sg", "weight": "266", "state": "solid", "groups": "Transition Metals" },
	    { "number": "107", "name": "Bohrium", "symbol": "Bh", "weight": "264", "state": "solid", "groups": "Transition Metals" },
	    { "number": "108", "name": "Hassium", "symbol": "Hs", "weight": "277", "state": "solid", "groups": "Transition Metals" },
	    { "number": "109", "name": "Meitnerium", "symbol": "Mt", "weight": "268", "state": "solid", "groups": "Unknown" },
	    { "number": "110", "name": "Darmstadtium", "symbol": "Ds", "weight": "281", "state": "solid", "groups": "Unknown" },
	    { "number": "111", "name": "Roentgenium", "symbol": "Rg", "weight": "282", "state": "solid", "groups": "Unknown" },
	    { "number": "112", "name": "Copernicium", "symbol": "Cn", "weight": "285", "state": "solid", "groups": "Transition Metals" },
	    { "number": "113", "name": "Nihonium", "symbol": "Nh", "weight": "286", "state": "solid", "groups": "Unknown" },
	    { "number": "114", "name": "Flerovium", "symbol": "Fl", "weight": "289", "state": "solid", "groups": "Post-Transition Metals" },
	    { "number": "115", "name": "Moscovium", "symbol": "Mc", "weight": "290", "state": "solid", "groups": "Unknown" },
	    { "number": "116", "name": "Livermorium", "symbol": "Lv", "weight": "293", "state": "solid", "groups": "Unknown" },
	    { "number": "117", "name": "Tennessine", "symbol": "Ts", "weight": "294", "state": "solid", "groups": "Unknown" },
	    { "number": "118", "name": "Oganesson", "symbol": "Og", "weight": "294", "state": "solid", "groups": "Unknown" }
];

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	if (n > elements.length) {slideIndex = 1}
	if (n < 1) {slideIndex = elements.length}
	document.getElementById('elementName').innerHTML = elements[slideIndex-1].name;
	document.getElementById('elementNumberText').innerHTML = elements[slideIndex-1].number;
  document.getElementById('elementWeight').innerHTML = elements[slideIndex-1].weight;
	document.getElementById('elementSymbol').innerHTML = elements[slideIndex-1].symbol;

  switch (elements[slideIndex-1].state) {
    case "solid":
      document.getElementById('elementNumber').style.borderColor = "transparent transparent #99d8ea transparent";
      break;
    case "liquid":
      document.getElementById('elementNumber').style.borderColor = "transparent transparent #c8bfe7 transparent";
      break;
    case "gas":
      document.getElementById('elementNumber').style.borderColor = "transparent transparent #80ff80 transparent";
      break;
  }

  switch (elements[slideIndex-1].groups) {
    case "Alkali Metals":
      document.getElementById('elementSymbol').style.backgroundColor = "#FFB600";
      break;
    case "Alkaline Earth Metals":
      document.getElementById('elementSymbol').style.backgroundColor = "#F3FF00";
      break;
    case "Lanthanoids":
      document.getElementById('elementSymbol').style.backgroundColor = "#FF928E";
      break;
    case "Actinoids":
      document.getElementById('elementSymbol').style.backgroundColor = "#E68EC3";
      break;
    case "Transition Metals":
      document.getElementById('elementSymbol').style.backgroundColor = "#BF9197";
      break;
    case "Post-Transition Metals":
      document.getElementById('elementSymbol').style.backgroundColor = "#55C2A7";
      break;
    case "Metalloids":
      document.getElementById('elementSymbol').style.backgroundColor = "#1DB835";
      break;
    case "Other nonmetals":
      document.getElementById('elementSymbol').style.backgroundColor = "#54CC8B";
      break;
    case "Noble Gases":
      document.getElementById('elementSymbol').style.backgroundColor = "#17BCC2";
      break;
    case "Unknown":
      document.getElementById('elementSymbol').style.backgroundColor = "#8A8179";
      break;
  }
}

var url_string = window.location.href;
var url = new URL(url_string);
var searchString = url.searchParams.get("search_bar");
var searchNumRes = parseInt(searchString);
var searchSymRes = elements.filter(obj => {
  return obj.symbol == searchString
})
var searchNmeRes = elements.filter(obj => {
  return obj.name == searchString
})

function searchFilter() {
  if (window.location.href !== null && isNaN(searchNumRes) !== true) {
      slideIndex = searchNumRes;
      showSlides(slideIndex);
      $(document).keypress(function(e) {
        if(e.keyCode == 13) {
          slideIndex = searchNumRes;
          showSlides(slideIndex);
        }
      });
  } else if (searchSymRes !== null && searchSymRes.length !== 0) {
      searchNumFromSymRes = parseInt(searchSymRes[0].number);
      slideIndex = searchNumFromSymRes;
      showSlides(slideIndex);
  } else if (searchNmeRes !== null && searchNmeRes.length !== 0) {
      searchNumFromNmeRes = parseInt(searchNmeRes[0].number);
      slideIndex = searchNumFromNmeRes;
      showSlides(slideIndex);
  }
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      var key;
      for (key in arr) {
        if (arr.hasOwnProperty(key) && !isNaN(parseInt(key, 10))) {
        value = arr[key];
        /*check if the item starts with the same letters as the text field value:*/
        if (value.name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + value.name.substr(0, val.length) + "</strong>";
          b.innerHTML += value.name.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + value.name + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
      }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("myInput"), elements);

function elementCalc() {
    var elm1 = document.getElementById('element1').value;
    var elm2 = document.getElementById('element2').value;
    var elm3 = document.getElementById('element3').value;

	var elm1Sym = elm1.replace(/[0-9]/g, '');
	var elm2Sym = elm2.replace(/[0-9]/g, '');
	var elm3Sym = elm3.replace(/[0-9]/g, '');
	
    for(var i in elements) {
    	if(elements[i].symbol == elm1Sym) {
			var elm1IsElm = true;
		}
		
		if(elements[i].symbol == elm2Sym) {
			var elm2IsElm = true;
		}

		if(elements[i].symbol == elm3Sym || elm3Sym == "") {
			var elm3IsElm = true;
		}
		
		if(elm1IsElm && elm2IsElm && elm3IsElm) {
			var wikiEnd = elm1 + elm2 + elm3
			if (wikiEnd !== "") {
				var wikiLink = "https://en.wikipedia.org/wiki/" + wikiEnd;
				document.getElementById('result').src = wikiLink;
			}
		}

    }
}

function elementWiki(wikiLink) {
	document.getElementById('result').src = wikiLink;
}
