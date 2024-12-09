export default () => ({
  database: {
    db_host: process.env.DATABASE_HOST,
    db_port: parseInt(process.env.DATABASE_PORT, 10) || 5555,
    db_username: process.env.DATABASE_USERNAME,
    db_password: process.env.DATABASE_PASSWORD,
    db_name: process.env.DATABASE_NAME,
  },

  redis: {
    redis_host: process.env.REDIS_HOST,
    redis_port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
});
