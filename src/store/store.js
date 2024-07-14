import { configureStore } from '@reduxjs/toolkit'
import answerSlice from './slices/answerSlice'

export const store = configureStore({
  reducer: {
    answers: answerSlice,
   },
})
