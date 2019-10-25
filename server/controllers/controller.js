const adventures = [];
let id = 0;

module.exports = {
    makeAdventure: (req, res) => {
        const newAdventure = {...req.body, id}
        adventures.push(newAdventure)
        id++
        res.status(200).send(adventures)
    },
    getAdventures: (req, res) => {
        const response = [];
        console.log(req.query)

        if(req.query.duration) {
            adventures.filter(adventure => {
                if(adventure.duration = req.query.duration) {
                    adventures.push(adventure)
                }
            })
        }
    }
}