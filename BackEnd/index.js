const express = require('express'),
      app = express(),
      characterRoutes = require('./routes/characterRoutes'),
      weaponRoutes = require('./routes/weaponRoutes'),
      cors = require('cors');

app.use(cors());
app.use('/', characterRoutes.CharRouter);
app.use('/',weaponRoutes.WeaponsRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log(`App now running at LocalHost:${PORT}`);
});