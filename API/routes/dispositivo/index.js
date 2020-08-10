const {Router} = require('express');
const router = Router();
const pool = require('../../mysql');

    // Import data
const dispositivos = require('../../datos/datos.json');

router.get('/', (req,res,next) => {
    res.send('Respuesta desde dispositivo');
});

    // Get method
router.get('/todos', (req,res,next) => {
    pool.query('SELECT * FROM Dispositivos', function(err,result){
        if(err){
            res.status(500).send('Error en la consulta');
        }
        console.log(result);
        res.status(200).json(result);
    });
});

router.get('/:id', (req,res,next) => {
    const {id} = req.params;
    pool.query('SELECT * FROM Dispositivos WHERE dispositivoId = ?', [id], function(err,result){
        if(err){
            res.status(500).send('Error en la consulta');
        }
        console.log(result);
        res.status(200).json(result[0]);
    });
});

    // Export router
module.exports = router;