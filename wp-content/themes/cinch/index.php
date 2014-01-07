<?php
/*
  Template Name: HomePage
 */
if (have_posts()) : while (have_posts()) : the_post(); 
 global $page_var;

?>


<section id="home"  class="page">
    <article id="home-article">               
        <div class="row collapse">

            <div class="large-3  medium-4 small-4  columns" id="home-left">

                <div class="vcentere-content">
                    <div id="home-fixed-left" class="fixed-div">
                        <div class="text">
                            <center>
                                <img src="<?php echo get('page_group_leftimage_image', 1); ?>" alt="H2"/>                                
                                <a href="#ourapp"><h2 class="text-header2"><?php echo get('page_group_leftimage_caption', 1); ?></h2></a>
                            </center> 
                        </div>
                    </div>
                </div>
            </div>             
            <div class="large-6 medium-4 small-4 columns" id="home-center">
                <div class="vcentere-content">
                    <div class="time-line-centred-img">                                
                        <h1 class="text-header"><?php the_title(); ?></h1>
                        <center><img src="<?php echo wp_get_attachment_url(get_post_thumbnail_id(get_the_ID())); ?>"  /></center>                                
                    </div>
                </div>

            </div>             
            <div class="large-3 medium-4 small-4 columns" id="home-right">
                <div class="vcentere-content">
                    <div id="home-fixed-right" class="fixed-div">
                        <div class="text" id="home-text">
                            <center>
                                <img src="<?php echo get('page_group_rightimage_image', 1); ?>" alt="H2" />
                                <a href="#retailers"><h2 class="text-header2"><?php echo get('page_group_rightimage_caption', 1); ?></h2></a>
                            </center>
                        </div>
                    </div>
                </div>
            </div>             
        </div>        
    </article>
</section>

 <?php
    endwhile;
endif;
?>
