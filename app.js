const cors = require('cors')
const express = require('express')
const app = express()
const passport = require('passport')
const multer = require('multer')
const { success, error } = require('consola')

const cookieParser = require('cookie-parser')
const { requireAuth, checkUser } = require('./middleware/authMiddleware')
// app.use(cors())
const bodyParser = require('body-parser')
//enables cors
app.use(cors())

// Brin in the app constants
const { DB } = require('./config')
const PORT = 8100

require('./models/db')
require('./models/User')

// use the passport middleware
app.use(passport.initialize())
// Bring in the passport strategy
require('./config/passport')(passport)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Connect to router
// const users = require('./routes/api/users')
// const authRouter = require('./routes/authRouter')
const imageUser = require('./routes/user')
const authRoutes = require('./routes/authRoutes')

// app.get('*', checkUser)
app.use('/uploads', express.static('uploads'))
// app.use('/api/users', users)
app.use(require('./routes/index'))
// app.use('/api/auth/', authRouter)
app.use('/api/auth/', imageUser)
app.use(authRoutes)
// app.use(express.static('uploads'))
// app.get('/uploads', express.static('uploads'))

// app.use(require('./routes/api/users'))

app.listen(PORT, () =>
  success({ message: `Server started on PORT ${PORT}`, badge: true })
)
