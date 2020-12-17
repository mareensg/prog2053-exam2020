import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {

  static get properties() {
    return {
      user: { type: Object },
    };
}

  constructor() {
    super();
  }


  static get styles() {
    return css`
      li { font-size: 22px; margin-bottom: 10px; }
      input { padding: 4px; }
      label, input { margin-bottom: 30px;}
      h3 { margin-top: 30px; }
    `;
  }

  render() {
    return html`
      <div class="row">
        <h3>Current information:</h3>
          <ul>
            <li>E-mail: ${this.user.uname}</li>
            <li>First name: ${this.user.firstName}</li>
            <li>Last name: ${this.user.lastName}</li>
          </ul>
      </div>
      <div class="row">
          <h3>Change account settings:</h3>
          <form method="POST" name="updateUser" id="settingsForm">
            <label for="uname">E-mail</label>
            <input type="email">
              <br>
            <label for="firstName">First name</label>
            <input type="name">
              <br>
            <label for="lastName">Last name</label>
            <input type="name">
              <br>
            <label for="oldpwd">Old password</label>
            <input type="password">
              <br>
            <label for="newpwd">New password</label>
            <input type="password">
              <br>
            <button type="submit" @click="${this.saveChanges}">Save</button>
          </form>
      </div>
    `;
  }


  saveChanges() {
    const data = new FormData(document.getElementById("settingsForm"));

    fetch('api/updateUsers.php', {
      method: 'POST',
      credentials: "include",
      body: data
    });
  }

}
customElements.define('edit-user', EditUser);
