<?php
// session_start();
$res;

if (count($_POST) > 0) {

    $old = $_POST['oldPassword'];
    $new = $_POST['newPassword'];
    $retype = $_POST['confirmPassword'];


    $_SESSION['old'] = $old;
    $_SESSION['new'] = $new;
    $_SESSION['retype'] = $retype;


    $conn = new mysqli("localhost", "mskeg_klinder", "AQ&GX8Dq", "mskeg_klinder");
    $sql = "SELECT * FROM users WHERE user_id = '1'";
    $query = $conn->query($sql);
    $row = $query->fetch_assoc();
    if (md5(md5($old)) === $row['user_password']) {
        if ($new == $retype) {
            $password = md5(md5(trim($new)));

            $sql = "UPDATE users SET user_password = '$password' WHERE user_id = '1'";

            if ($conn->query($sql)) {
                $_SESSION['success'] = "Password updated successfully";
                unset($_SESSION['old']);
                unset($_SESSION['new']);
                unset($_SESSION['retype']);
                setcookie("id", "", time() - 3600 * 24 * 30 * 12, "/");
                setcookie("hash", "", time() - 3600 * 24 * 30 * 12, "/", null, null, true);
                $res = json_encode(true);
            } else {
                $_SESSION['error'] = $conn->error;
                $res = json_encode(false);
            }
        } else {
            $_SESSION['error'] = "New and retype password did not match";
            $res = json_encode(false);
        }
    } else {
        $_SESSION['error'] = "Incorrect Old Password";
        $res = json_encode(false);
    }
} else {
    $_SESSION['error'] = "Input needed data to update first";
    $res = json_encode(false);
}
echo $res;
