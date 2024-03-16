// deno-lint-ignore-file
export let groups = [];

export class Chat {
    constructor(name, img) {
        this.name = name;
        this.img = img;
        groups.push({
            text: this.name,
            img: this.img,
            name: this.name,
        })
    }
}

new Chat('name', 'https://wallpapers.com/images/hd/giga-chad-professional-model-jzxa3265ef02fkba.jpg')
new Chat('valor', 'img/groupImg.svg')

export default ({ groups }) => {
    return /*html*/`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <link rel="stylesheet" href="/style/style.css" media="all">
                <title>chat</title>
            </head>
            <body>
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
                            <button class="material-symbols-outlined lazy" tabindex="0" id='settings'>settings</button>
                            <button class="material-symbols-outlined lazy" tabindex="0" id="extension" style="text-decoration: none;">extension</button>
                            <button class="material-symbols-outlined lazy" id="add" popovertarget="newChatMenu">add</button>
                        </div>
                    </nav>
                    <div id="contatos">
                        ${groups.map(group => /*html*/`<button>
                            <img src="${group.img}" alt="${group.name}" height="50px" width="50px" load="lazy">
                            ${group.text}
                        </button>`).join("")}
                    </div>
                </div>
                <div id="chat" style="display:grid" class="lazy-bg" data-bg="/img/chat.svg">
                    <nav><img src="${groups[1].img}" alt="${groups[1].name}" load="lazy">${groups[1].name}</nav>
                </div>
                <script>
                    document.addEventListener("DOMContentLoaded", () => {
                        document.querySelectorAll(".lazy-bg").forEach((e) => {
                        var image = new Image();
                        image.src = e.getAttribute("data-bg");

                        image.onload = function() {
                            e.style.backgroundImage = "url('" + image.src + "')";
                            e.classList.add("loaded");
                        };
                        });
                        document.querySelectorAll('button.lazy').forEach(b => {
                            b.classList.remove('lazy')
                        })
                    });
                 </script>
            </body>
        <html>
    `;
}