<?php
// Define variables and initialize with empty values
$name = $email = $message = "";
$name_err = $email_err = $message_err = "";

// Processing form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Validate name
    if (empty(trim($_POST["name"]))) {
        $name_err = "Please enter your name.";
    } else {
        $name = trim($_POST["name"]);
    }

    // Validate email
    if (empty(trim($_POST["email"]))) {
        $email_err = "Please enter your email address.";
    } elseif (!filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL)) {
        $email_err = "Invalid email format.";
    } else {
        $email = trim($_POST["email"]);
    }

    // Validate message
    if (empty(trim($_POST["message"]))) {
        $message_err = "Please enter your message.";
    } else {
        $message = trim($_POST["message"]);
    }

    // Check input errors before sending email
    if (empty($name_err) && empty($email_err) && empty($message_err)) {
        // Recipient email address
        $to = 'karmacharyakriti08@gmail.com'; // NOTE: Replace with your actual email address
        // Create email subject
        $subject = 'Contact Form Submission from ' . $name;
        // Create email body
        $email_body = "You have received a new message from the contact form.\n\n";
        $email_body .= "Name: " . $name . "\n";
        $email_body .= "Email: " . $email . "\n";
        $email_body .= "Message: " . $message . "\n";

        // Email headers
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Attempt to send the email
        if (mail($to, $subject, $email_body, $headers)) {
            echo "Message sent successfully.";
        } else {
            echo "Message could not be sent.";
        }
    } else {
        // Display an error message if validation fails
        echo "Please fix the following errors: \n";
        echo $name_err . "\n";
        echo $email_err . "\n";
        echo $message_err . "\n";
    }
}
?>
