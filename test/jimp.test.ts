import jimp from 'jimp';
import path from 'path';

test('print text on an image', async () => {
   const image = await jimp.read(
      path.join(__dirname, '/../assets/images/whitebg.jpg')
   );
   const font = await jimp.loadFont(jimp.FONT_SANS_64_BLACK);
   await image
      .print(font, 10, 10, 'Hello World!')
      .write(path.join(__dirname, '/../assets/images/output.jpg'));
});

//text is not auto wrapping. it must mannually formated according to the image width
//for font size 32, 15 chars can be printed in a single line
//and 14 of lines like that can be printed on a single image
test('long line on an image', async () => {
   const image = await jimp.read(
      path.join(__dirname, '/../assets/images/whitebg.jpg')
   );
   const font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
   image
      .print(font, 0, 0, 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW')
      .write(path.join(__dirname, '/../assets/images/textwrap.jpg'));
});

test('print multiple lines', async () => {
   const image = await jimp.read(
      path.join(__dirname, '/../assets/images/whitebg.jpg')
   );
   const font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
   //y coordinate must be incremented by font size
   for (let y = 0; y < 450; y += 32) {
      await image.print(font, 0, y, 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW');
   }
   image.write(path.join(__dirname, '/../assets/images/multiline.jpg'));
});

/*
font color along cannot be changed, color of the whole image is change at once
so, when there is a background, its color too get change
*/
test('print colored text', async () => {
   const image = await jimp.read(
      path.join(__dirname, '/../assets/images/whitebg.jpg')
   );
   const font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
   image
      .print(font, 0, 0, 'Hello World!')
      .color([{ apply: 'xor', params: ['#ff0000'] }])
      .write(path.join(__dirname, '/../assets/images/coloredtext.jpg'));
});

/*
if there is no background, color change of the background is not noticable
thats a one resone to have transparent text images, which means no background
*/
test('text image with no background', async () => {
   //0x0 = 0 = rgba(0, 0, 0, 0) = transparent
   const image = await new jimp(450, 450, 0x0);
   const font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
   image
      .print(font, 0, 0, 'Transparent')
      .write(path.join(__dirname, '/../assets/images/transparent.png'));
   //remember to change file extension to .png since the output is a transparent image
});
