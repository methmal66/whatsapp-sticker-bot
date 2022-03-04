import express from 'express';
import jimp from 'jimp';
import wrapText from 'wrap-text';
import path from 'path';
import moment from 'moment';

const PORT = process.env.PORT || 8000;
const app = express();

app.get('/api', async (req, res) => {
   const CHARACTERS_PER_LINE = 15;
   const FONT_SIZE = 32;

   const text: string = wrapText(req.query.text, CHARACTERS_PER_LINE);
   const lines = text.split('\n');
   const height = FONT_SIZE * lines.length;
   const width = FONT_SIZE * CHARACTERS_PER_LINE;

   const image = await new jimp(width, height, 0x0 /*transparent*/);
   const font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
   const outputPath = path.join(
      __dirname,
      '../assets/static',
      text + '_' + moment().format('YYYY-MM-DD_HH:mm:ss') + '.png'
   );

   for (let i = 0; i < lines.length; i++) {
      const y = i * FONT_SIZE;
      await image.print(font, 0, y, lines[i]);
   }

   image
      .color([{ apply: 'xor', params: [req.query.fontColor] }])
      .write(outputPath, () => res.status(200).sendFile(outputPath));
});

app.listen(PORT, () => {
   console.log(`Server is listening at localhost:${PORT}`);
});
