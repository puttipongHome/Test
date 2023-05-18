import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Person {
  key: number;
  firstname: string;
  lastname: string;
  title: string;
  date: string;
  nationality: string;
  gender: string;
  passport: string;
  phone: string;
  salary: string;
}

interface PersonState {
  data: Person[];
  count: number;
}

const storedPerson = localStorage.getItem("Mylist");
const initialState: PersonState = storedPerson
  ? JSON.parse(storedPerson)
  : {
      data: [],
      count: 0,
    };

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.data.push(action.payload);
      state.count++;
      localStorage.setItem("Mylist", JSON.stringify(state));
    },
    removePerson: (state, action: PayloadAction<React.Key>) => {
      state.data = state.data.filter((person) => person.key !== action.payload);
      state.count--;
      localStorage.setItem("Mylist", JSON.stringify(state));
    },
    removeAllPersons: (state) => {
      state.data = [];
      state.count = 0;
      localStorage.setItem("Mylist", JSON.stringify(state));
    },
  },
});

export const { addPerson, removePerson, removeAllPersons } =
  personSlice.actions;
export default personSlice.reducer;
