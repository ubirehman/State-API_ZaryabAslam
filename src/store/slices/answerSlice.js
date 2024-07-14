import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: [],
};

export const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.values.push(action.payload);
    },
    setValues: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { addValue, setValues } = answerSlice.actions;

export default answerSlice.reducer;
