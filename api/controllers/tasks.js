import {db} from "../models/ConnectDatabase";

//selecionar tarefas
export const getTasks = (req, res) => {
    const q = "SELECT * FROM Tasks";

    db.query(q, (err,data) => { 
        if (err) return res.json(err); //se houver erro, vai retornar erro

        return res.status(200).json(data); //caso não, retornar tarefas
    });
};

//inserir tarefas
export const addTasks = (req, res) => {
    const q = "INSERT INTO Tasks ('nome', 'descricao', 'statusT') VALUES(?)";

    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.statusT,
      ];
    
      db.query(q, [values], (err) => {
        if (err) return res.json(err);
    
        return res.status(200).json("Nova tarefa criada com sucesso.");
      });
};

//atualizar tarefas
export const updateTasks = (req, res) => {
    const q =
      "UPDATE Tasks SET `nome` = ?, `descricao` = ?, `statusT` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nome,
      req.body.descricao,
      req.body.statusT,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Tarefa atualizada com sucesso.");
    });
  };
  
//deletar tarefas
  export const deleteTasks = (req, res) => {
    const q = "DELETE FROM Tasks WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Tarefa deletada com sucesso.");
    });
  };

