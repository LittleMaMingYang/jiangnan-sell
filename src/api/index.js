import { get } from './helpers'

const getSeller = get('api/seller')
const getGoods = get('api/goods')
const getRatings = get('api/ratings')
const getProfile = get('api/profile')
export {
  getSeller,
  getGoods,
  getRatings,
  getProfile
}
