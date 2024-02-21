import pg from "pg";
const db = new pg.Pool({ connectionString: dbConnectionString });

db.query(`CREATE TABLE IF NOT EXISTS postgresexampletable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    example 
)`);
