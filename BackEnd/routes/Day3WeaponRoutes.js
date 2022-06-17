const express = require("express"),
Day3WeaponRoutes = express.Router(),
{pool}=require('../db');

//WEDNESDAY - SATURDAY WEAPONS ROUTES
Day3WeaponRoutes.get(['/All'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day3Weapons;");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});
Day3WeaponRoutes.get(['/Mondstadt'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day2Weapons WHERE material = 'Dandelion Gladiator';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});
Day3WeaponRoutes.get(['/Liyue'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day2Weapons WHERE material = 'Aerosiderite';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});
Day3WeaponRoutes.get(['/Inazuma'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day2Weapons WHERE material = 'Mask';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});

module.exports = {Day3WeaponRoutes}