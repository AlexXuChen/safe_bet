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

    <?php
// echo "My first PHP script!";
//phpinfo();

// curl -H "Content-Type: application/json" -H "authorization: Token __API_TOKEN__" https://api.ximilar.com/recognition/v2/classify -d '{"task_id": "0a8c8186-aee8-47c8-9eaf-348103xa214d", "version": 2, "descriptor": 0, "records": [ {"_url": "https://bit.ly/2IymQJv" } ] }'
//v2/classify
    $curl_handle = curl_init("https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC&destinations=Victoria+BC&mode=driving&language=en-EN&key=AIzaSyA895_v4hGeehPltHyfxM_U4BslIEa_Sms");

// $data = [
//     'task_id' => "385ba151-9bf3-4656-a00f-b6f6a228a68a",
//     'records' => [
//         [ '_url' => 'https://bit.ly/2IymQJv' ],
//         // [ '_base64' => base64_encode(file_get_contents(__PATH_TO_IMAGE__)) ]
//     ]
// ];

// curl_setopt($curl_handle, CURLOPT_CUSTOMREQUEST, "POST");
// curl_setopt($curl_handle, CURLOPT_POSTFIELDS, json_encode($data));
// curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($curl_handle, CURLOPT_FAILONERROR, true);
// curl_setopt($curl_handle, CURLOPT_HTTPHEADER, array(
//         "Content-Type: application/json",
//         "Authorization: Token 14e7ecd7bf3cc606537c17697f999cff97dcba0f",
//         "cache-control: no-cache",)
// );

$response = curl_exec($curl_handle);
$error_msg = curl_error($curl_handle);
$json = json_decode($response, true);


if ($error_msg) { // Handle error
    print_r($error_msg);
} else { // Handle response
    //print_r($response);
    echo "<br>";echo "<br>";
    // print_r($json);
    // echo "<br>";echo "<br>";
    // print_r($json["records"]);
    // echo "<br>";echo "<br>";

    
    // $labelName=$json["records"][0]["best_label"]["name"];
    // echo "<h1>Best Label: $labelName</h1>";
}
curl_close ($curl_handle);

?>

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