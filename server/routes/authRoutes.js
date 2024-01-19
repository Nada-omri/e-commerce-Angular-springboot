const express = require('express')
const router = express.Router();
const cors =require('cors')
const{test,registerUser, findAllUsers, findsingleUser, updateUser, deleteUser}= require('../controllers/authcontroller')

router.use(
    cors({
        credentials:true,
        origin :'http://localhost:5173'
    })
)
router.get('/',test)
router.post('/register',registerUser)
router.get('/register/:id',findsingleUser)
router.get('/register',findAllUsers)
router.put('/register/:id',updateUser)
router.delete('/register/:id',deleteUser)

module.exports = router