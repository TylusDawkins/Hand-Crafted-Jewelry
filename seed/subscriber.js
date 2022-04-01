const db = require('../db')
const Subscriber = require('../models/subscriber')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const subscriber = [
{
    id: '1',
    name: 'Blue Necklace',
    type: 'Necklace',
    description: 'Blue Neckalace with opalite',
    image: 'https://scontent.flas1-2.fna.fbcdn.net/v/t39.30808-6/271749691_932047604337797_7268640324707784268_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1qjodcCnORoAX-N_mod&_nc_ht=scontent.flas1-2.fna&oh=00_AT83OSTq8baow77AIWOBQUem4ornawoEpuj2FCGMYRkmKA&oe=62466914',
    colors: ['blue','silver'],
    band: 'silver',
},

]

    await Subscri.insertMany(subscriber)
    console.log('Created Subscriber!')

}

const run = async () => {
    await main()
    db.close()
}

run()