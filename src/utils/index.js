
export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=948623e7&app_key=784ad27059de01740427fe466b5f2b5a&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=948623e7&app_key=784ad27059de01740427fe466b5f2b5a	`

const response = await fetch(url)

const data = await response.json();

return data[0];
}