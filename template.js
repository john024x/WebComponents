//definicion de la clase
class myElement extends HTMLElement{//el HTMLElement es necesario para la creacion de los custom Elements
    constructor(){
        super();
       
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
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}
customElements.define('happy-hacking',myElement);

