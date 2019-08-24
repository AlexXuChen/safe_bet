function incrementValue(id, incrementAmount)
{
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    value = value + incrementAmount;
    document.getElementById(id).value = value;
}