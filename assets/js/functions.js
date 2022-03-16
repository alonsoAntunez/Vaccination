function openDesc(item, item2, item3, item4, e) {
    $("#" + item).slideToggle(300);
    $("#" + item2).toggleClass('activeToggle');
    $("." + item3).fadeToggle(0);
    $("." + item4).fadeToggle(0);
    event.preventDefault();
};