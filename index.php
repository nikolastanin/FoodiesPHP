<?php


require_once 'db_config.php';

$connect = new mysqli(HOST, USER, PASS, DATABASE);
if ($connect->connect_errno) {
    echo $connect->connect__error;
}

$sql = "SELECT id, category, name, price, photo, availability FROM products ORDER BY price desc limit 3";
if ($result = $connect->query($sql)) {
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

include "header.php";
?>





<section  id="title">
    <div class="container-fluid">

        <!-- TITLE -->
        <div class="row title-row">
            <div class="col-lg-6 col-md-12">
                <h1 class="big-headings title-heading">
                    We Deliver Delicious <span class="span-title"> Food </span>
                </h1>
                <p>
                    Keepingsss it fast and filling your tummy with delicious food and with fast and free delivery.
                    From make-ahead lunces and midweek meals to fuss-free sides.
                </p>
                <button id="started-btn" class="btn-yellow">Get Started</button>
            </div>
            <div class="col-lg-6 col-md-12 ">
                <img class="title-image" src="images/order.png" alt="food-plate">

            </div>
        </div>

    </div>


</section>
<!-- FEATURES SECTION -->
<section  id="features-section">
    <div class="container-fluid">

        <h2>
            Your<span class="span-title"> Favourite </span>Food Delivery Partner
        </h2>

    </div>
    <div class="row">
        <div class="col-lg-4 feature-box ">
            <img  class="feature-img" src="images/easy-order.png" alt="">
            <h3>Easy To Order</h3>
            <p>You only need a few steps in ordering food.</p>
        </div>
        <div class="col-lg-4 feature-box">
            <img class="feature-img" src="images/fast-delivery.png" alt="">
            <h3>Fastest Delivery</h3>
            <p>Delivery that is always on time even faster.</p>
        </div>
        <div class="col-lg-4 feature-box">
            <img class="feature-img" src="images/payment.png" alt="">
            <h3>Easy Payment</h3>
            <p>Pay with a Visa or PayPal card and without much ado.</p>
        </div>

    </div>
    </div>
    
</section>
<!-- TITLE -->
<section id="popular-food">
 <div class="container-fluid">
        <h2>
            Most Popular<span class="span-title"> Food </span>
        </h2>
        <div class="popular-food__container">
        <?php
        foreach ($products as $key => $value) {
            echo '<div class="popular-food__item">
                                <img src="'.$value['photo'].'" class="product-list__picture" alt="">
                                <div class="popular-food__text"> 
                                     <div class="product-text"><h3>'.$value['name'].'</h3></div>
                                    <div class="product-text"> <h5>'.$value['category'].'</h5></div>
                                   
                                    <div class="product-text"> <p>'.$value['price'].' EUR.</p> </div>
                                    <a href="menu.php"  class="btn-yellow btn-transparent">Order now</a>
                                </div> 
                            </div>';
        }
        ?>
            <div>
        </div>

</section>

<section id="about-us">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">

                <img class="about-img" src="images/Chef-cuate.png" alt="food-delivery">
            </div>
            <div class="col-lg-6  ">
                <h3>About<span class="span-title"> Us </span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in finibus purus, eget gravida tortor. Proin vulputate fermentum justo nec auctor. Nunc cursus tellus ut justo convallis fermentum. Sed pulvinar posuere ligula at pharetra. Nunc ut luctus leo. Praesent ut ante sit amet magna pretium pretium.1 "</p>
                </p>
                <p id="more-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in finibus purus, eget gravida tortor. Proin vulputate fermentum justo nec auctor. Nunc cursus tellus ut justo convallis fermentum. Sed pulvinar posuere ligula at pharetra. Nunc ut luctus leo. Praesent ut ante sit amet magna pretium pretium.2 "</p>
                </p>
                <button id="view-btn"class="btn-yellow btn-transparent">View more</button>
            </div>
        </div>
    </div>
</section>

<?php include "footer.php"?>


<script src="scripts/main.js" async defer></script>


</body>
</html>
