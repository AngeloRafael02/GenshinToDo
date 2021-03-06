const express = require('express'),
      Day2CharRoutes = express.Router(),
      {pool} = require('../db');

//TUESDAY - FRIDAY ROUTES
Day2CharRoutes.get(['/All'], async function(req,res){
    try{
        const charResponse = await pool.query(
           `SELECT * FROM AllCharacters;`);
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});
Day2CharRoutes.get(['/Mondstadt'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters WHERE material ='Resistance';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});
Day2CharRoutes.get(['/Liyue'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters WHERE material = 'Diligence';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});
Day2CharRoutes.get(['/Inazuma'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters WHERE material = 'Elegance';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});

module.exports = {Day2CharRoutes}