$(document).ready(function () {
    openAlert();
    $("#alert-close").on("click", close);
});

function openAlert() {
    if (Cookies.get('alert_closed') !== "true") {
        $('#alert-stripe').collapse('show');
    }
}

function close() {
    $("#alert-stripe").collapse('hide');

    saveCloseToCookie();
}

function saveCloseToCookie() {
    Cookies.set("alert_closed", 'true');
}

