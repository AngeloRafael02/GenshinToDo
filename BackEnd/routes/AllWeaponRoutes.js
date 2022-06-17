const express = require('express'),
      WeaponsRouter = express.Router(),
      {pool} = require('../db');

WeaponsRouter.get('/all', async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM AllWeapons;");
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
WeaponsRouter.get(['/day1'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day1Weapons;");
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
WeaponsRouter.get(['/day2'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day2Weapons;");
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
WeaponsRouter.get(['/day3'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day3Weapons;");
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
module.exports = {WeaponsRouter}