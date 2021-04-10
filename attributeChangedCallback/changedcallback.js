//definicion de la clase
class myElement extends HTMLElement{//el HTMLElement es necesario para la creacion de los custom Elements
    constructor(){
        super();
        this.attachShadow({mode: 'open'});//el nodo tiene que estar abierto para que pueda interactuar con los demas elementos
    }
    static get observedAttribute(){
        return ('title','parrafo','img','width');
    }
    attributeChangedCallback(attr,oldval,newVal){
        if(attr === 'title'){
            this.title = newVal;
        }
        if(attr == 'parrafo'){
            this.parrafo = newVal;
        }
        if(attr == 'img'){
            this.img = newVal;
        }
        if(attr == 'width'){
            this.width = newVal;
        }
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h2>${this.title}
                </h2>
                <div>
                    <p>
                    ${this.parrafo}
                    </p>
                    <img src="${this.img}" style="max-width:${this.width}px"/>
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

