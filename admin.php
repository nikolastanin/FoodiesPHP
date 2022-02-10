<?php
require_once 'db_config.php';
function printr ($var) {
    echo '<pre>';
    print_r($var);
    echo '</pre>';
}

$connect = new mysqli(HOST,USER,PASS,DATABASE);
if($connect -> connect_errno) {
    echo $connect -> connect__error;
}

// Oprations -> Add new, Update, Delete
if (isset($_GET['operation'])) {
    if (isset($_GET['submit'])) {
        $exceptions = array('submit','operation');
        foreach ($_GET as $key => $value) {
            if (!in_array($key, $exceptions)) {
                $sql_array[] = "`{$key}` = '" . $value . "'";
            }
        }
    }
    $operation = $_GET['operation'];
    switch (key($operation)) {
        case 'add_new':
            if (isset($_GET['submit'])) {
                $sql = "INSERT INTO products SET ";
                $sql .= implode(', ', $sql_array);
            }
            else {
                $add_new = true;
            }
            break;
        case 'update':
            if (isset($_GET['submit'])) {
                $sql = "UPDATE products SET ";
                $sql .= implode(', ', $sql_array);
                $sql .= " WHERE id = '". $operation['update'] ."'";
            }
            else {
                $sql = "SELECT id, category, name, price, photo, availability FROM products WHERE id = " . $operation['update'];
                if ($result = $connect -> query($sql)) {
                    $update = $result -> fetch_assoc();
                }
            }
            break;
        case 'delete':
            $sql = "DELETE FROM products WHERE id = '". $operation['delete'] ."'";
            break;
    }
    // Send sql to server
    if (isset($_GET['submit']) || key($operation) == 'delete') {
        if ($connect->query($sql) == true) {
            // echo "The process ended successfully";

        //    echo "
        //     <script type=\"text/javascript\">
        //    alert(\"process ended successfully\");
        //     </script>
        // ";


        }
    }
}
// Get data from database
$sql = "SELECT id, category, name, price, photo, availability FROM products";
if ($result = $connect -> query($sql)) {
    while ($row = $result -> fetch_assoc()) {
        $products[] = $row;
    }
}
include "header.php";
?>
<br><br><br><br><br><br>



<section id="admin">
    <h1>Admin page</h1>
    <div class="container-fluid">
        <form class="admin-form"method="GET">
            <table class="admin__table">
                <tr class="first">
                    <td>id</td>
                    <td>photo</td>
                    <td>category</td>
                    <td>name</td>
                    <td>price</td>
                    <td>availability</td>
                    <td colspan="2">operations</td>
                </tr>
                <?php
                foreach ($products as $key => $value) {
                    echo '<tr class="table">
                                    <td>' . $value['id'] . '</td>
                                    <td><img width="80px" height="80px" src ="' . $value['photo'] . '"></td>
                                    <td>' . $value['category'] . '</td>
                                    <td>' . $value['name'] . '</td>
                                    <td>' . $value['price'] . ' din.</td>
                                    <td>' . $value['availability'] . '</td>
                                    <td><button class="admin__table-button btn-yellow" type="submit" name="operation[update]" value="' . $value['id'] . '">Update</button></td>
                                    <td><button class="admin__table-button btn-del" type="submit" name="operation[delete]" value="' . $value['id'] . '">Delete</button></td>
                                </tr>';
                }
                ?>
            </table>
            <button class="admin__table-new btn-yellow" type="submit" name="operation[add_new]" value="true">Add new</button>
        </form>
    </div>
</section>

<?php if (isset($update) || isset($add_new)) { ?>
    <section class="block" style="
    text-align: center;
">
        <div class="page-wrapper">
            <h1>Enter the data</h1>
            <form class="admin__update" method="GET">
                <input type="hidden" name="operation[<?php echo key($operation) ?>]" value="<?php echo $operation[key($operation)] ?>">
                <div class="update__item"><input placeholder="Category" type="text" name="category" value="<?php if(isset($update)) {echo $update['category'];} ?>"></div>
                <div class="update__item"><input placeholder="Name" type="text" name="name" value="<?php if(isset($update)){echo $update['name'];} ?>"></div>
                <div class="update__item"><input placeholder="Price" type="text" name="price" value="<?php if(isset($update)){echo $update['price'];} ?>"></div>
                <div class="update__item"><input placeholder="Photo" type="text" name="photo" value="<?php if(isset($update)){echo $update['photo'];} ?>"></div>
                <div class="update__item"><input placeholder="Availability" type="text" name="availability" value="<?php if(isset($update)){echo $update['availability'];} ?>"></div>
                <button class="admin__table-new btn-yellow" style="margin: 10px;" type="submit" name="submit" value="true">Send</button>
            </form>
        </div>
    </section>
<?php } ?>
<?php include "footer.php"?>
