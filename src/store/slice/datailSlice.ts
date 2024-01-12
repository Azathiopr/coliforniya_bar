import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { cocktailsAPI } from "../../axios";
import { ICocktailData, IIngrAll } from "../modules";



type DatailSlice = {
    detail: ICocktailData | null
    ingredient: IIngrAll | null
    loading: boolean
    error: null | string | undefined
}

const initialState: DatailSlice = {
    detail: null,
    ingredient: null,
    error: null,
    loading: false
}

export const fetchById = createAsyncThunk<ICocktailData, string, { rejectValue: string }>(
    'coctails/fetchById',
    async (id, { rejectWithValue }) => {
        try {
            const res = await cocktailsAPI.getById(id)
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            const data = res.data.drinks[0]
            return data as ICocktailData
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                return rejectWithValue(message);
            }
            // unhandled non-AxiosError goes here
            throw error
        }
    }
)

export const fetchByIngredient = createAsyncThunk<IIngrAll, string, { rejectValue: string }>(
    'coctails/fetchByIngredient',
    async (name, { rejectWithValue }) => {
        try {
            const res = await cocktailsAPI.getIngredientByName(name)
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            const data = res.data.ingredients[0]
            return data as IIngrAll
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                return rejectWithValue(message);
            }
            // unhandled non-AxiosError goes here
            throw error
        }
    }
)

const datailSlice = createSlice({
    name: 'datails',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchById.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchById.fulfilled, (state, action) => {
            state.detail = action.payload
            state.loading = false
        })
        addCase(fetchById.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })

        addCase(fetchByIngredient.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByIngredient.fulfilled, (state, action) => {
            state.ingredient = action.payload
            state.loading = false
        })
        addCase(fetchByIngredient.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })


    }
})

export default datailSlice.reducer

