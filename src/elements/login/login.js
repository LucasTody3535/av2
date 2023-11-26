import './login-modal/login-modal.js';
import './login-modal-heading/login-modal-heading.js';
import './form-button/form-button.js';
import './form-fields/form-fields.js';
import './access-error/access-errror.js';
import { $body } from '../body/body.js';

const LOGIN_MODAL_BODY = `
<div id="login-modal">
    <p id="login-modal-heading">Login</p>
    <div class="form-field">
        <label>Nome</label>
        <input placeholder="Seu nome..." type="text" />
    </div>
    <div class="form-field">
        <label>Senha</label>
        <input placeholder="Sua senha..." type="password" />
    </div>
    <p id="access-error">Usuário inexistente!</p>
    <button id="form-btn">Entrar</button>
</div>`;

export function renderLoginModal() {
    $body.html(LOGIN_MODAL_BODY);
}