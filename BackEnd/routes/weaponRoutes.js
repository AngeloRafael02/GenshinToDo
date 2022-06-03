const express = require('express'),
      WeaponsRouter = express.Router(),
      {pool} = require('../db');

WeaponsRouter.get('/Weapons', async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM AllWeapons;");
        res.send(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
WeaponsRouter.get(['/Weapons/Monday', '/Weapons/Thursday'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day1Weapons;");
        res.send(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
WeaponsRouter.get(['/Weapons/Tuesday', '/Weapons/Friday'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day2Weapons;");
        res.send(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
WeaponsRouter.get(['/Weapons/Wednesday', '/Weapons/Saturday'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day3Weapons;");
        res.send(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
module.exports = {WeaponsRouter}