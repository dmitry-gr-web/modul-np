//dropMenu
$('body').on('click', ".btn-menu", function() {
    $(".menu-list").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
    let oneMenuOpen = $(".block-menu");
    $($(this).parent('.dropMenu').find('ul')).toggleClass('block-menu-toggle');
    oneMenuOpen.map((_, i) => {
        if (!$(this).parents('.dropMenu').find('ul').hasClass(i.classList[1])) {
            $(i).removeClass("block-menu-toggle");
        }
        if ($('.block-menu-toggle').length >= 2) {
            $('.block-menu').removeClass("block-menu-toggle");
            $(this).parents('.dropMenu').find('ul').addClass('block-menu-toggle');
        }
    });
});
$('body').on('click', ".menu-list", function() {
    const memory = $(this).html();
    $(this).siblings('.menu-select-filter').removeClass('menu-select-filter');
    $(this).addClass('menu-select-filter');
    $($(this).parents('.dropMenu').find('.btn-menu')).html(memory);
    $(".block-menu").removeClass('block-menu-toggle');

});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropMenu")) {
        $(".block-menu").removeClass('block-menu-toggle');
    }
});


//dropMenu Search
// $(".btn-menu-search").click(function() {
//     $(".menu-list-search").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
//     let oneMenuOpen = $(".block-menu-search");
//     // console.log($(".dropMenu-search"))
//     $($(this).siblings('.block-menu-search')).toggleClass('block-menu-toggle');
//     oneMenuOpen.map((_, i) => {
//         if (!$(this).siblings('.block-menu-search').hasClass(i.classList[1])) {
//             $(i).removeClass("block-menu-toggle");
//         }
//     });
// });
// $(".menu-list-search").click(function() {
//     const memory = $(this).text();
//     $($(this).parents('.dropMenu-search').find('.btn-menu-search')).html(memory);
//     $(".block-menu-search").removeClass('block-menu-toggle');
//     console.log($(this).closest().find('.btn-menu-search'));
// });
// $(document).bind("click", function(e) {
//     let $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("dropMenu-search")) {
//         $(".block-menu-search").removeClass('block-menu-toggle');
//     }
// });

//dropFilter
// let full_weight = 0;
// console.log(full_weight)
$('body').on('click', ".btn-menu-filter", function() {
    $(".menu-list-filter").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
    let oneMenuOpen = $(".block-menu-filter");
    $($(this).parent('.dropFilter').find('ul')).toggleClass('block-menu-toggle');
    oneMenuOpen.map((_, i) => {
        if (!$(this).parents('.dropFilter').find('ul').hasClass(i.classList[1])) {
            $(i).removeClass("block-menu-toggle");
        }
        if ($('.block-menu-toggle').length >= 2) {
            $('.block-menu-filter').removeClass("block-menu-toggle");
            $(this).parents('.dropFilter').find('ul').addClass('block-menu-toggle');
        }
    });
    // full_weight = 0 + $($('.btn-menu-filter span')[0]).outerWidth();
    // console.log(full_weight)

});



// let flag = true;


$('body').on('click', ".menu-list-filter", function() {
    const memory = $(this).html();

    $(this).addClass('menu-select-filter');
    if ($($(this).parents('.dropFilter').find('.btn-menu-filter')).children("." + $(this)[0].firstChild.classList.value).length !== 0) {
        $(this).removeClass('menu-select-filter');
        // $($(this).parents('.dropFilter').find('.btn-menu-filter')).children("." + $(this)[0].firstChild.classList.value).each(function() {
        //     full_weight -= $(this).outerWidth();
        // });
        $($(this).parents('.dropFilter').find('.btn-menu-filter')).children("." + $(this)[0].firstChild.classList.value).remove();

    } else {

        // let memText = $(this).parents('.dropFilter').find('.btn-menu-filter').children('span:last-child').children('.btn-link').html();
        // console.log(memText)
        // $($(this).parents('.dropFilter').find('.btn-menu-filter')).children("." + $(this)[0].firstChild.classList.value).each(function() {
        //     full_weight += $(this).outerWidth();
        //     if (full_weight > 400) {
        //         $(this).parents('.dropFilter').find('.btn-menu-filter').find('.btn-link:last-child').html('...');
        //     }
        // });
        $($(this).parents('.dropFilter').find('.btn-menu-filter')).append(memory);
    }
});


