const {Router} = require('express');
const router = Router();

    // Get method
router.get('/', (req,res,next) => {
    res.send('Enviado desde la API');
});

    // Post method
router.post('/', (req,res,next) => {
    res.send('Enviado desde post de la API');
});

    // Export router
module.exports = router;