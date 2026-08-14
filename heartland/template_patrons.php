<?php
/**
 * Template Name: About
 *
 */
get_header(); 
$about_content = get_field('about_content');
?>
<input type="hidden" id="associated_page" original="<?php echo get_permalink(
    $post->ID
); ?>" value="<?php echo get_permalink($post->ID); ?>">
<div id="primary" class="content-area primary_home">
  <main id="main" class="site-main page-content" role="main">
    <div class="page_content_container scroll_div" >
      <div class="page_content_container_wrapper" >
		<div class="about_container section_container" >
			<div class="section_hero">
				<?php 
				$section_icon_id = get_post_meta($post->ID,'section_icon_id',true);
				$section_icon =  wp_get_attachment_image_src($section_icon_id, 'full', false, '');
				?>
				<div class="section_hero_wrapper">
					<div class="section_hero_icon_container">
					<div class="section_hero_icon_container_wrapper">
					<div class="section_hero_icon"><img src="<?php echo $section_icon[0];?>" /></div>
					</div>
					</div>
					<div class="section_hero_footer">
						<div class="section_hero_title"><?php echo $post->post_title;?></div>
						<div class="section_hero_text"><?php echo nl2br($post->post_content);?></div>
						<div class="section_hero_arrow"><?php echo get_bottom_arrow_svg();?></div>
					</div>
				</div>
			</div>
			<div class="section_content_container">
				<?php 
				$main_text = $about_content['main_text'];
				if(!empty($main_text)){
					?>
					<div class="about_main_text">
						<?php echo wpautop($main_text); ?>
					</div>
					<?php
				}
				?>
				<?php 
				$secondary_text = $about_content['secondary_text'];
				if(!empty($secondary_text)){
					?>
					<div class="about_secondary_text">
						<?php echo wpautop($secondary_text); ?>
					</div>
				<?php
				}
				?>
				<?php 
				$image_with_text = $about_content['image_with_text'];
				if(!empty($image_with_text['image'])){
					?>
					<div class="image_with_text_container">
						<div class="image_with_text_image keep_ratio_width"  bk_image="<?php echo $image_with_text['image']['url']; ?>"  owidth="<?php echo $image_with_text['image']['width'];?>" oheight="<?php echo $image_with_text['image']['height'];?>" ></div>
						<div class="image_with_text_image_text"><?php echo nl2br($image_with_text['text']); ?></div>
					</div>
				<?php
				}
				?>
				<?php 
				$description_text = $about_content['description_text'];
				if(!empty($description_text)){
					?>
					<div class="about_description_text">
						<?php echo wpautop($description_text); ?>
					</div>
				<?php
				}
				?>
				<?php 
				$slider_module = $about_content['slider'];
				if(!empty($slider_module['slider'])){
					?>
					<div class="about_slider_module">
						<div class="about_slider_module_title">
							<?php echo nl2br($slider_module['title']); ?>
						</div>
						<?php 
						$slider_gallery = $slider_module['slider']
						?>
						<div class="about_slider_module_slider" id="about_slider">
							<div class="swiper mySwiper">
									<div class="swiper-wrapper">
										<?php 
										foreach($slider_gallery as $slider_gallery_image){
											$img_src = wp_get_attachment_image_src($slider_gallery_image['ID'], 'full', false, '');
											?>
											<div class="swiper-slide">
												<div class="swiper_slide_image keep_ratio_height" bk_image="<?php echo $img_src[0];?>" owidth="<?php echo $img_src[1];?>" oheight="<?php echo $img_src[2];?>"></div>
											</div>
											<?php
										}
										?>
									</div>
							</div>
							<div class="swiper-button-next"><?php get_slider_arrow_svg();?></div>
   							<div class="swiper-button-prev"><?php get_slider_arrow_svg();?></div>
						</div>
					</div>
				<?php
				}
				?>
				<?php 
				$rotative_text_module = $about_content['rotative_text_module'];
				if(!empty($rotative_text_module['items'])){
					?>
				<div class="about_rotative_text_module">
					<div class="about_rotative_text_module_wrapper">
						<div class="about_rotative_text_module_text"><?php echo wpautop($rotative_text_module['text']);?></div>
						<div class="about_rotative_text_module_content">
							<div class="about_rotative_text_module_content_title top_title"><?php echo nl2br($rotative_text_module['top_title']);?></div>
							<div class="about_rotative_text_module_content_items">
								<?php 
								foreach($rotative_text_module['items'] as $rotative_text_module_item){
									?>
									<div class="about_rotative_text_module_content_item">
										<?php echo nl2br($rotative_text_module_item['text']) ?>
									</div>
									<?php
								}
								?>
							</div>
							<div class="about_rotative_text_module_content_title bottom_title"><?php echo nl2br($rotative_text_module['bottom_title']);?></div>
					</div>
				</div>
				</div>
					<?php
				}
				?>
				<?php 
				$about_bottom_module = $about_content['about_bottom_module'];
				if(!empty($about_bottom_module['image'])){
					?>
				<div class="about_bottom_module">
					<div class="about_bottom_module_wrapper">
						<div class="about_bottom_module_text_items">
							<div class="about_bottom_module_text_item about_bottom_module_text_item1">
								<?php foreach($about_bottom_module['left_text'] as $key=> $about_bottom_text_line){
									?>
									<div data-aos="fade-up" class="about_bottom_module_text_item_line about_bottom_module_text_item_line_<?php echo $key+1;?>"><?php echo $about_bottom_text_line['text_line'];?></div>
									<?php
								} ?>
							</div>
							<div class="about_bottom_module_text_item about_bottom_module_text_item2">
								<?php foreach($about_bottom_module['right_text'] as $key=> $about_bottom_text_line){
									?>
									<div data-aos="fade-up" class="about_bottom_module_text_item_line about_bottom_module_text_item_line_<?php echo $key+1;?>"><?php echo $about_bottom_text_line['text_line'];?></div>
									<?php
								} ?>
							</div>
						</div>
							<div class="about_bottom_module_image_container">
								<div class="about_bottom_module_image keep_ratio_width" data-aos="fade-up" bk_image="<?php echo $about_bottom_module['image']['url'];?>"  owidth="<?php echo $about_bottom_module['image']['width'];?>"  oheight="<?php echo $about_bottom_module['image']['height'];?>"></div>
							</div>
							<div class="about_bottom_module_bottom_text" data-aos="fade-up">
								<?php
								echo $about_bottom_module['bottom_text'];
								?>
							</div>
				</div>
				</div>
					<?php
				}
				?>
			</div>
    	</div>
		</div>
		</div>
  </main>
</div>
<?php custom_get_footer(); ?>
<?php get_footer(); ?>