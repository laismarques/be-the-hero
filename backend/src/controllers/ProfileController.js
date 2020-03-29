const connection = require('../database/connection');
module.exports = {
    async index (request, response) {
        const ngo_id = request.headers.authorization;
        console.log(ngo_id);
        const incidents = await connection ('incidents')
        .where('ngo_id', ngo_id)
        .select('*');

        return response.json(incidents);
    }
}