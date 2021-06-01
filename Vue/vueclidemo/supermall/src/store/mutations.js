export default {
  cartCountAdd(state, product) {
    product.count += 1
  },
  cartGoodsAdd(state, product) {
    product.count = 1
    product.checked = false
    state.cartList.push(product)
  }
}
