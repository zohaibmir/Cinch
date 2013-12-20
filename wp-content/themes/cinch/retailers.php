<?php
/*
  Template Name: Retailers
 */
if (have_posts()) : while (have_posts()) : the_post();
        global $page_var;
        ?>
        <section id="retailers" class="page">
            <article id="retailers-article">               
                <div class="row collapse">
                    <div class="large-3 medium-3 small-4 columns" id="retailers-left" >
                        <div class="vcentere-content1">
                            <div class="fixed-div" id="retailers-fixed-left" style="display: none">
                                <div class="text" id="retailers-left-text">
                                    <h2><?php the_title() ?></h2>
                                    <?php the_content() ?>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="large-6 medium-6 small-4 columns" id="retailers-middle">
                        <div class="vcentere-content1">
                            <div class="time-line-centred-img1">
                                <center><img src="<?php echo wp_get_attachment_url(get_post_thumbnail_id(get_the_ID())); ?>"  /></center>                                
                            </div>
                        </div>
                    </div>
                    <div class="large-3 medium-3 small-4 columns" id="retailers-right">
                        <div class="vcentere-content1">
                            <div class="fixed-div" id="retailers-fixed-right" style="display: none">
                                <div class="text" id="retailers-right-text">
                                    <center><img src="<?php echo get('page_group_rightimage_image', 1); ?>" alt="H2" /></center>
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
