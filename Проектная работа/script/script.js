$(document).ready(function () {
    let hiddenRow = $(".expandable");
    $(".expand-button").click(function () {
        hiddenRow.toggleClass("hidden");
        if (hiddenRow.is(":visible")) { //видемый ли этот элемент
            $(".expand-button").html("Уменшить");
        } else {
            $(".expand-button").html("Расширить");
        }
    });
    $(".play-button").click(function () {
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".modal-close").click(function () {
        $(".modal-canvas").toggleClass("hidden");
    });
});