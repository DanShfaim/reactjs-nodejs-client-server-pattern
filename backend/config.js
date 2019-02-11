if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev'
const isProd = process.env.NODE_ENV === 'prod'

module.exports = {
    PORT: isProd ? 80 : 8070,
    MONGO_USER: '',
    MONGO_PWD: '',
    MONGO_ENDPOINT: '',
    MONGO_NAME: ''
}