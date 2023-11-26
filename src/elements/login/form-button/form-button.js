import { nameInputValue, passwordInputValue } from '../form-fields/form-fields.js';
import { DATABASE } from '../../../database/database.js';
import { showAccessError } from '../access-error/access-errror.js';
import { setLoggedUser } from '../login.js';

const $formButton = $("#form-btn");

function login() {
    for(let user of DATABASE) {
        if(user.name === nameInputValue() && user.password === passwordInputValue()) {
            setLoggedUser(user);
        } else {
            showAccessError();
        }
    }
}

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
