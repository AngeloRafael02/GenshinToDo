const express = require('express'),
Day3CharRoutes = express.Router(),
{pool} = require('../db');


//WEDNESDAY - SATURDAY ROUTES
Day3CharRoutes.get(['/All'], async function(req,res){
    try{
        const charResponse = await pool.query(
           `SELECT * FROM AllCharacters;`);
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});
Day3CharRoutes.get(['/Mondstadt'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day3characters WHERE material ='Ballad';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});
Day3CharRoutes.get(['/Liyue'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day3characters WHERE material = 'Gold';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});
Day3CharRoutes.get(['/Inazuma'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day3characters WHERE material = 'Light';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});

module.exports = {Day3CharRoutes}