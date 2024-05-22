<?

$link = mysqli_connect("localhost", "mskeg_klinder", "AQ&GX8Dq", "mskeg_klinder");
if (isset($_COOKIE['id']) and isset($_COOKIE['hash'])) {
    $query = mysqli_query($link, "SELECT user_hash, user_id FROM users WHERE user_id = '" . intval($_COOKIE['id']) . "' LIMIT 1");
    $userdata = mysqli_fetch_assoc($query);
    if (($userdata['user_hash'] !== $_COOKIE['hash']) or ($userdata['user_id'] !== $_COOKIE['id'])) {
        echo json_encode(false);
    } else {
        echo json_encode(true);
    }
} else {
    echo json_encode(false);
}
