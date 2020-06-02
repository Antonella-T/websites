<?php
    $mailFrom = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];
                
    mail('antonellamtesta@gmail.com', 'Contact request from '.$name, $message, 'From: '.$mailFrom);
    // Reference: https://www.trevor-davis.com/blog/ajax-forms-with-jquery/ 
?>
