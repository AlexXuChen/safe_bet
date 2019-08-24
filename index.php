<!DOCTYPE html>
<html>

<head>
    <title>SafeBet</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <link rel="stylesheet" href="CSS/style.css">
    <link href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" width="100%" href="Images/favicon.png">
</head>

<body>
    <div style="display: none">
        <input id="origin-input" class="controls" type="text" placeholder="Enter an origin location">

        <input id="destination-input" class="controls" type="text" placeholder="Enter a destination location">

        <div id="mode-selector" class="controls">
            <input type="radio" name="type" id="changemode-walking" checked="checked">
            <label for="changemode-walking">Walking</label>

            <input type="radio" name="type" id="changemode-transit">
            <label for="changemode-transit">Transit</label>

            <input type="radio" name="type" id="changemode-driving">
            <label for="changemode-driving">Driving</label>
        </div>
    </div>

    <div id="map"></div>

    <sub>Right now I'm using a sample origin and destination (working on making it current dest to desired dest</sub>

    <?php
    $curl_handle = curl_init("https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC&destinations=Victoria+BC&mode=driving&language=en-EN&key=AIzaSyA895_v4hGeehPltHyfxM_U4BslIEa_Sms");

curl_setopt($curl_handle, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl_handle, CURLOPT_FAILONERROR, true);
curl_setopt($curl_handle, CURLOPT_HTTPHEADER, array(
        "Content-Type: application/json",
        "cache-control: no-cache",)
);

$response = curl_exec($curl_handle);
$error_msg = curl_error($curl_handle);
$json = json_decode($response, true);


if ($error_msg) { // Handle error
    print_r($error_msg);
} else { // Handle response
    $predictedTime = $json["rows"][0]["elements"][0]["duration"]["value"];
    
    echo "<h1>Predicted Travel Time: <span id='predictedTime'>$predictedTime</span>s</h1>";
}
curl_close ($curl_handle);

?>
    <h1>Actual Travel Time: <span id='actualTime'></span>s</h1>
    <button>Start Timer</button>
    <button>Stop Timer</button>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!-- <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA895_v4hGeehPltHyfxM_U4BslIEa_Sms&callback=initMap">
    </script> -->
    <script src="JavaScript/mapconfig.js">
    </script>
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA895_v4hGeehPltHyfxM_U4BslIEa_Sms&libraries=places&callback=initMap"
        async defer></script>


</body>

</html>