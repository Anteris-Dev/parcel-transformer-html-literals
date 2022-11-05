import {css, html, LitElement} from "lit";

export class CustomElement extends LitElement {
    static styles = css`
        div {
            padding: 20px;
        }

        h1 {
            padding: 5px;
            color: purple;
        }
    `;

    render() {
        html`
            <div>
                <header>
                    <h1>Title</h1>
                </header>
                <main>
                    <p>A paragraph about something...</p>
                </main>
            </div>
        `;
    }
}

customElements.define('custom-element', CustomElement);