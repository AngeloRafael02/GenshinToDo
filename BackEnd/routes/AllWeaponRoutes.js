const express = require('express'),
      WeaponsRouter = express.Router(),
      {pool} = require('../db');

WeaponsRouter.get('/all', async function(req,res){
    try{
        const WeaponResponse = await pool.query(
           `SELECT * FROM AllWeapons`);
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});
WeaponsRouter.get(['/Mondstadt'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM AllWeapons WHERE domainname = 'Cecilia Garden';");
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});
WeaponsRouter.get(['/Liyue'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM AllWeapons WHERE domainname = 'Hidden Palace of Lianshan Formula';");
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});
WeaponsRouter.get(['/Inazuma'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM AllWeapons WHERE domainname = 'Court of Flowing Sand'");
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});
module.exports = {WeaponsRouter}