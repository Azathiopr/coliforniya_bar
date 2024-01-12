import axios from "axios";


const instanse = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
    headers: {
        "Content-Type": "application/json",
    }
})

export const cocktailsAPI = {
    getAllCocktails() {
        return instanse.get('filter.php?c=Cocktail')
    },
    getByName(value: string) {
        return instanse.get(`search.php?s=${value}`)
    },
    getByFilter(filter: string) {
        return instanse.get(`filter.php?a=${filter}`)
    },
    getById(id: string) {
        return instanse.get(`lookup.php?i=${id}`)
    },
    getIngredientByName(name: string) {
        return instanse.get(`search.php?i=${name}`)
    },
    getGlasses() {
        return instanse.get(`list.php?g=list`)
    },
    getForGlasses(glass: string) {
        return instanse.get(`filter.php?g=${glass}`)
    },
    getRandom() {
        return instanse.get('random.php')
    },
}
