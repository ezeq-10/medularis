module.exports = function (sequelize) {
    'use strict';

    return {
        Sms: require('./sms')(sequelize)
    };
};