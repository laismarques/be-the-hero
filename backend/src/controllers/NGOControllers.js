const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        const ngo = await connection('ngo').select('*');
        return response.json(ngo);
    },

    async create (request, response){
        const {nome, email, whatsapp, cidade, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        })
    }
};