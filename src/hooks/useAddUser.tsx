import { useReducer } from "react";
import { User } from "../types";

const INITIAL_STATE = {
  name: "",
  lastName: "",
  nick: "",
  avatar: "",
};

interface FormState {
  inputValues: User;
}

type FormReducerAction =
  | {
      type: "Change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "Clear";
    };

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "Change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "Clear":
      return INITIAL_STATE;
    default:
      return state;
  }
};

const useNewUserForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewUserForm;
