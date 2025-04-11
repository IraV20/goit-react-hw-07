import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const handlePending = (state) => {
    state.loading = true
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter((contact) => contact.id !== action.payload.id);
        })
        .addCase(deleteContact.rejected, handleRejected)
    }
    
});

export default contactsSlice.reducer;

// Selectors //

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

// export const selectFilteredContacts = state => {
//     console.log("Calculating task count");

//     const contacts = selectContacts(state);
//     const filters = selectNameFilter(state);

//     return contacts.filter((contact) => 
//         contact.name.toLowerCase().includes(filters.toLowerCase()) || 
//         contact.number.toString().includes(filters));
// }

// Мемоїзую. фільтрація буде запускатися тільки, якщо contacts або filters змінилися//

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], 
    (contacts, filters) => {
        console.log("filtering");
        
        return contacts.filter((contact) => 
            contact.name.toLowerCase().includes(filters.toLowerCase()) || 
            contact.number.toString().includes(filters));

    }
);

    

