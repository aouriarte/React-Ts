import useNewUserForm from "../hooks/useAddUser";
import { User } from "../types";

// 1 forma:
// interface FormProps {
//   onNewUser: React.Dispatch<React.SetStateAction<User[]>>; // hacer hover sobre los errores
// }

// 2 forma: para no buscar el tipado de React.disp...
interface FormProps {
  onNewUser: (newUser: User) => void; // hacer hover sobre los errores
  closeModal: any;
}

const AddUser = (props: FormProps) => {
  // sin el useReducer
  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
  //   name: "",
  //   lastName: "",
  //   nick: "",
  //   avatar: "",
  // });

  // useReducer:
  const [inputValues, dispatch] = useNewUserForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 1 forma:
    // onNewUser((users) => [...users, inputValues]);
    // 2 forma:
    props.onNewUser(inputValues);
    dispatch({ type: "Clear" });
  };

  // Consejo: hacer hover para saber el tipo de elemento y agregarlo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // sin useReducer:
    // setInputValues({
    //   ...inputValues,
    //   [e.target.name]: e.target.value,
    // });

    // useReducer:
    const { name, value } = e.target;
    dispatch({
      type: "Change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  // const handleClear = () => {
  //   // setInputValues(INITIAL_STATE)
  // };

  return (
    <div className="fixed flex w-full">
      <div className="mx-auto z-20 mt-8 lg:w-1/4 md:w-1/3 sm:w-1/2">
        <div className="shadow-lg bg-white rounded-lg p-6">
          <div className="flex justify-end">
            <button onClick={() => props.closeModal(false)}>X</button>
          </div>
          <form className="mt-2" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              value={inputValues.name}
              onChange={handleChange}
              placeholder="Primer nombre"
            />
            <input
              type="text"
              name="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              value={inputValues.lastName}
              onChange={handleChange}
              placeholder="Apellido"
            />
            <input
              type="text"
              name="nick"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              value={inputValues.nick}
              onChange={handleChange}
              placeholder="@usuario o email@.com"
            />
            <input
              name="avatar"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              value={inputValues.avatar}
              onChange={handleChange}
              placeholder="Ingresa el enlace de la imagen"
            />
            <div className="flex justify-center items-center block md:flex">
              <button
                type="submit"
                className="rounded-md py-2 px-4 bg-sky-500 hover:bg-sky-700 text-white m-8"
              >
                Agregar
              </button>
              <button
                type="submit"
                onClick={() => props.closeModal(false)}
                className="rounded-md py-2 px-4 bg-red-500 hover:bg-red-700 text-white m-8"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
