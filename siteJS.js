var elements = [
   	{ "number": "1", "name": "Hydrogen", "symbol": "H", "weight": "1.008", "density": "0.09", "discovery": "1766" }, 
   	{ "number": "2", "name": "Helium", "symbol": "He", "weight": "4.003", "density": "0.18", "discovery": "1895" },
   	{ "number": "3", "name": "Lithium", "symbol": "Li", "weight": "6.941", "density": "0.53", "discovery": "1817"},
   	{ "number": "4", "name": "Beryllium", "symbol": "Be", "weight": "9.012", "density": "1.85", "discovery": "1797"}, 
 	{ "number": "5", "name": "Boron", "symbol": "B", "weight": "10.811", "density": "2.34", "discovery": "1808"}, 
 	{ "number": "6", "name": "Carbon", "symbol": "C", "weight": "12.011", "density": "2.26", "discovery": "3750 BCE"}, 
 	{ "number": "7", "name": "Nitrogen", "symbol": "N", "weight": "14.007", "density": "1.25", "discovery": "1772"}, 
 	{ "number": "8", "name": "Oxygen", "symbol": "O", "weight": "15.999", "density": "1.43", "discovery": "1774"}, 
 	{ "number": "9", "name": "Fluorine", "symbol": "F", "weight": "18.998", "density": "1.7", "discovery": "1886"}, 
 	{ "number": "10", "name": "Neon", "symbol": "Ne", "weight": "20.18", "density": "0.9", "discovery": "1898"}, 
	{ "number": "11", "name": "Sodium", "symbol": "Na", "weight": "22.99", "density": "0.97", "discovery": "1807"}, 
 	{ "number": "12", "name": "Magnesium", "symbol": "Mg", "weight": "24.305", "density": "1.74", "discovery": "1755"}, 
 	{ "number": "13", "name": "Aluminum", "symbol": "Al", "weight": "26.982", "density": "2.7", "discovery": "1825"}, 
 	{ "number": "14", "name": "Silicon", "symbol": "Si", "weight": "28.086", "density": "2.33", "discovery": "1824"}, 
 	{ "number": "15", "name": "Phosphorus", "symbol": "P", "weight": "30.974", "density": "1.82", "discovery": "1669"}, 
 	{ "number": "16", "name": "Sulfur", "symbol": "S", "weight": "32.065", "density": "2.07", "discovery": "Pre-2000 BCE"}, 
 	{ "number": "17", "name": "Chlorine", "symbol": "Cl", "weight": "35.453", "density": "3.21", "discovery": "1774"}, 
 	{ "number": "18", "name": "Argon", "symbol": "Ar", "weight": "39.948", "density": "1.78", "discovery": "1894"}, 
 	{ "number": "19", "name": "Potassium", "symbol": "K", "weight": "39.098", "density": "0.86", "discovery": "1807"}, 
 	{ "number": "20", "name": "Calcium", "symbol": "Ca", "weight": "40.078", "density": "1.55", "discovery": "1808"}, 
 	{ "number": "21", "name": "Scandium", "symbol": "Sc", "weight": "44.956", "density": "2.99", "discovery": "1879"}, 
 	{ "number": "22", "name": "Titanium", "symbol": "Ti", "weight": "47.867", "density": "4.54", "discovery": "1791"}, 
 	{ "number": "23", "name": "Vanadium", "symbol": "V", "weight": "50.942", "density": "6.11", "discovery": "1830"}, 
 	{ "number": "24", "name": "Chromium", "symbol": "Cr", "weight": "51.996", "density": "7.19", "discovery": "1797"}, 
 	{ "number": "25", "name": "Manganese", "symbol": "Mn", "weight": "54.938", "density": "7.43", "discovery": "1774"}, 
 	{ "number": "26", "name": "Iron", "symbol": "Fe", "weight": "55.845", "density": "7.87", "discovery": "Pre-5000 BCE"}, 
 	{ "number": "27", "name": "Cobalt", "symbol": "Co", "weight": "58.933", "density": "8.9", "discovery": "1735"}, 
 	{ "number": "28", "name": "Nickel", "symbol": "Ni", "weight": "58.693", "density": "8.9", "discovery": "1751"}, 
 	{ "number": "29", "name": "Copper", "symbol": "Cu", "weight": "63.546", "density": "8.96", "discovery": "9000 BCE"}, 
 	{ "number": "30", "name": "Zinc", "symbol": "Zn", "weight": "65.39", "density": "7.13", "discovery": "Pre-1000 BCE"}, 
 	{ "number": "31", "name": "Gallium", "symbol": "Ga", "weight": "69.723", "density": "5.91", "discovery": "1875"}, 
 	{ "number": "32", "name": "Germanium", "symbol": "Ge", "weight": "72.64", "density": "5.32", "discovery": "1886"}, 
 	{ "number": "33", "name": "Arsenic", "symbol": "As", "weight": "74.922", "density": "5.72", "discovery": "Pre-300 BCE"}, 
 	{ "number": "34", "name": "Selenium", "symbol": "Se", "weight": "78.96", "density": "4.79", "discovery": "1817"}, 
 	{ "number": "35", "name": "Bromine", "symbol": "Br", "weight": "79.904", "density": "3.12", "discovery": "1826"}, 
 	{ "number": "36", "name": "Krypton", "symbol": "Kr", "weight": "83.8", "density": "3.75", "discovery": "1898"}, 
 	{ "number": "37", "name": "Rubidium", "symbol": "Rb", "weight": "85.468", "density": "1.63", "discovery": "1861"}, 
 	{ "number": "38", "name": "Strontium", "symbol": "Sr", "weight": "87.62", "density": "2.54", "discovery": "1790"}, 
 	{ "number": "39", "name": "Yttrium", "symbol": "Y", "weight": "88.906", "density": "4.47", "discovery": "1794"}, 
 	{ "number": "40", "name": "Zirconium", "symbol": "Zr", "weight": "91.224", "density": "6.51", "discovery": "1789"}, 
 	{ "number": "41", "name": "Niobium", "symbol": "Nb", "weight": "92.906", "density": "8.57", "discovery": "1801"}, 
 	{ "number": "42", "name": "Molybdenum", "symbol": "Mo", "weight": "95.94", "density": "10.22", "discovery": "1781"}, 
 	{ "number": "43", "name": "Technetium", "symbol": "Tc", "weight": "98", "density": "11.5", "discovery": "1937"}, 
 	{ "number": "44", "name": "Ruthenium", "symbol": "Ru", "weight": "101.07", "density": "12.37", "discovery": "1844"}, 
 	{ "number": "45", "name": "Rhodium", "symbol": "Rh", "weight": "102.906", "density": "12.41", "discovery": "1803"}, 
 	{ "number": "46", "name": "Palladium", "symbol": "Pd", "weight": "106.42", "density": "12.02", "discovery": "1803"}, 
 	{ "number": "47", "name": "Silver", "symbol": "Ag", "weight": "107.868", "density": "10.5", "discovery": "Pre-5000 BCE"}, 
 	{ "number": "48", "name": "Cadmium", "symbol": "Cd", "weight": "112.411", "density": "8.65", "discovery": "1817"}, 
 	{ "number": "49", "name": "Indium", "symbol": "In", "weight": "114.818", "density": "7.31", "discovery": "1863"}, 
 	{ "number": "50", "name": "Tin", "symbol": "Sn", "weight": "118.71", "density": "7.31", "discovery": "Around 3500 BCE"}, 
 	{ "number": "51", "name": "Antimony", "symbol": "Sb", "weight": "121.76", "density": "6.68", "discovery": "Pre-800 BCE"}, 
 	{ "number": "52", "name": "Tellurium", "symbol": "Te", "weight": "127.6", "density": "6.24", "discovery": "1783"}, 
 	{ "number": "53", "name": "Iodine", "symbol": "I", "weight": "126.905", "density": "4.93", "discovery": "1811"}, 
 	{ "number": "54", "name": "Xenon", "symbol": "Xe", "weight": "131.293", "density": "5.9", "discovery": "1898"}, 
 	{ "number": "55", "name": "Cesium", "symbol": "Cs", "weight": "132.906", "density": "1.87", "discovery": "1860"}, 
 	{ "number": "56", "name": "Barium", "symbol": "Ba", "weight": "137.327", "density": "3.59", "discovery": "1808"}, 
 	{ "number": "57", "name": "Lanthanum", "symbol": "La", "weight": "138.906", "density": "6.15", "discovery": "1839"}, 
 	{ "number": "58", "name": "Cerium", "symbol": "Ce", "weight": "140.116", "density": "6.77", "discovery": "1803"}, 
 	{ "number": "59", "name": "Praseodymium", "symbol": "Pr", "weight": "140.908", "density": "6.77", "discovery": "1885" }, 
	{ "number": "60", "name": "Neodymium", "symbol": "Nd", "weight": "144.24", "density": "7.01", "discovery": "1885" }, 
	{ "number": "61", "name": "Promethium", "symbol": "Pm", "weight": "145", "density": "7.3", "discovery": "1945" }, 
	{ "number": "62", "name": "Samarium", "symbol": "Sm", "weight": "150.36", "density": "7.52", "discovery": "1879" }, 
	{ "number": "63", "name": "Europium", "symbol": "Eu", "weight": "151.964", "density": "5.24", "discovery": "1901" }, 
	{ "number": "64", "name": "Gadolinium", "symbol": "Gd", "weight": "157.25", "density": "7.9", "discovery": "1880" }, 
	{ "number": "65", "name": "Terbium", "symbol": "Tb", "weight": "158.925", "density": "8.23", "discovery": "1843" }, 
	{ "number": "66", "name": "Dysprosium", "symbol": "Dy", "weight": "162.5", "density": "8.55", "discovery": "1886" }, 
	{ "number": "67", "name": "Holmium", "symbol": "Ho", "weight": "164.93", "density": "8.8", "discovery": "1867" }, 
	{ "number": "68", "name": "Erbium", "symbol": "Er", "weight": "167.259", "density": "9.07", "discovery": "1842" }, 
	{ "number": "69", "name": "Thulium", "symbol": "Tm", "weight": "168.934", "density": "9.32", "discovery": "1879" }, 
	{ "number": "70", "name": "Ytterbium", "symbol": "Yb", "weight": "173.04", "density": "6.9", "discovery": "1878" }, 
	{ "number": "71", "name": "Lutetium", "symbol": "Lu", "weight": "174.967", "density": "9.84", "discovery": "1907" }, 
	{ "number": "72", "name": "Hafnium", "symbol": "Hf", "weight": "178.49", "density": "13.31", "discovery": "1923" }, 
	{ "number": "73", "name": "Tantalum", "symbol": "Ta", "weight": "180,948", "density": "16.65", "discovery": "1802" }, 
	{ "number": "74", "name": "Tungsten", "symbol": "W", "weight": "183.84", "density": "19.35", "discovery": "1783" }, 
	{ "number": "75", "name": "Rhenium", "symbol": "Re", "weight": "186.207", "density": "21.04", "discovery": "1925" }, 
	{ "number": "76", "name": "Osmium", "symbol": "Os", "weight": "190.23", "density": "22.6", "discovery": "1803" }, 
	{ "number": "77", "name": "Iridium", "symbol": "Ir", "weight": "192.217", "density": "22.4", "discovery": "1803" }, 
	{ "number": "78", "name": "Platinum", "symbol": "Pt", "weight": "195.078", "density": "21.45", "discovery": "1735" }, 
	{ "number": "79", "name": "Gold", "symbol": "Au", "weight": "196.967", "density": "19.32", "discovery": "Pre-6000 BCE" }, 
	{ "number": "80", "name": "Mercury", "symbol": "Hg", "weight": "200.59", "density": "13.55", "discovery": "Pre-2000 BCE"}, 
	{ "number": "81", "name": "Thallium", "symbol": "Tl", "weight": "204.383", "density": "11.85", "discovery": "1861" }, 
	{ "number": "82", "name": "Lead", "symbol": "Pb", "weight": "207.2", "density": "11.35", "discovery": "7000 BCE" }, 
	{ "number": "83", "name": "Bismuth", "symbol": "Bi", "weight": "208.98", "density": "9.75", "discovery": "1753" }, 
	{ "number": "84", "name": "Polonium", "symbol": "Po", "weight": "209", "density": "9.3", "discovery": "1898" }, 
	{ "number": "85", "name": "Astatine", "symbol": "At", "weight": "210", "density": "6.350.15", "discovery": "1940" }, 
	{ "number": "86", "name": "Radon", "symbol": "Rn", "weight": "222", "density": "9.73", "discovery": "1900" }, 
	{ "number": "87", "name": "Francium", "symbol": "Fr", "weight": "223", "density": "2.48", "discovery": "1939" }, 
	{ "number": "88", "name": "Radium", "symbol": "Ra", "weight": "226", "density": "5.5", "discovery": "1898" }, 
	{ "number": "89", "name": "Actinium", "symbol": "Ac", "weight": "227", "density": "10.07", "discovery": "1899" }, 
	{ "number": "90", "name": "Thorium", "symbol": "Th", "weight": "232.038", "density": "11.72", "discovery": "1829" }, 
	{ "number": "91", "name": "Protactinium", "symbol": "Pa", "weight": "231.036", "density": "15.4", "discovery": "1913" }, 
	{ "number": "92", "name": "Uranium", "symbol": "U", "weight": "238.029", "density": "18.95", "discovery": "1789" }, 
	{ "number": "93", "name": "Neptunium", "symbol": "Np", "weight": "237", "density": "20.2", "discovery": "1940" }, 
	{ "number": "94", "name": "Plutonium", "symbol": "Pu", "weight": "244", "density": "19.84", "discovery": "1940" }, 
	{ "number": "95", "name": "Americium", "symbol": "Am", "weight": "243", "density": "13.67", "discovery": "1944" }, 
	{ "number": "96", "name": "Curium", "symbol": "Cm", "weight": "247", "density": "13.5", "discovery": "1944" }, 
	{ "number": "97", "name": "Berkelium", "symbol": "Bk", "weight": "247", "density": "14.78", "discovery": "1949" }, 
	{ "number": "98", "name": "Californium", "symbol": "Cf", "weight": "251", "density": "15.1", "discovery": "1950" }, 
	{ "number": "99", "name": "Einsteinium", "symbol": "Es", "weight": "252", "density": "8.84", "discovery": "1952" }, 
	{ "number": "100", "name": "Fermium", "symbol": "Fm", "weight": "257", "density": "9.7", "discovery": "1952" }, 
	{ "number": "101", "name": "Mendelevium", "symbol": "Md", "weight": "258", "density": "10.3", "discovery": "1955" }, 
	{ "number": "102", "name": "Nobelium", "symbol": "No", "weight": "259", "density": "9.9", "discovery": "1958" }, 
	{ "number": "103", "name": "Lawrencium", "symbol": "Lr", "weight": "262", "density": "15.6-16.6", "discovery": "1961" }, 
	{ "number": "104", "name": "Rutherfordium", "symbol": "Rf", "weight": "261", "density": "23.2", "discovery": "1964" }, 
	{ "number": "105", "name": "Dubnium", "symbol": "Db", "weight": "262", "density": "29.3", "discovery": "1967" }, 
	{ "number": "106", "name": "Seaborgium", "symbol": "Sg", "weight": "266", "density": "35", "discovery": "1974" }, 
	{ "number": "107", "name": "Bohrium", "symbol": "Bh", "weight": "264", "density": "37.1", "discovery": "1981" }, 
	{ "number": "108", "name": "Hassium", "symbol": "Hs", "weight": "277", "density": "41", "discovery": "1984" }, 
	{ "number": "109", "name": "Meitnerium", "symbol": "Mt", "weight": "268", "density": "37.4", "discovery": "1982" }, 
	{ "number": "110", "name": "Darmstadtium", "symbol": "Ds", "weight": "2", "density": "34.8", "discovery": "1994" }, 
	{ "number": "111", "name": "Roentgenium", "symbol": "Rg", "weight": "282", "density": "28.7", "discovery": "1994" }, 
	{ "number": "112", "name": "Copernicium", "symbol": "Cn", "weight": "285", "density": "23.7", "discovery": "1996" }, 
	{ "number": "113", "name": "Nihonium", "symbol": "Nh", "weight": "286", "density": "16", "discovery": "2003" }, 
	{ "number": "114", "name": "Flerovium", "symbol": "Fl", "weight": "289", "density": "14", "discovery": "1999" }, 
	{ "number": "115", "name": "Moscovium", "symbol": "Mc", "weight": "290", "density": "13.5", "discovery": "2003" }, 
	{ "number": "116", "name": "Livermorium", "symbol": "Lv", "weight": "293", "density": "12.9", "discovery": "2000" }, 
	{ "number": "117", "name": "Tennessine", "symbol": "Ts", "weight": "294", "density": "7.1-7.3", "discovery": "2009" }, 
	{ "number": "118", "name": "Oganesson", "symbol": "Og", "weight": "294", "density": "4.9-5.1", "discovery": "2002" }
];

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == '') {
		  c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	} 
	}
	return "false";
}

function checkCookie() {
	var darkmode = getCookie("darkmode");
	if (darkmode == "true") {
		$("#darkmode").prop("checked", false);
		$("#top").css("background-color", "#ffffff");
	} else if (darkmode == "false") {
		$("#darkmode").prop("checked", true);
		$("#top").css("background-color", "#2e2e2e");   
	}
}
	
function setDarkmode() {
	if (document.getElementById("darkmode").checked == true) {
		document.cookie = "darkmode=true; expires=Wed, 1 Jan 2030 00:00:00 UTC;";
		checkCookie();
	} else if (document.getElementById("darkmode").checked == false) {
		document.cookie = "darkmode=false; expires=Wed, 1 Jan 2030 00:00:00 UTC;";
		checkCookie();
	}
}

/*
function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(elements, selector);

  for (var i = 0; i < elements.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = elements[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
  }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(elements, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < elements.length; i++) {
    var rowHash = elements[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
} */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByIName('mySlides');
  if (n > elements.length) {slideIndex = 1}
  if (n < 1) {slideIndex = elements.length}
  for (i = 0; i < elements.length; i++) {
      $('#').prepend(elements[i]);
  }
  elements[slideIndex-1].style.display = 'block';
}