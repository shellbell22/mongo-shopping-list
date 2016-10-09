exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/shopping-list' :
                            'mongodb://localhost/shopping-list-dev'
                          );
                          //'mongodb://testuser1:TestUserPassword1@ds053206.mlab.com:53206/shellbell22shoppinglist)';
exports.PORT = process.env.PORT || 8080;
