import React, { useState, useEffect } from "react";
import axios from "axios";

const Account = () => {
  const [form, setFormss] = useState([]);

  useEffect(() => {
    axios
      .get("https://679c47c233d3168463264b38.mockapi.io/DataForm")
      .then((res) => setFormss(res.data))

      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  return (
    <div className="wrapper__container">
      <div className="account">
        <table className="data-table">
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Телефон</th>
              <th>Маил</th>
              <th>Организация</th>
              <th>Сообщение</th>
              <th>Дата</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {form.reverse().map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.position}</td>
                <td className="message-column">{user.message}</td>
                <td>{user.date}</td>
                <td>ожидает</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Account;
