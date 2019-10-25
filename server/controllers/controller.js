const adventures = require('../data.json');
let id = 3;

module.exports = {
    makeAdventure: (req, res) => {
        const newAdventure = {...req.body, id}
        adventures.push(newAdventure)
        id++
        res.status(200).send(adventures)
    },

    getAdventures: (req, res) => {
        let response = [];
        //filter based on set queries
        if (req.query.duration && req.query.price) {
            adventures.filter(adventure => {
                if (+adventure.duration <= +req.query.duration && +adventure.price <= +req.query.price) {
                    response.push(adventure)
                }
            })
        } else if(req.query.duration && !req.query.price) {
            adventures.filter(adventure => {
                if(+adventure.duration <= +req.query.duration) {
                    response.push(adventure)
                }
            })
        } else if (req.query.price && !req.query.duration) {
            adventures.filter(adventure => {
                if(+adventure.price <= +req.query.price) {
                    response.push(adventure)
                }
            })
        } else {
            response = adventures
        }
        res.status(200).send(response)
    }
}