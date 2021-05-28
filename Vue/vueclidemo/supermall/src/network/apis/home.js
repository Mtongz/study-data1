import {
  coderwhy
} from 'network/request/request'

// home 相关
export function getHomeMultidata() {
  return coderwhy({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return coderwhy({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

// detail  详情页相关
export function detailData(iid) {
  return coderwhy({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function recommendData() {
  return coderwhy({
    url: '/recommend'
  })
}
export class DetailInfos {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.lowNowPrice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}
export class ShopInfo {
  constructor(shopInfo) {
    this.avatar = shopInfo.shopLogo
    this.nickName = shopInfo.name
    this.sales = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.allGoodsUrl = shopInfo.allGoodsUrl
    this.score = shopInfo.score
    this.shopUrl = shopInfo.shopUrl
  }
}
export class shopGoodsParams {
  constructor(info, size) {
    this.info = info
    this.size = size
  }
}
