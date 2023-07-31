const MonthlyResult = require('../models/monthlyResult');

const monthlyResult_getAll = (req, res) => {
    
    const companyName = req.query.companyName || "";
    const jobTitle = req.query.jobTitle || "";

    let page = req.query.page || 1;
    const takeCount = 10;

    if ( page < 1 ) {
        page = 1;
    }
    MonthlyResult.find(
        { 
            "CompanyName": { "$regex": companyName, "$options": "i" }, 
            "JobTitle": { "$regex": jobTitle, "$options": "i" } 
        })
        .skip( (page-1) * takeCount)
        .limit(takeCount)
        .then((result) => {

            res.render('jobs/index', 
                {
                    title : "All jobs", 
                    jobs: result, 
                    companyName: companyName, 
                    jobTitle: jobTitle,
                    page: page 
                });
            
        })
        .catch((err) => {
            console.log(err);
        })
}



module.exports = {
    monthlyResult_getAll
}