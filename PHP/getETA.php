<?php
    function abc($origin,$destination){
        console.log("hi");
        $curl_handle = curl_init("https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + $origin + "&destinations=" + $destination + "&mode=driving&language=en-EN&key=AIzaSyA895_v4hGeehPltHyfxM_U4BslIEa_Sms");

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

        // $output="yo what's good";
        // $js_code = "console.log(' . json_encode($output, JSON_HEX_TAG) . ');";
        // $js_code = '<script>' . $js_code . '</script>';
        
        // echo $js_code;
        echo json_encode($response);
        echo json_encode($json);
    }
?>