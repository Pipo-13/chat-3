import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <body class="px-4 py-8 mx-auto bg-[#0f1a19] max-w-screen-md flex flex-col items-center justify-center select-none overflow-hidden">
        <h1 class="font-bold m-0 object-contain" style="font-size: 350px">404</h1>
        <h2 class="text-2xl font-bold">Not found ( ﾉ ﾟｰﾟ)ﾉ</h2>
      </body>
    </>
  );
}
