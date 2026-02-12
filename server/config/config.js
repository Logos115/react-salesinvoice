const baseConfig = {
  development: { username: 'root', password: '', database: 'sales_invoice', host: '127.0.0.1', dialect: 'mysql' },
  test: { username: 'root', password: '', database: 'database_test', host: '127.0.0.1', dialect: 'mysql' },
  production: { username: 'root', password: '', database: 'sales_invoice', host: '127.0.0.1', dialect: 'mysql' },
};

const env = process.env.NODE_ENV || 'development';
const config = baseConfig[env] ? { ...baseConfig[env] } : undefined;

if (config) {
  config.username = process.env.DB_USERNAME || config.username;
  config.password = process.env.DB_PASSWORD ?? config.password;
}

module.exports = { [env]: config };
