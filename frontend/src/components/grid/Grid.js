import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "./grid.css";

const Grid = ({ tasks, setTasks, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:3000/" + id)
      .then(({ data }) => {
        const newArray = tasks.filter((task) => task.id !== id);

        setTasks(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Status</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((item, i) => (
          <tr key={i}>
            <td width="30%">{item.nome}</td>
            <td width="30%">{item.descricao}</td>
            <td width="20%">{item.statusT}</td>
            <td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </td>
            <td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
