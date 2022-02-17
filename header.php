
<?php

?>

<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Foodies</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


    <script src="https://kit.fontawesome.com/af63b2d295.js" crossorigin="anonymous"></script>
<!-- 
bootstrap     -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="css/styles.css">

        </head>
<body>




<nav>
    <ul class="nav-menu">
      <li class="nav-logo">
      <a href="" class="nav-logo-title"><span class="span-title">Food</span>ies</a>
      </li>
   
      <li  class="nav-item">
            <a href="index.php">Home</a>
       
        </li>

      <li class="nav-item">
            <a href="index.php#about-us">About us</a>
        </li>
        <li class="nav-item" >
            <a  href="menu.php">Menu</a>
        </li>
        <li class="nav-item" >
            <a  href="index.php#footer">Contact us </a>
        </li>
        <li class="nav-item" >
            <a  href="admin.php">Admin </a>
        </li>
        <li  class="nav-item">
           
            <button class="cart-icon btn-cart"><img src="images/shopping-cart.png" alt=""><span class="cart-count">(0)</span></button>
           
        
        </li>
        
        <li class="toggle"></i>
        <img src="images/icons/icon_lines.png"/></li>
    </ul>
</nav>
<div class="alert-box">
<div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>
</div>
<div class="modal">

    <div class="cart-container">
        <span id="modal-close__btn"> <img src="images/icons/icon_close.png"/></span>
    <h3>Your cart items</h3>
    <hr>
        <div class="cart-items__container">
              
        </div>
        <hr>
        <p id="price-text">Your total:</p>
        <hr>
        <div class="cart-buttons">
            <button class="cart-button__clear btn btn-danger">clear</button>
            <button class="cart-button__checkout btn btn-success"><a href="checkout.php">checkout</a></button>
        </div>
    </div>
</div>
