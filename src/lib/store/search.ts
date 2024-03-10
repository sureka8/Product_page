import { writable } from "svelte/store"

export const createSearchStore =(products) =>{
    const {subscribe,set,update} = writable({
        data : products,
        filterd:products,
        search:'',
    })
    return{
        subscribe,
        set,
        update

    }
}

// export const searchHandler = (store) =>{
//     const searchTerm = store.search.toLowerCase() || ""
//     store.filterd = store.data.filter((item) =>{ 
//         return item.searchTerms.toLowerCase().includes(searchTerm)})
    
// }
export const searchHandler = (store) => {
    const searchTerm = (store.search || "").toLowerCase(); // Ensure store.search is defined
    store.filtered = store.data.filter((item) => {
        return (item.searchTerms || "").toLowerCase().includes(searchTerm); // Ensure item.searchTerms is defined
    });
};
