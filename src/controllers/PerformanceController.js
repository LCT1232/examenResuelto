import { Performance, Restaurant } from '../models/models.js'

const create = async function (req, res) {
  let newPerformance = Performance.build(req.body)
  const userOfRestaurantOfPerformance = await Restaurant.findByPk(newPerformance.restaurantId)
  userOfRestaurantOfPerformance.userId = req.user.id
  try {
    newPerformance = await newPerformance.save()
    res.json(newPerformance)
  } catch (err) {
    res.status(500).send(err)
  }
}

const PerformanceController = {
  create
}
export default PerformanceController
