<?php
/*
Plugin Name: Add Audio Players
Description: Add Audio Players for linked audio files.
Version: 0.1
Author: gerrard00
Author URI: http://www.pickabar.com
Plugin URI: https://github.com/gerrard00/addaudioplayers-wp-plugin
*/

function setupAudioPlayerJS() {
    wp_enqueue_script(
        'custom_script',
        plugins_url('/scripts/add-audio-players.js', __FILE__),
        array('jquery')
    );
}
 add_action( 'wp_enqueue_scripts',  'setupAudioPlayerJS');

?>