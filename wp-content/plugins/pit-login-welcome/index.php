<?php
/*
Plugin Name: Pit Login Welcome
URI: http://www.www.webingnet.com
Description: This is a simple plugin. Pit Login Welcome is a Plugin which can give a Random Welcome message to your blog/Website's users when login.
Version: 1.0
Author: Pantho Bihosh
Author URI: http://www.bihosh.com
*/

function the_login_message( $message ) { 
$message=array('Hello! Welcome to this website','Hi Buddy! How are you?','Hi Dear! How do you do?','Welcome to the login Page.','Hi Man! are you fine today?');
$keys=array_rand($message,2);
foreach($keys as $key);
    if ( empty($message) ){
        return "<p>Welcome to this site. Please log in to continue</p>";
    } else {
        return "<div style='width: 285px;height: 15px;border:1px solid #CCC;padding: 10px;margin-left:10px;border-radius:3px;margin-bottom: 5px;box-shadow: rgba(200,200,200,.7) 0 4px 10px -1px;-webkit-box-shadow: rgba(200,200,200,.7) 0 4px 10px -1px;'> $message[$key] </div>";
    }
}

add_filter( 'login_message', 'the_login_message' );


function my_login_logo() { ?>
    <style type="text/css">
        body.login div#login h1 a {
            background-image: url(<?php echo get_bloginfo( 'template_directory' ) ?>/images/site-login-logo.png);
            padding-bottom: 30px;
        }
    </style>
<?php }
//add_action( 'login_enqueue_scripts', 'my_login_logo' );
?>