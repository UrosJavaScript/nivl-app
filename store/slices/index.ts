import { TextState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TextState = {
  value: '',
  loading: false,
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setValue, setLoading } = textSlice.actions;
export default textSlice.reducer;
