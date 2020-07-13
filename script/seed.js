'use strict'

const db = require('../server/db')
const {Project} = require('../server/db/models')


async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const projects = await Promise.all([
    Project.create({
      name: 'Poodle',
      description:
        'An open source experimental email client with social features.',
      href: 'https://github.com/PoodleApp/poodle'
    }),
    Project.create({
      name: 'ARcity',
      description:
        'An immersive Augmented Reality iOS experience that allows users to walk around the city, play AR games, and earn fun collectable trophies.',
      href: 'https://github.com/Capstone-mARio/ARcity'
    }),
    Project.create({ //GET A TM supertext on STAR WARS
      name: 'StarShips',
      description:
        'A parody e-commerce website that sells starships as seen in the Star Wars™ series.',
      href: 'https://grace-starships.herokuapp.com/'
    }),
    Project.create({
      name: 'The Floor is Lava',
      description:
        'A single player, 2D platformer, endless runner game, where a player has to jump from one platform to another, without falling into the lava. Each platform has its own characteristics, keeping the game challenging and the players’ next moves uncertain.',
        href: 'https://simmer.io/@b_reity/the-floor-is-lava'
    }),
    Project.create({
      name: 'Zombie Shooter',
      description:
      'A First Person Shooter, zombie surviver game. The objective is to survive rounds by shooting incoming zombies with fun objects picked up from the ground',
      href: 'https://simmer.io/@b_reity/zombie-killer-5000'
    }),
    Project.create({
      name: '537Make',
      description: 'An imitation of the make utility in Linux/Unix'
    }),
    Project.create({ //BLANK PROJECT MODEL
        name:'malloc/free',
        description: 'A mock implementation of the malloc and free routines run in C',
    }),
  ])

  console.log(`seeded ${projects.length} Projects`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
