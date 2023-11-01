### Developer Notes:

- When developing utilities, make sure to use relative path (`./..`)
- For NextJS, absolute path alias (`@/`) is okay.
- For anything related to PayloadCMS always use relative path. (`./..`)

### Development

1. Installation Requirements:

   - Docker - for easy MongoDB installation, not required if you can install
     MongoDB easily or already installed on your machine. (Only used for local
     development)
   - Node - `v18.18.0^`
   - PNPM - the package manage we're using.

2. Copy environment variables and make sure to replace the values.

   ```sh
   cp .env.example .env
   ```

   ```diff
   # .env

   + MONGODB_URI=mongodb://127.0.0.1/ac_research_journal
   # Used for dumping
   + MONGODB_URI_REMOTE=<THE REMOTE MONGODB_URI FOR CLONING>
   ...
   ```

3. Install dependencies

   ```
   pnpm install
   ```

4. Create the Mongo database (If you installed Docker)

   ```
   pnpm db:create
   ```

5. Initialize Data (Optional. Assumes you have `MONGODB_URI_REMOTE` in .env)

   ```
   pnpm db:clone
   ```

6. Initialize `Media` (These are uploaded assets that exist in `media/` from
   this project's root)

   ```sh
   # Download it instantly (Don't spam since it gets rate limited publicly).
   pnpm media:clone
   ```

   - If that doesn't work,
     [Download Here](https://drive.google.com/drive/folders/13Yas0-Pplbs-8Cr17YwmerqLBaf3pMHd?usp=drive_link)
     and unzip it and put the pictures in the `media/` folder.

7. Generate Types to generate `payload-types.ts` (ctrl + shift + b) or (cmd +
   shift + b)

8. Run the server

   ```
   pnpm dev
   ```

9. Access PayloadCMS Admin on `http://localhost:3000:/admin` and NextJS on
   `http://localhost:3000/`. (Assumes `PAYLOAD_SEED=true` on .env.)
   ```
   🔑 Admin Credentials
   email: 'dev@payloadcms.com',
   password: 'test',
   ```

### Migrations

1. Create migrations

```
pnpm payload migrate:create name_of_migration
```

2. Run migrations

```
pnpm payload migrate
```

### Snippets

To improve workflow, when creating new things, we have **snippets** located in
`.vscode/snippets.code-snippets`. Extend this overtime!

### Resource Links

- [Figma](https://www.figma.com/file/XZNiNLWkCDJqoi37oZqSYo/Assumption-Research-Journal?type=design&node-id=0%3A1&mode=design&t=peGx1eUHzUtoyJK0-1)
- [tailwind-variants](https://www.tailwind-variants.org/docs/getting-started)
  (Make sure to setup Intellisense here as well)
- [payloadcms docs](https://payloadcms.com/docs/getting-started/what-is-payload)

### Deployment

We're currently running this project on NGINX PM2 on a $6 VPS container on
Vultr. Here's rough instructions on how to deploy from scratch

1. Start a Container
2. Linux Installations:
   - update packages.
   - install nginx
   - install node
   - install pm2
3. Clone this Repo
4. cd into this repo
5. pnpm install
6. pnpm build:safe
