const express = require('express'),
      CharRouter = express.Router(),
      {pool} = require('../db');

//ALL CHARACTER ROUTES
CharRouter.get('/All', async function(req,res){
    try{
        const charResponse = await pool.query(
           `SELECT * FROM AllCharacters;`);
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
}); 
CharRouter.get('/Mondstadt', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters WHERE material IN ('Freedom','Resistance','Ballad')");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});   
CharRouter.get('/Liyue', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters WHERE  material IN ('Prosperity','Diligence','Gold');");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
});    
CharRouter.get('/Inazuma', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters WHERE material IN ('Transience','Elegance','Light');");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.status(503).send('Error 503: Server Error');
    }
}); 

module.exports = {CharRouter};