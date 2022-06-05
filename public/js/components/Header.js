class Header extends HTMLElement
{
    constructor()
    {
        super()
        this.name
        this.lastname
    }

    static get observedAttributes()
    {
        return ['name', 'lastname']
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        if(name == 'name') this.name = newValue
        if(name == 'lastname') this.lastname = newValue
    }

    connectedCallback()
    {
        const Header = `
            <div class="header grid">
               <nav>
                    <a class="logo" href="https://migueajm.github.io/migueljimenezweb/">{MAJM97}</a>
                </nav>
            </div>
        `
        this.innerHTML = Header
    }
}

window.customElements.define('custom-header', Header)

/* icon darkmode
    <div><span class="iconify" data-icon="mdi:theme-light-dark"></span></div>
*/