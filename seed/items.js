const db = require('../db')
const Jewlery = require('../models/jewelry')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const jewlery = [
{
    id: '1',
    name: 'Blue Necklace',
    type: 'Necklace',
    description: 'Blue Neckalace with opalite',
    image: 'https://scontent.flas1-2.fna.fbcdn.net/v/t39.30808-6/271749691_932047604337797_7268640324707784268_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1qjodcCnORoAX-N_mod&_nc_ht=scontent.flas1-2.fna&oh=00_AT83OSTq8baow77AIWOBQUem4ornawoEpuj2FCGMYRkmKA&oe=62466914',
    colors: ['blue','silver'],
    band: 'silver',
    price: 50
},
{
    id:'2',
    name: 'Silver Droplet Necklace',
    type: 'Necklace',
    description: 'Silver necklace with white pearl style beads ',
    image: 'https://scontent.flas1-2.fna.fbcdn.net/v/t39.30808-6/271636640_930067287869162_3908666251245060505_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=trgq-BjJHXoAX8oot4I&_nc_ht=scontent.flas1-2.fna&oh=00_AT9OAW2SW2ScpnqYR0AglYbiyZP7U9PcKeHEl_7Q1W_sFw&oe=62480FC8',
    colors: ['silver', 'white'],
    band : 'white',
    price: 50
},
{
    id:'3',
    name: 'Gold Earings with white pearl',
    type:'Earing',
    description:'somthing something',
    image:'https://scontent.flas1-2.fna.fbcdn.net/v/t39.30808-6/241392680_864329321109626_3701087560409906758_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Dda0kamgEYIAX_FJVoL&_nc_ht=scontent.flas1-2.fna&oh=00_AT8QiWSHRqD9rmxKc9koRG8aCwp1KAL5g432Ig8L_pliPA&oe=62485534',
    colors:['gold', 'clear'],
    band: 'gold',
    price: 25
},
{
    id: '4',
    name: 'Silver ring with white Opalite',
    type:'Ring',
    description: 'this is a description',
    image:'https://scontent.flas1-2.fna.fbcdn.net/v/t39.30808-6/241895918_858815424994349_6979310353027794963_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=WEtRcxCg644AX-qiHaT&_nc_ht=scontent.flas1-2.fna&oh=00_AT_C7TRB8CJEhYyIvBIRAYTvMFvuWV_vM0IQr9d9EmBnTA&oe=624849F8',
    colors:['silver','white'],
    band:'silver',
    price: 25
}
]

    await Jewlery.insertMany(jewlery)
    console.log('Created Jewelry!')

}

const run = async () => {
    await main()
    db.close()
}

run()