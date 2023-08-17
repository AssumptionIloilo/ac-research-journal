### Development

1. Make sure you have MongoDB installed on your system with a free space for `ac_research_journal` database.
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

3. Install deps

   ```
   pnpm install
   ```

4. Generate Types to generate `payload-types.ts` (ctrl + shift + b) or (cmd + shift + b)

5. pnpm dev

6. Access PayloadCMS Admin on `http://localhost:3000:/admin` and NextJS on `http://localhost:3000/`

7. TODOs: add seed scripts/cloning of database.

### Resource Links

- [Figma](https://www.figma.com/file/XZNiNLWkCDJqoi37oZqSYo/Assumption-Research-Journal?type=design&node-id=0%3A1&mode=design&t=peGx1eUHzUtoyJK0-1)
- [panda-css docs](https://panda-css.com/)
- [payloadcms docs](https://payloadcms.com/docs/getting-started/what-is-payload)
