<?php

  // Check if contact form was submitted
  if(isset($_POST['submit'])) {
    $mailFrom = $_POST['email'];
    $mailTo = "testing@lalaxdev.com";
    $name = $_POST['name'];
    $message = $_POST['message'];

    // what will be displayed
    $subject = "You have received an email from: ".$mailFrom;
    $headers = "From: ".$mailFrom;
    $message = "You have received an email from ".$name.".\n\n".$message;
    // use wordwrap() if lines are longer than 70 characters
    $message = wordwrap($message,70);

    // send email
    // mail(to,subject,message,headers,parameters);
    mail($mailTo, $subject, $message, $headers);

    // take us back to the front page
    header("Location: https://lalaxdev.com/#contact");
    /*
    echo "<div style='background-color: pink; font-size: 1.5em; width: 100%; height: 100vh; padding-left: 50px; padding-top: 50px'>";
    echo "<h5>Thank you for getting in touch!</h5>";
    echo "<h5>We appreciate you contacting us/ [Your Company]. One of our colleagues will get back in touch with you soon!</h5>";
    echo "<h5>Have a great day!</h5>";
    echo "</div>";
*/
  }

?>
