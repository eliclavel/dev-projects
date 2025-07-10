import db from './db.js';

db.query('SELECT * FROM usuarios', (err, results) => {
  if (err) {
    console.error('❌ Error en la consulta:', err.message);
  } else {
    console.log('✅ Conexión exitosa. Usuarios encontrados:');
    console.log(results);
  }
});