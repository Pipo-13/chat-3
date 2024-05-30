import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="pt-br">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>chat-4</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body translate={false}>
        <Component />
      </body>
    </html>
  );
}
