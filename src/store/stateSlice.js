import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUser } from "../api/authAPI"



const initialState = {
    user: {
        name: '',
        role: ''
    }
}

export const appStateAsync = createAsyncThunk(
    'appState/getUser',
    async (fakeAuthData) => {
        const response = await getUser(fakeAuthData)
        return response.user;
    }
)

const stateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: { // Conjunto de acciones síncronas
        //
    },
    extraReducers: (builder) => { // Conjunto de acciones asíncronas
        builder.addCase(appStateAsync.pending, () => {})
               .addCase(appStateAsync.fulfilled, (state, action) => {
                    state.user = action.payload // En payload van los datos de la acción en este caso user
               })
    }
})

export default stateSlice.reducer;