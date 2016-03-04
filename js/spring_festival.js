/**
 * Created by Administrator on 2016/1/19.
 */
window.onload = function() {
    $(".lantern,.lantern-small,.spring-bottom,.fes-main,#particles-js").show();
    showOverlay();
}

$(".fes-close").on("click", function() {
    $(".lantern,.lantern-small,.spring-bottom,.fes-main,#particles-js").hide();
    hideOverlay();
})

/* 显示遮罩层 */
function showOverlay() {
    $(".fes-overlay").height(pageHeight());
    $(".fes-overlay").width(pageWidth());

    $(".fes-overlay").fadeTo(200, 0.5);
}

/* 隐藏遮罩层 */
function hideOverlay() {
    $(".fes-overlay").fadeOut(200);
}

/* 当前页面高度 */
function pageHeight() {
    return document.body.scrollHeight;
}

/* 当前页面宽度 */
function pageWidth() {
    return document.body.scrollWidth;
}