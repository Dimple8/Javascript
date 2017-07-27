function getMaxGeneralDivider(a, b) {
	if (a > b) {
		var min = b;
		var max = a;
	} else {
		var min = a;
		var max = b;
	}
	
	var x;
	for (var i = 1; i <= min; i++) {
		if (min % i  === 0) {
			x = min / i;
			if (Math.floor(x) === x) {
				if (max % x === 0) {
					out("Наибольший общий делитель = " + x);
					break;
				}
			}
		}
		
	}
}


function calcB() {
    document.getElementById("task2").innerHTML = "";
    var a = document.getElementById("str").value;
    symbolBCounter(a);	        
}

//function out(str) {
//    document.getElementById("output").innerHTML += str;
//}

function digitOut() {
    var str = "";
    for (var i = 0; i < 10; i++) {
        str += "<li>" + i + "</li>";
    }
    str = "<blockquote>" + "<ul>"
        + str + "</ul>" + "</blockquote>";    
    document.getElementById("task1").innerHTML += str;
}

function symbolBCounter(str) {
	var bCount = 0;	 
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "b") {
			bCount++;
		}				
	}
	
	var out = "<blockquote>" +
       +bCount + "</blockquote>";

	document.getElementById("task2").innerHTML += out;
}

function isSimpleDigit() {
    document.getElementById("task3").innerHTML = "";
    var simpleDigit = parseFloat(document.getElementById("num").value);
    var count = 0;
    var out = "";

    if (simpleDigit < 0) {
        out = "<blockquote>Введенное число не является простым</blockquote>";
        document.getElementById("task3").innerHTML += out;
        return;
    }
   
    for (var i = simpleDigit; i > 0; i--) {
        if (simpleDigit % i === 0) {
            count ++;
        }
    }   

    if (count === 2) {
        out = "<blockquote>Введенное число простое</blockquote>";        
        document.getElementById("task3").innerHTML += out;
    } else {
        out = "<blockquote>Введенное число не является простым</blockquote>";
        document.getElementById("task3").innerHTML += out;        
    }

}

function findAllDividers() {
    document.getElementById("task4").innerHTML = "";
    var digit = parseFloat(document.getElementById("num4").value);
    var divides = [];
    var j = 0;
    var out = "";

    for (var i = digit; i > 0; i--) {
        if (digit % i === 0) {
            divides[j] = i;
            j++;
        }
    }

    out = "<blockquote>Делители введенного числа: " + divides +"</blockquote>";   
    document.getElementById("task4").innerHTML += out;

}

function findMinGeneralMultiple() {
    document.getElementById("task5").innerHTML = "";
    var a = parseFloat(document.getElementById("value_a").value);
    var b = parseFloat(document.getElementById("value_b").value);

    var max = (a > b) ? a : b;
    while (max % a !== 0 || max % b !== 0) {
        max++;
    }

    var out = "<blockquote>Наименьшее общее кратное: " + max + "</blockquote>";
    document.getElementById("task5").innerHTML += out;

}

