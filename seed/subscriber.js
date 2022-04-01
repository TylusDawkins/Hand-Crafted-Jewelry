const db = require('../db')
const Subscriber = require('../models/subscriber')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const subscriber = [
{
    email: 'test@testmail.com',
    
},

]

    await Subscriber.insertMany(subscriber)
    console.log('Created Subscriber!')

}

const run = async () => {
    await main()
    db.close()
}

run()