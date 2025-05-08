$(document).ready(function () {
    $('.banner-div').slideDown(3000);
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('banner-scrolled');
            $('.nv-link').css('color','#1D1934');
        } else {
            $('header').removeClass('banner-scrolled');
            $('.nv-link').css('color','white');
        }
    });
    $(window).on('scroll', function () {
        $('.slider-1').each(function () {
          var elementTop = $(this).offset().top;
          var windowBottom = $(window).scrollTop() + $(window).height();
      
          if (windowBottom > elementTop + 50) { // adjust +50 to trigger earlier/later
            $(this).addClass('animate');
          }
          else{
            $(this).removeClass('animate');
          }
        });
      });
      $(window).on('scroll', function () {
        $('.slider-2').each(function () {
          var elementTop = $(this).offset().top;
          var windowBottom = $(window).scrollTop() + $(window).height();
      
          if (windowBottom > elementTop + 50) { // adjust +50 to trigger earlier/later
            $(this).addClass('animate');
          }
          else{
            $(this).removeClass('animate');
          }
        });
      });
     
    $('.ioc-con').hover(function () {
      clearTimeout($(this).data('hoverTimer'));
      clearTimeout($('.cus-card').data('hoverTimer'));
        // over
        $(this).addClass('ioc-con-h');
        const $info = $(this).closest('.cus-card').find('.ribbon');
        $info.fadeOut();
        $(this).find('.card-icons').hide();
        $(this).find('.card-content').fadeIn(2000);
        const timer = setTimeout(() => {
          $(this).find('.card-content').stop(true, true).fadeIn(500);
        }, 300);
    
        $(this).data('hoverTimer', timer);
      }, function () {
        // out
        clearTimeout($(this).data('hoverTimer'));
        clearTimeout($('.cus-card').data('hoverTimer'));
        $(this).removeClass('ioc-con-h');
        const $info = $(this).closest('.cus-card').find('.ribbon');
        $info.fadeIn();
        $(this).find('.card-icons').show(1000);
        $(this).find('.card-content').hide();
        
      }
    );

    var $img = $('.img-ga');
    $($img).hover(function () {
        // over
        $(this).css('z-index','3');
      }, function () {
        // out
        $(this).css('z-index','1');

      }
    );
    var acc_img = $('.acc-im');
    $(acc_img).hover(
      function () {
        // mouse enter
        $(this).removeClass('acc-img').addClass('add-acc');
        $(acc_img).not(this).removeClass('acc-img acc-img-c');
      },
      function () {
        // mouse leave
        $(this).removeClass('add-acc').addClass('acc-img');
      }
    );
    
    
});