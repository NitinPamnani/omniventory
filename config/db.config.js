'use strict';

const mysql = require('@mysql/xdevapi');

const config = {
    user: 'root',
    host: '127.0.0.1',
    port: 33060,
    database: 'omniventory'
};

const connection = mysql.getSession(config);

/*connection.then(
    session => {
        return session.getSchema('omniventory').getTable('products')
            .select()
            .execute(row => {
                console.log(row);
            });
    }
);*/

module.exports = connection;
