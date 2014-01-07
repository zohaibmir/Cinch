<?php
/*
  Template Name: Single page site template
 */
?>
<?php get_header(); ?>  
<?php while ( have_posts() ) : the_post(); ?>
<?php
  /**
   * Load page id's and template names. 
   */
  $pages = array();
  $num_of_pages = get_count_group('group_page_page');
  
  for ($i=1; $i <= $num_of_pages; $i++) {
    $tmp = array();
    
    $tmp['ID'] = get('group_page_page',$i);
    $tmp['css_id'] = get('group_page_css_id',$i);
    $tmp['template'] = get_post_meta($tmp['ID'],'_wp_page_template', true);
    $pages[] = $tmp;
  }
  /**
   * Load post by id and include template
   */
  
  $i=0;
  
  foreach ($pages as $page) {
    
    $i++;
    
    $args = array(
      'p'=>$page['ID'], 
      'post_type'=>'page'
      );
    query_posts($args);
    $page_template = preg_replace("/\\.[^.\\s]{3,4}$/", "", $page['template']); // Remove .php from string
    
    global $page_var;
    
    $page_var = $page;
    $page_var['css_id'] = (!empty($page_var['css_id']))? $page_var['css_id'] : "section-".$page['ID']; //add section-page_id as deafult if there is no class id added
  
    if ($i == 2 ) {
      //echo '<div style="height: auto;width:100%;z-index: 0 ">';
    }
    get_template_part($page_template);
  
    wp_reset_query();
  }
?>
</div>
<?php endwhile; // end of the loop. ?>
<?php get_footer(); ?>