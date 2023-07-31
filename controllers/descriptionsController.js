
const Description = require('../models/description');


const getDescription = (req,res) => {
    let id = req.params.id;

    Description.find({ 'Job ID': id.toString()}, {'Job Description' :1, _id:0})
        .then((result) => {
            res.render('jobs/descriptionDetail', { title: 'Description Detail', description: result });
        })
        .catch((err) => {
            res.status(404).render('404', {title: "404" });
        })
}

module.exports = {
    getDescription
};