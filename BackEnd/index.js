const express = require('express'),
      app = express(),
      Day1CharactersRouters = require('./routes/Day1CharacterRoutes'),
      Day2CharactersRouters = require('./routes/Day2CharacterRoutes'),
      Day3CharacterRouters = require('./routes/Day3CharacterRoutes'),
      allCharacterRoutes = require('./routes/AllCharacterRoutes'),
      weaponRoutes = require('./routes/weaponRoutes'),
      cors = require('cors');

app.use(cors());
app.use('/AllCharacters', allCharacterRoutes.CharRouter);
app.use('/Day1Characters', Day1CharactersRouters.Day1CharRoutes);
app.use('/Day2Characters', Day2CharactersRouters.Day2CharRoutes);
app.use('/Day3Characters', Day3CharacterRouters.Day3CharRoutes);
app.use('/Weapons',weaponRoutes.WeaponsRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log(`App now running at LocalHost:${PORT}`);
});