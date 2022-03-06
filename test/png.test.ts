import fs from 'fs';
import path from 'path';
import text2png from 'text2png';

test('sample text png', () => {
   const png = text2png('Hello World!');
   fs.writeFileSync(
      path.join(__dirname, '/../assets/images/sample_output.png'),
      png
   );
});

test('change font', () => {
   const png = text2png('Hello World!', {
      font: '32px sans-serif',
   });
   fs.writeFileSync(
      path.join(__dirname, '/../assets/images/change_font.png'),
      png
   );
});

test('multiline text', () => {
   const png = text2png('Hello World!\nSanuja Methmal here');
   fs.writeFileSync(
      path.join(__dirname, '/../assets/images/multiline.png'),
      png
   );
});

test('colored text', () => {
   const png = text2png('Hello World!', {
      color: 'red',
   });
   fs.writeFileSync(
      path.join(__dirname, '/../assets/images/colored_text.png'),
      png
   );
});
