$(document).ready(function() {
    $('img').each(function() {
      if ($(this).parent().hasClass('fancybox')) {
        
        return;
      }
      if ($(this).hasClass('nofancybox')) return;
      var alt = this.alt;
      if (alt) $(this).after('<span class="caption">' + alt + '</span>');
      $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" title="' + alt + '" class="fancybox"></a>');
    })
    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article')
    })
    $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").attr('rel', 'gallery').fancybox({
      helpers : {
      title: { type: 'inside'}
      }
    });
    
    // // 如果页面的高度小于屏幕的高度，为了避免底部导航栏 "居中"
    // if (document.body.scrollHeight < window.screen.availHeight - 500) {
    //   $("#flex_bottom").addClass("fixed-bottom");
    // } else {
    //   $("#flex_bottom").removeClass("fixed-bottom");
    // }
});
