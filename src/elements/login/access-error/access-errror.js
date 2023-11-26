import { WINDOW_MOBILE_BREAKPOINT } from '../../../const/const.js';

const $accessError = $("#access-error");

$accessError.css({
    "position": "absolute",
    "left": "115px",
    "color": "red",
    "display": "none"
});

export function showAccessError() {
    $accessError.fadeIn();
}

export function hideAccessError() {
    $accessError.animate({
        "display": "none"
    });
}

export function applyResponsivenessToAccessErrorElement(width) {
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