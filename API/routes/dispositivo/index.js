const { Router } = require('express');
const router = Router();
const pool = require('../../mysql');

/**
 * Obtengo la lista de dispositivos almacenados
 */
router.get('/todos', (req, res, next) => {
    pool.query('SELECT * FROM Dispositivos', function (err, result) {
        if (err) {
            res.status(500).send('Error en la consulta');
        }
        res.status(200).json(result);
    });
});

/**
 * Obtengo el dispositivo con el id recibido como parámetro
 * @param id ID del dispositivo
 */
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    pool.query('SELECT * FROM Dispositivos WHERE dispositivoId = ?', [id], function (err, result) {
        if (err) {
            res.status(500).send('Error en la consulta');
        }
        res.status(200).json(result[0]);
    });
});

/**
 * Almaceno en la tabla 'Log_Riegos' un nueva apertura
 * @param {apertura, fecha, electrovalvulaId}
 */
router.post('/electrovalvula', (req, res, next) => {
    const { apertura, fecha, electrovalvulaId } = req.body;

    //  Convierto el formato de la fecha para guardar en la DB ( 2020-08-15T22:59:40.027Z -> 2020-08-15 22:59:40 )
    const newFecha = new Date(fecha).toISOString().replace(/T/, ' ').replace(/\..+/, '');
    pool.query('INSERT INTO Log_Riegos (apertura, fecha, electrovalvulaId) VALUES (?,?,?)', [apertura, newFecha, electrovalvulaId], function (err, result) {
        if (err) {
            res.status(500).send('Error en la consulta');
        }
        res.status(200).json({ msg: 'Valores almacenados en la DB' });
    });
});

module.exports = router;