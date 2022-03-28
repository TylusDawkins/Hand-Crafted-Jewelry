const db = require('../db')
const Dino = require('../models/dino')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const dinos = [
    { 
    id_number: '01',
    name: 'Indominus rex', 

    description: 'Indominus rex is the largest existing theropod in the Jurassic World. The hybrid was created by modifying the genome of a Tyrannosaurus rex with the DNA of various other theropods. Some of the known species that were included were Velociraptor,[5] Carnotaurus, Giganotosaurus, Scorpios rex, Majungasaurus, Rugops,[1] Pycnonemosaurus, Quilmesaurus, Viavenator,[11] Deinosuchus,[4] and Therizinosaurus.]', 

    image:'https://static.wikia.nocookie.net/jurassicpark/images/e/ef/Jurassic_world_indominus_rex_v2_by_sonichedgehog2-d9j1f9q.png' ,

    danger_rating: '5',
    people_eaten: 'True'
},
    
{ 
    id_number: '02',
    name: 'Tyrannosaurus Rex ', 

    description: 'Known as T. rex, is an extinct genus of tyrannosaurid theropod dinosaur that lived in North America during the Late Cretaceous period around 68-65 million years ago.', 

    image: 'https://static.wikia.nocookie.net/jurassicpark/images/8/87/Tyrannosaurus_%28Jurassic_World_2018%29.png',

    danger_rating: '5',
    people_eaten: 'True'},

{ 
    id_number: '03',
    name: 'Mosasaurus ', 

    description: 'Large aquatic carnivorous lizard from the Late Cretaceous about 70-66 million years ago. Mosasaurus gave its name to a group of marine lizards - Mosasaurs.', 

    image: 'https://static.wikia.nocookie.net/jurassicpark/images/e/e0/Jurassic_world_fallen_kingdom_mosasaurus_v3_by_sonichedgehog2-dcfc5gg.png',

    danger_rating: '5',
    people_eaten: 'False'},

{ 
    id_number: '04',
    name: 'Velociraptor ', 

    description: 'A genus of dromaeosaurid theropod dinosaur from the Late Cretaceous period which inhabited what is now the Mongolia-China border with other unique dinosaurs. Velociraptor was no bigger than a wolf and with its feathers it bore a very bird-like appearance.', 

    image: 'https://static.wikia.nocookie.net/jurassicpark/images/f/f4/Lo_sa_raptor.png',

    danger_rating: '5',
    people_eaten: 'True' },
      
 { 
    id_number: '05',
    name: 'Triceratops', 

    description: 'A very common dinosaur which lived at the very end of the Cretaceous period. It had a huge frilled head with horns over each eye that could reach over 3 feet long. Triceratops had a third, smaller horn on their nose. These would be fearsome weapons against a predator.', 

    image: 'https://static.wikia.nocookie.net/jurassicpark/images/a/ab/Triceratops_Jurassic_World.png',

    danger_rating: '2',
    people_eaten: 'False'},     

{ 
    id_number: '06',
    name: 'Pteranodon', 

    description: 'A large flying reptile with a wingspan measuring as long as a school bus. These reptiles did not have feathers but rather had a basal type of integument along the same lineage from which feathers evolved, called pycnofibers. Pycnofibers were very hair-like in appearance and, like hair, were made of keratin.', 

    image: 'https://static.wikia.nocookie.net/jurassicpark/images/1/1a/Terry.png',

    danger_rating: '3',
    people_eaten:'False'},    

{ 
    id_number: '06'
    ,name: 'Ankylosaurus', 

    description: 'Built like a living tank, with extremely thick, bony plates of armor on its body, even including armored eyelids. Its tail also had a second function; it could act as a deadly club. The club was used to swing around and smash into an attacking dinosaur. Its club was so daunting that not even a Tyrannosaurus rex would want to mess with this alarming species.', 

    image: 'https://static.wikia.nocookie.net/jurassicpark/images/c/cd/Anklyosaurus_header_copia.png',

    danger_rating: '4',
    people_eaten: 'False' },    

{ 
    id_number: '07',
    name: 'Stegosaurus', 

    description: 'Easily one of the best known dinosaurs and is recognized all over the world. It is the largest and most famous member of the stegosaur family. The plates along its back, its small head and spiked tail make it a peculiar and unique dinosaur. This plant-eater evolved to find its food in the low-growing plants of the late Jurassic. The spikes on its tail would have made a powerful weapon against any hungry predators.', 

    image: 'https://static.wikia.nocookie.net/jurassicpark/images/4/4c/Stegosaurus-detail-header.png',

    danger_rating: '3',
    people_eaten: 'False'},    

{ 
    id_number: '08',
    name: 'Pachycephalosaurus', 

    description: 'The largest, and most famous member of the pachycephalosaurs, or thick-headed dinosaurs. In the 1970s, paleontologist Peter Galton proposed that male pachycephalosaurs used their dome heads as battering rams, like bighorn sheep. The idea caught the public imagination.  But by the 1990s, scientists began to question Galtons head butting theory. It was pointed out that animals who do butt heads have a wide surface area where the heads come into contact to prevent "head slippage." This happens when two animals butt heads at high speed and do not hit straight on. The risk of breaking their necks when their heads suddenly snap to one side. Pachycephalosaurus has a domed, or rounded, head, which would minimize surface contact and therefore increase the risk of head slippage. This throws doubt on the idea of any high speed head-butting between pachycephalosaurs, but it does not exclude "head-pushing" of "head-ramming" against non-pachycephalosaurs.',

    image: 'https://static.wikia.nocookie.net/jurassicpark/images/0/0a/Pachycephalosaurus-detail-header.png',

    danger_rating: '3',
    people_eaten: 'False' },    

{ 
    id_number: '09',
    name: 'Apatosaurus', 

    description: 'One of the most famous of the giant Jurassic plant-eaters. It was a sauropod, a member of a race of huge, long-necked dinosaurs. It was longer than two school buses and weighed as much as 4 adult male African elephants. For years, an Apatosaurus body stood with the head of Camarasaurus on the end of its neck. This was named Brontosaurus and was one of the most popular dinosaurs for many years. In 2015, the Brontosaurus genus was revived and several species of Apatosaurus were resigned to the Brontosaurus genus. Apatosaurus is a fairly typical member of the diplodocid family - long neck, pillar-like legs, long tapering tail and enormous size. It had, like the other family members, peg-like teeth in a head that seemed very small for such a large creature. ',

    image: 'https://static.wikia.nocookie.net/jurassicpark/images/7/74/Apatosaurus.png',

    danger_rating: '2',
    people_eaten: 'False' },    

{
    id_number: '10',
    name: 'Dimorphodon', 

    description: ' A pterosaur believed to belong to the family Rhamphorhynchoidea from the Early Jurassic Period of southern England. The species is unique among pterosaurs because it has two types of teeth like that of a mammal.',

    image: 'https://static.wikia.nocookie.net/jurassicpark/images/1/17/Dimorphodonjw.png',

    danger_rating: '4',
    people_eaten: 'False' },    
]

    await Dino.insertMany(dinos)
    console.log('Created dinos!')

}

const run = async () => {
    await main()
    db.close()
}

run()