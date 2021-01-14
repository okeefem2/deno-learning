/**
 * Drake drakefile.
 */

import { desc, run, task, sh } from 'https://deno.land/x/drake@v1.2.4/mod.ts';

desc('Run');
task('run', [], async function () {
  await sh(
    'deno run --allow-env permissions.ts'
  );
});


// env("--default-task", "test");
// const TS_FILES = [...glob("*.ts"), ...glob("+(lib|tests)/*.ts")].filter((p) =>
//     !p.endsWith(".d.ts")
// );

// desc("Run tests");
// task("test", ["fmt"], async function () {
//   await sh(
//     `deno test -A ${env("--quiet") ? "--quiet" : ""} tests`,
//     env("--debug") ? { env: { DRAKE_DEBUG: "true" } } : {},
//   );
// });

// desc("Format source files");
// task("fmt", [], async function () {
//     await sh(`deno fmt ${quote(TS_FILES)}`);
// });

// desc("Run some example drakefiles");
// task("examples", [], async function () {
//     await sh(`
//         deno run -A examples/examples-drakefile.ts prereqs pause "qux=Foo Bar" noop
//     `);
//     await sh(`
//         deno run -A examples/dynamic-tasks.ts -d examples/ README.html releases.html
//     `);
// });

// desc(
//     "Create Git version number tag e.g. specifying 'vers=1.0.0' creates tag 'v1.0.0'",
// );
// task("tag", ["test"], async function () {
//     if (!env("vers")) {
//         abort("'vers' command-line variable not set e.g. drake tag vers=1.0.0");
//     }
//     if (!/^\d+\.\d+\.\d+/.test(env("vers"))) {
//         abort(`illegal semantic version number: ${env("vers")}`);
//     }
//     if (vers() !== env("vers")) {
//         abort(`${env("vers")} does not match version ${vers()} in mod.ts`);
//     }
//     const tag = `v${env("vers")}`;
//     console.log(`tag: ${tag}`);
//     await sh(`git tag -a -m ${tag} ${tag}`);
// });

// desc("Push changes to Github");
// task("push", ["test"], async function () {
//     await sh("git push -u --tags origin master");
// });

run();
