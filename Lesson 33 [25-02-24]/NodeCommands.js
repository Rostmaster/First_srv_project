import chalk from 'chalk';
import os from 'os';
import disk_space from 'check-disk-space';

console.clear();
const log = console.log;
let bLog = (d) => log(chalk.underline.hex('#007096').bold(d))
let yLog = (d) => log(chalk.hex('#FEAD0C').bold(d))

bLog('App is running!\n\n')

//? CONSOLE COMMANDS
// // console.error(new Error('Hi Error!'));
// console.time("answer time");
// //other block of codes
// console.timeLog("answer time");
// console.log("This is the outer level");
// console.group("Test run on the date:");
// console.info(new Date());
// console.groupEnd();
// console.debug("Back to the outer level");
// console.assert(1 === 3, "One is indeed not equal to three");
// console.timeEnd("answer time");
// console.log()
// //other block of codes
// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

//? CHALK LIBRARY
// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));
// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));
// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// // Use RGB colors in terminal emulators that support it.
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));

yLog("Total mem: " + Math.round(os.totalmem() / 1024 / 1024 / 1024) + ' GB')
yLog("Free mem: " + Math.round(os.freemem() / 1024 / 1024 / 1024) + ' GB')
yLog("CPUs: " + Math.round(os.cpus().length) + ' cores')
yLog("System uptime: " + Math.round(os.uptime() / 60 / 60) + ' hours')

yLog("System free space: " + Math.round(await disk_space('/')
    .then(res => res.free) / 1024 / 1024 / 1024) + ' GB');

yLog("System total space: " + Math.round(await disk_space('/')
    .then(res => res.size) / 1024 / 1024 / 1024) + ' GB');

bLog('\n\nApp finished!')
