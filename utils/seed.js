const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [
        {
            username: "Lily",
            email: "lily@flowerrs.com"
        },
        {
          username: "Bird",
          email: "Bird@flying.com"
        }
      ];
      const thoughts = [
        {
            thoughtText: "I wonder if there are any bees around?",
            username: "Lily"
        }
      ];
    
      await User.collection.insertMany(users);
      await Thought.collection.insertMany(thoughts);
    
      console.table(users);
      console.table(thoughts);
      console.info('Seeding complete! 🌱');
      process.exit(0);
    });
