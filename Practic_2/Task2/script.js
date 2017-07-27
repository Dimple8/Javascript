function workWithArray() {
    document.getElementById("taskA").innerHTML = "";
    var str = document.getElementById("numbers").value;
    var numbers = str.split(",");
    var max = 0;
    var min = 0;
    var indexMax = 0;
    var indexMin = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (i === 0) {
            max = numbers[i];
            min = numbers[i];
        }

        if (numbers[i] > max) {
            max = numbers[i];
            indexMax = i;
        }

        if (numbers[i] < min) {
            min = numbers[i];
            indexMin = i;
        }
    }

    var out = "<blockquote>Максимальное число: " + max +
        " индекс вхождения: " + indexMax;
    out += "<br>Минимальное число: " + min +
        " индекс вхождения: " + indexMin +
        "</blockquote>";
    document.getElementById("taskA").innerHTML += out;
}

function sortWithSort(nums) {
    return nums.sort();
}