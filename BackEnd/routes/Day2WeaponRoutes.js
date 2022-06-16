const express = require("express"),
Day2WeaponRoutes = express.Router(),
{pool}=require('../db');

//TUESDAY - FRIDAY WEAPONS ROUTES
Day2WeaponRoutes.get(['/Mondstadt'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day2Weapons WHERE material = 'Boreal Wolf';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});
Day2WeaponRoutes.get(['/Liyue'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day2Weapons WHERE material = 'Mist Veiled';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});
Day2WeaponRoutes.get(['/Inazuma'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day2Weapons WHERE material = 'Narukami';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});

module.exports = {Day2WeaponRoutes}