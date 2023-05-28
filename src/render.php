<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(['class' => 'quiz-block-container']); ?>>
	<?php if ( ! empty($attributes) ) : ?>
			<pre style="display:none;"><?php echo wp_json_encode($attributes); ?></pre>
	<?php endif; ?>
</div>
