import express from 'express';
import wrapText from 'wrap-text';
import moment from 'moment';
import path from 'path';
import text2png from 'text2png';
import fs from 'fs';

const PORT = process.env.PORT || 8000;
const app = express();

app.get('/api', async (req, res) => {
   const CHARACTERS_PER_LINE = 15;
   const text: string = wrapText(req.query.text, CHARACTERS_PER_LINE);

   const fileName =
      text.replace(' ', '_').replace('\n', '_') +
      '_' +
      moment().format('YYYY-MM-DD_HH:mm:ss') +
      '.png';

   const outputPath = path.join(
      __dirname,
      '..',
      'public',
      'stickers',
      fileName
   );

   const png = text2png(text, {
      font: '32px sans-serif',
      color: req.query.fontColor,
   });
   fs.writeFileSync(outputPath, png);
   res.status(200).sendFile(outputPath);
});

app.listen(PORT, () => {
   console.log(`Server is listening at localhost:${PORT}`);
});
