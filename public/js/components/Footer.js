class Footer extends HTMLElement
{
    constructor()
    {
        super()
    }

    /* static get observedAttributes()
    {
        return ['name', 'lastname']
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        if(name == 'name') this.name = newValue
        if(name == 'lastname') this.lastname = newValue
    } */

    connectedCallback()
    {
        const author = '@MigueAJM'
        const Footer = `
            <p>&copy; ${new Date().getFullYear()} Developed with ❤️ By: <a href="https://twitter.com/MigueAJM" target="_blank">${author}</a></p>
        `
        this.innerHTML = Footer
    }
}

window.customElements.define('custom-footer', Footer)

/* footer alternative
    <div class="effect"></div>
            <div class="grid footer">
                <a class="logo" href="https://migueajm.github.io/migueljimenezweb/">{MAJM97}</a>
                <ul>
                    <li>
                        <a href="#twitter">twiter</a>
                    </li>
                    <li>
                        <a href="#github">github</a>
                    </li>
                    <li>
                         <a href="#linkedin"><span class="iconify" data-icon="ant-design:linkedin-outlined"></span></a>
                         ${author}
                    </li>
                </ul>
            </div>
*/