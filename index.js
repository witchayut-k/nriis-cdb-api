var faker = require('faker');
var database = { 
    research: [],
    public_information: [],
    expert: [],
    research_summary: [],
    thesis: [],
    doi: [],
    bi: [],
    contact: "",
};

for (let i=1; i<=1000; i++) {
  database.research.push({
    id: i,
    title: faker.lorem.text(),
  });
}

console.log(JSON.stringify(database));