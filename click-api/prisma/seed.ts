// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const user3 = await prisma.user.upsert({
    update: {},
    where: { email: 'bjjulien15@gmail.com' },
    create: {
      firstName: 'Brittney',
      lastName: 'Cosmos',
      email: 'bjjulien15@gmail.com',
      phoneNo: '09012345678',
      otp: 121,
      isAdmin: true,
      verified: true,
    },
  });

  console.log({ user3 });

  // create two dummy articles
  const group1 = await prisma.group.upsert({
    where: { name: 'CosmosJulienGang' },
    update: {
      userId: user3.id,
    },
    create: {
      name: 'CosmosJulienGang',
      description: 'Family todo',
      userId: user3.id,
    },
  });

  console.log({ group1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
