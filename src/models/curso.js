import { openDb } from "../conexao/configDB.js";

class CreateTableCurso{
    static curso(){
        const db = openDb();
        db.then( db => {
            db.exec('CREATE TABLE IF NOT EXISTS curso(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(100), linkimg VARCHAR(255))')
        })
    }
}

export default CreateTableCurso;