const db = require('../db/db.js')

var actions = {
    addProposal: (thesisData,callback) => {
    const query =
    `INSERT INTO 
      thesis (title,description) 
     VALUES 
      ('${thesisData.title}','${thesisData.description}')
     RETURNING *
      `;
     db.query(query)
    .then(res => callback(res.rows))
    .catch(e => {
      console.log(e)
      callback(e)
    })
  },
  proposalList: (filter,callback) => {
    const query =
    `SELECT 
      title , description
    FROM
      thesis
      `;
     db.query(query)
    .then(res => callback(res))
    .catch(e => {
      console.log(e)
      callback(e)
    });

    },
  studentProfile: (studentData, callback) => {
    const query =
    `SELECT
      users.first_name AS first_name, users.last_name AS last_name, users.student_number AS student_number, users.phone AS phone, users.email AS email
    FROM
      users
    WHERE
    `;
    db.query(query)
    .then(res => callback(res))
    .catch(e => {
      console.log(e)
      callback(e)
    })
  }
}
module.exports = actions