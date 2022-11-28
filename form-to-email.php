<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = "contact@mepmllc.com";

  $email_subject = "MEPM - Contact Form";

  $email_body = "You have received a new message from $name.\n".
                          "Reply to: $visitor_email\n".
                          "Phone #: $phone\n".
                          "The message:\n $message";

    $to = "cawalton910@gmail.com";

    $headers = "From: $email_from \r\n";
    
    $headers .= "Reply-To: $visitor_email \r\n";
    
    
    if(empty($name) || empty($visitor_email) || empty($message) || IsInjected($visitor_email))
    {
      header('location: index.php?contact=false#testimonial');
    }
    else
    {
      mail($to,$email_subject,$email_body,$headers);
      header('location: index.php?contact=true#testimonial');
    }

function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }

}
?>
