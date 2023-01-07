import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})

export {
  router
}
