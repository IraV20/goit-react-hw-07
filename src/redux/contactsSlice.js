import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./contactsOps";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false,
            state.error = null,
            state.items = action.payload
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })
        .addCase(addContact.pending, (state) => {
            state.loading = true
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false,
            state.error = null,
            state.items.push(action.payload)
        })
        .addCase(addContact.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })
    }

    
});

export const {fetchInProgress, fetchSuccess, fetchError} = contactsSlice.actions;

export default contactsSlice.reducer;

