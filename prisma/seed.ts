import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.order.deleteMany();
  const cristiano = await prisma.order.create({
    data: {
      price: 15.5,
      address: 'Sítio',
      phone: 35911111111,
      clientName: 'Cristiano',
      observation: 'Pedido de teste',
    },
  });

  console.log({ cristiano });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
