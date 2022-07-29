const { sequelize } = require('../../db/models')

sequelize
  .sync()
  .then(() => {
    console.log('Sync DB')
    process.exit()
  })
  .catch(err => console.error('Database error:', err))
