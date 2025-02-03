import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://679c47c233d3168463264b38.mockapi.io/DataForm";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    fullPost: "",
    message: "",
  });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Ошибка загрузки пользователей:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      setMessage("✅ Пользователь добавлен!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        position: "",
        fullPost: "",
        message: "",
      });
      fetchUsers(); // Обновляем список пользователей
    } catch (error) {
      setMessage("❌ Ошибка при отправке данных");
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  const handlerClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="feedback">
      <button onClick={() => handlerClick()} class="apply-button">
        Оставить заявку
      </button>

      <div
        className={
          isVisible === true
            ? "feedback__toggle-Visivle"
            : "feedback__toggle-IsVisivle"
        }
      >
        <div className="toggle-button" onClick={() => setIsVisible(!isVisible)}>
          Х
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>ФИО</label>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Телефон</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 XXX XXX XX XX"
              pattern="\+?[0-9]{1,3}?[0-9]{10}"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Выберите организацию</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
            >
              <option value="Управление делами Главы Республики Ингушетия">
                Выбрать
              </option>
              <option value="Управление делами Главы Республики Ингушетия">
                Управление делами Главы Республики Ингушетия
              </option>
              <option value="Министерство промышленности и цифрового развития">
                Министерство промышленности и цифрового развития
              </option>
              <option value="Министерство экономического развития">
                Министерство экономического развития
              </option>
              <option value="Министерство финансов">
                Министерство финансов
              </option>
              <option value="Министерство образования и науки">
                Министерство образования и науки
              </option>
              <option value="Министерство труда, занятости и социального развития">
                Министерство труда, занятости и социального развития
              </option>
              <option value="Министерство строительства и жилищно-коммунального хозяйства">
                Министерство строительства и жилищно-коммунального хозяйства
              </option>
              <option value="Министерство сельского хозяйства и продовольствия">
                Министерство сельского хозяйства и продовольствия
              </option>
              <option value="Министерство природных ресурсов и экологии">
                Министерство природных ресурсов и экологии
              </option>
              <option value="Министерство по физической культуре и спорту">
                Министерство по физической культуре и спорту
              </option>
              <option value="Министерство по внешним связям, национальной политике, печати и информации">
                Министерство по внешним связям, национальной политике, печати и
                информации
              </option>
              <option value="Министерство культуры">
                Министерство культуры
              </option>
              <option value="Министерство имущественных и земельных отношений">
                Министерство имущественных и земельных отношений
              </option>
              <option value="Министерство здравоохранения">
                Министерство здравоохранения
              </option>
              <option value="Министерство молодежной политике и туризма">
                Министерство молодежной политике и туризма
              </option>
              <option value="Управление по обеспечению деятельности по защите населения и территории от чрезвычайных ситуаций">
                Управление по обеспечению деятельности по защите населения и
                территории от чрезвычайных ситуаций
              </option>
              <option value="Управление по организации деятельности мировых судей Республики Ингушетия">
                Управление по организации деятельности мировых судей Республики
                Ингушетия
              </option>
              <option value="Государственная архивная служба Республики Ингушетия">
                Государственная архивная служба
              </option>
              <option value="Государственная жилищная инспекция">
                Государственная жилищная инспекция
              </option>
              <option value="Государственная служба ЗАГС РИ">
                Государственная служба ЗАГС РИ
              </option>
              <option value="Государственное управление автомобильных дорог РИ">
                Государственное управление автомобильных дорог РИ
              </option>
              <option value="Инспекция государственного строительного надзора Республики Ингушетия">
                Инспекция государственного строительного надзора
              </option>
              <option value="Комитет архитектуры и градостроительства">
                Комитет архитектуры и градостроительства
              </option>
              <option value="Комитет госзаказа">Комитет госзаказа</option>
              <option value="Комитет Государственного финансового контроля">
                Комитет Государственного финансового контроля
              </option>
              <option value="Ветеринарное управление">
                Ветеринарное управление
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Должность</label>
            <input
              name="fullPost"
              value={formData.fullPost}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Текст</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <p>
            Нажимая на кнопку "Отправить" вы соглашаетесь с нашей{" "}
            <a href="/#">Политикой конфиденциальности</a>
          </p>
          <button className="submit-button" type="submit">
            Отправить
          </button>
        </form>
        {message && <p>{message}</p>}

        <h3>Список пользователей</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} {user.phone} {user.position} {user.fullPost} {message}{" "}
              ({user.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
