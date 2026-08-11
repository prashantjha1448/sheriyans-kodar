

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  inputs: {
    name: '',
    email: '',
    phone: '',
    college: '',
    mernKnowledge: 'none', 
    background: '',
  },
  errors: {},
  loading: false,
  success: false,
  submitError: null,
};


export const submitApplication = createAsyncThunk(
  'form/submitApplication',
  async (formData, { rejectWithValue }) => {
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return { status: 'success', message: 'Application submitted successfully!' };
    } catch (err) {
      return rejectWithValue(err.message || 'Something went wrong');
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.inputs[field] = value;
      
      if (state.errors[field]) {
        delete state.errors[field];
      }
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    resetForm: (state) => {
      state.inputs = initialState.inputs;
      state.errors = {};
      state.success = false;
      state.submitError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitApplication.pending, (state) => {
        state.loading = true;
        state.submitError = null;
        state.success = false;
      })
      .addCase(submitApplication.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitApplication.rejected, (state, action) => {
        state.loading = false;
        state.submitError = action.payload;
      });
  },
});

export const { updateField, setErrors, resetForm } = formSlice.actions;


export const selectFormInputs = (state) => state.form.inputs;
export const selectFormErrors = (state) => state.form.errors;
export const selectFormLoading = (state) => state.form.loading;
export const selectFormSuccess = (state) => state.form.success;
export const selectFormSubmitError = (state) => state.form.submitError;

export default formSlice.reducer;
