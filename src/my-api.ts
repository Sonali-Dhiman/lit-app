import { LitElement,html,css } from "lit";
import {customElement, property} from "lit/decorators.js";

interface Geo {
    lat: string;
    lng: string;
  }
  
  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  
  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
  
@customElement("my-api")
export class MyApi extends LitElement {
    static override styles = css`
    :host {
      font-family: 'Arial', sans-serif;
    }
  `;
    @property({ type: Array }) userArray: UserData[] | null = null;

    override connectedCallback(): void {
        super.connectedCallback();
        this.fetchUserData();
    }

    async fetchUserData (){
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            // const userData: UserData = await response.json();
            const userArray: UserData[] = await response.json();
            // this.userData =userData
            this.userArray =userArray
        } catch (error) {
            console.log("Error in fetching user data", error)
        }
    }

    override render(){
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
        return html`
            <div>
                ${this.userArray ?
                    html`
                    <div>
                        <h2>User Information </h2>
                        ${this.userArray.map(
                            (user) => html`
                            <div>
                                <p>Name: ${user.name}</p>
                                <p>Email: ${user.email}</p>
                            </div>
                            `
                        )}
                    </div>
                    `
                    : html `<p>Laoding user data...</p>`
                }
            </div>
        `
    }
}

declare global{
    interface HTMLElementTagNameMap{
        "my-api" : MyApi;
    }
}