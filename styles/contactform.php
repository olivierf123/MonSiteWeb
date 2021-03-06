<?php

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "olivier_froment@hotmail.com";
    $headers = "De mon siteweb. Son email :  ".$mailFrom;
    $txt = "Recu un email de mon siteweb de la part de : ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");

    }
    
?>
