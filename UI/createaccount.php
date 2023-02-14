<?php
  $username = $_POST['usernname'];
  $sex = $_POST['sex'];
  $weight = $_POST['weight'];
  $height = $_POST['height'];
  $age = $_POST['age'];
  $email = $_POST['email'];
  $password = $_POST['password'];



  $servername = "107.180.1.16";
  $username = "sprc2023team3";
  $password = "sprc2023team3";
  $dbname = "sprc2023team3";

  $conn = mysqli_connect($servername, $username, $password, $dbname);

  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  $sql = "INSERT INTO form_data (username, sex, weight, height, age, email, password) VALUES ('$username','$sex','$weight','$height','$age','$email','$password',)";

  if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

  mysqli_close($conn);
?>