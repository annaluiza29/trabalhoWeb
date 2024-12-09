import axios from "axios";
import React, { useEffect, tasksef } from "react";
import { toast } from "react-toastify";
import "./form.css";

const Form = ({ gettasks, onEdit, setOnEdit }) => {
  const ref = tasksef();

  useEffect(() => {
    if (onEdit) {
      const tasks = ref.current;

      tasks.nome.value = onEdit.nome;
      tasks.descricao.value = onEdit.descricao;
      tasks.statusT.value = onEdit.statusT;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tasks = ref.current;

    if (
      !tasks.nome.value ||
      !tasks.descricao.value ||
      !tasks.statusT.value 
    ) 
    {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:3000/" + onEdit.id, {
          nome: tasks.nome.value,
          descricao: tasks.descricao.value,
          statusT: tasks.statusT.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:3000", {
          nome: tasks.nome.value,
          descricao: tasks.descricao.value,
          statusT: tasks.statusT.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    tasks.nome.value = "";
    tasks.descricao.value = "";
    tasks.statusT.value = "";

    setOnEdit(null);
    gettasks();
  };

  return (
    <form className="form-container" ref={ref} onSubmit={handleSubmit}>
      <div className="input-area">
        <label>Nome da tarefa</label>
        <input name="nome" />
      </div>
      <div className="input-area">
        <label>Descrição</label>
        <input name="descricao" type="descricao" />
      </div>
      <div className="input-area">
        <label>Status</label>
        <input name="statusT" />
      </div>

      <button className="button" type="submit">SALVAR</button>
    </form>
  );
};

export default Form;
