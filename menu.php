<?php
include "header.php";

require_once 'db_config.php';

$connect = new mysqli(HOST,USER,PASS,DATABASE);
if($connect -> connect_errno) {
    echo $connect -> connect__error;
}

$sql_str = "";

/*--SEARCH--*/
if (isset($_GET['search']) && !empty($_GET['search'])) {
    $search = $connect->real_escape_string($_GET['search']);
    $search_arr = explode(' ', $search); // explode search string to "words"
    foreach ($search_arr as $key => $value) {
        if(mb_strlen($value) <= 2) {
            unset($search_arr[$key]); // unset "words" which have less then 3 letter
        }
    }
    if (isset($search_arr) && !empty($search_arr)) {
        $where = array();
        foreach ($search_arr as $key => $value) {
            $where[] = "WHERE name LIKE '%$value%' OR category LIKE '%$value%'";
        }
        $sql_str .= implode(' OR ', $where);
    }
}

if (isset($sql_str)) {
    $sql = "SELECT id, category, name, price, photo, availability FROM products " . $sql_str;
    if ($result = $connect -> query($sql)) {
        while ($row = $result -> fetch_assoc()) {
            $products[] = $row;
        }
    }
}
?>

  

        <section id="menu">
            
                <div class="menu-headings_container"></div>
            <h1>Today's menu</h1>
            <form class="product-search" method="get">
                <input placeholder="Search" name="search" type="text">
                <button class="btn btn-yellow"type="submit">Go</button>
            </form>
            </div>
            <div class="products container-fluid">
                <?php
                if (!empty($products)) {
                    foreach ($products as $key => $value) {
                        echo '<div class="product-list__item">
                        <img src="'.$value['photo'].'" class="product-list-img" alt="" width="100%">
                                <div class="product-list__container">
                                    <h3 class="product-list__title">'.$value['category'].'</h3>
                                    <h5 class="product-list__subtitle">'.$value['name'].'</h5>
                                    <p class="product-list__price">'.$value['price'].' EUR.</p>
                                    <button  class="product-list__button btn-yellow btn-transparent">Add to Cart </button>
                                </div>
                            </div>';
                          
                    }
                }
                else {
                    echo '<p > Products not found </p>';
                }
                ?>
            </div>
           
         </section>


<?php include "footer.php"?>