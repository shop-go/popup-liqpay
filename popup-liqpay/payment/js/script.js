// ========= (c)2015 :: html & css & jquery coding :: Polyakov - http://polyakov.co.ua  =========

// =========================================================================  add remove qty product
jQuery(function(){
    jQuery("#plus_order").live('click', function( ) {
        var total_qty = parseInt(jQuery('#total_qty').val(), 0);
        total_qty++;
        var mscms_sum =(total_qty >= 2) ? 30 : 40;
        var total_price = ((total_qty)*mscms_sum);

        jQuery('#qty_order > span').html(total_qty);
        jQuery('#total_qty').val(total_qty);
        jQuery('#total_sum').val(total_price);
        jQuery('.total_sum').html(total_price);
    });
});
jQuery(function(){
    jQuery("#minus_order").live('click', function( ) {
        var total_qty = parseInt(jQuery('#total_qty').val(), 0);
        if(total_qty == 1){
            alert('Кол-во не может быть меньше 1шт!')
        }
        else {
            total_qty--;
            var mscms_sum =(total_qty >= 2) ? 30 : 40;
            var total_price = ((total_qty) * mscms_sum);
            jQuery('#qty_order > span').html(total_qty);
            jQuery('#total_qty').val(total_qty);
            jQuery('#total_sum').val(total_price);
            jQuery('.total_sum').html(total_price);
        }
    });
});


// =========================================================================  contact_form + validator
jQuery(function() {
    function formsValide(form) {
        send = 1;
        form.find('input.required').each(function() {
            if (jQuery(this).hasClass('required')) {
                if (jQuery(this).attr('name') == "name") {
                    var str = jQuery(this).val();
                    str = jQuery.trim(str);
                    if(str.length < 2){
                        alert ('Введите Имя');
                        send = 0;
                        return false;
                    }
                }
                if (jQuery(this).attr('name') == "email") {
                    var str = jQuery(this).val();
                    str = jQuery.trim(str);
                    if(str.length < 5){
                        alert ('Введите email');
                        send = 0;
                        return false;
                    }
                }
                if (jQuery(this).attr('name') == "tel") {
                    var str = jQuery(this).val();
                    str = jQuery.trim(str);
                    if(str.length < 5){
                        alert ('Введите телефон');
                        send = 0;
                        return false;
                    }

                }
            }
        });
        if (send) {
            return true;
        } else {
            return false;
        }
    }

	//при нажатии на кнопку button нужной формы запускаем функцию обработки данных
	jQuery('#contact_form .button').live('click', function() {
        if (formsValide(jQuery(this).closest('form'))) {
            //var payment_method = jQuery('input[name=order_payment]:checked', jQuery(this).closest('form')).val();

			//если форма прошла проверку, выводим блок с текстом ожидания
			jQuery('#contact_form').before('<div id="contact_form_info">Оформление заявки. Подождите...</div>');
			jQuery('#contact_form').hide();
			//берем путь php обработчика
			order_url = jQuery('#contact_form').attr('action');
            form_data = jQuery(this).closest('form').serialize();
			//посылаем асинхронный запрос на сервер и передаем все данные формы
			jQuery.post(order_url, form_data, function(data) {
					//выводим возврашаемый сервером код html вместо содержимого формы
                jQuery('#contact_form').remove();
				jQuery('#contact_form_info').html(data);

			}, "html");			
		}
		return false;
	});
});

// =========================================================================  go_order
jQuery(function() {
	//фкнкция вызова формы обратной связи
	jQuery('#order_mscms').click(function(){
		//появление окна обратной связи
		jQuery('#popup').fadeIn();
		//расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
        q_width = jQuery('#popup').outerWidth()/-2;
        q_height = jQuery('#popup').outerHeight()/-2;
        jQuery('#popup').css({
            'margin-left': q_width,
            'margin-top': q_height
        });
		//выводим затемение страницы и делаем полупрозрачным
        jQuery('body').append('<div id="fade"></div>');
        jQuery('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
		return false;
	});
	//функция закрытия окна
	jQuery('#popup_close, #fade').live('click', function() {
		jQuery('#fade').fadeOut(function() {
			jQuery('#fade').remove();
			jQuery('#popup').fadeOut();
		});
	});

});