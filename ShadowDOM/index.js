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
                <h2>Hola Avoado!</h2>
                <div>
                    <p>
                        Im an 'p' example
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
                h2{
                    color: red;
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

