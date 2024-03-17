// deno-lint-ignore-file
export let groups = [];

export class Chat {
    constructor(name, img, guests, adms) {
        this.name = name;
        this.img = img;
        this.guests = guests;
        this.adms = adms;
        groups.push({
            img: this.img,
            name: this.name,
            guests: this.guests,
        })
    }
}

new Chat('name', 'img/groupImg.svg')
new Chat('valor', 'img/groupImg.svg')

export default ({ groups }) => {
    return /*html*/`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <link rel="stylesheet" rel="preload" as="style" href="/style/style.css" media="all">
                <title>chat</title>
            </head>
            <body>
                <div style="grid-area: 1 / 1 / 3 / 2;background: var(--theme-5);overflow: hidden;">   
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
                            <button class="material-symbols-outlined lazy" tabindex="0" id='settings' content="settings"></button>
                            <button class="material-symbols-outlined lazy" tabindex="0" id="extension" content="extension" style="text-decoration: none;"></button>
                            <button class="material-symbols-outlined lazy" id="add" popovertarget="newChatMenu" content="add">add</button>
                        </div>
                    </nav>
                    <div id="contatos">
                        ${groups.map(group => /*html*/`<button class="thumb">
                            <img src="${group.img}" alt="${group.name}" height="50px" width="50px" load="lazy">
                            ${group.name}
                        </button>`).join("")}
                    </div>
                </div>
                <div id="chat" style="display:grid" class="lazy-bg" data-bg="/img/chat.svg">
                    <nav id="header">
                        <button class="material-symbols-outlined lazy" content="arrow_back_ios"></button>
                        <img src="${groups[1].img}" alt="${groups[1].name}" load="lazy">
                        <span>${groups[1].name}<span>
                    </nav>
                    <!--uma alternativa seria usar o iframe-->
                    <div id="msgArea"></div>
                    <div id="inputBox" onclick="this.firstElementChild.focus()">
                        <input type="text" placeholder="vontade de falar..."></input>
                    </div>
                </div>
                <script async>
                    document.addEventListener("DOMContentLoaded", () => {
                        document.querySelectorAll(".lazy-bg").forEach(e => {
                            const image = new Image();
                            image.src = e.getAttribute("data-bg");
                            image.onload = e.style.backgroundImage = "url('" + image.src + "')";
                        });
                    });
                    document.fonts.ready.then(() => {
                        document.querySelectorAll('button.lazy').forEach(b => {
                            b.innerText = b.getAttribute("content");
                            b.classList.remove('lazy');
                        })
                    })
                 </script>
                 <script src="/script/main.js"></script>
            </body>
        <html>
    `;
}