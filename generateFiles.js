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
    fileName: "conference-template.php"
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

const base = path.join(__dirname, "biotope-boilerplate/dist");

for (let file of files) {
  const contents = fs.readFileSync(`${base}/${file.name}`).toString();
  const str = `${file.header}
  ${contents}`;
  fs.writeFileSync(file.fileName, str);
}
