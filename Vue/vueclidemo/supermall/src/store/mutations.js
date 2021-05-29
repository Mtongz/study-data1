export default {
  cartCountAdd(state, product) {
    product.count += 1
  },
  cartGoodsAdd(state, product) {
    product.count = 1
    product.checked = true
    state.cartList.push(product)
  }
}
