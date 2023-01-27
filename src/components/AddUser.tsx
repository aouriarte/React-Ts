import { useState } from "react";
import { User } from "../types";

interface FormState {
  inputValues: User;
}

// 1 forma:
// interface FormProps {
//   onNewUser: React.Dispatch<React.SetStateAction<User[]>>; // hacer hover sobre los errores
// }

// 2 forma: para no buscar el tipado de React.disp...
interface FormProps {
  onNewUser: (newUser: User) => void; // hacer hover sobre los errores
}

const AddUser = ({ onNewUser }: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    name: "",
    lastName: "",
    nick: "",
    avatar: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 1 forma:
    // onNewUser((users) => [...users, inputValues]);
    // 2 forma:
    onNewUser(inputValues);
    setInputValues({
      name: "",
      lastName: "",
      nick: "",
      avatar: "",
    });
  };

  // Consejo: hacer hover para saber el tipo de elemento y agregarlo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={inputValues.name}
          onChange={handleChange}
          placeholder="Alexis"
        />
        <label>Apellido:</label>
        <input
          type="text"
          name="lastName"
          value={inputValues.lastName}
          onChange={handleChange}
          placeholder="Uriarte"
        />
        <label>Usuario:</label>
        <input
          type="text"
          name="nick"
          value={inputValues.nick}
          onChange={handleChange}
          placeholder="@aouriarte"
        />
        <label>Avatar:</label>
        <input
          name="avatar"
          value={inputValues.avatar}
          onChange={handleChange}
          placeholder="Ingresa el enlace de la imagen"
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddUser;
