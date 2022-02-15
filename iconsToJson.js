import dirTree from 'directory-tree';
import fs from 'fs';

// Get the directory structure of the icons, specifically only .svg files
const svgs = dirTree('./tmp/icons', { extensions: /\.svg$/ });

let iconsObj = {
  icons: {},
};

for (let i = 0; i < svgs.children.length; i++) {
  // Split the full file name to just the name of the icon
  svgs.children[i].name = svgs.children[i].name
    .split('icons-')
    .join('')
    .split('.svg')
    .join('');
  // Store the SVG contents to a string
  let svgString = fs.readFileSync(svgs.children[i].path, 'utf8');
  // Replace any hex #xxxxxx value with the placeholder %%COLOR%%
  // %%COLOR%% will be replaced with the given color in a SCSS function
  svgString = svgString.replace(/#[A-F0-9]{6}/gi, '%%COLOR%%');
  // Store the SVG contents as value to the corresponding key (iconname)
  iconsObj.icons[svgs.children[i].name] = { value: `'${svgString}'` };
}

// Write the above iconsObject to a json file in a /tmp folder, /tmp will be removed later automatically
fs.writeFileSync(
  './tmp/properties/icons.json',
  JSON.stringify(iconsObj, null, 4)
);

console.log('\x1b[34m%s\x1b[0m', '**** ICONS ****');
console.log('\x1b[32m%s\x1b[0m', '✔ SVG Icons extracted');
console.log('\x1b[32m%s\x1b[0m', '✔ JSON Icons file generated');
