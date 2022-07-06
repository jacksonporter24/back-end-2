const houses = require('./db.json')
let globalId = 4;


module.exports = {
    // getHouses: (req, res) => res.status(200).send(houses),
    sendHouses: (req, res) => {
        res.status(200).send(houses)

    },

    updateHouse: (req, res) => {
        const existingId = +req.params.id
        let index = houses.findIndex(house => house.id === existingId)

        if(req.body.type === 'minus') {
            houses[index].price <= 10000
            // houses[index].price = 0;
            res.status(200).send(houses)
        } else if (type === "minus") {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else if (type === "plus") {
            houses[index].price += 10000
        } else {
            res.sendStatus(400)
        }
        
},
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body;
        let newHouse = {
            address,
            price,
            imageURL,
            id: globalId
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    deleteHouse: (req, res) => {
        const existingId = +req.params.id

        let index = houses.findIndex(house => house.id === existingId)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }
}
