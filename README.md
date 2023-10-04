### Developer Notes:

- When developing utilities, make sure to use relative path `./..`
- For NextJS, absolute path `@/` is okay.
- For anything related to PayloadCMS always use relative path. `./..`

### Development

1. Installation Requirements:

   - Docker - for easy MongoDB installation, not required if you can install MongoDB easily or already installed on your
     machine. (Only used for local development)
   - PNPM - the package manage we're using

2. Copy environment variables and make sure to replace the values.

   ```sh
   cp .env.example .env
   ```

   ```diff
   # .env

   + MONGODB_URI=mongodb://127.0.0.1/ac_research_journal
   PAYLOAD_SECRET=AC_RESEARCH_JOURNAL_SECRET_KEY
   PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   NEXT_HOSTNAME=127.0.0.1
   PAYLOAD_SEED=true
   PAYLOAD_DROP_DATABASE=true
   ```

3. Install dependencies

   ```
   pnpm install
   ```

4. Create the Mongo database (If you installed Docker)

   ```
   pnpm db:create
   ```

5. Generate Types to generate `payload-types.ts` (ctrl + shift + b) or (cmd + shift + b)

6. pnpm dev

7. Access PayloadCMS Admin on `http://localhost:3000:/admin` and NextJS on `http://localhost:3000/`
   ```
   🔑 Admin Credentials
   email: 'dev@payloadcms.com',
   password: 'test',
   ```
8. TODOs: add seed scripts/cloning of database.

### Snippets

To improve workflow, when creating new things, we have **snippets** located in `.vscode/snippets.code-snippets`. Extend
this overtime!

### Resource Links

- [Figma](https://www.figma.com/file/XZNiNLWkCDJqoi37oZqSYo/Assumption-Research-Journal?type=design&node-id=0%3A1&mode=design&t=peGx1eUHzUtoyJK0-1)
- [tailwind-variants](https://www.tailwind-variants.org/docs/getting-started) (Make sure to setup Intellisense here as
  well)
- [payloadcms docs](https://payloadcms.com/docs/getting-started/what-is-payload)

### 📁 Folder Structure

Important folders and files to take note of

```sh
ac-research-journal/
├── src/
|   ├── server.ts # entry point for the app
|   ├── payload-types.ts # generated types by payloadCMS
|   ├── collections/
|   |   ├── index.ts # all the collections with their groups
|   |   └── */**.ts #
|   ├── lib/ # utils for nextjs
|   ├── utilities/ # utils for payloadcms
|   ├── styles/ # written pandacss styles for our design system.
|   ├── pages/ # pages router for nextjs.
|   └── components/
|       ├── cms # for payloadcms.
|       └── */**/ # for nextjs.
└── styled-system # generated styles by pandacss.
```
