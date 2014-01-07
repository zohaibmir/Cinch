<!doctype html>
<html class="no-js" lang="en">
    <head>
        <title><?php wp_title('|', true, 'right'); ?></title>        
        <?php wp_head(); ?>

        <style>
            html, body {
                margin: 0 !important;
                padding: 0 !important;
            }
            .appleLinks a {color:#000000;}
            .appleLinksWhite a {color:#ffffff;}
        </style>
    </head>
    <body>
        <section class="bg-page bg-page-1"></section>
        <section class="bg-page bg-page-2" style="display: none;"></section>
        <section id="header" class="page">

            <nav class="top-bar show-for-small" data-topbar data-options="is_hover: false">
                <ul class="title-area">
                    <li class="name">
                        <a href="#home">
                            <img class="logoimg" src="<?php echo get_template_directory_uri() ?>/images/logo.png" alt="Logo" />
                        </a>
                    </li>
                    <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
                </ul>

                <section class="top-bar-section">
                    <!-- Left Nav Section -->
                    <ul class="left">                        
                        <li><a href="#ourapp" >Our App</a></li>
                        <li class="divider"></li>
                        <li><a href="#retailers">Retailers</a></li>
                        <li class="divider"></li>
                        <li><a href="#service">Click to Service</a></li>
                        <li class="divider"></li>
                        <li><a href="#sdk">Cinch Mobile SDK</a></li>
                        <li class="divider"></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </section>
            </nav>
            <div class="row show-for-medium-up" >
                <div class="large-2 small-2 columns">                  
                    <div class="logo">
                        <a href="#home">
                            <img src="<?php echo get_template_directory_uri() ?>/images/logo.png" alt="Logo" />
                        </a>
                    </div> 
                </div>
                <div class="large-10  small-10 columns">
                    <!--div class="top-nav">
                        <!--ul class="nav">
                            <li class="nav0 active"><a href="#home">Home</a></li>
                            <li class="nav1"><a href="#ourapp" >Our App</a></li>
                            <li class="nav2"><a href="#retailers">Retailers</a></li>
                            <li class="nav3"><a href="#service">Click to Service</a></li>
                            <li class="nav4"><a href="#sdk">Cinch Mobile SDK</a></li>
                            <li class="nav5"><a href="#contact">Contact</a></li>
                        </ul-->
                        <?php
                        wp_nav_menu(array('theme_location' => 'mainnav', 'container' => 'div',
                            'container_class' => 'top-nav',
                            'container_id' => '', 'menu_class' => 'nav', 'menu_id' => 'nav'));
                        ?> 
                    <!--/div-->

                </div>
            </div>
        </section>