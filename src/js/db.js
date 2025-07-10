import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'DIVEsheeran1803-*EC', 
  database: 'restjapones'
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar:', err.message);
    return;
  }
  console.log('✅ Conectado a MySQL');
});

export default connection;