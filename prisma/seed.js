const prisma = require('../prisma');
const seed = async () => {
const result = await prisma.author.create({
    data: [
        {name: 'Author1',
        books: {
          create: [
            { title: 'Book1' },
            { title: 'Book2' },
            { title: 'Book3' },
          ],
        }},
    ]
})
    seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
}