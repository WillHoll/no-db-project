const adventures = require('../data.json');
let id = 0;

module.exports = {
    makeAdventure: (req, res) => {
        const newAdventure = {...req.body, id}
        adventures.push(newAdventure)
        id++
        res.status(200).send(adventures)
    },

    getAdventures: (req, res) => {
        // let response = [];
        // console.log(req.query)
        // //filter based on queries
        // if(req.query.duration) {
        //     adventures.filter(adventure => {
        //         if(adventure.duration = req.query.duration) {
        //             response.push(adventure)
        //         }
        //     })
        // }
        // if (req.query.price) {
        //     adventures.filter(adventure => {
        //         if(adventure.price <= req.query.price) {
        //             response.push(adventure)
        //         }
        //     })
        // }
        // //filter out duplicates
        // response = [new Set(response)]
        // res.status(200).send(response)
        res.status(200).send(adventures)
    }
}