function add() {
    var a = parseFloat(document.m1.t1.value);
    var b = parseFloat(document.m1.t2.value);
    var c = a + b;
    document.m1.t3.value = c;
    saveHistory(a, b, c, '+');
}

function sub() {
    var a = parseFloat(document.m1.t1.value);
    var b = parseFloat(document.m1.t2.value);
    var c = a - b;
    document.m1.t3.value = c;
    saveHistory(a, b, c, '-');
}

function mul() {
    var a = parseFloat(document.m1.t1.value);
    var b = parseFloat(document.m1.t2.value);
    var c = a * b;
    document.m1.t3.value = c;
    saveHistory(a, b, c, '*');
}

function div() {
    var a = parseFloat(document.m1.t1.value);
    var b = parseFloat(document.m1.t2.value);
    if (b !== 0) {
        var c = a / b;
        document.m1.t3.value = c;
        saveHistory(a, b, c, '/');
    } else {
        document.m1.t3.value = "Error: Division by 0";
    }
}

function saveHistory(a, b, result, operator) {
    // Get the history container
    var historyDiv = document.getElementById("history");

    // Create a new history entry
    var historyEntry = document.createElement("div");
    historyEntry.className = "history-entry";

    // Add the calculation to the history in a readable format
    historyEntry.innerHTML = 
        '<span>' + a + ' ' + operator + ' ' + b + ' = ' + result + '</span>';

    // Add the new entry to the history
    historyDiv.insertBefore(historyEntry, historyDiv.firstChild);
}
