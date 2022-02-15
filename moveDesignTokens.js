import dirTree from 'directory-tree';
import mv from 'mv';
import fs from 'fs';

const tokens = dirTree('./tmp/properties', { extensions: /\.json$/ });

console.log('\x1b[34m%s\x1b[0m', '**** MOVING FILES ****');

tokens.children.forEach((token) => {
  const tokenName = token.name.split('.json')[0];
  mv(
    token.path,
    `./${tokenName}/${tokenName.split('s')[0]}.tokens.json`,
    function (err) {
      if (err) {
        throw err;
      } else {
        console.log(
          '\x1b[32m%s\x1b[0m',
          `✔ Design Token File Moved:  ${tokenName.split('s')[0]}.json`
        );
      }
    }
  );
});