$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropFilter")) {
        $(".block-menu-filter").removeClass('block-menu-toggle');
    }
});


//selectMenu
$(".button-order").click(function() {
    $(".np-auto-order").css('display', 'block');
    $(".np-auto-status").css('display', 'none');
    $(this).parent().addClass('btn-np-select');
    $(".button-status").parent().removeClass('btn-np-select');

});
$(".button-status").click(function() {
    $(".np-auto-order").css('display', 'none');
    $(".np-auto-status").css('display', 'block');
    $(this).parent().addClass('btn-np-select');
    $(".button-order").parent().removeClass('btn-np-select');
});

$(".add-new-np").on('click', function() {
    // const memoryBoxOrder = $('.np-auto-order').find('tr:nth-child(2)').clone(true);
    // const memoryBoxStatus = $('.np-auto-status').find('tr:nth-child(2)').clone(true);
    const createOrderStroke = '<tr class="stroke-np-order"><td><div class="dropMenu"><div class="btn-menu day-last">1 день до платного хранения</div><ul class="block-menu ostalosDney-np" data-simplebar="" data-simplebar-auto-hide="false"><li class="menu-list menu-select-filter">1 день до платного хранения</li><li class="menu-list">2 дня до платного хранения</li><li class="menu-list">3 дня до платного хранения</li><li class="menu-list">4 дня до платного хранения</li><li class="menu-list">5 дней до платного хранения</li></ul></div></td><td><div class="dropFilter"><div class="btn-menu-filter"><span class="s-1"><span class="color-91d100 color-form"></span><span class="btn-link">Принят</span></span></div><ul class="block-menu-filter ostalosDney-np" data-simplebar="" data-simplebar-auto-hide="false"><li class="menu-list-filter menu-select-filter"><span class="s-1"><span class="color-91d100 color-form"></span><span class="btn-link">Принят</span></span></li><li class="menu-list-filter"><span class="s-2"><span class="color-515151 color-form"></span><span class="btn-link">Новый</span></span></li><li class="menu-list-filter"><span class="s-3"><span class="color-fd7777 color-form"></span><span class="btn-link">Отказ</span></span></li><li class="menu-list-filter"><span class="s-4"><span class="color-e2d317 color-form"></span><span class="btn-link">Отправлен</span></span></li><li class="menu-list-filter"><span class="s-5"><span class="color-c6b922 color-form"></span><span class="btn-link">Передан</span></span></li><li class="menu-list-filter"><span class="s-6"><span class="color-928c42 color-form"></span><span class="btn-link">Упакован</span></span></li><li class="menu-list-filter"><span class="s-7"><span class="color-2c8b11 color-form"></span><span class="btn-link">Деньги получены</span></span></li><li class="menu-list-filter"><span class="s-8"><span class="color-00CC00 color-form"></span><span class="btn-link">Завершён</span></span></li><li class="menu-list-filter"><span class="s-9"><span class="color-da291c color-form"></span><span class="btn-link">Возврат (в пути)</span></span></li><li class="menu-list-filter"><span class="s-10"><span class="color-FF0000 color-form"></span><span class="btn-link">Возврат (завершён)</span></span></li></ul></div></td><td><button class="np-delete"></button></td></tr>';
    const createStatusStroke = '<tr class="stroke-np-status"><td><div class="dropMenu"><div class="btn-menu day-last">Нова пошта оч1</div><ul class="block-menu status-np" data-simplebar="" data-simplebar-auto-hide="false"><li class="menu-list menu-select-filter">Нова пошта оч1</li><li class="menu-list">Нова пошта оч2</li><li class="menu-list">Нова пошта оч3</li><li class="menu-list">Нова пошта оч4</li><li class="menu-list">Нова пошта оч5<li></ul></div></td><td><div class="dropMenu"><div class="btn-menu status-crm-btn"><span class="s-1"><span class="color-91d100 color-form"></span><span class="btn-link">Принят</span></span></div><ul class="block-menu status-crm" data-simplebar="" data-simplebar-auto-hide="false"><li class="menu-list menu-select-filter"><span class="s-1"><span class="color-91d100 color-form"></span><span class="btn-link">Принят</span></span></li><li class="menu-list"><span class="s-2"><span class="color-515151 color-form"></span><span class="btn-link">Новый</span></span></li><li class="menu-list"><span class="s-3"><span class="color-fd7777 color-form"></span><span class="btn-link">Отказ</span></span></li><li class="menu-list"><span class="s-4"><span class="color-e2d317 color-form"></span><span class="btn-link">Отправлен</span></span></li><li class="menu-list"><span class="s-5"><span class="color-c6b922 color-form"></span><span class="btn-link">Передан</span></span></li><li class="menu-list"><span class="s-6"><span class="color-928c42 color-form"></span><span class="btn-link">Упакован</span></span></li><li class="menu-list"><span class="s-7"><span class="color-2c8b11 color-form"></span><span class="btn-link">Деньги получены</span></span></li><li class="menu-list"><span class="s-8"><span class="color-00CC00 color-form"></span><span class="btn-link">Завершён</span></span></li><li class="menu-list"><span class="s-9"><span class="color-da291c color-form"></span><span class="btn-link">Возврат (в пути)</span></span></li><li class="menu-list"><span class="s-10"><span class="color-FF0000 color-form"></span><span class="btn-link">Возврат (завершён)</span></span></ul></div></td><td><div class="dropFilter"><div class="btn-menu-filter primenyat-k-btn"><span class="s-1"><span class="color-91d100 color-form"></span><span class="btn-link">Принят</span></span></div><ul class="block-menu-filter primenyat-k" data-simplebar="" data-simplebar-auto-hide="false"><li class="menu-list-filter menu-select-filter"><span class="s-1"><span class="color-91d100 color-form"></span><span class="btn-link">Принят</span></span></li><li class="menu-list-filter"><span class="s-2"><span class="color-515151 color-form"></span><span class="btn-link">Новый</span></span></li><li class="menu-list-filter"><span class="s-3"><span class="color-fd7777 color-form"></span><span class="btn-link">Отказ</span></span></li><li class="menu-list-filter"><span class="s-4"><span class="color-e2d317 color-form"></span><span class="btn-link">Отправлен</span></span></li><li class="menu-list-filter"><span class="s-5"><span class="color-c6b922 color-form"></span><span class="btn-link">Передан</span></span></li><li class="menu-list-filter"><span class="s-6"><span class="color-928c42 color-form"></span><span class="btn-link">Упакован</span></span></li><li class="menu-list-filter"><span class="s-7"><span class="color-2c8b11 color-form"></span><span class="btn-link">Деньги получены</span></span></li><li class="menu-list-filter"><span class="s-8"><span class="color-00CC00 color-form"></span><span class="btn-link">Завершён</span></span></li><li class="menu-list-filter"><span class="s-9"><span class="color-da291c color-form"></span><span class="btn-link">Возврат (в пути)</span></span></li><li class="menu-list-filter"><span class="s-10"><span class="color-FF0000 color-form"></span><span class="btn-link">Возврат (завершён)</span></span></li></ul></div></td><td><button class="np-delete"></button></td></tr>';
    if ($('.btn-auto-order').hasClass('btn-np-select')) {
        $('.np-auto-order').append(createOrderStroke);

    }
    if ($('.btn-auto-status').hasClass('btn-np-select')) {
        $('.np-auto-status').append(createStatusStroke);
    }
});
$("body").on('click', ".np-delete", function(e) {
    if ($('.btn-auto-status').hasClass('btn-np-select') && $('.np-auto-status').find('.stroke-np-status').length > 1) {
        $(this).parents('tr').remove();
    }
    if ($('.btn-auto-order').hasClass('btn-np-select') && $('.np-auto-order').find('.stroke-np-order').length > 1) {
        $(this).parents('tr').remove();
    }
    e.stopPropagation();
});
//modul NP open/save
$(".su").on('click', function(e) {
    $(".modul-np").toggleClass('modul-np-toggle');
    $(".bg-blur").toggleClass('on-off');
    $(".container-info-settings").css('filter', 'blur(4px)');
    if (!$(".bg-blur").hasClass('on-off')) {
        $(".container-info-settings").css('filter', 'none');
    }
    e.stopPropagation();
});
$(".np-close").on('click', function() {
    $(".modul-np").toggleClass('modul-np-toggle');
    $(".bg-blur").toggleClass('on-off');
    $(".container-info-settings").css('filter', 'none');
});
$(".save-btn").on('click', function() {
    $(".modul-np").toggleClass('modul-np-toggle');
    $(".bg-blur").toggleClass('on-off');
    $(".container-info-settings").css('filter', 'none');
});
// $(document).bind("click", function(e) {
//     let $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("modul-np")) {
//         $(".modul-np").removeClass('modul-np-toggle');
//     }
// });
$(document).on("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("modul-np")) {
        $(".modul-np").removeClass('modul-np-toggle');
        $(".bg-blur").removeClass('on-off');
        $(".container-info-settings").css('filter', 'none');
        // !$clicked.parents().hasClass("modul-np") &&
    }
});
//modul NP open
// console.log($('.np-auto-order').find('.stroke-np-order').length);
//Tooltip
$(".np-tooltip").each(function(e, item) {
    let ostalosDney = 'Оставшееся количество дней до платного хранения';
    let primenyatK = 'Правило будет применяться только к заказам находящимся в выбранных ниже статусах CRM';
    let autoBackOrder = 'Позволяет автоматически вернуть заказ отправителю, до наступления платного хранения';
    let autoChangeStatus = 'Позволяет автоматически изменить статус заказа в CRM, при обновлении "ТТН статуса" почтовой службы. Данные почтовой службы обновляются автоматически каждый час';
    let defaultMeaning = 'Данные которые будут подставляться автоматически при создании товарно-транспортной накладной. Данные можно будет изменить непосредственно при создании ТТН';
    let statusMail = 'Если "ТТН статус" почтовой службы равен выбранному ниже';
    let statusCRM = 'Cтатуc заказа в CRM будет автоматически изменён на выбранный ниже';
    let primenyatK2 = 'Поиск заказов соответствующих настроенному правилу, производится по выбранным ниже статусам CRM';

    $(this).hover(function(xy) {
        $("#tooltipBtn").css({ 'font-size': '14px' });
        if ($(this).hasClass('ostalosDney')) {
            $('#tooltipBtn').text(ostalosDney);
        }
        if ($(this).hasClass('autoBackOrder')) {
            $('#tooltipBtn').text(autoBackOrder);
        }
        if ($(this).hasClass('primenyatK2')) {
            $('#tooltipBtn').text(primenyatK2);
        }
        if ($(this).hasClass('statusCRM')) {
            $('#tooltipBtn').text(statusCRM);
        }
        if ($(this).hasClass('primenyatK')) {
            $('#tooltipBtn').text(primenyatK);
        }
        if ($(this).hasClass('statusMail')) {
            $('#tooltipBtn').text(statusMail);
        }
        if ($(this).hasClass('autoChangeStatus')) {
            $('#tooltipBtn').text(autoChangeStatus);
        }
        if ($(this).hasClass('defaultMeaning')) {
            $('#tooltipBtn').text(defaultMeaning);
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
        $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
    });
});
//Tooltip