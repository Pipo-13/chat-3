import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import favicon from "lume/plugins/favicon.ts";
import sass from "lume/plugins/sass.ts";
import { DB } from "https://deno.land/x/sqlite@v3.8/mod.ts"; //database

// deno-lint-ignore no-unused-vars
const db = new DB("./database/data.db");

const site = lume(
  {
    src: "./public",
    dest: "./_site",
    /** Whether the empty folder should be emptied before the build */
    emptyDest: true,
    includes: "_includes",
    location: new URL("https://localhost:3000"),
    prettyUrls: true,
    server: {
      port: 3000,
      /** To open the server in a browser */
      open: false,
      page404: "/404.html",
    }
  },
);

site
.use(base_path())
.use(code_highlight())
.use(date())
.use(favicon())
.use(sass({
  options: {
    style: "compressed"
  }}
))
.copy("img")
.copy("font")
.copy("script");

export default site;
