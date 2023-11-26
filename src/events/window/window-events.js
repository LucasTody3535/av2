import { $window } from '../../elements/window/window.js';
import { applyResponsivenessToLoginModal } from '../../elements/login/login-modal/login-modal.js';
import { applyResponsivenessToLoginModalHeading } from '../../elements/login/login-modal-heading/login-modal-heading.js';
import { renderLoginModal } from '../../elements/login/login.js';

function makeResponsive(evMetadata) {
    applyResponsivenessToLoginModal($window.width());
    applyResponsivenessToLoginModalHeading($window.width());
}

$window.on("resize", makeResponsive);
$window.on("DOMContentLoaded", makeResponsive);