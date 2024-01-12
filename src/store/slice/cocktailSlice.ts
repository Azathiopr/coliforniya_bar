import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { cocktailsAPI } from "../../axios";
import { IDrink, IGlass } from "../modules";



type CocktailSlice = {
    list: IDrink[]
    loading: boolean
    error: null | string | undefined
    glass: IGlass[]
}

const initialState: CocktailSlice = {
    list: [],
    error: null,
    loading: false,
    glass: [],
}

export const fetchByAllCocktails = createAsyncThunk<IDrink[], void, { rejectValue: string }>(
    'coctails/fetchByAllCocktails',
    async (_, { rejectWithValue }) => {
        try {
            const res = await cocktailsAPI.getAllCocktails()
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.drinks
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

export const fetchByNameCocktails = createAsyncThunk<IDrink[], string, { rejectValue: string }>(
    'coctails/fetchByNameCocktails',
    async (value, { rejectWithValue }) => {
        try {
            const res = await cocktailsAPI.getByName(value)
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.drinks
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

export const fetchByFilterCocktails = createAsyncThunk<IDrink[], string, { rejectValue: string }>(
    'coctails/fetchByFilterCocktails',
    async (filter, { rejectWithValue }) => {
        try {
            const res = await cocktailsAPI.getByFilter(filter)
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.drinks
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

export const fetchByGlasses = createAsyncThunk<IGlass[], void, { rejectValue: string }>(
    'coctails/fetchByGlasses',
    async (_, { rejectWithValue }) => {
        try {
            const res = await cocktailsAPI.getGlasses()
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.drinks
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

export const fetchForGlasses = createAsyncThunk<IDrink[], string, { rejectValue: string }>(
    'coctails/fetchForGlasses',
    async (glass, { rejectWithValue }) => {
        try {
            const res = await cocktailsAPI.getForGlasses(glass)
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.drinks
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

export const fetchRandom = createAsyncThunk<IDrink[], void, { rejectValue: string }>(
    'coctails/fetchRandom',
    async (_, { rejectWithValue }) => {
        try {
            const res = await cocktailsAPI.getRandom()
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.drinks
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

const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByAllCocktails.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByAllCocktails.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false
        })
        addCase(fetchByAllCocktails.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })

        addCase(fetchByNameCocktails.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByNameCocktails.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false
        })
        addCase(fetchByNameCocktails.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })

        addCase(fetchByFilterCocktails.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByFilterCocktails.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false
        })
        addCase(fetchByFilterCocktails.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })

        addCase(fetchByGlasses.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByGlasses.fulfilled, (state, action) => {
            state.glass = action.payload
            state.loading = false
        })
        addCase(fetchByGlasses.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })

        addCase(fetchForGlasses.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchForGlasses.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false
        })
        addCase(fetchForGlasses.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })

        addCase(fetchRandom.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchRandom.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false
        })
        addCase(fetchRandom.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })
    }
})

export default cocktailSlice.reducer
