<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'cinch');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '1xTHg4U:Gy(e:q]^lS~j^A|D{TQ0[rRyfmcV@p0|&$/L)Mln)G@Yl.==NTPj3WWt');
define('SECURE_AUTH_KEY',  'VD(>g#Ayi-@),CNY,Z.WE{LRM8?p)E ~MfQ4Jcpp2=(xq%jI!_3}>LJZQ]!5wmpD');
define('LOGGED_IN_KEY',    'zdCG+VmX}ipI}bx.`DO{-;0(WEHvSl[)n%Qb:-9):WkUZbove#|hTOe9<&F[=_U6');
define('NONCE_KEY',        'i3V0~b37w]Ay4W:H^_.V(-}JmjQ+ 9gB .:ZC>hnq<loxDV T7^n:uUWZ@iToi(U');
define('AUTH_SALT',        '#C(VMjo-{310%my6=[lm|LwOI=Y@z&9P,pXasLV1I?tU#zmL?&e@B2y<NrJ[}@hg');
define('SECURE_AUTH_SALT', 'Ox,U*1#;A2~L$uyV<u;pSC2Urkgwf0wb@n3;X`S$4Gw-=vJx8`L.K;1*R0NOea`4');
define('LOGGED_IN_SALT',   'A^EyT(>+`~}@%QOqT[<Ndjaq}8EPV|Z@wd9#A2FZ^XoKk{z[&!/1+g#Xl[9.IEK4');
define('NONCE_SALT',       't:E f!e_%J=q]Y*@8F+?Ch#NX@pW,XnCu;rHj0V-t]1oo$z:Hu:([*CgmQQr!!*l');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'cn_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
