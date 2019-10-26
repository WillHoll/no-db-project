
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
        const {id} = req.params
        const index = myAdventures.findIndex(adventure => +adventure.personalId === +id)
        myAdventures.splice(index, 1) 
        res.status(200).send(myAdventures)
    },
    editAdventure: (req, res) => {
        const {id} = req.params
        const personalId = id

        const index = myAdventures.findIndex(adventure => +adventure.personalId === +personalId)
        req.body = {...req.body, personalId}
        myAdventures[index] = req.body
        res.status(200).send(myAdventures)
    }
}