type IObjectKeys = {
    [key: string]: string | null
}

export type IDrink = {
    idDrink: string
    strDrink: string
    strDrinkThumb: string
}

export type IGlass = {
    strGlass: string
}

export type ICocktailData = IDrink & IObjectKeys & {
    strAlcoholic: string
    strGlass: string
    strIngredient1: null | string
    strIngredient2: null | string
    strIngredient3: null | string
    strIngrediet: null | string
    strIngredient5: null | string
    strIngredient6: null | string
    strIngredient7: null | string
    strIngredient8: null | string
    strIngredient9: null | string
    strIngredient10: null | string
    strIngredient11: null | string
    strIngredient12: null | string
    strIngredient13: null | string
    strIngredient14: null | string
    strIngredient15: null | string
    strInstructions: null | string
}

export type IIngrAll = {
    strDescription?: null
    strIngredient?: string
}

export type IListInr = () => (string | null)[]