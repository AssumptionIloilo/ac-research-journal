import { exec, execFile, fork, spawn } from 'child_process';
import path, { resolve } from 'path/posix';
function start() {
  spawnCLI('powershell', ['pnpm', 'gqty']);
}
function spawnCLI(command: string, args: string[]) {
  const child = spawn('powershell', ['pnpm', 'dlx', '@gqty/cli'], {
    cwd: process.cwd(),
    // detached: true,
    stdio: 'inherit',
  });

  child.stdout?.setEncoding('utf-8');

  var current = '';

  child.stdout?.on('data', (data) => {
    current += data;
    console.log('data');

    if (current[current.length - 1] == '\n') {
      if ('? Where is your GraphQL endpoint or schema files?' == current) {
        child.stdin?.write('schema.graphql' + '\n');
      }
    }

    current = '';
  });

  let data = '';

  child.stdout?.on('readable', () => {
    let chunk = '';
    while ((chunk = child.stdout?.read())) {
      data += chunk;
    }
  });

  child.stdout?.on('end', () => {
    console.log(data);
    console.log('schema.graphql');
  });

  //   execProcess.stdin?.on('pipe', (stream) => {
  //     console.log('schema.graphql');
  //   });
  //     console.log('hi carlo', data.toString());

  //     if (data.string() === "? Where is your GraphQL endpoint or schema files?")
  //   });

  //   console.log('spawn');
  //   console.log(execProcess.spawnfile);
  //   execProcess.on('spawn', () => {
  //     console.log('spawn on spawn');
  //   });
  //   execProcess.stdout.on('data', (data) => {
  //     console.log(`spawn stdout: ${data}`);
  //   });
  //   execProcess.stderr.on('data', (data) => {
  //     console.log(`spawn on error ${data}`);
  //   });
  //   execProcess.on('exit', (code, signal) => {
  //     console.log(`spawn on exit code: ${code} signal: ${signal}`);
  //   });
  //   execProcess.on('close', (code: number, args: any[]) => {
  //     console.log(`spawn on close code: ${code} args: ${args}`);
  //   });
}
start();
// const r,unCommand = () => {
//   const cmd = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
//   // Spawn a new child process
//   const child = spawn(cmd, ['gqty'], {
//     stdio: ['pipe', process.stdout, process.stderr],
//   });

//   // List of responses to send to the child process
//   const responses = ['schema.graphql', 'Yes', '-', 'src/gqty/index.ts'];

//   // Send responses one by one
//   responses.forEach((response) => {
//     child.stdin.write(response + '\n');

//     // End the input stream to signal we're done sending responses.
//     child.stdin.end();
//   });
// };
// runCommand();

// // # spawn pnpx @gqty/cli <

// // echo -e 'schema.graphql\nYes\n-\nsrc/gqty/index.ts\nn' | pnpx @gqty/cli

// // # spawn echo "Hello Carlo"

// // # expect "Hello Carlo"

// // # send "yes"

// // # echo "myresponse" |
