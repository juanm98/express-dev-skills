import { Skill } from "../models/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => { // skills represents the result of the query, in this case ALL todos
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  req.body.done = false
  Skill.create(req.body)
  .then(skill => {
		// Notice the redirect 
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
	index,
  newSkill as new,
  create
}