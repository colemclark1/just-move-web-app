require('dotenv').config();
const {Client} = require('pg');

const client = new Client({
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database

});

// Below is a query for all exercises that use dumbbells
// "select * from exercises inner join equipment_exercise on equipment_exercise.exercise_id=exercises.id where equipment_exercise.equipment_id=(SELECT id FROM equipment WHERE equipment.name='dumbbells');"
client.connect()
  .then(() => console.log("Connected to the DB"))
  .then(() => client.query("select * from exercises inner join equipment_exercise on equipment_exercise.exercise_id=exercises.id where equipment_exercise.equipment_id=(SELECT id FROM equipment WHERE equipment.name='dumbbells');"))
  .then(results => console.table(results.rows))
  .catch(e => console.log)
  .finally(() => client.end());
