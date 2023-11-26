import { WINDOW_MOBILE_BREAKPOINT } from '../../../const/const.js';

const $loginModalHeading = $("#login-modal-heading");

$loginModalHeading.css({
    "position": "absolute",
    "background-color": "rgb(34, 34, 34)",
});

export function applyResponsivenessToLoginModalHeading(width) {
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
