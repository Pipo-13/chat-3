// deno-lint-ignore-file
export let groups = [];

export class Chat {
    constructor(name, img) {
        this.name = name;
        this.img = img;
        groups.push({
            text: this.name,
            img: this.img,
        })
    }
}

new Chat('name', 'https://wallpapers.com/images/hd/giga-chad-professional-model-jzxa3265ef02fkba.jpg')
new Chat('valor', 'img/logo.svg')

export default ({ title, groups }) => {
    return `
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="/style/style.css" media="all">
        <div style="grid-area: 1 / 1 / 3 / 2;background: var(--theme-5);">   
            <nav id="menu">
                <button class="material-symbols-outlined" tabindex="0" id="pesquisar">
                    search
                    <input placeholder="pesquisar no chat" tabindex="0" type="text" id="searchbar"></input>
                </button>
                <button tabindex="0" class="material-symbols-outlined" id="sort">
                    sort
                    <nav id="sortNav">
                        <p>
                            <span class="material-symbols-outlined">sort_by_alpha</span>
                            a-z
                        </p>
                        <p>
                            <span class="material-symbols-outlined">calendar_today</span>
                            data
                        </p>
                        <p>
                            <span class="material-symbols-outlined">mark_unread_chat_alt</span>
                            não lidas
                        </p>
                        <p>
                            <span class="material-symbols-outlined">schedule</span>
                            mais acessadas
                        </p>
                        <p>
                            <span class="material-symbols-outlined">tune</span>
                            custom
                        </p>
                    </nav>
                </button>
                <div id="homeSettings">
                    <button class="material-symbols-outlined" tabindex="0" id='settings'>settings</button>
                    <button class="material-symbols-outlined" tabindex="0" id="home" href="#User Name" style="text-decoration: none;">extension</button>
                    <button class="material-symbols-outlined" id="add" popovertarget="newChatMenu">add</button>
                </div>
            </nav>
            <div id="contatos">
                ${groups.map(group => `<button>
                    <img src="${group.img}" alt="${group.name}" height="50px" width="50px">
                    ${group.text}
                </button>`).join("")}
            </div>
        </div>
    `;
}