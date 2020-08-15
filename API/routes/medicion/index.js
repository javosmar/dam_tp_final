const {Router} = require('express');
const router = Router();
const pool = require('../../mysql');

router.get('/:id', (req,res,next) => {
    const {id} = req.params;
    pool.query('SELECT * FROM Mediciones WHERE dispositivoId=? ORDER BY fecha DESC', [id], function(err,result){
            if(err){
                res.status(500).send('Error en la consulta');
            }
            res.status(200).json(result[0]);
    });
    //res.status(200).send(`hola desde medicion con id ${id}`);
});

    // Get method
router.get('/todas/:id', (req,res,next) => {
    const {id} = req.params;
    console.log(id);
    pool.query('SELECT * FROM Mediciones WHERE dispositivoId = ?', [id], function(err,result){
            if(err){
                res.status(500).send('Error en la consulta');
            }
            res.status(200).json(result);
    });
});

router.post('/', (req,res,next) => {
    const {id, fecha, valor} = req.body;
    console.log(req.params);
    pool.query('INSERT INTO Mediciones (fecha, valor, dispositivoId) VALUES (?,?,?)', [fecha, valor, id], function(err,result){
        console.log(fecha);
        console.log(valor);
        console.log(id);
        if(err){
            res.status(500).send('Error en la consulta');
        }
        res.status(200).send('Valores almacenados en la DB');
    });
});

    // Export router
module.exports = router;