const express = require("express"),
Day1WeaponRoutes = express.Router(),
{pool}=require('../db')


//MONDAY - THURSDAY WEAPONS ROUTES
Day1WeaponRoutes.get(['/All'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
          `SELECT * FROM AllWeapons`);
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.status(503).send('Error 503: Server Error');
    }
});
Day1WeaponRoutes.get(['/Mondstadt'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day1Weapons WHERE material = 'Decarabian';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.status(503).send('Error 503: Server Error');
    }
})
Day1WeaponRoutes.get(['/Liyue'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day1Weapons WHERE material = 'Guyun';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.status(503).send('Error 503: Server Error');
    }
});
Day1WeaponRoutes.get(['/Inazuma'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day1Weapons WHERE material = 'Distant Sea';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.status(503).send('Error 503: Server Error');
    }
});

module.exports = {Day1WeaponRoutes}