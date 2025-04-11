const dataUser = require("../json/users.json")

export const userPlan1 ={
    email: dataUser.userHealthCarePlan1.email,
    password: dataUser.userHealthCarePlan1.password
}

export const userPlan2 ={
    email: dataUser.userHealthCarePlan2.email,
    password: dataUser.userHealthCarePlan2.password
}

/**
* My goal in creating a constant from data coming from a JSON object is to simulate something as close as possible to a database. 
* By creating a constant, I have the ability to combine data in various formats without depending on how they come from the source,
thus increasing the flexibility and data coverage in the tests.
*/