import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

interface Elements {
  elements: string[];
}

const initialState: Elements = {
  elements: ['textTranslationSection'],
};

const elementStateSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    openElement: (state, action: PayloadAction<string>) => {
      state.elements.push(action.payload);
    },
    closeElement: (state, action: PayloadAction<string>) => {
      state.elements = state.elements.filter((x) => x !== action.payload);
    },
  },
});

export const isElementOpen = createSelector(
  [
    (state: { elements: Elements }) => state.elements,
    (_, elementId: string) => elementId,
  ],
  (elements, elementId) => elements.elements.some((x) => x === elementId)
);

export const { openElement, closeElement } = elementStateSlice.actions;

export default elementStateSlice.reducer;
