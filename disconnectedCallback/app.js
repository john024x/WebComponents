class MyCustomElement extends HTMLElement{
    constructor(){
        super();
        console.log("Happy hacking from constructor");
    }
    connectedCallback(){
        console.log("Happy hacking from DOM");
    }
    disconnectedCallback(){
        console.log("Sad hacking ")
    }
}
customElements.define("my-happy-hacking",MyCustomElement);
document.querySelector("my-happy-hacking").remove();