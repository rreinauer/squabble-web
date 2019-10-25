'use strict';

const db = require('../server/db');
const { User, Squabble, Opinion } = require('../server/db/models');

async function seed() {
  await db.sync();
  console.log('db synced!');

  const users = await Promise.all([
    User.create({
      first: 'John',
      last: 'Giampa',
      username: 'gooooddog',
      email: 'jg@gmail.com',
      password: '123',
      zipCode: '11217',
      phoneNumber: '9782704814',
      imageUrl: 'https://ibb.co/5W3rVLm',
    }),
    User.create({
      first: 'Rachel',
      last: 'Reinauer',
      username: 'rreinauer',
      email: 'rr@gmail.com',
      password: '123',
      zipCode: '11217',
      phoneNumber: '4259220391',
      imageUrl: 'https://ibb.co/3SBQ3ZK',
    }),
    User.create({
      first: 'Brian',
      last: 'Seo',
      username: 'bseo',
      email: 'bs@gmail.com',
      password: '123',
      zipCode: '11217',
      phoneNumber: '4259220391',
      imageUrl: 'https://ibb.co/YLh7CfM',
    }),
  ]);

  const squabbles = await Promise.all([
    Squabble.create({
      title: 'Best Resto',
    }),
    Squabble.create({
      title: 'Coolest Dog',
    }),
    Squabble.create({
      title: 'Best Borough',
    }),
    Squabble.create({
      title: 'Favorite Drink',
    }),
  ]);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

runSeed();
