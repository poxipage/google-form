import { state, type State } from "poxi";

type Schema = { form: string };
export const getState = () => state<Schema>();
export const getForm = () => getState().get("form");

export function onCreate(state: State<Schema>) {
  state.set({
    form: "",
  });
}
