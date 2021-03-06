
const tilbud = require('../services/tilbud');
const db = require('../config/sql').connect();

module.exports = (app) => {
//Render siden / som er index.ejs
    app.get('/', async function (req, res) {
        try {
            const produkter = await tilbud.visTilbud();
            res.render('pages/index', {
                produkter: produkter,
                side: 'index'
            });
        } catch (err) {
            console.log(err);
        }

    });

};//END module.export 
