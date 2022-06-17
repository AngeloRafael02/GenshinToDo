const express = require('express'),
      app = express(),
      cors = require('cors'),
      {WeaponsRouter} = require('./routes/AllWeaponRoutes'),
      {Day1WeaponRoutes} = require('./routes/Day1WeaponRoutes'),
      {Day2WeaponRoutes} = require('./routes/Day2WeaponRoutes'),
      {Day3WeaponRoutes} = require('./routes/Day3WeaponRoutes'),
      {CharRouter} = require('./routes/AllCharacterRoutes'),
      {Day1CharRoutes} = require('./routes/Day1CharacterRoutes'),
      {Day2CharRoutes} = require('./routes/Day2CharacterRoutes'),
      {Day3CharRoutes} = require('./routes/Day3CharacterRoutes');


app.use(cors());
app.use('/AllCharacters', CharRouter);
app.use('/Day1Characters', Day1CharRoutes);
app.use('/Day2Characters', Day2CharRoutes);
app.use('/Day3Characters', Day3CharRoutes);
app.use('/AllWeapons', WeaponsRouter);
app.use('/Day1Weapons', Day1WeaponRoutes);
app.use('/Day2Weapons', Day2WeaponRoutes);
app.use('/Day3Weapons', Day3WeaponRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log(`App now running at LocalHost:${PORT}`);
});