const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Pies & Sausage Rolls' },
    { name: 'Cakes & Pastries' },
    { name: 'Breads' },
    { name: 'Weekend Specials' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Beef Pie',
      description:
        'Gourmet beef pie with mushrooms and slow cooked in red wine',
      image: 'beef-pie.jpg',
      category: categories[0]._id,
      price: 7.80,
      quantity: 30
    },
    {
      name: 'Sausage Rolls',
      description:
        'Plain or with cheese and bacon',
      image: 'sausage-roll.jpg',
      category: categories[0]._id,
      price: 4.50,
      quantity: 30
    },
    {
      name: 'Apple Turnovers',
      category: categories[1]._id,
      description:
        'Classic apple turnovers with cream',
      image: 'apple-turnover.jpg',
      price: 4.50,
      quantity: 12
    },
    {
      name: 'Custard Tart',
      category: categories[1]._id,
      description:
        'Classic custard tart topped with a dash of ground nutmeg',
      image: 'custard-tart.jpg',
      price: 4.00,
      quantity: 12
    },
    {
        name: 'Vanilla Slice',
        category: categories[1]._id,
        description:
          'Caramelized puff pastry sandwiched between a dimplomat cream. Your classic aussie slice with a French twist.',
        image: 'vanilla-slice.jpg',
        price: 4.50,
        quantity: 12
    },
    {
        name: 'Matches',
        category: categories[1]._id,
        description:
          'Puff pastry with jam and cream',
        image: 'matches.jpg',
        price: 4.00,
        quantity: 12
    },
    {
        name: 'Citrus Tart',
        category: categories[1]._id,
        description:
          'Citrus curd in a shortcrust pastry, topped with torched meringue',
        image: 'citrus-tart.jpg',
        price: 4.50,
        quantity: 12
    },
    {
        name: 'Lamington',
        category: categories[1]._id,
        description:
          'Classic vanilla sponge dipped in chocolate and coconut. Jam and cream options available.',
        image: 'lamington.jpg',
        price: 4.00,
        quantity: 15
    },
    {
        name: 'Brownies',
        category: categories[1]._id,
        description:
          'Our brownies are gluten free and they taste exactly as good as a normal decadent brownies.',
        image: 'brownies.jpg',
        price: 4.50,
        quantity: 15
    },
    {
        name: 'Caramel Slice',
        category: categories[1]._id,
        description:
          'Coconut crumble base with a caramel center and a dark chocolate topping',
        image: 'caramel-slice.jpg',
        price: 4.00,
        quantity: 15
    },
    {
        name: 'Seasonal Fruit Danish',
        category: categories[1]._id,
        description:
          'Any seasonal fruit danish topped with different toppings depending on the fruit',
        image: 'danish.jpg',
        price: 4.50,
        quantity: 12
    },
    {
        name: 'Croissant',
        category: categories[1]._id,
        description:
          'Classic buttery and flakey croissant',
        image: 'croissant.jpg',
        price: 4.00,
        quantity: 12
    },
    {
        name: 'Cruffin',
        category: categories[1]._id,
        description:
          'Croissant + muffin = cruffin!',
        image: 'cruffin.jpg',
        price: 4.50,
        quantity: 4
    },
    {
        name: 'Brioche Custard',
        category: categories[1]._id,
        description:
          'Brioche dough baked with custard and seasonal fruit',
        image: 'brioche-custard.jpg',
        price: 4.50,
        quantity: 12
    },
    {
      name: 'Bread Loaves',
      category: categories[2]._id,
      description:
        'Soft white loaf, wholemeal, seeded, and high top, comes sliced or unsliced',
      image: 'bread.jpg',
      price: 4.60,
      quantity: 15
    },
    {
      name: 'Bread Rolls',
      category: categories[2]._id,
      description: 'Classic bread rolls for anything',
      image: 'bread-rolls.jpg',
      price: 0.80,
      quantity: 18
    },
    {
        name: 'Sourdough',
        category: categories[2]._id,
        description: 'Light rye sourdough',
        image: 'sourdough.jpg',
        price: 7.00,
        quantity: 14
    },
    {
      name: 'Frangipane Tart',
      category: categories[3]._id,
      description:
        'Shortcrust crust filled with almond cream and special fruit of the day',
      image: 'frangipane-tart.jpg',
      price: 5.00,
      quantity: 10
    },
    {
        name: 'Sourdough Foccacia',
        category: categories[3]._id,
        description:
          'Light ryde foccacia topped with rosemary, sea salt, and extra virgin olive oil.',
        image: 'sourdough-foccacia.jpg',
        price: 5.00,
        quantity: 4
    },
    {
        name: 'Cupcakes',
        category: categories[3]._id,
        description:
          'Comes in vanilla, chocolate, carrot cake, adn red velvet. Flavors alter every week.',
        image: 'cupcake.jpg',
        price: 4.50,
        quantity: 12
    },
    {
        name: 'Berry Eclairs',
        category: categories[3]._id,
        description:
          'Our eclairs are gluten-free and taste just like a normal ecalir. Filled with berry cream and garnished with fresh berries.',
        image: 'eclair.jpg',
        price: 4.50,
        quantity: 12
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Levina',
    lastName: 'Gunawan',
    email: 't.levina31@gmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
