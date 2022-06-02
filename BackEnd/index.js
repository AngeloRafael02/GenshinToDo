const express = require('express'),
      app = express(),
      characterRoutes = require('./routes/characterRoutes'),
      cors = require('cors');

app.use(cors());
app.use('/', characterRoutes.router);

app.listen(3000, function () {
    console.log(`App now running at LocalHost:3000`);
});