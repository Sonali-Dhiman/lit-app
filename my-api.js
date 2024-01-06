var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let MyApi = class MyApi extends LitElement {
    constructor() {
        super(...arguments);
        this.userArray = null;
    }
    connectedCallback() {
        super.connectedCallback();
        this.fetchUserData();
    }
    async fetchUserData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            // const userData: UserData = await response.json();
            const userArray = await response.json();
            // this.userData =userData
            this.userArray = userArray;
        }
        catch (error) {
            console.log("Error in fetching user data", error);
        }
    }
    render() {
        // return html`
        //     <div>
        //         ${this.userData ?
        //         html `
        //         <div>
        //             <h2>User Information </h2>
        //             <p>Name : ${this.userData.name}</p>
        //             <p>Email: ${this.userData.email}</p>
        //         </div>`
        //         : html `<p>Loadin user data .....</p>`
        //         }
        //     </div>
        // `
        return html `
            <div>
                ${this.userArray ?
            html `
                    <div>
                        <h2>User Information </h2>
                        ${this.userArray.map((user) => html `
                            <div>
                                <p>Name: ${user.name}</p>
                                <p>Email: ${user.email}</p>
                            </div>
                            `)}
                    </div>
                    `
            : html `<p>Laoding user data...</p>`}
            </div>
        `;
    }
};
MyApi.styles = css `
    :host {
      font-family: 'Arial', sans-serif;
    }
  `;
__decorate([
    property({ type: Array })
], MyApi.prototype, "userArray", void 0);
MyApi = __decorate([
    customElement("my-api")
], MyApi);
export { MyApi };
//# sourceMappingURL=my-api.js.map