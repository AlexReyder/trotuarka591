<?

function generateCode($length = 6)
{
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI JKLMNOPRQSTUVWXYZ0123456789";
    $code = "";
    $clen = strlen($chars) - 1;
    while (strlen($code) < $length) {
        $code .= $chars[mt_rand(0, $clen)];
    }
    return $code;
}
$link = mysqli_connect("localhost", "mskeg_klinder", "AQ&GX8Dq", "mskeg_klinder");


if (isset($_POST['username'])) {
    $query = mysqli_query($link, "SELECT user_id, user_password FROM users WHERE user_login='" . mysqli_real_escape_string($link, $_POST['username']) . "' LIMIT 1");
    $data = mysqli_fetch_assoc($query);
    if ($data['user_password'] === md5(md5($_POST['password']))) {
        $hash = md5(generateCode(10));
        mysqli_query($link, "UPDATE users SET user_hash='" . $hash . "' " . $insip . " WHERE user_id='" . $data['user_id'] . "'");
        if ($_POST['remember']) {
            setcookie("id", $data['user_id'], time() + 60 * 60 * 24 * 30, "/");
            setcookie("hash", $hash, time() + 60 * 60 * 24 * 30, "/", null, null, true); // httponly !!!
        }
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
}
