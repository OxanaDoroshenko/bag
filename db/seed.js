const db = require('../db')

const seedProducts = () => db.Promise.map([
  {title: 'Hats',category: ['Clothes','Accessories'], current_price: 16, description: 'Fedora with a feather', availability: true, inventory: 100, promo_id: 1},
  {title: 'Ski Suits',category: ['Athletics', 'Clothes'], current_price: 11, description: 'Full body ski suit', availability: false, inventory: 5, promo_id: 1},
  {title: 'Fanny Pack',category: ['Accessories'], current_price: 12, description: 'Bright neon in all colors', availability: true, inventory: 64, promo_id: 1},
  {title: 'Chuck Taylors',category: ['Clothes','Shoes'], current_price: 15, description: 'A variation on a classsic', availability: false, inventory: 35},
  {title: 'Hairspray',category: ['Beauty'], current_price: 41, description: 'Full of CFCs', availability: true, inventory: 22, promo_id: 2},
  {title: 'Socks',category: ['Clothes'], current_price: 51, description: 'Big wooly socks', availability: true, inventory: 21},
  {title: 'Wigs', category: ['Accessories', 'Beauty'], current_price: 21, description: 'Business in the front, party in the back', availability: false, inventory: 100, promo_id: 2},
  {title: 'Chanel', category: ['Beauty'], current_price: 49, description: 'Chanel loose powder', availability: true, inventory: 100, promo_id: 2},
  {title: 'Cosmetics', category: ['Beauty'], current_price: 31, description: 'Revlon violet pink set', availability: true, inventory: 100, promo_id: 2},
  {title: 'Covergirl', category: ['Beauty'], current_price: 21, description: 'Cosmetics for the young generation', availability: false, inventory: 100, promo_id: 2},
  {title: 'Dior', category: ['Beauty'], current_price: 49, description: 'Luxury for your face', availability: true, inventory: 100, promo_id: 2},
  {title: 'Dolls', category: ['Accessories'], current_price: 9, description: 'For your room', availability: false, inventory: 100, promo_id: 2},
  {title: 'HighHeels', category: ['Shoes'], current_price: 27, description: 'Edge on your heel', availability: true, inventory: 100, promo_id: 2},
  {title: 'PinkSuit', category: ['Accessories', 'Clothes'], current_price: 22, description: 'Everything for your pink day', availability: false, inventory: 100, promo_id: 2},
  {title: 'Technicolor', category: ['Accessories', 'Clothes'], current_price: 31, description: 'Freedom', availability: false, inventory: 100, promo_id: 2},
  {title: 'Sneakers', category: ['Shoes', 'Athletics'], current_price: 62, description: 'Comply with your style', availability: false, inventory: 100, promo_id: 2},
  {title: 'FlyWatch', category: ['Accessories'], current_price: 20, description: 'What time is it now? 19: 08 ! ', availability: false, inventory: 100, promo_id: 2},
  {title: 'ThatWig', category: ['Accessories', 'Beauty'], current_price: 21, description: 'Party people', availability: false, inventory: 100, promo_id: 1},
  {title: 'Training set', category: ['Athletics', 'Clothes'], current_price: 21, description: 'Lion look', availability: false, inventory: 100, promo_id: 1},
  {title: 'Training suit for couple', category: ['Athletics', 'Clothes'], current_price: 21, description: 'Lion look', availability: false, inventory: 100, promo_id: 1},
], product => db.model('products').create(product));

const seedCompanies = () => db.Promise.map([
    {
        title: 'MyHome',
        subtitle: 'Строительная компания MyHome',
        isCurrent: false,
        img: 'myhome',
        siteUrl: 'http://myhome.company/',
        text: 'Компания MyHome осуществляет полное сопровождение комплекса работ по подготовке, проектированию, реализации строительных работ в Крыму',
        position: 'Стажёр. Вертальщик',
        time_start: '01.09.2014',
        time_end: '01.12.2014',
    },
    {
        title: 'Crimea Technologies',
        subtitle: 'ГУП РК "КРЫМ ТЕХНОЛОГИИ"',
        isCurrent: false,
        img: 'krtech',
        siteUrl: 'https://krtech.ru/',
        text: 'ГУП РК "Крымтехнологии" — ведущее региональное многопрофильное государственное предприятие,' +
        ' подведомственное Министерству внутренней политики информации и связи Республики Крым,' +
        ' осуществляющее деятельность в сфере информационных технологий,' +
        ' информатизации и телекоммуникаций.',
        position: 'Младший инженер-программист. Вертальщик',
        time_start: '01.01.2015',
        time_end: '01.06.2015',
    },
    {
        title: 'SSL',
        subtitle: 'Satellite Soft Labs',
        isCurrent: true,
        img:'ssl',
        siteUrl: 'https://krtech.ru/',
        text: '«Сателлит Софт Лабс» разрабатывает и внедряет высокотехнологичное программное обеспечение в области транспортной навигации,' +
        ' интеллектуальных транспортных систем и смежных перспективных областей. Среди клиентов, крупные телекоммуникационные и транспортные компании,' +
        ' производители микроэлектроники и системные интеграторы.',
        position: 'Младший инженер программист. UX-специалист. ' +
        'Инженер-программист. Frontend-разработчик' +
        'Инженер-программист. Frontend-разработчик. Ментор',
        time_start: '03.09.2015',
    },
], company => db.model('companies').create(company));

const seedReviews = () => db.Promise.map([
 {rating: 1, review_text: "awful",product_id:5},
 {rating: 1, review_text: "if you have too much extra money ",product_id:1},
 {rating: 5, review_text: "the best!",product_id:2},
 {rating: 2, review_text: "waste of money",product_id:3},
 {rating: 3, review_text: "can be better",product_id:4},
 {rating: 3, review_text: "should be better",product_id:6},
 {rating: 4, review_text: "good price",product_id:7},
 {rating: 4, review_text: "just like description",product_id:1}
 ], review => db.model('reviews').create(review));

 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedProducts)
   .then(products => console.log(`Seeded ${products.length} products OK`))
   .then(seedReviews)
   .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
   .then(seedCompanies)
   .then(companies => console.log(`Seeded ${companies.length} reviews OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
