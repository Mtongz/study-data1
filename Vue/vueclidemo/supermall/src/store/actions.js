export default {

  changeCartList(context, goodsItem) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.id === goodsItem.id)
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit('cartCountAdd', oldProduct)
        resolve('商品数量+1')
      } else {
        // goodsItem.count = 1
        // context.state.cartList.push(goodsItem)
        context.commit('cartGoodsAdd', goodsItem)
          resolve('商品种类+1')
      }
    })
  }

}
