export default {

  changeCartList(context, goodsItem) {
    let oldProduct = context.state.cartList.find(item => item.id === goodsItem.id)
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit('cartCountAdd', oldProduct)
    } else {
      // goodsItem.count = 1
      // context.state.cartList.push(goodsItem)
      context.commit('cartGoodsAdd', goodsItem)

    }
  }

}
