const express = require('express'),
      Day2CharRoutes = express.Router(),
      {pool} = require('../db');

//TUESDAY - FRIDAY ROUTES
Day2CharRoutes.get(['/Mondstadt'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters WHERE region = 'Mondstadt';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day2CharRoutes.get(['/Liyue'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters WHERE region = 'Liyue';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day2CharRoutes.get(['/Inazuma'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters WHERE region = 'Inazuma';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});

module.exports = {Day2CharRoutes}