//header-link
[...document.querySelectorAll(".crm-header-link")].map((x) => {
    x.addEventListener("click", () => {
        [...document.querySelectorAll(".crm-header-link")].map((y) =>
            y.classList.remove("btn-toggle")
        );
        x.classList.toggle("btn-toggle");
    });
});
//header-link
//tooltip select
$(document).ready(function() {
    $(".crm-main-table").on("click", (e) => {
        $(".crm-main-table").unbind("mouseleave mousemove");
        if ($(".crm-main-table").hasClass("select-toggle")) {
            $('.btn-settings').addClass('active-btn-header');
            $('.btn-accept').addClass('active-btn-header');
        } else {
            $('.btn-settings').removeClass('active-btn-header');
            $('.btn-accept').removeClass('active-btn-header');
        }
        $(".select-toggle")
            .mousemove(function(pos) {
                if ($(".crm-main-table").hasClass("select-toggle")) {
                    $("#hoverSelect").show();
                    $("#hoverSelect")
                        .css("left", pos.pageX + 20 + "px")
                        .css("top", pos.pageY + -40 + "px");
                }
            })
            .mouseleave(function(e) {
                $("#hoverSelect").hide();
            });
    });
    $(".selected-lock").on("mouseenter", (e) => {
        $(".selected-lock").unbind("click");
        $(".selected-lock").mousemove(function(posXY) {
            $("#hoverSelected-lock").css({ 'visibility': 'visible', 'opacity': '1' });
            $("#hoverSelected-lock")
                .css("left", posXY.pageX + 20 + "px")
                .css("top", posXY.pageY + -30 + "px");
            // отключил подсказки на заблокированом заказе    
            $("#tooltipBtn").css({ 'animation': '' });
        })
        $(".selected-lock").mouseleave(function(e) {
            $("#hoverSelected-lock").css({ 'visibility': 'hidden', 'opacity': '0' });
        });
    });
    $(".list-medium").hover(function(xy) {
        let ukraine = 'Украина';
        let russia = 'Россия';
        let kazahstan = 'Казахстан';
        let alb = 'Албания';
        let world = 'Мир';
        let predoplata = 'Предоплата';
        let nalozhplatezh = 'Наложенный платёж';
        let acceptPay = 'Оплачен';
        let decline = 'Отказ';
        let pP = 'Пустое поле';
        let trade = 'Обмен';
        let ukrp = 'Укрпочта';
        let nv = 'Новая почта';
        let samovivoz = 'Самовывоз';
        let justin = 'Justin';
        $("#tooltipBtn").css("font-size", "11px");
        if ($(this).hasClass('p-p')) {
            $('#tooltipBtn').text(pP);
        }
        if ($(this).hasClass('ua')) {
            $('#tooltipBtn').text(ukraine);
        }
        if ($(this).hasClass('ru')) {
            $('#tooltipBtn').text(russia);
        }
        if ($(this).hasClass('kz')) {
            $('#tooltipBtn').text(kazahstan);
        }
        if ($(this).hasClass('al')) {
            $('#tooltipBtn').text(alb);
        }
        if ($(this).hasClass('predoplata')) {
            $('#tooltipBtn').text(predoplata);
        }
        if ($(this).hasClass('acceptPay')) {
            $('#tooltipBtn').text(acceptPay);
        }
        if ($(this).hasClass('decline')) {
            $('#tooltipBtn').text(decline);
        }
        if ($(this).hasClass('trade')) {
            $('#tooltipBtn').text(trade);
        }
        if ($(this).hasClass('nalozhplatezh')) {
            $('#tooltipBtn').text(nalozhplatezh);
        }
        if ($(this).hasClass('nv')) {
            $('#tooltipBtn').text(nv);
        }
        if ($(this).hasClass('samovivoz')) {
            $('#tooltipBtn').text(samovivoz);
        }
        if ($(this).hasClass('ukrp')) {
            $('#tooltipBtn').text(ukrp);
        }
        if ($(this).hasClass('justin')) {
            $('#tooltipBtn').text(justin);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + blockWidth + 0 + "px").css("top", posElement.y - 2 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        if ($(this).hasClass('all')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");
    });
    // $(".p-p").hover(function(xy) {
    //     let pP = 'Пустое поле';
    //     $("#tooltipBtn").css("font-size", "11px");
    //     $('#tooltipBtn').text(pP);
    //     let posElement = this.getBoundingClientRect();
    //     let blockWidth = $(this).width();
    //     let blockHeight = $(this).height();
    //     let screenWidth = document.body.clientWidth;
    //     let screenHeight = document.body.clientHeight;
    //     let widthTooltip = $('#tooltipBtn').width();
    //     let heightTooltip = $('#tooltipBtn').height();
    //     $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
    //     $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
    //     if (screenWidth < posElement.x + widthTooltip + blockWidth) {
    //         $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
    //     }
    // }).mouseleave(function(e) {
    //     $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");
    // });
    $(".list-small").hover(function(xy) {
        let pP = 'Пустое поле';
        let ua = 'Украина';
        let ru = 'Россия';
        let alb = 'Албания';
        let mobile = 'Смартфон';
        let tablet = 'Планшет';
        let desktop = 'Компьютер';
        let unknown = 'Неопределено';
        // let unknownSystem = 'Неизвестная система';
        // let unknownBrowser = 'Неизвестный браузер';
        let android = 'Android';
        let windows = 'Windows';
        let apple = 'iOS';
        let chrome = 'Chrome';
        let safari = 'Safari';
        let firefox = 'Firefox';
        let opera = 'Opera';
        let edge = 'Edge';
        let yandex = 'Yandex Браузер';
        let mail = 'Mail Браузер';
        let vodafone = 'Vodafone';
        let kyivstar = 'Киевстар';
        let lifecell = 'Lifecell';
        let unknownNumber = 'Неизвестный номер';
        let incorrectNumber = 'Неверный номер';
        let prroSms = 'SMS';
        let prroMail = 'Почта';

        $("#tooltipBtn").css("font-size", "11px");
        if ($(this).hasClass('prroSms')) {
            $('#tooltipBtn').text(prroSms);
        }
        if ($(this).hasClass('prroMail')) {
            $('#tooltipBtn').text(prroMail);
        }
        if ($(this).hasClass('p-p')) {
            $('#tooltipBtn').text(pP);
        }
        if ($(this).hasClass('ua')) {
            $('#tooltipBtn').text(ua);
        }
        if ($(this).hasClass('ru')) {
            $('#tooltipBtn').text(ru);
        }
        if ($(this).hasClass('alb')) {
            $('#tooltipBtn').text(alb);
        }
        if ($(this).hasClass('mobile')) {
            $('#tooltipBtn').text(mobile);
        }
        if ($(this).hasClass('desktop')) {
            $('#tooltipBtn').text(desktop);
        }
        if ($(this).hasClass('tablet')) {
            $('#tooltipBtn').text(tablet);
        }
        if ($(this).hasClass('unknown')) {
            $('#tooltipBtn').text(unknown);
        }
        // if ($(this).hasClass('unknownSystem')) {
        //     $('#tooltipBtn').text(unknownSystem);
        // }
        // if ($(this).hasClass('unknownBrowser')) {
        //     $('#tooltipBtn').text(unknownBrowser);
        // }
        if ($(this).hasClass('android')) {
            $('#tooltipBtn').text(android);
        }
        if ($(this).hasClass('windows')) {
            $('#tooltipBtn').text(windows);
        }
        if ($(this).hasClass('apple')) {
            $('#tooltipBtn').text(apple);
        }
        if ($(this).hasClass('chrome')) {
            $('#tooltipBtn').text(chrome);
        }
        if ($(this).hasClass('safari')) {
            $('#tooltipBtn').text(safari);
        }
        if ($(this).hasClass('firefox')) {
            $('#tooltipBtn').text(firefox);
        }
        if ($(this).hasClass('opera')) {
            $('#tooltipBtn').text(opera);
        }
        if ($(this).hasClass('edge')) {
            $('#tooltipBtn').text(edge);
        }
        if ($(this).hasClass('yandex')) {
            $('#tooltipBtn').text(yandex);
        }
        if ($(this).hasClass('mail')) {
            $('#tooltipBtn').text(mail);
        }
        if ($(this).hasClass('vodafone')) {
            $('#tooltipBtn').text(vodafone);
        }
        if ($(this).hasClass('kyivstar')) {
            $('#tooltipBtn').text(kyivstar);
        }
        if ($(this).hasClass('lifecell')) {
            $('#tooltipBtn').text(lifecell);
        }
        if ($(this).hasClass('unknownNumber')) {
            $('#tooltipBtn').text(unknownNumber);
        }
        if ($(this).hasClass('incorrectNumber')) {
            $('#tooltipBtn').text(incorrectNumber);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + blockWidth + 0 + "px").css("top", posElement.y - 2 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        // if ($(this).children()[0].classList.contains('all')) {
        //     $("#tooltipBtn").css({ 'animation': '' });
        // }
        if ($(this).hasClass('all')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if ($(this).hasClass('noMessage')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");
    });
    $(".import-list").hover(function(xy) {
        let pechat = '';
        let exportExcel = '';
        let exportDrop = 'Используется для массовой выгрузки и передачи заказов дропшипперу';
        let importDrop = 'Файл отправленный через «Экспорт заказов для Dropshipping» возвращается дропшиппером с заполненными номерами товарно-транспортных накладных для массового присвоения ТТН и дальнейшего отслеживания заказов в вашей CRM';
        let importExcel = 'Используется для загрузки «холодных» баз и другого';
        if ($(this).hasClass('pechat')) {
            $('#tooltipBtn').text(pechat);
        }
        if ($(this).hasClass('exportDrop')) {
            $('#tooltipBtn').text(exportDrop);
        }
        if ($(this).hasClass('importDrop')) {
            $('#tooltipBtn').text(importDrop);
        }
        if ($(this).hasClass('importExcel')) {
            $('#tooltipBtn').text(importExcel);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let widthTooltip = $('#tooltipBtn').width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x - widthTooltip - 30 + "px").css("top", posElement.y - 0 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if ($(this).hasClass('exportExcel')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if ($(this).hasClass('pechat')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
    $(".modul-list").hover(function(xy) {
        let createTtn = 'Массовое создание ттн нп с разными местами и объемом при отправке, менеджеры только город указывают';
        let avtoobzvon = 'Автоматический обзвон выделенных заказов';
        let changeComm = 'Позволяет массово редактировать коментарий в выделеных заказах';
        let sendSMS = 'Массовая отправка SMS выделенным заказам';
        let copy = 'Копировать выделенный заказ';
        let delet = 'Удалить выделенные заказы';
        let changeStatus = 'Массовая смена статуса в выделенных заказах';
        let backOrderSelect = 'Принудительный возврат выделенных заказов отправителю';
        if ($(this).hasClass('createTtn')) {
            $('#tooltipBtn').text(createTtn);
        }
        if ($(this).hasClass('backOrderSelect')) {
            $('#tooltipBtn').text(backOrderSelect);
        }
        if ($(this).hasClass('avtoobzvon')) {
            $('#tooltipBtn').text(avtoobzvon);
        }
        if ($(this).hasClass('changeComm')) {
            $('#tooltipBtn').text(changeComm);
        }
        if ($(this).hasClass('sendSMS')) {
            $('#tooltipBtn').text(sendSMS);
        }
        if ($(this).hasClass('copy')) {
            $('#tooltipBtn').text(copy);
        }
        if ($(this).hasClass('delet')) {
            $('#tooltipBtn').text(delet);
        }
        if ($(this).hasClass('changeStatus')) {
            $('#tooltipBtn').text(changeStatus);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let widthTooltip = $('#tooltipBtn').width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x - widthTooltip - 40 + "px").css("top", posElement.y - 0 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if ($(this).hasClass('none')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
    $(".resize").hover(function(e) {
        $('#tooltipBtn').html('Задать размер столбца<br>Зажать и потянуть для изменения размера<br>Двойной клик возвращает размер по умолчанию');
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let widthTooltip = $('#tooltipBtn').width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + blockWidth - 0 + "px").css("top", posElement.y - 0 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-resize 0.5s forwards' });
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
    $(".tooltipRangesInput").hover(function(e) {
        let pP = 'Пустое поле';
        let inputDataMin = 'Искать значения от:';
        let inputDataMax = 'Искать значения до:';

        if ($(this).hasClass('inputDataMin')) {
            $('#tooltipBtn').text(inputDataMin);
        }
        if ($(this).hasClass('inputDataMax')) {
            $('#tooltipBtn').text(inputDataMax);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let widthTooltip = $('#tooltipBtn').width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x - widthTooltip - 10 + "px").css("top", posElement.y - 4 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        // if ($(this).children()[0].classList.contains('all')) {
        //     $("#tooltipBtn").css({ 'animation': '' });
        // }
        if ($(this).hasClass('all')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
        }
        if ($(this).hasClass('p-p')) {
            $('#tooltipBtn').text(pP);
            $("#tooltipBtn").css("left", posElement.x + blockWidth + 15 + "px").css("top", posElement.y - 2 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
    $(".block-btn .btn-header").hover(function(xy) {
        let refresh = 'Сбросить все фильтры';
        let settings = 'Дополнения и расширения';
        let submit = 'Импорт экспорт данных';
        let addOrder = 'Создать заказ';
        let notification = 'Уведомления';

        $(this).click(function() {
            if ($(".import-block").hasClass('import-toggle') || $(".notifications").hasClass('notification-toggle') || $(".modul-block").hasClass('modul-toggle')) {
                $("#tooltipBtn").css({ 'animation': '' });
            }
        });

        if ($(this).hasClass('btn-refresh')) {
            $('#tooltipBtn').text(refresh);
        }
        if ($(this).hasClass('btn-settings')) {
            $('#tooltipBtn').text(settings);
        }
        if ($(this).hasClass('btn-accept')) {
            $('#tooltipBtn').text(submit);
        }
        if ($(this).hasClass('btn-order')) {
            $('#tooltipBtn').text(addOrder);
        }
        if ($(this).hasClass('notification-btn')) {
            $('#tooltipBtn').text(notification);
        }
        let posElement = this.getBoundingClientRect();
        let widthElement = $("#tooltipBtn").width();
        // $("#tooltipBtn").css("left", posElement.x - widthElement * 0.38 + "px").css("top", posElement.y + 35 + "px");

        $("#tooltipBtn").css("left", posElement.x - widthElement * 0.38 + "px").css("top", posElement.y + 35 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });

        if ($(".import-block").hasClass('import-toggle') || $(".notifications").hasClass('notification-toggle') || $(".modul-block").hasClass('modul-toggle')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' }); // $("#tooltipBtn").css({ 'background': 'rgba(81, 81, 81, 0.6)', 'color': 'white' })
    });
    $(".new-orders").hover(function(xy) {
        let posElement = this.getBoundingClientRect();
        $('#tooltipBtn').html('Заказ не открывался');
        $("#tooltipBtn").css("left", posElement.x - 10 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
    $(".zoomBtn").hover(function(xy) {

        let zoomPlus = 'Увеличить масштаб';
        let zoomMinus = 'Уменьшить масштаб';
        // $(this).click(function() {
        //     if ($(".import-block").hasClass('import-toggle') || $(".notifications").hasClass('notification-toggle') || $(".modul-block").hasClass('modul-toggle')) {
        //         $("#tooltipBtn").css({ 'animation': '' });
        //     }
        // });
        if ($(this).hasClass('zoomMinus')) {
            $('#tooltipBtn').text(zoomMinus);
        }
        if ($(this).hasClass('zoomPlus')) {
            $('#tooltipBtn').text(zoomPlus);
        }
        let posElement = this.getBoundingClientRect();
        let widthElement = $("#tooltipBtn").width();
        $("#tooltipBtn").css("left", posElement.x - widthElement + 20 + "px").css("top", posElement.y + 25 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if ($(".import-block").hasClass('import-toggle') || $(".notifications").hasClass('notification-toggle') || $(".modul-block").hasClass('modul-toggle')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
    $(".crm-header-link").each(function(e, item) {
        let allOrder = 'Все заказы в CRM';
        let backOrderPoluchen = 'Возвращенный заказ получил отправитель<br><span class="text-tooltip">Ожидает завершения<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let backOrderPribil = 'Возвращенный заказ прибыл на почту<br><span class="text-tooltip">Ожидает получения отправителем<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let newOrder = 'Заказ без статуса<br><span class="text-tooltip">Ожидает обработку</span>';
        let acceptOrder = 'Покупатель подтвердил заказ<br><span class="text-tooltip">Ожидает упаковку или передачу в «(Drop) Ожидает ТТН»<br><br>В статусе включена автоматическая отправка SMS согласно настроек модуля. Используемый шаблон:<br>- «Заказ принят, готовится к отправке»</span>';
        let declineOrder = 'Покупатель отказался от заказа';
        let finishOrder = 'Заказ завершён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить», подтвердил:<br>- получение наложенного платежа;<br>- выполнение заказа.<br>Присвоил заказу статус «Завершён», заблокировал заказ кнопкой «Завершить».<br>Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
        let upakovanOrder = 'Заказ упакован<br><span class="text-tooltip">Ожидает передачу почтовой службе</span>';
        let peredanOrder = 'Заказ передан почтовой службе<br><span class="text-tooltip">Ожидает автоматического присвоения статуса «Отправлен», после подтверждения получения посылки почтовой службой</span>';
        let sendOrder = 'Почтовая служба получила посылку<br><span class="text-tooltip">Статус присваивается автоматически согласно настроек модуя:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включен автоматический возврат заказа, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включена автоматическая отправка SMS, согласно настроек модуля. Используемый шаблон:<br>- «Заказ отправлен»<br>- «Заказ прибыл»<br>- «Заказ 3-й день в отделении»<br>- «Последний день хранения»</span>';
        let backOrderWarehouse = 'Возврат учтён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить» подтвердил получение возвращенного заказа. Присвоил заказу статус «Возврат (завершён)», заблокировал заказ кнопкой «Завершить».<br> Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
        let vikuplenOrder = 'Заказ выкуплен<br><span class="text-tooltip">Ожидает получения наложенного платежа<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let moneyGrab = 'Наложенный платёж получен<br><span class="text-tooltip">Заказ ожидает завершения<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let backOrder = 'Покупатель отказался от получения заказа<br><span class="text-tooltip">Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let dropWaitTtn = 'Заказ передан Dropshipping компании<br><span class="text-tooltip">Ожидает создания товарно-транспортной накладной дропшиппером, для её присвоения заказу с дальнейшим отслеживания в CRM системе</span>';
        let dropAssignedTtn = 'Заказу присвоена ТТН<br><span class="text-tooltip">Ожидает автоматического присвоения статуса «(Drop) Отправлен», после подтверждения получения посылки почтовой службой</span>';
        let dropSend = 'Почтовая служба получила посылку<br><span class="text-tooltip">Статус присваивается автоматически согласно настроек модуя:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включена автоматическая отправка SMS, согласно настроек модуля. Используемый шаблон:<br>- «Заказ отправлен»<br>- «Заказ прибыл»<br>- «Заказ 3-й день в отделении»<br>- «Последний день хранения»</span>';
        let dropBuying = 'Заказ выкуплен<br><span class="text-tooltip">Ожидает выплату от дропшиппера<br><br>Статус присваивается автоматически, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let dropFinish = 'Заказ завершён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить», подтвердил:<br>- получение выплаты от дропшиппера;<br>- выполнение заказа.<br>Присвоил заказу статус «(Drop) Завершён», заблокировал заказ кнопкой «Завершить».<br>Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
        let dropBack = 'Покупатель отказался от получения заказа<br><span class="text-tooltip">Ожидает вычитания стоимости за возврат заказа из выплат дропшиппера<br><br>Статус присваивается автоматически, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span></span>';
        let dropBackFinish = 'Возврат учтён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить», подтвердил вычитание стоимости за возврат заказ, из выплат дропшиппера. Присвоил заказу статус «(Drop) Возврат (завершён)», заблокировал заказ кнопкой «Завершить». Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
        $(this).hover(function() {
            $("#tooltipBtn").css('font-size', '14px');

            if ($(this).hasClass('backOrderPribil')) {
                $('#tooltipBtn').html(backOrderPribil);
            }
            if ($(this).hasClass('allOrder')) {
                $('#tooltipBtn').html(allOrder);
            }
            if ($(this).hasClass('backOrderPoluchen')) {
                $('#tooltipBtn').html(backOrderPoluchen);
            }
            if ($(this).hasClass('newOrder')) {
                $('#tooltipBtn').html(newOrder);
            }
            if ($(this).hasClass('acceptOrder')) {
                $('#tooltipBtn').html(acceptOrder);
            }
            if ($(this).hasClass('declineOrder')) {
                $('#tooltipBtn').html(declineOrder);
            }
            if ($(this).hasClass('upakovanOrder')) {
                $('#tooltipBtn').html(upakovanOrder);
            }
            if ($(this).hasClass('peredanOrder')) {
                $('#tooltipBtn').html(peredanOrder);
            }
            if ($(this).hasClass('sendOrder')) {
                $('#tooltipBtn').html(sendOrder);
            }
            if ($(this).hasClass('vikuplenOrder')) {
                $('#tooltipBtn').html(vikuplenOrder);
            }
            if ($(this).hasClass('moneyGrab')) {
                $('#tooltipBtn').html(moneyGrab);
            }
            if ($(this).hasClass('finishOrder')) {
                $('#tooltipBtn').html(finishOrder);
            }
            if ($(this).hasClass('backOrder')) {
                $('#tooltipBtn').html(backOrder);
            }
            if ($(this).hasClass('backOrderWarehouse')) {
                $('#tooltipBtn').html(backOrderWarehouse);
            }
            if ($(this).hasClass('dropWaitTtn')) {
                $('#tooltipBtn').html(dropWaitTtn);
            }
            if ($(this).hasClass('dropAssignedTtn')) {
                $('#tooltipBtn').html(dropAssignedTtn);
            }
            if ($(this).hasClass('dropSend')) {
                $('#tooltipBtn').html(dropSend);
            }
            if ($(this).hasClass('dropBuying')) {
                $('#tooltipBtn').html(dropBuying);
            }
            if ($(this).hasClass('dropFinish')) {
                $('#tooltipBtn').html(dropFinish);
            }
            if ($(this).hasClass('dropBack')) {
                $('#tooltipBtn').html(dropBack);
            }
            if ($(this).hasClass('dropBackFinish')) {
                $('#tooltipBtn').html(dropBackFinish);
            }
            let posElement = this.getBoundingClientRect();
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-status 1.5s forwards' });
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth + 10 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 20 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
        });
    });
});


$(".tel").each(function(e, item) {
    let vodofone = 'Vodafone';
    let kyivstar = 'Киевстар';
    let lifecell = 'Lifecell';
    let incorrectNumber = 'Неверный номер';
    let unknownNumber = 'Неизвестный номер';
    $(this).hover(function(xy) {
        if ($(this).children().hasClass('icon-Vector-1')) {
            $('#tooltipBtn').text(vodofone);
        }
        if ($(this).children().hasClass('icon-Union-1')) {
            $('#tooltipBtn').text(kyivstar);
        }
        if ($(this).children().hasClass('icon-Vector-3')) {
            $('#tooltipBtn').text(lifecell);
        }
        if ($(this).children().hasClass('icon-Union')) {
            $('#tooltipBtn').text(unknownNumber);
        }
        if ($(this).children().hasClass('icon-Union-18')) {
            $('#tooltipBtn').text(incorrectNumber);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();

        $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 18 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
});
$(".ip-icons-position").children().each(function(e, item) {
    let desktop = 'Компьютер';
    let windows = 'Windows';
    let chrome = 'Chrome';
    let ua = 'Украина';
    let mobile = 'Смартфон';
    let tablet = 'Планшет';
    let android = 'Android';
    let ru = 'Россия';
    let safari = 'Safari';
    let unknown = 'Неопределено';
    let iOS = 'iOS';
    let firefox = 'Firefox';
    let alb = 'Албания';
    let opera = 'Opera';
    let edge = 'Edge';
    let yandex = 'Yandex Браузер';
    let mail = 'Mail Браузер';
    $(this).hover(function(xy) {
        if ($(this).hasClass('icon-Vector-10')) {
            $('#tooltipBtn').text(desktop);
        }
        if ($(this).hasClass('icon-Union-13')) {
            $('#tooltipBtn').text(mobile);
        }
        if ($(this).hasClass('icon-Tablet')) {
            $('#tooltipBtn').text(tablet);
        }
        if ($(this).hasClass('icon-Union-17')) {
            $('#tooltipBtn').text(yandex);
        }
        if ($(this).hasClass('icon-Vector-13')) {
            $('#tooltipBtn').text(mail);
        }
        if ($(this).hasClass('icon-Vector-12')) {
            $('#tooltipBtn').text(edge);
        }
        if ($(this).hasClass('icon-Union-16')) {
            $('#tooltipBtn').text(opera);
        }
        if ($(this).hasClass('alb')) {
            $('#tooltipBtn').text(alb);
        }
        if ($(this).hasClass('ru')) {
            $('#tooltipBtn').text(ru);
        }
        if ($(this).hasClass('icon-Windows-1')) {
            $('#tooltipBtn').text(windows);
        }
        if ($(this).hasClass('icon-Vector-9')) {
            $('#tooltipBtn').text(iOS);
        }
        if ($(this).hasClass('icon-Vector-11')) {
            $('#tooltipBtn').text(firefox);
        }
        if ($(this).hasClass('icon-uniE941')) {
            $('#tooltipBtn').text(unknown);
        }
        if ($(this).hasClass('icon-Union-12')) {
            $('#tooltipBtn').text(android);
        }
        if ($(this).hasClass('icon-Union-15')) {
            $('#tooltipBtn').text(safari);
        }
        if ($(this).hasClass('icon-Union-14')) {
            $('#tooltipBtn').text(chrome);
        }
        if ($(this).hasClass('ua')) {
            $('#tooltipBtn').text(ua);
        }
        if ($(this).hasClass('icon-Union-18')) {
            $('#tooltipBtn').text(incorrectNumber);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();

        $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 18 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
});
$(".icons-tooltip").each(function(e, item) {
    let sms = 'Электронный чек отправлен по SMS';
    let mail = 'Электронный чек отправлен на почту';
    let currentCount = $(this).children('.count').html();
    let smsCurrent = 'Отправлено ' + currentCount + ' сообщения';
    let lastDay = 'Остался 1 день до платного хранения';

    $(this).hover(function(xy) {
        if ($(this).hasClass('icon-1')) {
            $('#tooltipBtn').text(sms);
        }
        if ($(this).hasClass('icon-Vector-21')) {
            $('#tooltipBtn').text(mail);
        }
        if ($(this).children().hasClass('icon-1')) {
            $('#tooltipBtn').html(smsCurrent);
        }
        if ($(this).children().hasClass('icon-Exclude')) {
            $('#tooltipBtn').text(lastDay);
        }

        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();

        $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 18 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
});
$(".colum-pay").each(function(e, item) {
    let predoplata = 'Предоплата';
    let nalozhplatezh = 'Наложенный платёж';
    let acceptPay = 'Оплачен';
    let decline = 'Отказ';
    let trade = 'Обмен';

    $(this).hover(function(xy) {
        if ($(this).children().hasClass('icon-Vector-15')) {
            $('#tooltipBtn').text(predoplata);
        }
        if ($(this).children().hasClass('icon-Vector-16')) {
            $('#tooltipBtn').text(trade);
        }
        if ($(this).children().hasClass('icon-Vector-18')) {
            $('#tooltipBtn').text(decline);
        }
        if ($(this).children().hasClass('icon-Vector-19')) {
            $('#tooltipBtn').text(acceptPay);
        }
        if ($(this).children().hasClass('icon-Vector-17')) {
            $('#tooltipBtn').text(nalozhplatezh);
        }
        let posElement = this.getBoundingClientRect();

        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 20 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
});
$(".colum-delivery").each(function(e, item) {
    let ukrPochta = 'Укрпочта';
    let nv = 'Новая почта';
    let samovivoz = 'Самовывоз';
    let justin = 'Justin';

    $(this).hover(function(xy) {
        if ($(this).children().hasClass('icon-ukrposhta')) {
            $('#tooltipBtn').text(ukrPochta);
        }
        if ($(this).children().hasClass('icon-Union-3')) {
            $('#tooltipBtn').text(nv);
        }
        if ($(this).children().hasClass('icon-Vector-2')) {
            $('#tooltipBtn').text(justin);
        }
        if ($(this).children().hasClass('icon-Union-4')) {
            $('#tooltipBtn').text(samovivoz);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 20 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });

        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
});

$(".crm-main-table .time").each(function(e, item) {
    let otkrit = 'Открыт через 10 дней 3 минуты 25 секунд';
    let otkritHours = 'Открыт через 3 дня 1 час 3 минуты 25 секунд';
    let acceptZa = 'Принят за 3 минуты 23 секунды';
    let acceptZahours = 'Принят за 1 час 3 минуты 23 секунды';
    let otpravka = 'Отправлен через 1 день 3 минуты 23 секунды';

    $(this).hover(function(xy) {
        if ($(item).hasClass('otkrit')) {
            $('#tooltipBtn').text(otkrit);
        }
        if ($(item).hasClass('otkrithours')) {
            $('#tooltipBtn').text(otkritHours);
        }
        if ($(item).hasClass('acceptza')) {
            $('#tooltipBtn').text(acceptZa);
        }
        if ($(item).hasClass('acceptzahours')) {
            $('#tooltipBtn').text(acceptZahours);
        }
        if ($(item).hasClass('otpravka')) {
            $('#tooltipBtn').text(otpravka);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 18 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -7 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
});

$(".table-header th").each(function(e, item) {
    let id = 'Идентификатор/номер заказа<br><span class="text-tooltip">Используется для поиска и передачи заказа между пользователями CRM</span>';
    let status = 'Текущий статус заказа<br><span class="text-tooltip">Используется для контроля, анализа и отслеживания заказа в CRM</span>';
    let pokupatel = 'Фамилия имя отчество покупателя<br><span class="text-tooltip">Используется для автоматического заполнения товарно-транспортной накладной почтовой службы</span>';
    let country = 'Страна за которой закреплён заказ<br><span class="text-tooltip">Используется для разделения заказов из разных стран</span>';
    let tel = 'Телефон покупателя<br><span class="text-tooltip">Используется для:<br>-Автоматического заполнения товарно-транспортной накладной почтовой службы<br>-Автоматической отправки SMS</span>';
    let comm = '...';
    let sum = 'Итоговая сумма заказа';
    let product = '...';
    let pay = 'Используемый вид оплаты';
    let delivery = 'Используемый вид доставки';
    let prro = 'Программный реестр расчётных операций<br><span class="text-tooltip">В разработке</span>';
    let addres = '...';
    let ttn = 'Номер товарно-транспортной накладной';
    let ttnStatus = 'Информация за последний час о статусе посылки<br><span class="text-tooltip">Используется для:<br>-автоматической отправки SMS<br>-автоматической смены статусов в CRM</span>';
    let prinyal = 'Пользователь подтвердивший заказ<br><span class="text-tooltip">Закрепление происходит автоматически при изменении статуса заказа на «Принят». Используется для расчета зарплаты/премии сотрудника</span>';
    let depart = 'Используемый отдел в заказе<br><span class="text-tooltip">Заказ с "отделом" виден только тем пользователям у которых есть доступ к сооответствующему отделу</span>';
    let add = 'Дата и время добавления заказа в CRM';
    let open = 'Время между добавлением заказа в CRM и первым взаимодействием с ним<br><span class="text-tooltip">Показывает сколько времени покупатель ожидал звонка/ответа</span>';
    let opened = 'Последний пользователь открывший заказ<br><span class="text-tooltip">Используется для выявления сотрудников "ворующих" заказы</span>';
    let prinyatZa = 'Время между открытием заказа и изменением его статуса на «Принят»<br><span class="text-tooltip">Используется для оценки времени потраченого на подтверждение заказа</span>';
    let accepted = 'Дата и время изменения статуса заказа на «Принят»<br><span class="text-tooltip">Используется для расчета зарплаты/премии сотрудника за период врмени</span>';
    let otpravka = 'Время между изменением статуса заказа на "Принят" и получением посылки почтовой службой<br><span class="text-tooltip">Показывает сколько времени покупатель ожидал отправку заказа</span>';
    let send = 'Дата и время получения посылки почтовой службой<br><span class="text-tooltip">Используется для контроля сотрудников отвечающих за отправку заказа</span>';
    let change = 'Дата и время последнего изменения заказа';
    let changed = 'Последний пользователь изменивший заказ';
    let finish = 'Дата и время завершения заказа<br><span class="text-tooltip">Используется для подтверждения завершения заказа. Пользователь с правом использования кнопки «Завершить», блокирует ею заказ. Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
    let site = 'Источник заказа';
    let whosend = 'Пользователь отправивший заказ<br><span class="text-tooltip">Автоматически закрепляется последний сотрудник редактировавший заказ, перед подтверждением получения посылки почтовой службой.<br> Используется для расчёта заплаты/премии сотрудника</span>';
    let ip = 'IP адрес, страна, браузер, ОС и тип устройства с которого поступил заказ<br><span class="text-tooltip">Используется для:<br>-Анализа маркетологами<br>-Блокировки IP в случае спама</span>';
    let utm = 'UTM-метка<br><span class="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span>';
    let field = 'Дополнительное поле заказа<br><span class="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span>';
    $(this).hover(function() {
        $("#tooltipBtn").css('font-size', '14px');
        if ($(this).hasClass('header-id')) {
            $('#tooltipBtn').html(id)
        }
        if ($(this).hasClass('header-whosend')) {
            $('#tooltipBtn').html(whosend)
        }
        if ($(this).hasClass('header-status')) {
            $('#tooltipBtn').html(status)
        }
        if ($(this).hasClass('header-pokupatel')) {
            $('#tooltipBtn').html(pokupatel)
        }
        if ($(this).hasClass('header-country')) {
            $('#tooltipBtn').html(country)
        }
        if ($(this).hasClass('header-tel')) {
            $('#tooltipBtn').html(tel)
        }
        if ($(this).hasClass('header-sum')) {
            $('#tooltipBtn').html(sum)
        }
        if ($(this).hasClass('header-pay')) {
            $('#tooltipBtn').html(pay)
        }
        if ($(this).hasClass('header-delivery')) {
            $('#tooltipBtn').html(delivery)
        }
        if ($(this).hasClass('header-ttn')) {
            $('#tooltipBtn').html(ttn)
        }
        if ($(this).hasClass('header-ttn-status')) {
            $('#tooltipBtn').html(ttnStatus)
        }
        if ($(this).hasClass('header-depart')) {
            $('#tooltipBtn').html(depart)
        }
        if ($(this).hasClass('header-opened')) {
            $('#tooltipBtn').html(opened)
        }
        if ($(this).hasClass('header-add')) {
            $('#tooltipBtn').html(add)
        }
        if ($(this).hasClass('header-PRRO')) {
            $('#tooltipBtn').html(prro)
        }
        if ($(this).hasClass('header-open')) {
            $('#tooltipBtn').html(open)
        }
        if ($(this).hasClass('header-accepted')) {
            $('#tooltipBtn').html(accepted)
        }
        if ($(this).hasClass('header-prinyatZa')) {
            $('#tooltipBtn').html(prinyatZa)
        }
        if ($(this).hasClass('header-prinyal')) {
            $('#tooltipBtn').html(prinyal)
        }
        if ($(this).hasClass('header-otpravka')) {
            $('#tooltipBtn').html(otpravka)
        }
        if ($(this).hasClass('header-send')) {
            $('#tooltipBtn').html(send)
        }
        if ($(this).hasClass('header-change')) {
            $('#tooltipBtn').html(change)
        }
        if ($(this).hasClass('header-changed')) {
            $('#tooltipBtn').html(changed)
        }
        if ($(this).hasClass('header-finish')) {
            $('#tooltipBtn').html(finish)
        }
        if ($(this).hasClass('header-site')) {
            $('#tooltipBtn').html(site)
        }
        if ($(this).hasClass('header-ip')) {
            $('#tooltipBtn').html(ip)
        }
        if ($(this).hasClass('header-utm')) {
            $('#tooltipBtn').html(utm)
        }
        if ($(this).hasClass('header-field')) {
            $('#tooltipBtn').html(field)
        }
        // let scale = window.scale || 1;
        // / scale
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 28 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-header 1s forwards' });
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if ($(this).hasClass('header-addres')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if ($(this).hasClass('header-product')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if ($(this).hasClass('header-comm')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
    })
});



// $(".table-header th").each(function(e, item) {
//     let id = 'Идентификатор/номер заказа<br><span class="text-tooltip">Используется для поиска и передачи заказа между пользователями CRM</span>';
//     let status = 'Текущий статус заказа<br><span class="text-tooltip">Используется для контроля, анализа и отслеживания заказа в CRM</span>';
//     let pokupatel = 'Фамилия имя отчество покупателя<br><span class="text-tooltip">Используется для автоматического заполнения товарно-транспортной накладной почтовой службы</span>';
//     let country = 'Страна за которой закреплён заказ<br><span class="text-tooltip">Используется для разделения заказов из разных стран</span>';
//     let tel = 'Телефон покупателя<br><span class="text-tooltip">Используется для:<br>-Автоматического заполнения товарно-транспортной накладной почтовой службы<br>-Автоматической отправки SMS</span>';
//     let comm = '...';
//     let sum = 'Итоговая сумма заказа';
//     let product = '...';
//     let pay = 'Используемый вид оплаты';
//     let delivery = 'Используемый вид доставки';
//     let addres = '...';
//     let ttn = 'Номер товарно-транспортной накладной';
//     let ttnStatus = 'Информация за последний час о статусе посылки<br><span class="text-tooltip">Используется для:<br>-автоматической отправки SMS<br>-автоматической смены статусов в CRM</span>';
//     let prinyal = 'Пользователь подтвердивший заказ<br><span class="text-tooltip">Закрепление происходит автоматически при изменении статуса заказа на «Принят». Используется для расчета зарплаты/премии сотрудника</span>';
//     let depart = 'Используемый отдел в заказе<br><span class="text-tooltip">Заказ с "отделом" виден только тем пользователям у которых есть доступ к сооответствующему отделу</span>';
//     let add = 'Дата и время добавления заказа в CRM';
//     let open = 'Время между добавлением заказа в CRM и первым взаимодействием с ним<br><span class="text-tooltip">Показывает сколько времени покупатель ожидал звонка/ответа</span>';
//     let opened = 'Последний пользователь открывший заказ<br><span class="text-tooltip">Используется для выявления сотрудников "ворующих" заказы</span>';
//     let prinyatZa = 'Время между открытием заказа и изменением его статуса на «Принят»<br><span class="text-tooltip">Используется для оценки времени потраченого на подтверждение заказа</span>';
//     let accepted = 'Дата и время изменения статуса заказа на «Принят»<br><span class="text-tooltip">Используется для расчета зарплаты/премии сотрудника за период врмени</span>';
//     let pered = 'Время между изменением статуса заказа на "Принят" и получением посылки почтовой службой<br><span class="text-tooltip">Показывает сколько времени покупатель ожидал отправку заказа</span>';
//     let send = 'Дата и время получения посылки почтовой службой<br><span class="text-tooltip">Используется для контроля сотрудников отвечающих за отправку заказа</span>';
//     let change = 'Дата и время последнего изменения заказа';
//     let changed = 'Последний пользователь изменивший заказ';
//     let finish = 'Дата и время завершения заказа<br><span class="text-tooltip">Используется для подтверждения завершения заказа. Дальнейшее редактирование заказа сотрудниками не имеющим доступ, запрещен</span>';
//     let site = 'Источник заказа';
//     let ip = 'IP адрес устройства с которого поступил заказ<br><span class="text-tooltip">Используется для отслеживания и блокировки в случаях спама</span>';
//     let utm = 'UTM-метка<br><span class="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span>';
//     let field = 'Дополнительное поле заказа<br><span class="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span>';

//     if ($(item).hasClass('header-id')) {
//         $(this).append('<div class="tooltip">' + id + '</div>');
//     }
//     if ($(item).hasClass('header-opened')) {
//         $(this).append('<div class="tooltip">' + opened + '</div>');
//     }
//     if ($(item).hasClass('header-status')) {
//         $(this).append('<div class="tooltip">' + status + '</div>');
//     }
//     if ($(item).hasClass('header-pokupatel')) {
//         $(this).append('<div class="tooltip">' + pokupatel + '</div>');
//     }
//     if ($(item).hasClass('header-country')) {
//         $(this).append('<div class="tooltip">' + country + '</div>');
//     }
//     if ($(item).hasClass('header-tel')) {
//         $(this).append('<div class="tooltip">' + tel + '</div>');
//     }
//     if ($(item).hasClass('header-comm')) {
//         $(this).append('<div class="tooltip">' + comm + '</div>');
//     }
//     if ($(item).hasClass('header-sum')) {
//         $(this).append('<div class="tooltip">' + sum + '</div>');
//     }
//     if ($(item).hasClass('header-product')) {
//         $(this).append('<div class="tooltip">' + product + '</div>');
//     }
//     if ($(item).hasClass('header-pay')) {
//         $(this).append('<div class="tooltip">' + pay + '</div>');
//     }
//     if ($(item).hasClass('header-delivery')) {
//         $(this).append('<div class="tooltip">' + delivery + '</div>');
//     }
//     if ($(item).hasClass('header-addres')) {
//         $(this).append('<div class="tooltip">' + addres + '</div>');
//     }
//     if ($(item).hasClass('header-ttn')) {
//         $(this).append('<div class="tooltip">' + ttn + '</div>');
//     }
//     if ($(item).hasClass('header-ttn-status')) {
//         $(this).append('<div class="tooltip">' + ttnStatus + '</div>');
//     }
//     if ($(item).hasClass('header-prinyal')) {
//         $(this).append('<div class="tooltip">' + prinyal + '</div>');
//     }
//     if ($(item).hasClass('header-depart')) {
//         $(this).append('<div class="tooltip">' + depart + '</div>');
//     }
//     if ($(item).hasClass('header-add')) {
//         $(this).append('<div class="tooltip">' + add + '</div>');
//     }
//     if ($(item).hasClass('header-open')) {
//         $(this).append('<div class="tooltip">' + open + '</div>');
//     }
//     if ($(item).hasClass('header-prinyatZa')) {
//         $(this).append('<div class="tooltip">' + prinyatZa + '</div>');
//     }
//     if ($(item).hasClass('header-accepted')) {
//         $(this).append('<div class="tooltip">' + accepted + '</div>');
//     }
//     if ($(item).hasClass('header-pered')) {
//         $(this).append('<div class="tooltip">' + pered + '</div>');
//     }
//     if ($(item).hasClass('header-send')) {
//         $(this).append('<div class="tooltip">' + send + '</div>');
//     }
//     if ($(item).hasClass('header-change')) {
//         $(this).append('<div class="tooltip">' + change + '</div>');
//     }
//     if ($(item).hasClass('header-changed')) {
//         $(this).append('<div class="tooltip">' + changed + '</div>');
//     }
//     if ($(item).hasClass('header-finish')) {
//         $(this).append('<div class="tooltip">' + finish + '</div>');
//     }
//     if ($(item).hasClass('header-site')) {
//         $(this).append('<div class="tooltip">' + site + '</div>');
//     }
//     if ($(item).hasClass('header-ip')) {
//         $(this).append('<div class="tooltip">' + ip + '</div>');
//     }
//     if ($(item).hasClass('header-utm')) {
//         $(this).append('<div class="tooltip">' + utm + '</div>');
//     }
//     if ($(item).hasClass('header-field')) {
//         $(this).append('<div class="tooltip">' + field + '</div>');
//         // let elemW = $('.header-field-5');  
//     }
//     let arr = document.querySelectorAll('tr th');
//     let posElement = arr[arr.length - 1].getBoundingClientRect();
//     let screenWidth = window.screen.width;
//     let widthElement = $('.tooltip').width();
//     console.log(posElement);
//     console.log(widthElement);
//     console.log(screenWidth);
//     console.log(e === (arr.length - 1));
//     if (screenWidth < posElement.x + widthElement && e === (arr.length - 1)) {
//         $(arr[arr.length - 1].children[0]).css('left', 0 - widthElement +  'px');
//     }


$(".crm-main-table .country-block").each(function(e, item) {
    let ukraine = 'Украина';
    let russia = 'Россия';
    let kazahstan = 'Казахстан';
    let alb = 'Албания';
    let world = 'Мир';
    $(this).hover(function(xy) {
        if ($(this).children().hasClass('ua')) {
            $('#tooltipBtn').text(ukraine);
        }
        if ($(this).children().hasClass('ru')) {
            $('#tooltipBtn').text(russia);
        }
        if ($(this).children().hasClass('alb')) {
            $('#tooltipBtn').text(alb);
        }
        if ($(this).children().hasClass('world')) {
            $('#tooltipBtn').text(world);
        }
        if ($(this).children().hasClass('kz')) {
            $('#tooltipBtn').text(kazahstan);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 20 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
});


// comment ...
// $(".crm-main-table .max-lenght-comment").text(function(i, text) {
//     let boxMemory = text;
//     if (text.length >= 30) {
//         text = text.substring(0, 28) + "...";
//         $(this).text(text);
//         $(this).hover(function(xy) {
//             $('#tooltipBtn').text(boxMemory);
//             let posElement = this.getBoundingClientRect();
//             let blockWidth = $(this).width();
//             let blockHeight = $(this).height();
//             let screenWidth = document.body.clientWidth;
//             let screenHeight = document.body.clientHeight;
//             let widthTooltip = $('#tooltipBtn').width();
//             let heightTooltip = $('#tooltipBtn').height();
//             $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
//             $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
//             if (screenWidth < posElement.x + widthTooltip) {
//                 $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
//             }
//             if (posElement.x < 110) {
//                 $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
//             }
//             if (screenHeight < posElement.y + heightTooltip + 25) {
//                 $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
//             }
//         }).mouseleave(function(e) {
//             $("#tooltipBtn").css({ 'animation': '' });
//         });
//     }
// });
// comment ...

//another standart ...
$(".crm-main-table .max-lenght").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 20) {
        text = text.substring(0, 18) + "...";
        $(this).text(text);
        $(this).hover(function(xy) {
            $('#tooltipBtn').text(boxMemory);
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
        });
    }
});
//another standart ...
// product ...
$(".crm-main-table .max-lenght-product").text(function(i, text) {
    let boxMemory = text;
    let dopItem1 = 'ВОу воуasdasd чтото чтото';
    let dopItem2 = 'ВОу воу2222 фывыфв фывыфвыв';
    let dopProdazhi = '<div style="text-align:center;display:block;margin-bottom:5px;">Доппродажа</div>' + '<div class="item-list-product"style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem1 + '</div>' + '<div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem2 + '</div>';
    if (text.length >= 35) {
        text = text.substring(0, 33) + "...";
        $(this).text(text);
        $(this).hover(function(xy) {
            $('#tooltipBtn').html('<div style="text-align:center;display:block;margin-bottom:5px;">Основной</div>' + '<div class="item-list-product" style="margin-left:15px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + boxMemory + '</div>' + '<div class="item-list-product" style="margin-left:15px;margin-bottom:5px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + boxMemory + '</div>' + '<div style="text-align:center;display:block;margin-bottom:5px;">Доппродажа</div>' + '<div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem1 + '</div>' + '<div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem2 + '</div>');
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x - 5 + "px").css("top", posElement.y + 20 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 7 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
        });
        $(this).parent('.product-colum').find('.ico-wrap').hover(function(xy) {
            $('#tooltipBtn').html('<div style="text-align:center;display:block;margin-bottom:5px;">Основной</div>' + '<div class="item-list-product" style="margin-left:15px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + boxMemory + '</div>' + '<div class="item-list-product" style="margin-left:15px;margin-bottom:5px;"><span class="icon-Vector-81" style="position:absolute;left:6px;"></span>' + boxMemory + '</div>' + '<div style="text-align:center;display:block;margin-bottom:5px;">Доппродажа</div>' + '<div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem1 + '</div>' + '<div class="item-list-product" style="margin-left:15px;"><span class="icon-2" style="font-size:12px;position:absolute;left:6px;"></span>' + dopItem2 + '</div>');
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x - 5 + "px").css("top", posElement.y + 20 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 7 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
        });
        $(this).parent('.product-colum').find('.ico-wrap:last-child').hover(function(xy) {
            $('#tooltipBtn').html(dopProdazhi);
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x - 5 + "px").css("top", posElement.y + 20 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 7 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
        });
    }
});
// product ...
// document.addEventListener('DOMContentLoaded', () => {

//     const getSort = ({ target }) => {
//         const order = (target.dataset.order = -(target.dataset.order || 2));
//         const index = [...target.parentNode.cells].indexOf(target);
//         const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
//         const comparator = (index, order) => (a, b) => order * collator.compare(
//             a.children[index].innerHTML,
//             b.children[index].innerHTML
//         );

//         for (const tBody of target.closest('.crm-table').tBodies)
//             tBody.append(...[...tBody.rows].sort(comparator(index, order)));

//         for (const cell of target.parentNode.cells)
//             cell.classList.toggle('sorted', cell === target);
//     };

//     document.querySelectorAll('.table_sort th').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

// });

//addres ...
$(".crm-main-table .addres-block").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 30) {
        text = text.substring(0, 28) + "...";
        $(this).text(text);
        $(this).hover(function(xy) {
            $('#tooltipBtn').text(boxMemory);
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
        });
    }
});
//addres ...
//status ...
$(".status-table .color-form2").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 15) {
        text = text.substring(0, 14) + "...";
        $(this).text(text);
        $(this).hover(function(xy) {
            $('#tooltipBtn').text(boxMemory);
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 19 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
        });
    }
});
//status ...




//scroll slider header
$("#next").click(function() {
    $(".scroll-wrap2 .simplebar-content-wrapper").animate({
        scrollLeft: "+=250px",
    }, { duration: 300, queue: false });
});
$("#prev").click(function() {
    $(".scroll-wrap2 .simplebar-content-wrapper").animate({
        scrollLeft: "0px",
    }, { duration: 300, queue: false });
});


//menu btn large
// $(".text-lenght").text(function(i, text) {
//     let boxMemory = text;
//     if (text.length >= 14) {
//         text = text.substring(0, 13) + "...";
//         $(this).text(text);
//         $(this).parents('.list-large').hover(function(xy) {
//             $('#tooltipBtn').text(boxMemory);
//             if ($('.inputStatus')[0].value !== "") {
//                 let re = new RegExp($('.inputStatus')[0].value, "gui");
//                 let text_pr = boxMemory.replace(re, x => '<span style="background: #FFE600; color: black;">' + x + '</span>');
//                 // console.log(text_pr)
//                 document.getElementById('tooltipBtn').innerHTML = textToHTML(text_pr);
//             } else {
//                 document.getElementById('tooltipBtn').innerText = boxMemory;
//             }
//             $("#tooltipBtn").css("font-size", "11px");
//             let posElement = this.getBoundingClientRect();
//             let blockWidth = $(this).width();
//             let blockHeight = $(this).height();
//             let screenWidth = document.body.clientWidth;
//             let screenHeight = document.body.clientHeight;
//             let widthTooltip = $('#tooltipBtn').width();
//             let heightTooltip = $('#tooltipBtn').height();

//             $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
//             $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
//             if (screenWidth < posElement.x + widthTooltip + blockWidth) {
//                 $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
//             }
//         }).mouseleave(function(e) {
//             $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");;
//         });
//     }
// });
//menu large btn
// function openLargeMenu() {
//     $(this).children('.block1').addClass("toggle");
//     $(".list-large").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
// };

// function closeLargeMenu() {
//     $(this).children('.block1').removeClass("toggle");
// };

function focusInputLarge() {
    $(this).focus();
};
$(".input-btn-large").on('keyup', function() {
    $('.btn-wrap').css('visibility', 'hidden');
    $('.btn-wrap-large').css('visibility', 'hidden');
    $('.btn-wrap-medium').css('visibility', 'hidden');
    $('.block-calendary').css('visibility', 'hidden');
    $('.border-sort').css('opacity', '0');
    $('.input-style').css('visibility', 'hidden');
    $('.sort-btn').css('visibility', 'hidden');
    $('.podlozhka').css('z-index', '998').css('display', 'block');
    $(".sort-menu").off('mouseenter', sortMenu);
    $(".sort-menu").off('mouseleave', sortMenuOff);
    // $(this).parents('.sort-menu').on('mouseenter', sortMenu);
    $(this).parents('.btn-wrap-large').css('visibility', 'visible').css('z-index', '999');
    $(this).parents('.btn-wrap-large').find('.sort-btn').css('visibility', 'visible');
    $(this).parents('.btn-wrap-large').find('.border-sort').css('opacity', '1');
});
$(".input-btn-large").on('mouseenter', function() {
    // console.log(this)
    this.focus();
    this.select();
    // $(this).select();
});
// $(".btn-wrap-large").on('mouseenter', openLargeMenu);
// $(".btn-wrap-large").on('mouseleave', closeLargeMenu);
$(".input-btn-large").on('click', focusInputLarge);
var countList = 0;
$(".list-large").click(function(e) {
    // $(".btn-wrap-large").off('mouseleave', closeLargeMenu);

    $('.btn-wrap').css('visibility', 'hidden');
    $('.btn-wrap-large').css('visibility', 'hidden').css('z-index', '999');
    $('.btn-wrap-medium').css('visibility', 'hidden');
    $('.block-calendary').css('visibility', 'hidden');
    $('.input-style').css('visibility', 'hidden');
    $('.sort-btn').css('visibility', 'hidden');

    // $('.sort-btn').addClass('hideAllBtn');
    // $('.btn-wrap').addClass('hideAllBtn');
    // $('.btn-wrap-large').addClass('hideAllBtn').css('z-index', '999');
    // $('.btn-wrap-medium').addClass('hideAllBtn');
    // $('.block-calendary').addClass('hideAllBtn');
    // $('.input-style').addClass('hideAllBtn');

    $('.border-sort').css('opacity', '0');
    $('.podlozhka').css('z-index', '998').css('display', 'block');
    $(".sort-menu").off('mouseenter', sortMenu);
    $(".sort-menu").off('mouseleave', sortMenuOff);
    // console.log($(this).parents('.btn-wrap-large').find('.input-btn-large')[0]);
    // $(this).parents('.btn-wrap-large').children('.input-btn-large').focus();
    // $(this).parents('.sort-menu').on('mouseenter', sortMenu);


    // $(this).parents('.btn-wrap-large').removeClass('hideAllBtn');
    // $(this).parents('.btn-wrap-large').find('.sort-btn').removeClass('hideAllBtn');

    // $(this).parents('.block1').children('.list-large.select-btn').length;

    $(this).parents('.btn-wrap-large').css('visibility', 'visible');
    $(this).parents('.btn-wrap-large').find('.sort-btn').css('visibility', 'visible');

    $(this).parents('.btn-wrap-large').find('.border-sort').css('opacity', '1');

    $(this).toggleClass('select-btn');
    // countList += 1;
    countList = [...$(this).parents('.block1').find('.select-btn')].filter(x => $(x).find('.findFunction')[0].innerHTML !== 'Все').length;
    $(this).parents('.btn-wrap-large').find('.countFindFunction span').text(countList);
    console.log($(this).parents('.block1').find('.select-btn').length)
    $(this).parent().find('.list-large:first-child').removeClass('select-btn');
    // if ($(this).parents('.btn-wrap-large').find('.select-btn').length == 1) {
    //     let appendStatus = $(this).parents('.btn-wrap-large').find('.select-btn').text();
    //     $(this).parents('.btn-wrap-large').children('.input-btn-large').val(appendStatus);
    // }
    // if ($(this).parents('.btn-wrap-large').find('.select-btn').length >= 2) {
    //     $(this).parents('.block1').siblings('.input-btn-large').val('Фильтр');
    // }
    // if ($(this).parents('.btn-wrap-large').find('.select-btn').length == 0) {
    //     $(this).parents('.block1').siblings('.input-btn-large').val('');
    //     $(this).parent().find('.list-large:first-child').addClass('select-btn');
    // }
    $(this).parents('.btn-wrap-large').find('.input-btn-large')[0].focus();

});
$(".list-large:first-child").click(function() {
    $(this).addClass('select-btn');
    $(this).parents('.block1').siblings('.input-btn-large').val('');
    $(this).siblings().removeClass('select-btn');
    $(this).parents('.block1').removeClass("toggle");
    $('.btn-wrap').css('visibility', 'visible');
    $('.btn-wrap-large').css('visibility', 'visible').css('z-index', '2');
    $('.btn-wrap-medium').css('visibility', 'visible');
    $('.sort-btn').css('visibility', 'visible');
    $('.block-calendary').css('visibility', 'visible');
    $('.input-style').css('visibility', 'visible');
    // $('.border-sort-visible').css('display', 'block');
    $('.border-sort').css('opacity', '1');
    // $(".btn-wrap-large").on('mouseleave', closeLargeMenu);
    $(".sort-menu").on('mouseenter', sortMenu);
    $(".sort-menu").on('mouseleave', sortMenuOff);
    $('.podlozhka').css('z-index', '0').css('display', 'none');
    changesInput();
});
// close all btn
$('.podlozhka').on("click", function(e) {

    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("btn-wrap-large") && !$clicked.parents().hasClass("btn-wrap") && !$clicked.parents().hasClass("btn-wrap-medium")) {
        $(".btn-wrap-large .block1").removeClass("toggle");
        $(".btn-wrap-medium .block1").removeClass("toggle");
        $(".btn-wrap .block1").removeClass("toggle");

        // $('.border-sort-visible').css('display', 'block');
        // $('.btn-wrap').on('mouseleave', closeMenu);
        $(".sort-menu").on('mouseleave', sortMenuOff);
        $(".sort-menu").on('mouseenter', sortMenu);
        // $(".btn-wrap-large").on('mouseleave', closeLargeMenu);
        // $('.btn-wrap-medium').on('mouseleave', closeMediumMenu);
        $('.input-style').on('mouseleave', inputFocus);
        $('.list-large').css('display', 'block');
        $('.findFunction').find('.findUnderline').removeClass('findUnderline');
        $('.countFindFunction').text('');
        $('.podlozhka').css('z-index', '0').css('display', 'none');
        $('.btn-wrap').css('visibility', 'visible').css('z-index', '2');
        $('.border-sort').css('opacity', '1');
        $('.btn-wrap-large').css('visibility', 'visible').css('z-index', '2');
        $('.btn-wrap-medium').css('visibility', 'visible').css('z-index', '2');
        $('.sort-btn').css('visibility', 'visible');
        $('.block-calendary').css('visibility', 'visible');
        $('.input-style').css('padding-right', '0px');
        $('.border-sort').css('visibility', 'visible');
        $('.input-style').css('visibility', 'visible').removeClass('flagForSort');


        //выключить стрелку сортировки

        $('.sort-btn').removeClass('sort-toggle');
        $('.btn-medium').removeClass('hide-arrow');
        $('.btn-wrap-large').removeClass('hide-arrow');
        $('.btn-small').removeClass('hide-arrow');

        $('.input-style').each(function() {
            if ($(this).siblings('.border-sort').hasClass('border-sort-visible')) {
                $(this).siblings('.sort-btn').addClass('sort-toggle');
                // $(this).css('padding-right', '15px');
            } else {
                $(this).siblings('.sort-btn').removeClass('sort-toggle');
                // $(this).css('padding-right', '3px');
            }
        });
        $('.btn-medium').each(function() {
            if ($(this).siblings('.border-sort').hasClass('border-sort-visible')) {
                $(this).siblings('.sort-btn').addClass('sort-toggle');
                $(this).addClass('hide-arrow');
            } else {
                $(this).siblings('.sort-btn').removeClass('sort-toggle');

            }
        });
        //выключить стрелку сортировки
        $('.btn-wrap-large').each(function() {
            if ($(this).find('.select-btn').length == 1) {
                let appendStatus = $(this).find('.select-btn').find('.findFunction').text();
                $(this).children('.input-btn-large').val(appendStatus);
                if ($(this).children('.input-btn-large').val().trim() == 'Все') {
                    $(this).children('.input-btn-large').val('');
                }
            }
            if ($(this).find('.select-btn').length >= 2) {
                $(this).children('.input-btn-large').val('Фильтр');
            }
            if ($(this).find('.select-btn').length == 0) {
                $(this).children('.input-btn-large').val('');
                $(this).find('.list-large:first-child').addClass('select-btn');
            }
            if ($(this).children('.border-sort').hasClass('border-sort-visible')) {
                $(this).children('.sort-btn').addClass('sort-toggle');
                $(this).addClass('hide-arrow');
            } else {
                $(this).children('.sort-btn').removeClass('sort-toggle');

            }
        });
        $('.btn-small').each(function() {
            if ($(this).html() == '') {
                if ($(this).siblings('.border-sort').hasClass('border-sort-visible')) {
                    $(this).addClass('hide-arrow');
                    $(this).siblings('.sort-btn').addClass("sort-toggle");
                } else {
                    $(this).removeClass('hide-arrow');

                }
            } else {
                $(this).addClass('hide-arrow');
                $(this).siblings('.sort-btn').removeClass("sort-toggle");
            }
        });
        // $('.btn-wrap').css('width', '16px');
        $(".btn-wrap.width23").css('width', '23px');
        $(".btn-wrap.width22").css('width', '22px');
        $(".btn-wrap.width17").css('width', '17px');
        $(".btn-wrap.width15").css('width', '15px');
        changesInput();
    }
});

//menu large btn


//menu medium btn


// $('.btn-wrap-medium').on('mouseenter', openMediumMenu);
// $('.btn-wrap-medium').on('mouseleave', closeMediumMenu);


$(".list-medium").click(function(e) {
    $(this).toggleClass('select-btn');
    $(".sort-menu").off('mouseleave', sortMenuOff);
    $(".sort-menu").off('mouseenter', sortMenu);
    // $('.btn-wrap-medium').off('mouseleave', closeMediumMenu);
    $('.btn-wrap').css('visibility', 'hidden');
    $('.btn-wrap-large').css('visibility', 'hidden');
    $('.btn-wrap-medium').css('visibility', 'hidden').css('z-index', '999');
    $('.sort-btn').css('visibility', 'hidden');
    $('.block-calendary').css('visibility', 'hidden');
    $('.border-sort').css('opacity', '0');
    $('.input-style').css('visibility', 'hidden');
    // $('.border-sort-visible').css('display', 'none');
    $('.podlozhka').css('z-index', '998').css('display', 'block');

    $(this).parents('.btn-wrap-medium').css('visibility', 'visible');
    $(this).parents('.btn-wrap-medium').find('.sort-btn').css('visibility', 'visible');
    $(this).parents('.btn-wrap-medium').find('.border-sort').css('opacity', '1');

    $(this).parent().find('.list-medium:first-child').removeClass('select-btn');

    if ($(this).parents('.btn-wrap-medium').find('.select-btn').length == 1) {
        let appendCountry = $(this).parents('.btn-wrap-medium').find('.select-btn').html();
        $(this).parents('.btn-wrap-medium').children('.btn-medium').html(appendCountry);
    }
    if ($(this).parents('.btn-wrap-medium').find('.select-btn').length >= 2) {
        $(this).parents('.block1').siblings('.btn-medium').html('<span>Фильтр</span>');
    }
    if ($(this).parents('.btn-wrap-medium').find('.select-btn').length == 0) {
        $(this).parents('.block1').siblings('.btn-medium').html('');
        $(this).parent().find('.list-medium:first-child').addClass('select-btn');
    }
});
$(".list-medium:first-child").click(function() {
    $(this).addClass('select-btn');
    $(this).parents('.block1').siblings('.btn-medium').html('');
    $(this).siblings().removeClass('select-btn');
    $(this).parents('.block1').removeClass("toggle");
    $('.btn-wrap').css('visibility', 'visible');
    $('.btn-wrap-large').css('visibility', 'visible');
    $('.btn-wrap-medium').css('visibility', 'visible').css('z-index', '2');
    $('.sort-btn').css('visibility', 'visible');
    $('.block-calendary').css('visibility', 'visible');
    $('.border-sort').css('opacity', '1');
    // $('.border-sort-visible').css('display', 'block');
    // $('.btn-wrap-medium').on('mouseleave', closeMediumMenu);
    $('.podlozhka').css('z-index', '0').css('display', 'none');
    $('.input-style').css('visibility', 'visible');
    $(".sort-menu").on('mouseleave', sortMenuOff);
    $(".sort-menu").on('mouseenter', sortMenu);
    changesInput();

});

//menu medium btn
//menu small btn
// function openMenu(e) {
//     $(".list-small").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
//     $(this).css('width', '53px');
//     $(this).children('.block1').addClass("toggle");
//     $(this).children('.sort-btn').addClass("sort-toggle");
//     $(this).children('.btn-small').addClass('hide-arrow');
// };

// function closeMenu(e) {
//     $(this).children('.block1').removeClass("toggle");
//     $(this).children('.sort-btn').removeClass("sort-toggle");
//     // $('.btn-wrap').css('width', '16px');
//     $('.btn-wrap.width23').css('width', '23px');
//     $('.btn-wrap.width22').css('width', '22px');
//     $('.btn-wrap.width17').css('width', '17px');
//     $('.btn-wrap.width15').css('width', '15px');
// };
// $('.btn-wrap').on('mouseenter', openMenu);
// $('.btn-wrap').on('mouseleave', closeMenu);



$(".list-small").click(function(e) {
    $(this).toggleClass('select-btn');
    // $('.btn-wrap').off('mouseleave', closeMenu);
    $(".sort-menu").off('mouseleave', sortMenuOff);
    $(".sort-menu").off('mouseenter', sortMenu);
    $('.btn-wrap').css('visibility', 'hidden').css('z-index', '999');
    $('.btn-wrap-large').css('visibility', 'hidden');
    $('.btn-wrap-medium').css('visibility', 'hidden');
    $('.sort-btn').css('visibility', 'hidden');
    $('.block-calendary').css('visibility', 'hidden');
    $('.input-style').css('visibility', 'hidden');
    $('.border-sort').css('opacity', '0');
    // $('.border-sort-visible').css('display', 'none');
    $('.podlozhka').css('z-index', '998').css('display', 'block');

    $(this).parents('.btn-wrap').css('visibility', 'visible');
    $(this).parents('.btn-wrap').find('.sort-btn').css('visibility', 'visible');
    $(this).parents('.btn-wrap').find('.border-sort').css('opacity', '1');

    $(this).parent().find('.list-small:first-child').removeClass('select-btn');

    if ($(this).parents('.btn-wrap').find('.select-btn').length == 1) {
        let appendCountry = $(this).parents('.btn-wrap').find('.select-btn').html();
        $(this).parents('.btn-wrap').children('.btn-small').html(appendCountry);
    }
    if ($(this).parents('.btn-wrap').find('.select-btn').length >= 2) {
        $(this).parents('.block1').siblings('.btn-small').html('<span class="list-item padding-left">Фильтр</span>');
    }
    if ($(this).parents('.btn-wrap').find('.select-btn').length == 0) {
        $(this).parents('.block1').siblings('.btn-small').html('');
        $(this).parent().find('.list-small:first-child').addClass('select-btn');

    }
});
$(".list-small:first-child").click(function() {
    $(this).addClass('select-btn');
    // $(this).parents('.btn-wrap').children('.btn-small').removeClass('hide-arrow');
    $(this).parents('.block1').siblings('.btn-small').html('');
    $(this).siblings().removeClass('select-btn');
    $(this).parents('.block1').removeClass("toggle");

    // $('.btn-wrap').on('mouseleave', closeMenu);
    $(".sort-menu").on('mouseleave', sortMenuOff);
    $(".sort-menu").on('mouseenter', sortMenu);
    $('.btn-wrap').css('visibility', 'visible').css('z-index', '2');
    $('.btn-wrap-large').css('visibility', 'visible');
    $('.btn-wrap-medium').css('visibility', 'visible');
    $('.sort-btn').css('visibility', 'visible');
    $('.block-calendary').css('visibility', 'visible');
    $('.input-style').css('visibility', 'visible');
    $('.border-sort').css('opacity', '1');
    $('.podlozhka').css('z-index', '0').css('display', 'none');
    changesInput();
    // $('.border-sort-visible').css('display', 'block');


    // $(this).addClass('select-btn');
    // $(this).parents('.block1').siblings('.btn-medium').html('');
    // $(this).siblings().removeClass('select-btn');
    // $(this).parents('.block1').removeClass("toggle");
    // $('.btn-wrap').css('visibility', 'visible');
    // $('.btn-wrap-large').css('visibility', 'visible');
    // $('.btn-wrap-medium').css('visibility', 'visible');
    // $('.sort-btn').css('visibility', 'visible');
    // $('.block-calendary').css('visibility', 'visible');
    // $('.btn-wrap-medium').on('mouseleave', closeMediumMenu);
    // $('.podlozhka').css('z-index', '0').css('display', 'none');
    // $('.input-style').css('visibility', 'visible');

});
//menu small btn
//input btn hover
// function inputFocusss() {
//     var input = $(this);
//     var len = input.val().length;
//     input.focus();
//     input.setSelectionRange(len, len);
// };

// var phones = [{ "mask": "#############" }];
// $('.input-style').inputmask({
//     mask: phones,
//     greedy: false,
//     definitions: { '#': { validator: "[0-9]", cardinality: 1 } }
// });



// $j("#currIN").inputmask("9999");
// $('.tel-validation').inputmask({
//     mask: '999999999999',
//     placeholder: ''
//         // definitions: { '*': { validator: "[0-9]" } }

//     // escapeChar: "\\"
//     // greedy: false,
//     // positionCaretOnClick: "radixFocus",
//     // radixPoint: ",",
//     // _radixDance: true,
//     // numericInput: true,
// });
// $('.tel-validation').inputmask("mask", {
//     "mask": "s*99 999-99-99",
//     "clearIncomplete": true,
//     "showMaskOnHover": true,
//     'placeholder': '',
//     "showMaskOnFocus": false,
//     "definitions": { '*': { "validator": "[0-69]" } }
// });
// $('.pokupatel-validation').on("keyup", function() {
//     if (($(this).val().match(/[^a-zA-Z0-9-_@\.]/g) || []).length == 1) {
//         alert('ошибка в символе');
//     } else if (($(this).val().match(/[^a-zA-Z0-9-_@\.]/g) || []).length > 1) {
//         alert('ошибка в символе');
//         $(this).val($(this).val().slice(0, -1));
//     }

// });

// Inputmask({
//     regex: "[A-Za-zА-Яа-я0-9 *]{1,100}",
//     placeholder: ''
// }).mask('.pokupatel-validation');
// firstLetter = document.querySelectorAll('.first-letter-valid');
// firstLetter.forEach((e) => {
//     e.onkeyup = function(event) {
//         this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
//         // this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
//         // this.value = this.value.replace(/[]/i, '');
//         this.value = this.value.replace(/[A-Za-z0-9]/g, '');
//     }
// });
// Inputmask({
//     // mask: '999999999999',
//     regex: `[0-9A-Za-zА-Яа-я *+-=@$#^&.,?{}_()~!|]{1,100}`,
//     placeholder: ''
// }).mask('.numberValidation,.ipValidation');
// Inputmask({
//     // mask: '999.999.999.999',
//     regex: `[0-9A-Za-zА-Яа-я *+-=@$#^&.,?{}_()~!|]{1,100}`,
//     // regex: `^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?)(?:\-([01]?\d\d`,
//     placeholder: ''
// }).mask('.ipValidation');



// function numberLength(e) {


// };
// this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
// this.value = this.value.slice(0, 12);
// this.value = this.value.slice(0, 13);
// this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
// this.value = this.value.replace(//i, '');
// let temp = this.value.replace(/[^0-9]/g, '');
// this.value = temp.slice(0, 12);

// document.querySelector('input').setSelectionRange(2, 2);
// console.log(e.keyCode === 8)
// firstLetter.oninput = function() {
//     this.value = this.value.replace(/[1]/i, '');
// }

// $('').inputmask({
//     mask: '*{1,50}',
//     placeholder: ''
//         // definitions: {
//         //     'j': {
//         //         validator: "[A-ZА-Я]",
//         //         casing: "upper"
//         //     }
//         // }
//         // regex: '[A-Z{1}a-zА-Я{1}а-я]{1,20}'
//         // definitions: { 'j': { validator: "[A-Z{1}a-zА-Яа-я]" } }
// });




let delayFocus = null;
$('.input-style').on('mouseenter', function() {
    if ($(this).hasClass('flagForSort')) {
        clearTimeout(delayFocus);
    } else {
        delayFocus = setTimeout(() => {
            this.setSelectionRange(this.value.length, this.value.length);
            // $(this).focus();
            this.focus()
            this.select();
        }, 200);
    }
    $(this).css('padding-right', '3px');
    $(this).click(function() {
        $('.podlozhka').one().css('z-index', '998').css('display', 'block');
        $('.border-sort').css('visibility', 'hidden');
        $(this).addClass('flagForSort');
        $('.btn-wrap, .btn-wrap-large,.btn-wrap-medium,.sort-btn,.block-calendary,.input-style').one().css('visibility', 'hidden');
        $(this).siblings('.sort-btn').css('visibility', 'visible');
        $(this).css('visibility', 'visible');
        $(this).siblings('.border-sort').css('visibility', 'visible');
        $('.input-style').off('mouseleave', inputFocus);
        $(".sort-menu").off('mouseenter', sortMenu);
    });
    $(this).keyup(function(e) {
        $('.podlozhka').one().css('z-index', '998').css('display', 'block');
        $('.border-sort').css('visibility', 'hidden');
        $(this).addClass('flagForSort');
        $('.btn-wrap, .btn-wrap-large,.btn-wrap-medium,.sort-btn,.block-calendary,.input-style').one().css('visibility', 'hidden');
        $(this).css('visibility', 'visible');
        $(this).siblings('.border-sort').css('visibility', 'visible');
        $(this).siblings('.sort-btn').css('visibility', 'visible');
        $('.input-style').off('mouseleave', inputFocus);
        $(".sort-menu").off('mouseenter', sortMenu);
        if (e.keyCode === 13) {
            $('.btn-wrap, .btn-wrap-large,.btn-wrap-medium,.sort-btn,.block-calendary,.input-style').css('visibility', 'visible');
            $('.input-style').on('mouseleave', inputFocus);
            $(".sort-menu").on('mouseenter', sortMenu);
            $(this).blur();
            $('.border-sort').css('visibility', 'visible');
            $(this).removeClass('flagForSort');
            $('.podlozhka').css('z-index', '0').css('display', 'none');
        }
    });
});
$('.input-style').on('mouseleave', inputFocus);

function inputFocus() {
    $(this).blur();
    $(this).css('padding-right', '0px');
    clearTimeout(delayFocus);
};
// $($('.daterangepicker')[0]).css({
//     'transition': '0.3s',
//     'height': '0px',
// });
//input btn hover 
// $(document).on('mousemove', calendary);
// $('.demo').click();
// $('.daterangepicker').css({
//     'height': '0px',
//     'visibility': 'hidden',
//     'transition': '0.3s'
// });
// $('.ranges ul').css({
//     'height': '0px',
//     'visibility': 'hidden',
//     'transition': '0.3s'
// });
// $('.drp-calendar .calendar-table').css({
//     'height': '0px',
//     'visibility': 'hidden',
//     'transition': '0.3s'
// });
// $('.drp-calendar.right').css({
//     'height': '0px'
// });
let index = 0;
$('.hover-calen').on('mouseenter', (e) => {
    $('.demo')[e.currentTarget.dataset.id].focus()
    index = e.currentTarget.dataset.id;
    $($('.daterangepicker')[e.currentTarget.dataset.id]).css('visibility', 'visible').css('opacity', '1');
});
$('.hover-calen').on('mouseleave', (e) => {
    $($('.daterangepicker')[e.currentTarget.dataset.id]).css('visibility', 'hidden').css('opacity', '0');
});
$('.daterangepicker').on('mouseenter', (e) => {
    $(e.currentTarget).css('visibility', 'visible').css('opacity', '1');
});
$('.daterangepicker').on('mouseleave', (e) => {
    $(e.currentTarget).css('visibility', 'hidden').css('opacity', '0');

    $('.demo')[index].blur()

});

// function calendary(e) {
//     let $clicked = $(e.target);
//     if ($clicked.parents().hasClass('block-calendary1') || $clicked.parents().hasClass('daterangepicker')) {
//         $('.demo').focus();
//         $($('.daterangepicker')[0]).show();
//     } else {
//         $($('.daterangepicker')[0]).hide();
//     }
//     if ($clicked.parents().hasClass('block-calendary2') || $clicked.parents().hasClass('daterangepicker')) {
//         $('.demo2').focus();
//         $($('.daterangepicker')[1]).show();
//     } else {
//         $($('.daterangepicker')[1]).hide();
//     }
// };
// $('.block-calendary1').on('mouseenter', function() {
//     // $('.daterangepicker').css('height', '0px');
//     $('.demo').focus();
//     $(this).css('z-index', '1001');
//     $('.podlozhka').css('z-index', '1000').css('display', 'block');
//     $($('.daterangepicker')[0]).show();
// });
// $('.podlozhka').on('mouseenter', function() {
//     $('.podlozhka').css('z-index', '0').css('display', 'none');
//     $('.daterangepicker').hide();
// });

// $('.block-calendary2').on('mouseenter', function() {
//     $(this).children('.demo').focus();
//     $($('.daterangepicker')[1]).show();
// });
// $('.block-calendary2').on('mouseleave', function() {
//     $('.daterangepicker').hide();
// });
// $('.date-style').on('mouseenter', function() {
//     $(this).focus();
// });
// $('.date-style').on('mouseleave', function() {
//     $(this).blur();
// });

$(".text-lenght-2").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 20) {
        text = text.substring(0, 18) + "...";
        $(this).text(text);
        $(this).parents('.list-large').hover(function(xy) {
            $('#tooltipBtn').text(boxMemory);
            $("#tooltipBtn").css("font-size", "11px");
            let posElement = this.getBoundingClientRect();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            let blockWidth = $(this).width();
            $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");;
        });
    }
});

// $(".nomer1").text(function(i, text) {
//     let boxMemory = text;
//     // if (text.length >= 34) {
//     //     text = text.substring(0, 32) + "...";
//     //     $(this).text(text);
//     $(this).parents('.list-large').hover(function(xy) {
//         $('#tooltipBtn').text(boxMemory);
//         $("#tooltipBtn").css("font-size", "11px");
//         let posElement = this.getBoundingClientRect();
//         let blockHeight = $(this).height();
//         let screenWidth = document.body.clientWidth;
//         let screenHeight = document.body.clientHeight;
//         let widthTooltip = $('#tooltipBtn').width();
//         let heightTooltip = $('#tooltipBtn').height();
//         let blockWidth = $(this).width();
//         $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
//         $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
//         if (screenWidth < posElement.x + widthTooltip + blockWidth) {
//             $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
//         }
//     }).mouseleave(function(e) {
//         $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");;
//     });
//     // }
// });
// $(".nomer1").text(function(i, text) {
//     let boxMemory = text;
//     // if (text.length >= 20) {
//     //     // text = text.substring(0, 15) + " ... " + text.substring(text.length - 8);
//     //     text = text.substring(0, 15) + "...";
//     //     $(this).text(text);
//     $(this).parents('.list-large').hover(function(xy) {
//         $('#tooltipBtn').html('<span class="idProduct">ID - 243534</span><br> ' + ' <span class="cenaProduct">Цена: 349.00</span><br>' + boxMemory);
//         $("#tooltipBtn").css("font-size", "11px");
//         let posElement = this.getBoundingClientRect();
//         let blockHeight = $(this).height();
//         let screenWidth = document.body.clientWidth;
//         let screenHeight = document.body.clientHeight;
//         let widthTooltip = $('#tooltipBtn').width();
//         let heightTooltip = $('#tooltipBtn').height();
//         let blockWidth = $(this).width();
//         $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
//         $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
//         if (screenWidth < posElement.x + widthTooltip + blockWidth) {
//             $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
//         }
//     }).mouseleave(function(e) {
//         $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");;
//     });
//     // }
// });
$(".product-item-tooltip").text(function(i, text) {
    let boxMemory = text;
    $(this).parents('.list-large').hover(function(xy) {
        if ($(this).find('.findFunction')[0].scrollWidth > $(this).find('.findFunction')[0].offsetWidth) {
            if ($('.product-input')[0].value !== "") {
                let re = new RegExp($('.product-input')[0].value, "gui");
                let text_pr = boxMemory.replace(re, x => '<span style="background: #FFE600; color: black;">' + x + '</span>');
                // console.log(textToHTML(text_pr + '<br> <span class="cenaProduct3">Цена: 349.00</span>' + '<br><span class="idProduct3">ID: 243534</span> '))
                document.getElementById('tooltipBtn').innerHTML = textToHTML(text_pr + '<br> <span class="cenaProduct">Цена: 349.00</span>' + '<br><span class="idProduct">ID: 243534</span> ');
            } else {
                document.getElementById('tooltipBtn').innerHTML = boxMemory + '<br> <span class="cenaProduct">Цена: 349.00</span>' + '<br><span class="idProduct">ID: 243534</span> ';
            }

            $("#tooltipBtn").css("font-size", "11px");
            let posElement = this.getBoundingClientRect();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            let blockWidth = $(this).width();
            $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
            }
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");;
    });
});
$(".user-tooltip").text(function(i, text) {
    let boxMemory = text;
    $(this).parents('.list-large').hover(function(xy) {
        if ($(this).find('.findFunction')[0].scrollWidth > $(this).find('.findFunction')[0].offsetWidth) {
            if ($(this).parents('.btn-wrap-large').find('.user-input')[0].value !== "") {
                let re = new RegExp($(this).parents('.btn-wrap-large').find('.user-input')[0].value, "gui");
                let text_pr = boxMemory.replace(re, x => '<span style="background: #FFE600; color: black;">' + x + '</span>');
                // console.log(textToHTML(text_pr + '<br> <span class="cenaProduct3">Цена: 349.00</span>' + '<br><span class="idProduct3">ID: 243534</span> '))
                document.getElementById('tooltipBtn').innerHTML = textToHTML(text_pr);
            } else {
                document.getElementById('tooltipBtn').innerHTML = boxMemory;
            }

            $("#tooltipBtn").css("font-size", "11px");
            let posElement = this.getBoundingClientRect();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            let blockWidth = $(this).width();
            $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
            }
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");;
    });
});
$(".status-tooltip").text(function(i, text) {
    let boxMemory = text;
    // if (text.length >= 20) {
    //     // text = text.substring(0, 15) + " ... " + text.substring(text.length - 8);
    //     text = text.substring(0, 15) + "...";
    //     $(this).text(text);
    $(this).parents('.list-large').hover(function(xy) {
        // $('#tooltipBtn').html(boxMemory + );
        // // console.log($('.product-input')[0]);
        // console.log($(this).find('.findFunction'), $(this).find('.findFunction'))
        if ($(this).find('.findFunction')[0].scrollWidth > $(this).find('.findFunction')[0].offsetWidth) {
            if ($('.inputStatus')[0].value !== "") {
                let re = new RegExp($('.inputStatus')[0].value, "gui");
                let text_pr = boxMemory.replace(re, x => '<span style="background: #FFE600; color: black;">' + x + '</span>');
                // console.log(textToHTML(text_pr + '<br> <span class="cenaProduct3">Цена: 349.00</span>' + '<br><span class="idProduct3">ID: 243534</span> '))
                document.getElementById('tooltipBtn').innerHTML = textToHTML(text_pr);
            } else {
                document.getElementById('tooltipBtn').innerHTML = boxMemory;
            }

            $("#tooltipBtn").css("font-size", "11px");
            let posElement = this.getBoundingClientRect();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            let blockWidth = $(this).width();
            $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
            }
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");;
    });
    // }
});
// $(".nomer3").text(function(i, text) {
//     let boxMemory = text;
//     // if (text.length >= 20) {
//     //     // text = text.substring(0, 15) + " ... " + text.substring(text.length - 8);
//     //     text = text.substring(0, 15) + "...";
//     //     $(this).text(text);
//     $(this).parents('.list-large').hover(function(xy) {
//         $('#tooltipBtn').html(boxMemory + '<br> <span class="cenaProduct2">Цена: 349.00</span>' + '<br> <span class="idProduct2">ID - 243534</span>');
//         $("#tooltipBtn").css("font-size", "11px");
//         let posElement = this.getBoundingClientRect();
//         let blockHeight = $(this).height();
//         let screenWidth = document.body.clientWidth;
//         let screenHeight = document.body.clientHeight;
//         let widthTooltip = $('#tooltipBtn').width();
//         let heightTooltip = $('#tooltipBtn').height();
//         let blockWidth = $(this).width();
//         $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
//         $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
//         if (screenWidth < posElement.x + widthTooltip + blockWidth) {
//             $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
//         }
//     }).mouseleave(function(e) {
//         $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");;
//     });
//     // }
// });

// header hide
// $(".crm-input").hover(function() {
//     $(".wrap-hide").addClass('wrap-open');
// });
// $(document).bind("click", function(e) {
//     let $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("crm-input") && !$clicked.parents().hasClass("table-header") && !$clicked.parents().hasClass("ui-datepicker-buttonpane") && !$clicked.parents().hasClass("ui-datepicker-header") && !$clicked.parents().hasClass("ui-datepicker-calendar") && !$clicked.hasClass("ui-datepicker") && !$clicked.parents().hasClass("block-btn")) {
//         $(".wrap-hide").removeClass('wrap-open');
//         if ($(".btn-refresh").hasClass('active-btn-header')) {
//             $(".wrap-hide").addClass('wrap-open');
//         }
//     }
// });

function sortMenu() {
    $(this).find('.sort-btn').addClass('sort-toggle');
    $(this).find('.btn-medium').addClass('hide-arrow');
    $(this).find('.btn-wrap-large').addClass('hide-arrow');
    if ($(this).find('.input-btn-large').length > 0) {
        $($(this).find('.input-btn-large')[0]).focus().val('');
        // $(this).find('.input-btn-large')[0].select();
    }
    countFind = [...$(this).find('.list-large')].filter(x => $(x).find('.findFunction')[0].innerHTML !== 'Все').length;
    // countList = $(this).find('.select-btn').length;

    try {
        countList = [...$(this).find('.select-btn')].filter(x => $(x).find('.findFunction')[0].innerHTML !== 'Все').length;
    } catch (error) {

    }

    $(this).find('.countFindFunction').html(' (' + countFind + '/' + '<span>' + countList + '</span>' + ')');
    dataFind = countFind;
    countFind = 0;
    // let fieldInput = $(this).find('.input-btn-large');
    // let fldLength = fieldInput.val().length;
    // fieldInput.focus();
    // fieldInput.val().setSelectionRange(fldLength, fldLength);
    $(this).find('.btn-wrap').css('width', '53px');
    $(this).find('.block1').addClass("toggle");
    $(this).find('.btn-small').addClass('hide-arrow');
    $(this).find('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
};

$(".sort-menu").on('mouseenter', sortMenu);
$(".sort-menu").on('mouseleave', sortMenuOff);

function sortMenuOff(e) {
    //small btn
    let memory = $(this).find('.select-btn').find('.findFunction').text();
    $(this).find('.input-btn-large').val(memory);
    if ($(this).find('.select-btn').length >= 2) {
        $(this).find('.input-btn-large').val('Фильтр');
    }
    if (memory == 'Все') {
        $(this).find('.input-btn-large').val('');
    }
    $(this).find('.countFindFunction').text('');
    $(this).find('.input-btn-large').blur();
    $(this).find('.block1').removeClass("toggle");
    $('.btn-wrap.width23').css('width', '23px');
    $('.btn-wrap.width22').css('width', '22px');
    $('.btn-wrap.width17').css('width', '17px');
    $('.btn-wrap.width15').css('width', '15px');
    //small btn

    $(this).find('.sort-btn').removeClass('sort-toggle');
    $(this).find('.btn-medium').removeClass('hide-arrow');
    // $(this).find('.btn-small').removeClass('hide-arrow');
    $(this).find('.btn-wrap-large').removeClass('hide-arrow');
    $(this).find('.btn-small').removeClass('hide-arrow');
    if ($(this).find('.block1').hasClass('toggle')) {
        $(this).find('.sort-btn').addClass('sort-toggle');
        $(this).find('.btn-medium').addClass('hide-arrow');
        // $(this).find('.btn-small').removeClass('hide-arrow');
        $(this).find('.btn-wrap-large').addClass('hide-arrow');
        $(this).find('.btn-small').addClass('hide-arrow');
    }

    if ($(this).find('.btn-small').html() == '') {
        if ($(this).find('.border-sort').hasClass('border-sort-visible')) {
            $(this).find('.btn-small').addClass('hide-arrow');
            $(this).find('.sort-btn').addClass("sort-toggle");
        } else {
            $(this).find('.btn-small').removeClass('hide-arrow');
            $(this).find('.sort-btn').removeClass("sort-toggle");
        }
    } else {
        $(this).find('.btn-small').addClass('hide-arrow');
    }
    if ($(this).find('.border-sort').hasClass('border-sort-visible')) {
        //Показать стрелочку сортировки
        if (!$(this).find('.btn-small').html() == '' && !$(this).find('.block1').hasClass('toggle')) {
            $(this).find('.sort-btn').removeClass('sort-toggle');
        } else {
            $(this).find('.sort-btn').addClass('sort-toggle');
        }
        //Спрятать стрелочку кнопки
        $(this).find('.btn-medium').addClass('hide-arrow');
        $(this).find('.btn-wrap-large').addClass('hide-arrow');
    }
    if ($(this).find('.input-style').hasClass('flagForSort')) {
        $(this).find('.sort-btn').addClass('sort-toggle');
    }
};

function sortBtnClick() {
    let memory = $(this).siblings('.block1').find('.select-btn').find('.findFunction').text();
    $(this).siblings('.input-btn-large').val(memory);
    if ($(this).siblings('.block1').find('.select-btn').length >= 2) {
        $(this).siblings('.input-btn-large').val('Фильтр');
    }
    if (memory == 'Все') {
        $(this).siblings('.input-btn-large').val('');
    }
    $(this).siblings('.block1').removeClass('toggle');
    $('.list-large').css('display', 'block');
    $('.countFindFunction').text('');
    $('.findFunction').find('.findUnderline').removeClass('findUnderline');
    $('.btn-wrap').css('visibility', 'visible').css('z-index', '2');
    $('.btn-wrap-large').css('visibility', 'visible').css('z-index', '2');
    $('.btn-wrap-medium').css('visibility', 'visible').css('z-index', '2');
    $('.sort-btn').css('visibility', 'visible');
    $('.border-sort').css('visibility', 'visible');
    $('.border-sort').css('opacity', '1');
    $('.input-style').css('visibility', 'visible').removeClass('flagForSort');
    $('.input-style').on('mouseleave', inputFocus);
    $('.input-style').css('padding-right', '0px');
    $(".sort-menu").on('mouseleave', sortMenuOff);
    $(".sort-menu").on('mouseenter', sortMenu);
    $('.podlozhka').css('z-index', '0').css('display', 'none');

    $('.sort-btn').removeClass('sort-toggle');
    if ($('.trigger-rotate').length = 2) {
        // $('.sort-btn').removeClass('trigger-rotate');
        $('.wrap-hide').find('.border-sort').removeClass('border-sort-visible');
        $('.input-style, .btn-small , .btn-medium, .input-btn-large').css({
            "background": "#d4d4d4"
        });
        $('.sort-btn').css({
            "transform": "rotate(180deg)"
        });
        $('.sort-menu').find('.sort-toggle').removeClass('sort-toggle');
        $('.sort-menu').find('.hide-arrow').removeClass('hide-arrow');

    }
    // инпут сортировка
    if (!$(this).parent('.sort-menu').find('.border-sort').hasClass('border-sort-visible')) {
        $(this).addClass('sort-toggle');
        $(this).css({
            "transform": "scaleX(-1)"
        });
    }
    // кнопки медиум сортировка
    if (!$(this).siblings('.border-sort').hasClass('border-sort-visible')) {
        $(this).siblings('.btn-medium').addClass('hide-arrow');
        $(this).addClass('sort-toggle');
        $(this).css({
            "transform": "scaleX(-1)"
        });
    }
    // кнопки смалл сортировка
    $('.btn-small').each(function() {
        if (!$(this).html() == '') {
            $(this).addClass('hide-arrow');
        }
    });
    if (!$(this).siblings('.border-sort').hasClass('border-sort-visible')) {
        $(this).siblings('.btn-small').addClass('hide-arrow');
        $(this).addClass('sort-toggle');
        $(this).css({
            "transform": "scaleX(-1)"
        });
    }
    //кнопки лардж сортировка
    if (!$(this).siblings('.border-sort').hasClass('border-sort-visible')) {
        $(this).parent('.btn-wrap-large').addClass('hide-arrow');
        $(this).addClass('sort-toggle');
        $(this).css({
            "transform": "scaleX(-1)"
        });
    }
    // флаг для сортировки анимации стрелочки
    if ($(this).hasClass('trigger-rotate') && $('.sort-btn').hasClass('trigger-rotate')) {
        $('.sort-btn').removeClass('trigger-rotate');
        $('.sort-btn').css({
            "transform": "rotate(180deg)"
        });

        $(this).siblings('.border-sort').css({
            "bottom": "-1px",
            "top": "inherit"
        }).addClass('border-sort-visible');
    } else {
        $(this).addClass('trigger-rotate');
        $(this).css({
            "transform": "scaleX(-1)"
        });
        $(this).siblings('.border-sort').css({
            "top": "-1px",
            "bottom": "inherit"
        }).addClass('border-sort-visible');
    }
    changesInput();
};
$(".sort-btn").on('click', sortBtnClick);
$(".sort-btn").hover(function(e, item) {
    $('#tooltipBtn').text('Сортировать данные ↑↓');
    let posElement = this.getBoundingClientRect();
    let blockWidth = $(this).width();
    let blockHeight = $(this).height();
    let screenWidth = document.body.clientWidth;
    let screenHeight = document.body.clientHeight;
    let widthTooltip = $('#tooltipBtn').width();
    let heightTooltip = $('#tooltipBtn').height();

    $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 20 + "px");
    $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
    if (screenWidth < posElement.x + widthTooltip) {
        $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
    }
    if (posElement.x < 110) {
        $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
    }
    if (screenHeight < posElement.y + heightTooltip + 25) {
        $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
    }
}).mouseleave(function(e) {
    $("#tooltipBtn").css({ 'animation': '' });
});




//reset filter rotate
let rotate = 0;
$(".btn-header.btn-refresh").click(function() {
    rotate = rotate + 360;
    $(".btn-refresh").css({
        "transform": "rotate(" + rotate + "deg)",
        'transition': '0.4s'
    });
    $('.btn-refresh').removeClass('active-btn-header');

    $('.input-style, .btn-medium,.btn-small,.input-btn-large').css({
        "background": "#d4d4d4"
    });

    $('.border-sort').css('visibility', 'visible');
    $('.block1').removeClass('toggle');
    $('.btn-wrap').css('visibility', 'visible').css('z-index', '2');
    $('.btn-wrap-large').css('visibility', 'visible').css('z-index', '2');
    $('.btn-wrap-medium').css('visibility', 'visible').css('z-index', '2');
    $('.sort-btn').css('visibility', 'visible');
    $('.border-sort').css('opacity', '1');
    $('.input-style').css('visibility', 'visible').removeClass('flagForSort');
    $('.input-style').on('mouseleave', inputFocus);
    $(".sort-menu").on('mouseleave', sortMenuOff);
    $(".sort-menu").on('mouseenter', sortMenu);
    $('.countFindFunction').text('');
    $('.podlozhka').css('z-index', '0').css('display', 'none');

    //сброс инпута и стрелки сортировки и бордера
    $('.border-sort').removeClass('border-sort-visible');
    $(".input-style").val('');
    $(".date-style").val('');
    $('.sort-btn').css({
        "transform": "rotate(180deg)"
    }).removeClass('trigger-rotate').removeClass('sort-toggle');

    //Сброс средних кнопок
    $(".btn-medium").html('').removeClass('hide-arrow');
    $('.list-medium').removeClass('select-btn');
    $('.list-medium:first-child').addClass('select-btn');
    //Сброс маленьких кнопок
    $(".btn-small").html('').removeClass('hide-arrow');
    $('.list-small').removeClass('select-btn');
    $('.list-small:first-child').addClass('select-btn');
    //Сброс больших кнопок
    $('.btn-wrap-large').removeClass('hide-arrow');
    $(".input-btn-large").val('');
    $('.list-large').removeClass('select-btn');
    $('.list-large:first-child').addClass('select-btn');
    //Сброс rangeInput
    $('.rangeslider').find('.min').val('0');
    $('.rangeslider').find('.max').val('52');
    $('.rangeslider').find('.minBG,.maxBG').css('width', '0%');
    $('.rangeslider').find('.inputDataMin').text(arr[0]);
    $('.rangeslider').find('.inputDataMax').text(arr[52]);
    $('.rangesList').removeClass('select-btn');
    $('.rangesList:first-child').addClass('select-btn');
    //СБРОС КНОПОК
});


$(".crm-input .input-style , .crm-input .input-btn-large, .crm-input .date-style").change(function() {
    changesInput();
});


function changesInput() {
    let flag = false;
    $(".input-style , .input-btn-large, .btn-medium , .btn-small,.date-style, .border-sort").each(function(_, item) {
        if (($(item).val() !== '') || $(item).children().children().attr('data-img') === "" || $(item).children().attr('data-img') === "" || $(item)[0].innerText === "Фильтр" || $(item)[0].innerText === "П/п" || $(item).hasClass('border-sort-visible')) {
            flag = true;
        }
        if (flag == true) {
            $('.btn-refresh').addClass('active-btn-header');
        } else {
            $('.btn-refresh').removeClass('active-btn-header');
        }
    });
}


//reset filter rotate


$('.ttn-first').mouseenter(function() {
    $(this).siblings('.trigger-mouse-2').css('width', '20px');
    $(this).css('width', '94px');
    $(this).siblings('.ttn-second').css({ 'opacity': '0', 'width': '0px', 'padding-left': '0px' });
    $(this).siblings('.icon-Vector-81').addClass('hide-arrow-ttn2').css('left', '-1px');
});
$('.ttn-first').mouseleave(function() {
    $(this).siblings('.trigger-mouse-2').css('width', '0px');
    $(this).css('width', '42px');
    $(this).siblings('.ttn-second').css({ 'opacity': '1', 'width': '42px', 'padding-left': '4.5px' });
    $(this).siblings('.icon-Vector-81').removeClass('hide-arrow-ttn2').css('left', '0px');
});
$('.ttn-second').mouseenter(function() {
    $(this).siblings('.trigger-mouse').css('width', '20px');
    $(this).css({ 'width': '94px', 'padding-left': '0px', 'left': '-1px' });
    $(this).siblings('.icon-Vector-81').addClass('hide-arrow-ttn1').css('left', '-5px');
    $(this).siblings('.ttn-first').css({ 'opacity': '0', 'width': '0px', 'padding-right': '0px' });
});
$('.ttn-second').mouseleave(function() {
    $(this).siblings('.trigger-mouse').css('width', '0px');
    $(this).css({ 'width': '42px', 'padding-left': '4.5px', 'left': '0px' });
    $(this).siblings('.icon-Vector-81').removeClass('hide-arrow-ttn1').css('left', '0px');
    $(this).siblings('.ttn-first').css({ 'opacity': '1', 'width': '42px', 'padding-right': '4.5px' });
});
$('.trigger-mouse-2').hover(function() {
    $(this).siblings('.icon-Vector-81').addClass('hide-arrow-ttn1').css('left', '-5px');
    $(this).siblings('.ttn-second').css({ 'width': '94px', 'padding-left': '0px', 'left': '-1px' });
    $(this).siblings('.ttn-first').css({ 'opacity': '0', 'width': '0px', 'padding-right': '0px' });
});
$('.trigger-mouse').hover(function() {
    $(this).siblings('.icon-Vector-81').addClass('hide-arrow-ttn2').css('left', '-1px');
    $(this).siblings('.ttn-first').css('width', '94px');
    $(this).siblings('.ttn-second').css({ 'opacity': '0', 'width': '0px', 'padding-left': '0px', 'left': '0px' });
});
$(".ttn-tooltip").each(function(e, item) {
    let ttnFirst = 'Первая ТТН';
    let ttnSecond = 'Вторая ТТН';

    $(this).hover(function(xy) {
        if ($(this).hasClass('ttn-first')) {
            $('#tooltipBtn').text(ttnFirst);
        }
        if ($(this).hasClass('ttn-second')) {
            $('#tooltipBtn').text(ttnSecond);
        }

        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();

        $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 20 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
});
// var gr = $('.gr').width();
// var grt = $('.count').width();
// if ((grt / 1.5) >= gr) {
//     $('.gr').css({ 'height': gr + 'px' });
// } else {
//     $('.count').css({ 'width': gr * 1.5 + 'px' });
//     $('.count').css({ 'height': gr * 1.5 + 'px' });
// }
$('.count').text(function(_, text) {
    // $('.count').lenght
    if (text.length >= 2) {
        $(this).css('border-radius', '5px');
    }
    // console.log(text.length)
});
let scale = 1;


$('.zoomMinus').on('click', function(e) {
    scale -= .05;
    scaleFormat = scale.toFixed(2);
    console.log(scaleFormat)
    if (scaleFormat <= 0.78) {
        scale = 0.8;
    } else {
        $('#noZoom').css({
            "zoom": "" + scale + ""
        });
    }
});
$('.zoomPlus').on('click', function(e) {
    scale += .05;
    scaleFormat = scale.toFixed(2);
    console.log(scaleFormat)
    if (scaleFormat >= 1.26) {
        scale = 1.25;
    } else {
        $('#noZoom').css({
            "zoom": "" + scale + ""
        });
    }
});
//SCALE
// let scale = 1;
// $('.zoomMinus').on('click', function(e) {
//     scale -= .05;
//     scaleFormat = scale.toFixed(2);
//     window.scale = scale;
//     $('#noZoom').css({
//         "transform": "scale(" + scaleFormat + ")",
//         "transform-origin": "left top",
//         "width": "calc(100% /" + scaleFormat + ")",
//         "height": "calc(100% /" + scaleFormat + ")"
//     });
//     console.log(scaleFormat)
// });
// $('.zoomPlus').on('click', function(e) {
//     scale += .05;
//     scaleFormat = scale.toFixed(2);
//     window.scale = scale;
//     $('#noZoom').css({
//         "transform": "scale(" + scaleFormat + ")",
//         "transform-origin": "left top",
//         "width": "calc(100% /" + scaleFormat + ")",
//         "height": "calc(100% /" + scaleFormat + ")"
//     });
//     console.log(scaleFormat)
// });
//SCALE
//noZoom
// $(document).keydown(function(event) {
//     if ((event.ctrlKey || event.metaKey) == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
//         event.preventDefault();
//     }
//     // 107 Num Key  +
//     // 109 Num Key  -
//     // 173 Min Key  hyphen/underscor Hey
//     // 61 Plus key  +/= key
// });

// $("#noZoom").bind('mousewheel DOMMouseScroll', function(event) {
//     if (event.ctrlKey == true) {
//         event.preventDefault();
//     }
//     if (event.metaKey == true) {
//         event.preventDefault();
//     }
// });
//noZoom
//СОРТИРОВКА
document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('crm-table');
    const headers = table.querySelectorAll('thead td');
    const tableBody = table.querySelector('tbody');
    const rows = tableBody.querySelectorAll('tr');

    // Направление сортировки
    const directions = Array.from(headers).map(function(header) {
        return '';
    });

    // Преобразовать содержимое данной ячейки в заданном столбце
    const transform = function(index, content) {
        // Получить тип данных столбца
        const type = headers[index].getAttribute('data-type');
        switch (type) {
            case 'number':
                return parseFloat(content);
            case 'string':
            default:
                return content;
        }
    };

    const sortColumn = function(index) {
        // Получить текущее направление
        const direction = directions[index] || 'asc';

        // Фактор по направлению
        const multiplier = (direction === 'asc') ? 1 : -1;

        const newRows = Array.from(rows);

        newRows.sort(function(rowA, rowB) {
            const cellA = rowA.querySelectorAll('td')[index].innerHTML;
            const cellB = rowB.querySelectorAll('td')[index].innerHTML;

            const a = transform(index, cellA);
            const b = transform(index, cellB);

            switch (true) {
                case a > b:
                    return 1 * multiplier;
                case a < b:
                    return -1 * multiplier;
                case a === b:
                    return 0;
            }
        });

        // Удалить старые строки
        [].forEach.call(rows, function(row) {
            tableBody.removeChild(row);
        });

        // Поменять направление
        directions[index] = direction === 'asc' ? 'desc' : 'asc';

        // Добавить новую строку
        newRows.forEach(function(newRow) {
            tableBody.appendChild(newRow);
        });
    };

    [].forEach.call(headers, function(header, index) {
        $(header).find('.sort-btn').on('click', function() {
            // console.log(index);
            sortColumn(index);
        });
    });
});
//СОРТИРОВКА
//ZOOM
// .crm-table {
//     zoom: 130%;
//     margin-top: 20px;
//     // transform: scale(1.3);
//     // transform: translate(0px 20px);
// }
// .crm-header {
//     zoom: 130%;
// }
// @media (min-width: 1680px) {
//     .crm-table {
//         zoom: 120%;
//     }
//     @-moz-document url-prefix() {
//         .crm-table {
//             transform: scale(1.2);
//             transform-origin: left top;
//             width: calc(100% / 1.2);
//             height: calc(100% / 1.2);
//         }
//     }
// }
//ZOOm
// const elements = [$('.colum-sum')].length;
// console.log(elements)

$('.colum-sum').text((i, text) => {
    const price = text.split(' ');
    return `${(+price).toLocaleString('ru-RU',{ minimumFractionDigits: 2 }).replace(',','.')}`;
});

// $('.phone').mask('999 999 999 99 99');

// const price = text.split('');
// text = text.substring(3) + " " + text.substring(0, 6) + ' ' + text.substring(0, 9) + ' ' + text.substring(0, 11) + ' ';
// console.log(+text)
// $('.tel-number').html(text);
// const price = text.split(' ');
// // console.log(price)
// return `${(+price).toLocaleString()}`;

// Валидация телефона
function orderTelValidation(value, delimeter = ' ', symbol_block_group = [2, 2, 3, 3], dir = 'rtl') {

    if (!value) return '';

    // оставляем только цифры
    // value = value.replace(/\D/g, '');
    value = $.trim(value);

    let valueArray = value.split('');
    // меняем местами символы если направление rtl
    if (dir !== 'rtl') valueArray = valueArray.reverse();

    let newValues = [];
    //let count_next_symbol = symbol_block_group[0];

    for (let i = 0, count = symbol_block_group.length; i < count; i++) {

        // получаем часть строки по индексу с блока группы
        let current_val_array = valueArray.splice(-1 * symbol_block_group[i], symbol_block_group[i]);
        //console.log(current_val_array);
        if (!current_val_array || current_val_array.length < 1) break;

        let current_val = current_val_array.join('');
        //count_next_symbol += symbol_block_group[i];

        newValues[i] = current_val;
    }


    if (dir === 'rtl') newValues = newValues.reverse();

    let restVal = '';
    if (!!valueArray && valueArray.length > 0) {
        restVal = valueArray.join('');
    }

    newValues.unshift(restVal);

    let validate_value = newValues.join(delimeter);

    if (validate_value[0] === delimeter) validate_value = validate_value.slice(1);
    /*for(let i = 0, count = newValues.length; i < count; i++){
      
    }*/

    //console.log(validate_value);

    return validate_value;
};
// Валидация телефона
window.onload = function() {
    let telNumber = document.querySelectorAll('.tel-number');
    // console.log(title);
    for (let i = 0; i < telNumber.length; i++) {
        let format = orderTelValidation(telNumber[i].innerText);
        telNumber[i].innerText = format;
    }
};
// Валидация телефона
//task block
const btnActual = document.querySelector(".actual");
const btnDone = document.querySelector(".done");
const blockActual = document.querySelector(".task-toggle-actual");
const blockDone = document.querySelector(".task-toggle-done");

btnDone.addEventListener("click", () => {
    blockActual.style.display = "none";
    blockDone.style.display = "block";
    btnDone.classList.add("btn-style");
    btnActual.classList.remove("btn-style");
});
btnActual.addEventListener("click", () => {
    blockActual.style.display = "block";
    blockDone.style.display = "none";
    btnDone.classList.remove("btn-style");
    btnActual.classList.add("btn-style");
});

const btnOpenTask = document.getElementById("inbox");
const taskBlock = document.querySelector(".task-block");

btnOpenTask.addEventListener("click", () => {
    taskBlock.classList.toggle("task-block-toggle");
    btnOpenTask.classList.toggle("selected-nav");
});

document.addEventListener("mousedown", function(e) {
    if (e.target.closest(".task-block") === null && !e.target.closest("ui-datepicker-buttonpane") === null && !e.target.closest("ui-datepicker-header") === null && !e.target.closest("ui-datepicker-calendar") === null && !e.target.closest("ui-datepicker") === null) {
        taskBlock.classList.remove("task-block-toggle");
        btnOpenTask.classList.remove("selected-nav");
    }
});

const btnTaskPlus = document.querySelector(".btnplus7");
const wrapTaskPlus = document.querySelector(".task-plus");
const btnTaskCancel = document.querySelector(".btn-cancel");
const btnTaskAccept = document.querySelector(".btn-accept");
const btnTaskLink = document.querySelector(".task-link");
const blockTaskList = document.querySelector(".task-list");

btnTaskPlus.addEventListener("click", () => {
    wrapTaskPlus.classList.toggle("task-block-toggle");
    btnTaskPlus.style.visibility = "hidden";
    btnTaskLink.style.display = "none";
    blockTaskList.style.display = "none";
});
btnTaskCancel.addEventListener("click", () => {
    wrapTaskPlus.classList.toggle("task-block-toggle");
    btnTaskPlus.style.visibility = "visible";
    btnTaskLink.style.display = "block";
    blockTaskList.style.display = "block";
});
btnTaskAccept.addEventListener("click", () => {
    wrapTaskPlus.classList.toggle("task-block-toggle");
    btnTaskPlus.style.visibility = "visible";
    btnTaskLink.style.display = "block";
    blockTaskList.style.display = "block";
});

$(".recall-clients .dropdown2 .btn .btn-span").click(function() {
    let arrbtn = $(".dropdown2 .ul-block");
    arrbtn.map((x) => $(".dropdown2 .ul-block").removeClass("toggle"));
    $(".recall-clients .dropdown2 .ul-block").toggle();
});
$(".recall-clients .dropdown2 .ul-block .list").click(function() {
    let text = $(this).html();
    $(".recall-clients .dropdown2 .btn .btn-span").html(text);
    $(".recall-clients .dropdown2 .ul-block").hide();
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown2"))
        $(".recall-clients .dropdown2 .ul-block").hide();
});
//task block

//notification
const btnNot = document.querySelector(".btn-not");
const btnTech = document.querySelector(".btn-tech");

const blockNote = document.querySelector(".block-not");
const techNote = document.querySelector(".tech-note");

btnNot.addEventListener("click", () => {
    btnNot.classList.add("btn-style");
    blockNote.style.display = "block";
    techNote.style.display = "none";
    btnTech.classList.remove("btn-style");
});
btnTech.addEventListener("click", () => {
    blockNote.style.display = "none";
    techNote.style.display = "block";
    btnTech.classList.add("btn-style");
    btnNot.classList.remove("btn-style");
});

const notificationBtn = document.querySelector(".notification-btn");
const notificationBlock = document.querySelector(".notifications");

notificationBtn.addEventListener("click", () => {
    notificationBlock.classList.toggle("notification-toggle");
    importBlock.classList.remove("import-toggle");
    modulBlock.classList.remove("modul-toggle");
});
document.addEventListener("mousedown", function(e) {
    if (e.target.closest(".btn-header") === null && e.target.closest(".notifications") === null && e.target.closest(".import-block") === null && e.target.closest(".modul-block") === null) {
        notificationBlock.classList.remove("notification-toggle");
    }
});
//notification
//import block
const importBtn = document.querySelector(".btn-accept");
const importBlock = document.querySelector(".import-block");

importBtn.addEventListener("click", () => {
    importBlock.classList.toggle("import-toggle");
    notificationBlock.classList.remove("notification-toggle");
    modulBlock.classList.remove("modul-toggle");
});

document.addEventListener("mousedown", function(e) {
    if (e.target.closest(".btn-header") === null && e.target.closest(".notifications") === null && e.target.closest(".import-block") === null && e.target.closest(".modul-block") === null) {
        importBlock.classList.remove("import-toggle");
    }
});
//import block
//modul block
const modulBtn = document.querySelector(".btn-settings");
const modulBlock = document.querySelector(".modul-block");

modulBtn.addEventListener("click", () => {
    modulBlock.classList.toggle("modul-toggle");
    notificationBlock.classList.remove("notification-toggle");
    importBlock.classList.remove("import-toggle");
});

document.addEventListener("mousedown", function(e) {
    if (e.target.closest(".btn-header") === null && e.target.closest(".notifications") === null && e.target.closest(".import-block") === null && e.target.closest(".modul-block") === null) {
        modulBlock.classList.remove("modul-toggle");
    }
});
//modul block
// nav sidebar

const btnCrmNav = document.getElementById("sidebar");
const navWrap = document.querySelector(".nav-crm");
const navCrmPlus = document.querySelectorAll(".nav-desc");


btnCrmNav.addEventListener("click", () => {
    navWrap.classList.toggle("nav-crm-plus");
    navCrmPlus.forEach((x) => x.classList.toggle("nav-desc-toggle"));
    btnCrmNav.classList.toggle("selected-nav");
});

document.addEventListener("mousedown", function(e) {
    if (e.target.closest(".nav-crm") === null) {
        navWrap.classList.remove("nav-crm-plus");
        // navWrap.classList.remove('nav-crm-overflow');
        navCrmPlus.forEach((x) => x.classList.remove("nav-desc-toggle"));
        btnCrmNav.classList.remove("selected-nav");
    }
});

//nav sidebar

//drop nav btn

$(".zakaz-btn").click(function() {
    // let dropBlock = $(".drop-nav .zakaz-block");
    // dropBlock.map((x) => $(".drop-nav .zakaz-block").removeClass('block-visible'));
    $(".zakaz-drop-block").toggleClass('block-visible');
    // let arrbtn = $(".dropdown2 .ul-block");
    // arrbtn.map((x) => $(".dropdown2 .ul-block").removeClass("toggle"));
    // $('.nav-crm').prop("data-simplebar", "true");
    $(".animation-arrow").css({ 'display': 'block' });

});
$(".catalog-btn").click(function() {
    $(".catalog-drop-block").toggleClass('block-visible');
});
$(".contact-btn").click(function() {
    $(".contact-drop-block").toggleClass('block-visible');
});
$(".send-product-btn").click(function() {
    $(".send-drop-block").toggleClass('block-visible');
});
$(".warehouse-btn").click(function() {
    $(".warehouse-drop-block").toggleClass('block-visible');
});
$(".templates-btn").click(function() {
    $(".templates-drop-block").toggleClass('block-visible');
});
$(".modul-btn").click(function() {
    $(".modul-drop-block").toggleClass('block-visible');
});
$(".statistic-btn").click(function() {
    $(".statistic-drop-block").toggleClass('block-visible');
});
$(".mailing-btn").click(function() {
    $(".mailing-drop-block").toggleClass('block-visible');
});
$(".setting-btn").click(function() {
    $(".setting-drop-block").toggleClass('block-visible');
});
$(".trash-btn").click(function() {
    $(".trash-drop-block").toggleClass('block-visible');
});
$(".info-btn").click(function() {
    $(".info-drop-block").toggleClass('block-visible');
});
$(".video-btn").click(function() {
    $(".video-drop-block").toggleClass('block-visible');
});
var support = (function() {
    if (!window.DOMParser) return false;
    var parser = new DOMParser();
    try {
        parser.parseFromString('x', 'text/html');
    } catch (err) {
        return false;
    }
    return true;
})();

var textToHTML = function(str) {

    if (support) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body.innerHTML;
    }
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;

};

$(".site-tooltip").hover(function(xy) {
    let textttttttt = 'Google.com/search?q=%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C+%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80&hl=ru&sxsrf=AOaemvLSwcqe4O0pliCouC1ZqD7cJYYI_Q1633082611209&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjBsrfn-qjzAhU8gf0HHfxGAQQQ_AUoAXoECAIQAw&biw=1440&bih=703&dpr=2';
    $("#tooltipBtn").css("font-size", "11px");

    if ($('.site')[0].value !== "") {
        let re = new RegExp($('.site')[0].value, "gui");
        let text_pr = textttttttt.replace(re, x => '<span style="background: #FFE600;color: black;">' + x + '</span>');
        // console.log(text_pr)
        document.getElementById('tooltipBtn').innerHTML = textToHTML(text_pr);
    } else {
        document.getElementById('tooltipBtn').innerText = textttttttt;
    }
    // $('#tooltipBtn').text(pP);
    let posElement = this.getBoundingClientRect();
    let blockWidth = $(this).width();
    let blockHeight = $(this).height();
    let screenWidth = document.body.clientWidth;
    let screenHeight = document.body.clientHeight;
    let widthTooltip = $('#tooltipBtn').width();
    let heightTooltip = $('#tooltipBtn').height();
    $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
    $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
    if (screenWidth < posElement.x + widthTooltip + blockWidth) {
        $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
    }
}).mouseleave(function(e) {
    $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");
});
$(".crm-main-table .max-lenght-comment").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 30) {
        text = text.substring(0, 28) + "...";
        $(this).text(text);
        $(this).hover(function(xy) {
            $('#tooltipBtn').text(boxMemory);
            if ($('.comment-input')[0].value !== "") {
                let re = new RegExp($('.comment-input')[0].value, "gui");
                let text_pr = boxMemory.replace(re, x => '<span style="background: #FFE600; color: black;">' + x + '</span>');
                // console.log(text_pr)
                document.getElementById('tooltipBtn').innerHTML = textToHTML(text_pr);
            } else {
                document.getElementById('tooltipBtn').innerText = boxMemory;
            }
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
        });
    }
});

$('.countFindFunction').hover(function(xy) {

    $('#tooltipBtn').html(`Элементов в фильтре:<br>- найдено ${dataFind}<br>- выбрано ${countList}`);

    let posElement = this.getBoundingClientRect();
    let blockWidth = $(this).width();
    let blockHeight = $(this).height();
    let screenWidth = document.body.clientWidth;
    let screenHeight = document.body.clientHeight;
    let widthTooltip = $('#tooltipBtn').width();
    let heightTooltip = $('#tooltipBtn').height();
    $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
    $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
    if (screenWidth < posElement.x + widthTooltip) {
        $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
    }
    if (posElement.x < 110) {
        $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
    }
    if (screenHeight < posElement.y + heightTooltip + 25) {
        $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
    }
}).mouseleave(function(e) {
    $("#tooltipBtn").css({ 'animation': '' });
});

//drop nav btn
//сортировка в кнопках поиск
let el = null;
let text = [];
let lastIndex = 0;
var countFind = 0;
var dataFind = 0;
$('.find').on('keyup', function(e) {
    let idx = $('.find').index(this);
    if (el === null || lastIndex !== idx) {
        el = [...$(e.currentTarget.parentElement).find('.list-large')];
        text = [...el.map(x => $(x).find('.findFunction')[0].innerText)]
    }
    for (let index = 0; index < el.length; index++) {
        const element = el[index];
        // console.log($(element).find('.product-item'), e.currentTarget.value);
        if (!text[index].toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
            $(element).css('display', 'none');
        } else {
            if ($('.find')[idx].value !== "" && idx !== 0) {
                let re = new RegExp($('.find')[idx].value, "gui");
                let text_pr = text[index].replace(re, x => '<span class="findUnderline">' + x + '</span>');
                // let text_pr = text[index].replace(re, x => '<span class="findUnderline" style="background: #FFE600;color: black;">' + x + '</span>');
                // countFind += 1;
                if (text[index] !== 'Все') {
                    countFind += 1;
                }
                $(element).css('display', 'block')
                $($(element).find('.findFunction')[0]).html(textToHTML(text_pr));

            } else {
                if (text[index] !== 'Все') {
                    countFind += 1;
                }
                // countFind += 1;
                $($(element).find('.findFunction')[0]).text(text[index]);
                $(element).css('display', 'block')
            }
            //    console.log(text_pr)
            // document.querySelector('.product-list.list-item').innerHTML = textToHTML(text_pr);
        }
    }
    // console.log($(this).parents('.btn-wrap-large').find('.countFindFunction'), countFind);
    $(this).parents('.btn-wrap-large').find('.countFindFunction').html(' (' + countFind + '/' + '<span>' + countList + '</span>' + ')');
    dataFind = countFind;
    countFind = 0;
    lastIndex = idx;
    // ).find('.list-large'));
    // e.currentTarget.value
});