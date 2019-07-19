const fs = require("fs");
const path = require("path");

const privacyHeader = `
<?php /*
 Template Name: Privacy
 */

 ?>
`;

const impressHeader = `
<?php /*
 Template Name: Impressum
 */

 ?>
`;

const formerTalksHeader = `
<?php /*
 Template Name: Former-Talks
 */

 ?>
`;

const conferenceHeader = `
<?php /*
 Template Name: Biotope
 */

 ?>
`;

const files = [
  {
    name: "11pages.Conference.html",
    header: conferenceHeader,
    fileName: "biotope-template.php",
    nFilePath: "konferenz"
  },
  {
    name: "11pages.Datenschutz.html",
    header: privacyHeader,
    fileName: "privacy-template.php",
    nFilePath: "konferenz/datenschutz"
  },
  {
    name: "11pages.Impressum.html",
    header: impressHeader,
    fileName: "impress-template.php",
    nFilePath: "konferenz/impressum"
  },
  {
    name: "11pages.FormerTalksPage.html",
    header: formerTalksHeader,
    fileName: "former-talks-template.php",
    nFilePath: "konferenz/former-talks"
  }
];

const replacements = [
  {
    from: 'href="resources',
    to: 'href="/konferenz/resources'
  },
  {
    from: 'src="resources',
    to: 'src="/konferenz/resources'
  }
];

const replaceAll = (str, from, to) => {
  const find = from;
  const re = new RegExp(find, "g");
  return str.replace(re, to);
};

const base = path.join(__dirname, "biotope-boilerplate/dist");

for (let file of files) {
  const contents = fs.readFileSync(`${base}/${file.name}`).toString();
  let str = `${file.header}
  ${contents}`;
  replacements.forEach(replacement => {
    str = replaceAll(str, replacement.from, replacement.to);
  });
  fs.writeFileSync(file.fileName, str);
}

// generate for netlify
for (let file of files) {
  const contents = fs.readFileSync(`${base}/${file.name}`).toString();
  let str = `${contents}`;
  replacements.forEach(replacement => {
    str = replaceAll(str, replacement.from, replacement.to);
  });
  fs.mkdirSync(`./dist/${file.nFilePath}`, { recursive: true });
  fs.writeFileSync(`./dist/${file.nFilePath}/index.html`, str);
}
