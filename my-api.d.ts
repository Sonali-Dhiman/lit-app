import { LitElement } from "lit";
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
export declare class MyApi extends LitElement {
    static styles: import("lit").CSSResult;
    userArray: UserData[] | null;
    connectedCallback(): void;
    fetchUserData(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-api": MyApi;
    }
}
export {};
//# sourceMappingURL=my-api.d.ts.map