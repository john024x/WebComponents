const template = document.createElement("div");
template.innerHTML = `
        <style>
        .texto{
            color: firebrick;
        }
            p{
                color:blue;
            }
        </style>
        <p class ="texto">This app is about </p>
        <p>the history of an Avocado</p>
    `
//definicion de la clase
class myElement extends HTMLElement{//el HTMLElement es necesario para la creacion de los custom Elements
    constructor(){
        super();
        this.p = document.createElement("p");
    }
    connectedCallback(){
        this.p.textContent = "Made with love by @John024x!";
        this.appendChild(this.p);
        this.appendChild(template);
    }
}
customElements.define('happy-hacking',myElement);

