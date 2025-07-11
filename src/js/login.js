import db from './db.js';

export default function login(req, res) {
    const { email, password } = req.body;

    db.query(
        'SELECT * FROM usuarios WHERE email = ? AND contraseña = ?',
        [email, password],
        (err, results) => {
            if (err) {
                console.error('❌ Error en el login:', err.message);
                return res.status(500).send('Error en el servidor');
            }

            if(results.length > 0) {
                res.send('✅ Login exitoso, ¡bienvenido!');
            }
            else {
                res.send('❌ Correo o contraseña incorrectos');
            }
        }
    );
}