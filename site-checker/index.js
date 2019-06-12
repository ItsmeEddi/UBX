const NetlifyAPI = require("netlify");
const process = require("process");
const fs = require("fs");

const token = process.env.NETLIFY_TOKEN;
if (token === undefined) {
  console.log("no token specified");
  return process.exit(1);
}

const client = new NetlifyAPI(token);

const wait = timeout => new Promise(res => setTimeout(res, timeout));

let commitHash =
  process.env.TRAVIS_COMMIT || "8c9ede73d5e3862f11420f9fb7d5df1a28cc8182";
const prCommitHash = process.env.TRAVIS_PULL_REQUEST_SHA;

if (prCommitHash !== "" && prCommitHash !== undefined) {
  commitHash = prCommitHash;
}

console.log(`Waiting for commit with hash: ${commitHash}`);

const getSiteUrl = async () => {
  const sites = await client.listSiteDeploys({
    site_id: "2d43cf38-cbfb-44f3-8f74-eb920d7170a5"
  });
  const site = sites.filter(site => site.commit_ref === commitHash);
  if (site.length !== 0 && site[0].state === "ready") {
    console.log(site);
    return site[0].deploy_ssl_url;
  }
  console.log("waiting");
  await wait(30000);
  return getSiteUrl();
};

const fiveMinutes = 300000;

Promise.race([getSiteUrl(), wait(fiveMinutes)]).then(val => {
  if (val === undefined) {
    return process.exit(1);
  }
  console.log(`site deployed to: ${val}`);
  fs.writeFileSync("./siteurl.txt", val);
  process.exit(0);
});
