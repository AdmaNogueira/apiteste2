import { openDb } from "../conexao/configDB.js";
const db = openDb();

export default class CursoCRUD{
    static listarCurso(req, res){
        const query = 'SELECT * FROM curso';
        db.then(db => {
            db.all(query).then(curso => res.json(curso));
        })
    }

    static listarCursoId(req, res){
        const query = 'SELECT * FROM curso WHERE id = ?';
        const id = req.params.id;
        db.then(db => {
            db.get(query, [id]).then(cursoId => res.json(cursoId));
        })
    }

    static postarCurso(req, res){
        const query = 'INSERT INTO curso(nome, linkimg) VALUES(?, ?)';
        const curso = req.body;
        db.then(db => {
            db.run(query, [curso.nome, curso.linkimg])
        })
        res.json({
            "statusCode": "200"
        })
    }

    static editarCurso(req, res){
        const query = 'UPDATE curso SET nome = ?, linkimg = ? WHERE id = ?'
        const curso = req.body;
        db.then(db => {
            db.run(query, [curso.nome, curso.linkimg, curso.id])
        })
        res.json({
            "statuCode": "200"
        })
    }

    static deletarCurso(req, res){
        const query = 'DELETE FROM curso WHERE id = ?';
        const id = req.params.id;
        db.then(db => {
            db.run(query, [id])
        })
        res.json({
            "statusCode": "200"
        })
    }
}