$(document).ready(function() {
    // 为所有图片添加 fancybox 包装（除非已经有或标记为不启用）
    $('img').each(function() {
        if ($(this).parent().hasClass('fancybox')) {
            return;
        }
        if ($(this).hasClass('nofancybox')) return;

        var alt = this.alt || '';
        if (alt) {
            $(this).after('<span class="caption">' + alt + '</span>');
        }

        var href = $(this).attr('data-src') || this.src;
        $(this).wrap('<a href="' + href + '" title="' + alt + '" class="fancybox"></a>');
    });

    // 初始化 fancybox
    $('.fancybox').fancybox({
        helpers: {
            title: { type: 'inside' }
        },
        loop: true,
        clickSlide: 'close',
        clickOutside: 'close'
    });
});
