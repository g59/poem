// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import type { Manifest } from "$fresh/server.ts";
import * as $SearchButton from "./islands/SearchButton.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $about_index from "./routes/about/index.tsx";
import * as $entry_all_ from "./routes/entry/[...all].tsx";
import * as $healthz from "./routes/healthz.tsx";
import * as $index from "./routes/index.tsx";
import * as $rss_xml from "./routes/rss.xml.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/about/index.tsx": $about_index,
    "./routes/entry/[...all].tsx": $entry_all_,
    "./routes/healthz.tsx": $healthz,
    "./routes/index.tsx": $index,
    "./routes/rss.xml.ts": $rss_xml,
  },
  islands: {
    "./islands/SearchButton.tsx": $SearchButton,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
