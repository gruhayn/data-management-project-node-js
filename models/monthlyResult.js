const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const monthlyResultSchema = new Schema({
    "Job ID" : [mongoose.Types.String, mongoose.Types.undefined],
    CompanyId: [mongoose.Types.String, mongoose.Types.undefined],
    CompanyName: [mongoose.Types.String, mongoose.Types.undefined],
    JobOpeningDate: [mongoose.Types.Date, mongoose.Types.undefined],
    JobClosingDate: [mongoose.Types.Date, mongoose.Types.undefined],
    Status: [mongoose.Types.String, mongoose.Types.undefined],
    salary_calc: [mongoose.Types.String, mongoose.Types.undefined],
    salary_type: [mongoose.Types.String, mongoose.Types.undefined],
    annual_salary_avg: mongoose.Types.Decimal128,
    annual_salary_min: mongoose.Types.Decimal128,
    annual_salary_max: mongoose.Types.Decimal128,
    number_of_hires_calc: { type:[mongoose.Types.Int32, mongoose.Types.undefined] },
    JobTitle: [mongoose.Types.String, mongoose.Types.undefined] ,
    Industry: [mongoose.Types.String, mongoose.Types.undefined],
    ZipCode: [mongoose.Types.String, mongoose.Types.undefined],
    City: [mongoose.Types.String,mongoose.Types.undefined],
    State: [mongoose.Types.String,mongoose.Types.undefined],
    Certification: [mongoose.Types.String, mongoose.Types.undefined],
    Skill: [mongoose.Types.String, mongoose.Types.undefined],
    "Skill Weights": {type: [mongoose.Types.String, mongoose.Types.undefined]},
    SoftSkill: [mongoose.Types.String, mongoose.Types.undefined],
    SoftSkillWeights: [mongoose.Types.String, mongoose.Types.undefined],
    Qualification: [mongoose.Types.String, mongoose.Types.undefined],
    "Degree Min": [mongoose.Types.String, mongoose.Types.undefined],
    "Degree Level": [mongoose.Types.String, mongoose.Types.undefined],
    SOC: [mongoose.Types.String, mongoose.Types.undefined],
    "SOC Probability": mongoose.Types.Decimal128,
    "Normalized Title": [mongoose.Types.String, mongoose.Types.undefined]
}) 

const MonthlyResult = mongoose.model('MonthlyResult', monthlyResultSchema, 'MonthlyResults');

module.exports = MonthlyResult;