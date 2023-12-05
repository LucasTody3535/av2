// --------------------------- ELEMENTS ---------------------------

const $window = $(window);
const $body = $(document.body);

// > LOGIN PAGE
const $accessError = $("#access-error");
const $formButton = $("#form-btn");
const $formFields = $(".form-field");
const $loginModal = $("#login-modal");
const $loginModalHeading = $("#login-modal-heading");

// > HOME PAGE
const $home = $("#home");

// --------------------------- ACTIONS ---------------------------

// > LOGIN MODAL

function applyResponsivenessToLoginModal(width) {
    if(width <= WINDOW_MOBILE_BREAKPOINT) {
        $loginModal.css({
            "height": "calc(100% - 20px)",
            "width": "calc(100% - 20px)",
            "border": "none",
            "position": "unset"
        });
    } else {
        $loginModal.css({
            "height": "300px",
            "width": "400px",
            "border": "1px solid rgb(68, 68, 68)",
            "position": "relative"
        });
    }
}

function hideLoginModal() {
    $loginModal.slideUp();
}

// > LOGIN MODAL HEADING

function applyResponsivenessToLoginModalHeading(width) {
    if(width <= WINDOW_MOBILE_BREAKPOINT) {
        $loginModalHeading.css({
            "top": "20px",
            "padding": "10px 0",
            "border-bottom": "1px solid rgba(0, 0, 0, 0.2)",
            "width": "80%",
            "text-align": "center",
            "left": "10%",
            "font-size": "20px"
        });
    } else {
        $loginModalHeading.css({
            "top": "-15px",
            "padding": "5px 10px",
            "border-bottom": "none",
            "width": "unset",
            "text-align": "unset",
            "left": "unset",
            "font-size": "unset"
        });
    }
}

// > ACCESS ERROR

function showAccessError() {
    $accessError.fadeIn();
}

function hideAccessError() {
    $accessError.fadeOut();
}

function applyResponsivenessToAccessErrorElement(width) {
    if(width <= WINDOW_MOBILE_BREAKPOINT) {
        $accessError.css({
            "top": "150px",
            "font-size": "25px",
            "left": "60px"
        });
    } else {
        $accessError.css({
            "bottom": "70px",
            "font-size": "15px",
            "left": "115px"
        });
    }
}

// > FORM INPUTS

const nameInputValue = () => $formFields.children("input")[0].value;
const passwordInputValue = () => $formFields.children("input")[1].value;

// > HOME

function showHome() {
    $home.animate({
        "opacity": "1"
    }, 4000);
}

// --------------------------- LOGIN ---------------------------

let loggedUser = null;

function setLoggedUser(user) {
    loggedUser = user;
}

function login() {
    for(let user of DATABASE) {
        if(user.name === nameInputValue() && user.password === passwordInputValue()) {
            setLoggedUser(user);
            hideAccessError();
            hideLoginModal();
            showHome();
            return;
        } else {
            showAccessError();
        }
    }
}

// --------------------------- DATABASE ---------------------------

const DATABASE = [
    {
        name: "Toodie",
        password: "xpto_1234"
    },
    {
        name: "Igor",
        password: "781l9"
    }
];

// --------------------------- CONSTANTS ---------------------------

const WINDOW_MOBILE_BREAKPOINT = 420;

// --------------------------- STYLING ---------------------------


// > ACCESS ERROR MESSAGE
$accessError.css({
    "position": "absolute",
    "left": "115px",
    "color": "red",
    "display": "none"
});

// > FORM BUTTON

$formButton.css({
    "width": "100%",
    "height": "42px",
    "border-radius": "5px",
    "border": "none",
    "background-color": "rgb(95, 95, 95)",
    "cursor": "pointer",
    "margin-top": "52px"
});

$formButton.on("click", login);

// > FORM INPUTS

$formFields.css({
    "width": "100%",
    "height": "70px",
    //"margin-bottom": "10px",
    "margin-top": "20px",
});

$formFields.children("input").css({
    "display": "block",
    "height": "60%",
    "width": "100%",
    "border-radius": "5px",
    "outline": "none",
    "border": "none",
    "background-color": "rgb(202, 202, 202)",
    "padding": "5px",
    "color": "black"
})

$formFields.children("label").css({
    "display": "block",
    "height": "40%",
    "font-size": "13.5px"
})

// > LOGIN MODAL

$loginModal.css({
    "display": "block",
    "padding": "10px",
    "border-radius": "10px",
    "margin-left": "auto",
    "margin-right": "auto",
    "margin-top": ($window.height() / 2) - 150,
    "background-color": "rgb(34, 34, 34)"
});

// > LOGIN MODAL HEADING

$loginModalHeading.css({
    "position": "absolute",
    "background-color": "rgb(34, 34, 34)",
});

// HOME PAGE

$home.css({
    "opacity": "0"
});

// --------------------------- RESIZE EVENTS ---------------------------

function makeResponsive(evMetadata) {
    applyResponsivenessToLoginModal($window.width());
    applyResponsivenessToLoginModalHeading($window.width());
    applyResponsivenessToAccessErrorElement($window.width());
}

$window.on("resize", makeResponsive);
$window.on("DOMContentLoaded", makeResponsive);
