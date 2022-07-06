const express = require("express"),
Day3WeaponRoutes = express.Router(),
{pool}=require('../db');

//WEDNESDAY - SATURDAY WEAPONS ROUTES
Day3WeaponRoutes.get(['/All'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
           `SELECT * FROM AllWeapons`);
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.status(503).send('Error 503: Server Error');
    }
});
Day3WeaponRoutes.get(['/Mondstadt'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day3Weapons WHERE material = 'Dandelion Gladiator';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.status(503).send('Error 503: Server Error');
    }
});
Day3WeaponRoutes.get(['/Liyue'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day3Weapons WHERE material = 'Aerosiderite';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.status(503).send('Error 503: Server Error');
    }
});
Day3WeaponRoutes.get(['/Inazuma'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day3Weapons WHERE material = 'Mask';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.status(503).send('Error 503: Server Error');
    }
});

module.exports = {Day3WeaponRoutes}