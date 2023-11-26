import { WINDOW_MOBILE_BREAKPOINT } from '../../../const/const.js';
import { $window } from '../../window/window.js';

const $loginModal = $("#login-modal");

$loginModal.css({
    "display": "block",
    "padding": "10px",
    "border-radius": "10px",
    "margin-left": "auto",
    "margin-right": "auto",
    "margin-top": ($window.height() / 2) - 150,
    "background-color": "rgb(34, 34, 34)"
});

export function applyResponsivenessToLoginModal(width) {
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
