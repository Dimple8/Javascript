var groups = [];
for (var i = 0; i < people.length; i++) {
    if (groups.indexOf(people[i].group) == -1) {
        groups.push(people[i].group);
    }
}

for (i = 0; i < groups.length; i++) {
    var qnt = 0;
    var sumAge = 0;
    var qntM = 0;
    var qntF = 0;
    for (var j = 0; j < people.length; j++) {
        if (people[j].group === groups[i]) {
            qnt++;
            if (people[j].gender == "m") {
                qntM++;
            } else if (people[j].gender == "f") {
                qntF++;
            }
            sumAge += people[i].age;
        }
    }
    document.getElementById("groupsStat").innerHTML +=
        "Группа " + groups[i] + ", всего " + qnt + ", из них мужчин " +
        qntM + ", женщин " + qntF + ". Средний возраст " +
        Math.round(sumAge / qnt) + "<p>";
}
document.getElementById("groupsQnt").innerHTML = groups.length.toString();