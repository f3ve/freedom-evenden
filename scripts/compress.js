/* Compresses sitemap files into gzip format */

const fs = require('fs');
const zlib = require('zlib');

async function compress() {
  const dirs = ['./public/sitemaps'];
  console.log(dirs);

  dirs.forEach((dir) => {
    fs.readdirSync(dir).forEach((file) => {
      if (file.endsWith('.xml')) {
        const fileContents = fs.createReadStream(`${dir}/${file}`);
        const writeStream = fs.createWriteStream(`${dir}/${file}.gz`);
        const zip = zlib.createGzip();

        fileContents
          .pipe(zip)
          .on('error', (err) => console.log(err))
          .pipe(writeStream)
          .on('error', (err) => console.log(err));
      }
    });
  });
}

compress();
