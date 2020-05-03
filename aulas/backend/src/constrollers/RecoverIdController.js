const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async update(request, response) {
        const { email } = request.body;
        const { whatsapp } = request.body;

        const ong_id = '';

        if (whatsapp == null){
            ong_id = await connection('ongs')
                      .where('email', email)
                      .select('id')
                      .first();
        } else {
            ong_id = await connection('ongs')
                      .where('whatsapp', whatsapp)
                      .select('id')
                      .first();
        }

          if (ong_id == ''){
              return response.status(400).json({ error: 'No ONG found with this E-mail.'});
          }

          const code = crypto.randomBytes(5).toString('HEX');

          await connection('ongs')
            .where('id', '=', ong_id)
            .update({
                'code': code
          });

          return response.json({ong_id, code});
    }
}