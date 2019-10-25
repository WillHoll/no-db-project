
const myAdventures = [];
let personalId = 0;

module.exports = {
    addAdventure: (req, res) => {
        const newAdventure = {...req.body, personalId}
        myAdventures.push(newAdventure)
        personalId++
        res.status(200).send(myAdventures)
    },
    getAdventures: (req, res) => {
        res.status(200).send(myAdventures)
    },
    removeAdventure: (req, res) => {
        
    }
}