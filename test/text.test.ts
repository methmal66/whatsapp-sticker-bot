import wrapText from 'wrap-text';

test('wrap text withing given width', () => {
   const longLine =
      'Elit voluptate magni exercitationem voluptatem consequatur inventore. Incidunt reiciendis laudantium vero a voluptas quam! Quod officia consectetur eaque perspiciatis modi. Cumque temporibus earum mollitia deleniti autem nam facilis neque tenetur?';
   const lines = wrapText(longLine, 15).split('\n');
   console.log(lines);
});
