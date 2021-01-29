export default (state, action) => {
    switch (action.type){
        case 'ADD_PRODUCT':
            return{
                products: [action.payload, ...state.products]
            }
            
        case 'EDIT_PRODUCT':
            const updateProduct = action.payload;
            
            const updateProducts = state.products.map(product => {
                if(product.id == updateProduct.id){
                    return updateProduct;
                }
                return product;
            })
            
            return{
                products: updateProducts
            }
            
        case 'REMOVE_PRODUCT':
            return{
                products: state.products.filter(product =>{
                    return product.id !== action.payload
                })
            }
        default:
            return state
    }
}