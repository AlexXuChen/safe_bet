


function incrementValue(id, incrementAmount)
{
    // var value = parseInt(document.getElementById(id).value, 10);
    // value = isNaN(value) ? 0 : value;
    // value = value + incrementAmount;
    // document.getElementById(id).value = value;

    var value = parseInt(document.getElementById(id).innerHTML, 10);
    value++;
    document.getElementById(id).innerHTML = value;
}

var p1=document.getElementById("p1");
p1.innerHTML=5;