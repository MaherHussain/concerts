const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts");
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});
router.get("/?", async (request, response) => {

  getLatestContacts(request.query.limit)
    .then((result) => response.json(result))
    .catch((ex) => {
      response.status(400).send("Bad request").end();
      console.log(ex);
    });
});

const getLatestContacts = async (limit) => {
  try {
    return await knex("concerts").select("*").orderBy("id", "DESC").limit(limit);
  } catch (error) {
    console.log(error);
  }
};
router.post("/", async (request, response) => {
  createContact({
    body: request.body,
  })
    .then((result) => response.json(result))
    .catch((error) => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});

const createContact = async ({ body }) => {
  const { title, band,venue,created_date, performance_date,price } = body;
  
  return await knex("concerts").insert({
    title,
    band,
    venue,
    created_date,
    performance_date,
    price,
  }); 
};



router.put("/:id", async (request, response) =>{
  editeConcert({
    body : request.body,
    id : request.params.id,
  })
  // @ts-ignore
  .then((result) => {
    console.log(result)
    return response.json(result)})
    .catch((error) => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
    
})
const editeConcert = async ({ body,id }) => {
  const { title, band, venue, created_date, performance_date, price } = body;


  const concerts =  await knex("concerts").select("*").where({
    id :id,
  })
  console.log(concerts)
  if(concerts.length === 0){
    // @ts-ignore
    throw new HttpError("Bad request", `Contact not found: ID ${id}!`, 404);
  }
  const queryDto = {
    title: title,
    band: band,
    venue: venue,
    created_date: created_date,
    performance_date: performance_date,
    price: price,
  }
  if (Object.keys(queryDto).length !== 0) {
    
    return knex("concerts")
      .where({
        id: id,
      })
      .update(queryDto);
  } else return "Nothing updated!";
};




router.delete("/:id", async (request, response) => {
  deleteConcert({
    body: request.body,
    id: request.params.id,
  })
    // @ts-ignore
    .then((result) => {
      
      return response.json(result);
    })
    .catch((error) => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});
const deleteConcert = async ({ body, id }) => {
  const { title, band, venue, created_date, performance_date, price } = body;

  const concerts = await knex("concerts").select("*").where({
    id: id,
  });
 
  if (concerts.length === 0) {
    // @ts-ignore
    throw new HttpError("Bad request", `Contact not found: ID ${id}!`, 404);
  }
  
  if (concerts.length !== 0) {
    return knex("concerts")
      .where({
        id: id,
      })
      .delete(concerts);
  } else return "Nothing deleted!";
};





module.exports = router;
