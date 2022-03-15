const db = require('../models');
const Article = db.article;

exports.findAll = async (req, res) => {

    const articles = await Article.findAll();

    res.send(articles);
}

// findOne un id, controlando errores en case que no encuentre uno existente 
exports.findOne = async (req, res) => {

  const id = req.params.id; 

  try { 
    const article = await Article.findOne({
      where: {
              id : id,
      },
    });

  if (article) { 
    return res.status(200).json(article);} 

    else { 
      return res.status(404).json('No Article found by this id'); } 
  
  } 

  catch (err) { return res.status(500).json(err); } 

};



// method to have query to create a new one
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.idArticle) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a new User
    const articleNew = {
      idArticle: req.body.idArticle,
      name: req.body.name,
      category: req.body.category,
      type: req.body.type,
      image: req.body.image,
      timeCook: req.body.timeCook,
      cost: req.body.cost,
      iva: req.body.iva,
      pvp: req.body.pvp,
      active: req.body.active,
      gluten: req.body.gluten,
      crustaceos: req.body.crustaceos,
      egg: req.body.egg,
      fish: req.body.fish,
      soja: req.body.soja,
      milk: req.body.milk,
      fructose: req.body.fructose,
      mustard: req.body.mustard,
      apio: req.body.apio,
      molusco: req.body.molusco,
      altramuces: req.body.altramuces,
      sesamo: req.body.sesamo,
      sulfito: req.body.sulfito,
      cacahuate: req.body.cacahuate,

      published: req.body.published ? req.body.published : false
    };
    
    // Save user in the database
    Article.create(articleNew)
      .then(newArticle => {
        res.send(newArticle);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the new Article."
        });
      });
  };



