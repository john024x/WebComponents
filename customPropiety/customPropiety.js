//definicion de la clase
class myElement extends HTMLElement{//el HTMLElement es necesario para la creacion de los custom Elements
    constructor(){
        super();
        this.attachShadow({mode: 'open'});//el nodo tiene que estar abierto para que pueda interactuar con los demas elementos
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h2><slot name="title"></slot></h2>
                <div>
                    <p>
                    <slot name ="parragraph"></slot>
                    </p>
                </div>
            </section>
            ${this.GetStyle()}
        `;
        return template;
    }
    GetStyle(){
        return `
            <style>
                :host{
                    --primary-color: tomato;
                    --secondary-color: salmon;
                    --heading-primary: 30px;
                    --heading-secondary: 20px;
                }
                section{
                    background-color: var(--primary-color);
                }
                section div{
                    background-color: var(--secondary-color);
                }
                h2{
                    font-size: var(--heading-primary);
                }
                p{
                    font-size: var(--heading-secondary);
                }
            </style>
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));//en esta ocasión se renderiza diferente por el hecho de incluir el 'ShadowRoot'
    }
    connectedCallback(){
        this.render();
    }
}
customElements.define('happy-hacking',myElement);

