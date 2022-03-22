const db = require('../models');
const Article = db.article;

// to fin all and get all items

exports.findAll = async (req, res) => {
    const articles = await Article.findAll();
      res.send(articles);
}

// findOne un id, controlling errors in case user Id dont Exist 
exports.findOne = async (req, res) => {
  const id = req.params.id; 
  try { 
    const article = await Article.findOne({
      where: {
        id
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
    if (!req.body.type) {
      res.status(400).send({
        message: "Content 'type' can not be empty!"
      });
      return;
    }
    // Create a new ARTCILE
    const articleNew = {
      name: req.body.name,
      category: req.body.category,
      type: req.body.type,
      image: req.body.image,
      timeCook: req.body.timeCook,
      cost: req.body.cost,
      iva: req.body.iva,
      pvp: req.body.pvp,
      isActive: req.body.active,
      hasGluten: req.body.gluten,
      hasCrustaceos: req.body.crustaceos,
      hasEgg: req.body.egg,
      hasFish: req.body.fish,
      hasSoja: req.body.soja,
      hasMilk: req.body.milk,
      hasFructose: req.body.fructose,
      hasMustard: req.body.mustard,
      hasApio: req.body.apio,
      hasMolusco: req.body.molusco,
      hasAltramuces: req.body.altramuces,
      hasSesamo: req.body.sesamo,
      hasSulfito: req.body.sulfito,
      hasCacahuate: req.body.cacahuate,

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



