<link rel="stylesheet" href="./payment/css/style.css" type="text/css">
<script type="text/javascript" src="./payment/js/script.js"></script>
<div id="popup">
    <div class="popup_header">Заказать MSCMS Corporate</div>
    <div class="popup_content">
        <table class="order_table">
            <thead>
            <tr>
                <th>№</th>
                <th>Товар</th>
                <th>Кол-во</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>
                    <p class="mscms_about">
                        <img src="./images/mscms-product.png" class="mscms_img">
                        <span class="mscms_header"><A href="http://mscms.com.ua" target="_blank">MSCMS</A></span><br/>
                        *Corporate [v3.0]<br/><br/>MSCMS - современный движок написанный на PHP с помощью последней версии фреймворка Codeigniter и расширения hmvc.
                        <br/><br/>
                        <small>*при покупке 2х и более лицензий цена - 30$</small>
                    </p>
                </td>
                <td>
                    <i id="plus_order" class="fa fa-chevron-up"></i>
                    <p id="qty_order"><span>1</span> шт</p>
                    <i id="minus_order" class="fa fa-chevron-down"></i>
                </td>
                <td><p><span class="total_sum">40</span> $</p></td>
            </tr>
            </tbody>
        </table>
        <form id="contact_form" role="form" method="post" action="./payment/php/order.php">
            <input type="hidden" name="send" value="1">
            <input type="hidden" name="total_sum" id="total_sum" value="40">
            <input type="hidden" name="total_qty" id="total_qty" value="1">

            <label class="mscms_label">Получатель</label>
            <input type="text" name="name"  class="required" placeholder="">
            <label class="mscms_label">Ваш e-mail</label>
            <input type="text" name="email" class="required" placeholder="">
            <label class="mscms_label">Ваш телефон</label>
            <input type="text" name="tel" class="required" placeholder="">
            <label class="mscms_label">Комментарий</label>
            <textarea name="message" placeholder="" rows="5"></textarea>
            <label class="mscms_label">Форма оплаты</label>
            <div class="radio">
                <label>
                    <input type="radio" name="order_payment" id="order_payment_card" value="1"  checked="">
                    <img src="./payment/images/master-card.png">
                    <span>Оплата картой</span>
                </label>
            </div>
            <div class="radio second">
                <label>
                    <input type="radio" name="order_payment" id="order_payment_cash" value="2">
                    <img src="./payment/images/personal-pay.png">
                    <span>Оплата наличными</span>
                </label>
            </div>

            <div class="mscms_total">Итоговая стоимость: <b><span class="total_sum">40</span> $</b></div>

            <a href="#" class="btn button form_submit"><span class="genericon genericon-cart"></span> Оформить</a>
        </form>
    </div>
    <a id="popup_close"></a>
</div>