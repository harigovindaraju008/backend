'use strict';

const sequelize = require('sequelize');
const db = require('../db/dbConnection.js').get();
const encryptedField = require('sequelize-encrypted');

const userMessages = require('../modelConfig.js').getMessageConfig().user;
const systemConfig = require('../modelConfig.js').getSystemConfig();

const passwordVault = encryptedField(sequelize, systemConfig.db.blobEncryptionKey);


const team_player_mapping = db.define('team_player_mapping', {
    userId:{
        type: sequelize.INTEGER,
        allowNull: false,
    },
    teamId:{
        type: sequelize.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    paranoid: true,
    underscored: false,
    freezeTableName: true,
    tableName: 'team_player_mapping'
});

module.exports = {
    team_player_mapping: team_player_mapping
};