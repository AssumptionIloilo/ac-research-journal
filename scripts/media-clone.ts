import { parseHTML } from 'linkedom';
import fs from 'fs';

// COLORS
const C_GREEN = '\x1b[32m';
const F_BOLD = '\x1b[1m';
const F_RESET = '\x1b[0m';

const DESTINATION_FOLDER = 'media';

async function cloneMedia() {
  console.log(`${F_BOLD}${C_GREEN}Cloning Media...${F_RESET}`);

  //   1. Fetch
  const response = await fetch(
    'https://drive.google.com/drive/folders/13Yas0-Pplbs-8Cr17YwmerqLBaf3pMHd',
  );

  if (response.ok) {
    // 2. Get Text
    const html = await response.text();

    // 3. Parse HTML
    const { document } = parseHTML(html);

    // 4. Query for the elements of each file (it contains the ids).
    const driveFileIdDivs = document.querySelectorAll('c-wiz > div[data-id]');
    const driveFileNameDivs = document.querySelectorAll(
      'c-wiz > div[data-id] > div > div[role="gridcell"] div[data-tooltip][aria-label]:only-child',
    );

    // 5. Extract the Ids and names from Queried elements
    const fileIds: string[] = [];
    driveFileIdDivs?.forEach((div) => {
      fileIds.push(div.getAttribute('data-id') ?? 'None');
    });

    const fileNames: string[] = [];
    driveFileNameDivs?.forEach((div) => {
      fileNames.push(div.innerHTML);
    });

    // 6. Convert ID to a direct download link.
    const directDownloadLinks: string[] = fileIds.map(
      (fileId) => `https://drive.google.com/uc?export=download&id=${fileId}`,
    );

    // 7. Download.
    console.log(`${F_BOLD}${C_GREEN}Downloading...${F_RESET}`);
    if (!fs.existsSync(DESTINATION_FOLDER)) fs.mkdirSync(DESTINATION_FOLDER);
    await Promise.all(
      directDownloadLinks.map((link, index) =>
        downloadFile(link, `${DESTINATION_FOLDER}/${fileNames[index]}`),
      ),
    );

    console.log(`\n${F_BOLD}${C_GREEN}✨ Downloaded All Media! ✨${F_RESET}`);
  } else {
    console.log('Failed to download.');
  }
}

async function downloadFile(url: string, destinationPath: string) {
  const response = await fetch(url);
  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(destinationPath, buffer, (err) => {
    if (err) {
      console.log('Failed to download', destinationPath, err);
    } else {
      console.log('Downloaded', destinationPath);
    }
  });
}

// Run the script.
cloneMedia();
