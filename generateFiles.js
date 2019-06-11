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
    fileName: "biotope-template.php"
  },
  {
    name: "11pages.Datenschutz.html",
    header: privacyHeader,
    fileName: "privacy-template.php"
  },
  {
    name: "11pages.Impressum.html",
    header: impressHeader,
    fileName: "impress-template.php"
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
