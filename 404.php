<!-- 404.php -->
<?php
/* 
Template Name: HOME 〜トップページ〜
*/
?>
<!-- header -->
<?php get_header(); ?>
<!-- loading -->
<?php get_template_part('content', 'loading'); ?>
<!-- main -->
<main class="l-main">
  <section class="c-container p-container__top">
    <div class="p-404">
      <h1 class="p-404__title">404 Page Not Found</h1>
      <p class="p-404__text">お探しのページは見つかりませんでした。</p>
    </div>
  </section>
</main>

<!--footer -->
<?php get_footer(); ?>