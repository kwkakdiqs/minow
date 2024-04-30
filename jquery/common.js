
// 네비게이션 호버
$('#gnbInner > li').hover(function () {
    $(this).children('.snb').show();
}, function () {
    $('.snb').hide();
});

// 검색창 클릭
$('.search').click(function (e) {
    e.preventDefault();
    $('#search').slideToggle(400);
});

// 카테고리 슬라이드

$(".nextBtn .right").click(function (e) {
    e.preventDefault();
    $("#CategoryWrap .wrapDiv:not(:animated)").animate({ scrollLeft: "+=320px" })
})
$(".nextBtn .left").click(function (e) {
    e.preventDefault();
    $("#CategoryWrap .wrapDiv:not(:animated)").animate({ scrollLeft: "-=320px" })
})


// 카테고리 클릭 책바꾸기
// $('#CategoryWrap li#kr .wrapDiv').show();

$('#CategoryWrap li').click(function (e) {
    e.preventDefault();
    $('.wrapDiv').hide();
    let wrapDiv = $(this).children('.wrapDiv');
    wrapDiv.toggle();
});

$('#CategoryWrap li a').click(function (e) {
    $('#CategoryWrap li a.selected').removeClass('selected');
    $(this).addClass('selected');
})

// 신간도서 슬라이드

$(".next1").click(function (e) {
    e.preventDefault();
    $(".slideBtn").animate({ scrollLeft: "-=160px" });
});

$(".next2").click(function (e) {
    e.preventDefault();
    $(".slideBtn").animate({ scrollLeft: "+=160px" });
});

// 신간도서 클릭 책바꾸기

$('.btnWrap a').click(function (e) {
    e.preventDefault();
    $('#newBookList li').hide();
    let index = $(this).index();
    $('#newBookList li').eq(index).show();
});

// 베스트셀러 슬라이드

$(".bast1").click(function (e) {
    e.preventDefault();
    $(".slideBtn2").animate({ scrollLeft: "-=160px" });
});

$(".bast2").click(function (e) {
    e.preventDefault();
    $(".slideBtn2").animate({ scrollLeft: "+=160px" });
});

// 베스트셀러 클릭 책바꾸기
$('.btnWrap2 a').click(function (e) {
    e.preventDefault();
    $('#bestBookList li').hide();
    let index = $(this).index();
    $('#bestBookList li').eq(index).show();
});

$("#gnbMenu").click(function(){
    $('#gnbInner').css({display: 'block'});
});

if ($(window).width() <= 500) {
    $(".next2").click(function (e) {
        e.preventDefault();
        let eIndex = $('#newBookList li:visible').index();
        let nextIndex = eIndex + 1;
        if (nextIndex < $('#newBookList li').length) {
            $('#newBookList li').eq(eIndex).hide();
            $('#newBookList li').eq(nextIndex).show();
        }
    });

    $(".next1").click(function (e) {
        e.preventDefault();
        let eIndex = $('#newBookList li:visible').index();
        let prevIndex = eIndex - 1;
        if (prevIndex >= 0) {
            $('#newBookList li').eq(eIndex).hide();
            $('#newBookList li').eq(prevIndex).show();
        }
    });
}
// 
if ($(window).width() <= 500) {
    $(".bast2").click(function (e) {
        e.preventDefault();
        let eIndex = $('#bestBookList li:visible').index();
        let nextIndex = eIndex + 1;
        if (nextIndex < $('#bestBookList li').length) {
            $('#bestBookList li').eq(eIndex).hide();
            $('#bestBookList li').eq(nextIndex).show();
        }
    });

    $(".bast1").click(function (e) {
        e.preventDefault();
        let eIndex = $('#bestBookList li:visible').index();
        let prevIndex = eIndex - 1;
        if (prevIndex >= 0) {
            $('#bestBookList li').eq(eIndex).hide();
            $('#bestBookList li').eq(prevIndex).show();
        }
    });
}