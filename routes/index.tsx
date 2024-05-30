import { useSignal } from "@preact/signals";
import { Chat } from "../islands/main.tsx";
//import { Head } from "$fresh/runtime.ts";
import { Ico } from "../components/ico-btn.tsx";
import { DB } from "https://deno.land/x/sqlite@v3.8/mod.ts"; //database

const sort = [
  {name: 'a-z', ico: 'sort_by_alpha'},
  {name: 'date', ico: 'calendar_today'},
  {name: 'unread', ico: 'sort_by_alpha'},
  {name: 'most acessed', ico: 'schedule'},
  {name: 'custom', ico: 'tune'}
].map(e =>
  <Ico name={e.name} icon={e.ico} />
)
const actions = [
  {name: 'settings'},
  {name: 'extension'},
  {name: 'add'}
].map(e =>
  <Ico icon={e.name} />
)
const db = new DB("./.DB/data.db");
const dados = db.query("SELECT name, id, img FROM chats");

dados.forEach(dado => {
  const chat = new Chat(dado[0], 0, dado[1], dado[2]);
  chat.getHTML();
})

export default function Home() {
  //console.log(chats)
  return (
    <>
      <body>
        <nav id="salvos" class="bg-[--theme-2] border-[#5d3111] border-solid border-r-4">
          <nav id="menu" class="flex m-2">
            <button class="flex items-center absolute left-1/2 p-2 rounded-full pl-3 shadow-2xl bg-[#3655526b]">
              <span class="material-symbols-outlined" style="position:absolute; font-size: 20px; color: #9ca3af">search</span>
              <input placeholder="pesquisar" type="text" class="bg-transparent"></input>
            </button>
            <div class="w-fit">
              <Ico icon="sort" id="sort" />
              <nav class="flex flex-col absolute items-start bg-[--theme-4] w-fit p-3 rounded-2xl" style="border-top-left-radius: 0">
                  {sort}
              </nav>
            </div>
            <div class="flex w-fit">
              {actions}
            </div>
          </nav>
          <div id="contatos">
            {/*grupos e contatos aqui*/}
            <a class="material-symbols-outlined" href="/favorites">star</a>
          </div>
        </nav>
        <div id="Chat">
          {/* return opened group chat */}
        </div>
      </body>
    </>
  );
}
