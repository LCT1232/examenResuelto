import { Restaurant } from '../models/models.js'

const checkPerformanceOwnership = async (req, res, next) => {
  try {
    const restaurantOfPerformance = await Restaurant.findByPk(req.body.restaurantId)
    if (req.user.id === restaurantOfPerformance.userId) {
      return next()
    } else {
      return res.status(403).send('Not enough privileges. This entity does not belong to you')
    }
  } catch (err) {
    return res.status(500).send(err)
  }
}

export { checkPerformanceOwnership }
