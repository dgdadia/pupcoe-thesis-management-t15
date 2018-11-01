const config = {
  development: {
     db: {
       database: 'de91aibs6hbj9q',
       user: 'yudcvjgxlssavp',
       password: '92b469c3c18b411f7f2e465baa478938d0e7b5b5cad55228e0b5062c4fabde88',
       host: 'ec2-184-73-222-192.compute-1.amazonaws.com',
       port: 5432,
       ssl: true
     },
    nodemailer: {

    }
  },
  production: {
    db: {
      database: 'de91aibs6hbj9q',
      user: 'yudcvjgxlssavp',
      password: '92b469c3c18b411f7f2e465baa478938d0e7b5b5cad55228e0b5062c4fabde88',
      host: 'ec2-184-73-222-192.compute-1.amazonaws.com',
      port: 5432,
      ssl: true
    },
    nodemailer: {

    }
  }
};

module.exports = process.env.NODE_ENV === 'production' ? config.production : config.development;

//heroku pg:psql postgresql-animate-56327 --app pupcoe-thesis-management-t6