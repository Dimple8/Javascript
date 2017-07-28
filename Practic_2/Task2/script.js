function taskA() {
    document.getElementById("taskA").innerHTML = "";
    var str = document.getElementById("numbers").value;
    var numbers = str.split(",");
    var indexMax = 0;
    var indexMin = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (parseFloat(numbers[i]) > parseFloat(numbers[indexMax])) {
            indexMax = i;
        }

        if (parseFloat(numbers[i]) < parseFloat(numbers[indexMin])) {
            indexMin = i;
        }
    }

    var out = "<blockquote>Максимальное число: " + numbers[indexMax] +
        " индекс вхождения: " + indexMax;
    out += "<br>Минимальное число: " + numbers[indexMin] +
        " индекс вхождения: " + indexMin +
        "</blockquote>";
    document.getElementById("taskA").innerHTML += out;
}

function taskB() {
    document.getElementById("taskB").innerHTML = "";
    var str = document.getElementById("numbers").value;
    var numbers = str.split(",");
    //var sortArray = numbers.sort();

    function sortNumber(a, b) {
        return a - b;
    }
    var sortArray = numbers.sort(sortNumber);

    var out = "<blockquote>Отсортированный массив по возрастанию: " + sortArray +"</blockquote>";
    document.getElementById("taskB").innerHTML += out;
}

function taskC() {
    var array1 = [1, 3, 4, 5];
    var array2 = [6, 7, 8, 9];
    var array3 = [5, 7, 3, 5];
    var array4 = [45, 8, 23, 1];
    var array5 = [1, 3];

    var generalArray = [array1, array2, array3, array4, array5];

    document.getElementById("taskC").innerHTML = "";
    outPut("Массив массивов: ", generalArray, "taskC");
    outPut("Отсортированный массив по суммам: ",
        generalArray.sort((a, b) => a.reduce((a, b) => a + b) -
            b.reduce((a, b) => a + b)), "taskC");

}

function sortArray(arr) {
    var arraySums = [];
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        for (var j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        arraySums[i] = sum;

    }
    arraySums = arraySums.sort(function(a, b) { return a - b;});
    return arraySums;
}

function taskD() {
  document.getElementById("taskD").innerHTML = "";
  var testArray = [2, 5, 3, 0, 2, 3, 0, 3];

  outPut("Тестовый массив: ",
    testArray, "taskD");

  outPut("Отсортированный массив с помощью \"Сортировки подсчетом\": ",
      countingSort(testArray), "taskD");


}

function countingSort(arr) {
  var sortedArr = [];
  var tempArr = [];
  var k = 5;
  for (let i = 0; i <= k; i++) {
    tempArr[i] = 0;
  }
  for (let j = 0; j < arr.length; j++) {
    tempArr[arr[j]] = tempArr[arr[j]] + 1;
  }
  for (let i = 1; i <= k; i++) {
    tempArr[i] = tempArr[i] + tempArr[i - 1];
  }
  for (let j = arr.length - 1; j >= 0; j--) {
    sortedArr[tempArr[arr[j]] - 1] = arr[j];
    tempArr[arr[j]] = tempArr[arr[j]] - 1;
  }

  return sortedArr;
}

function outPut(title, array, idOutuput) {
    var out = "<blockquote>" + title;
    var i = 0;
    while (i < array.length) {
        if (i === array.length - 1) {
            out += "[" + array[i] + "]";
        } else {
            out += "[" + array[i] + "], ";
        }
        i++;
    }
    out += "</blockquote>";

    document.getElementById(idOutuput).innerHTML += out;
}
