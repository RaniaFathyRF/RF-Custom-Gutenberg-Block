<?php

/*
Plugin Name: RF Custom Gutenberg Block
Description: A custom Gutenberg block example.
Version: 1.0
Author: Your Name
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

include 'config.php';
// Enqueue block editor assets for backend.
function rf_custom_gutenberg_block_enqueue_assets()
{
    wp_enqueue_script(
        'rf-custom-gutenberg-block',
        plugins_url('/block/build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'),
        filemtime(RF_CUSTOM_GUTENBERG_BLOCK_PATH . 'block/build/index.js')
    );

    wp_enqueue_style(
        'rf-custom-gutenberg-block-editor-style',
        plugins_url('/block/build/editor.css', __FILE__),
        array('wp-edit-blocks'),
        filemtime(RF_CUSTOM_GUTENBERG_BLOCK_PATH. 'block/build/editor.css')
    );

    wp_enqueue_style(
        'rf-custom-gutenberg-block-style',
        plugins_url('/block/build/style.css', __FILE__),
        array(),
        filemtime(RF_CUSTOM_GUTENBERG_BLOCK_PATH. 'block/build/style.css')
    );
}

add_action('enqueue_block_editor_assets', 'rf_custom_gutenberg_block_enqueue_assets');

