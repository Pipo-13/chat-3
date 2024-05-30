import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { normalizeURLPath } from "$fresh/src/server/context.ts";

export function Ico(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="flex object-center"
    >
      <span class="material-symbols-outlined mr-1">{props.icon}</span>
      {props.name}
    </button>
  );
}