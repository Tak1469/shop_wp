<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">

  <title><?php wp_title(); ?></title>

  <?php wp_head(); ?>
</head>

<body class="l-body" <?php body_class(); ?>>