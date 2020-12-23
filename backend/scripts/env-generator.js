const chalk = require('chalk')

console.log(`
Execute the following commands in your terminal to get an .env file for the backend.

${chalk.bold('1. Create the .env(in the backend/ folder):')}
${chalk.green('$ cd ../')}
${chalk.green('$ touch .env')}

${chalk.bold('2. Set the URI(<uri>):')}
${chalk.green("$ echo 'URI=<uri>' >> .env")}
${chalk.blue('e.g:')}
${chalk.blue("$ echo 'URI=127.0.0.1' >> .env")}

${chalk.bold('3. Set the PORT(<port>):')}
${chalk.green("$ echo 'PORT=<port>' >> .env")}
${chalk.blue('e.g:')}
${chalk.blue("$ echo 'PORT=4000' >> .env")}

${chalk.bold('3. Set the database:')}
${chalk.green(
  '$ echo \'DATABASE_FLEXNOTE="<hostname>:<port>/<database>"\' >> .env'
)}
${chalk.blue('e.g:')}
${chalk.blue(
  '$ echo \'DATABASE_FLEXNOTE="mongodb://localhost:27017/FlexNote"\' >> .env'
)}

${chalk.bold('3. Set the passpharse:')}
${chalk.green(
  "$ echo 'VERIFICATION=<secure-passphrase-to-delete-database>' >> .env"
)}
${chalk.blue('e.g:')}
${chalk.blue('$ echo \'VERIFICATION="VImam6Xf75bdiIak"\' >> .env')}

${chalk.yellow('How the .env could look like:')}
${chalk.yellow('URI=127.0.0.1')}
${chalk.yellow('PORT=4000')}
${chalk.yellow("DATABASE_FLEXNOTE='mongodb://localhost:27017/FlexNote'")}
${chalk.yellow("VERIFICATION='VImam6Xf75bdiIak'")}

`)
