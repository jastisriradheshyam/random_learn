'use strict';

const log4js = require('log4js');
const config = {
    maxLogSize: 10485760,
    backups: 5,
    logLevel: "DEBUG"
};
const path = require('path');
const getUUID = (byteLength = 16) => crypto.randomBytes(byteLength).toString("hex");

// https://log4js-node.github.io/log4js-node/layouts.html
log4js.configure({
    appenders: {
        out: {
            type: 'file',
            filename: path.join(__dirname, './logs/app-logs.log'),
            maxLogSize: config.maxLogSize,
            backups: config.backups,
            layout: {
                type: 'pattern',
                pattern: '[%x{uuid}] [%d] [%p] <%c> {%f{2}:%l} => %m%n',
                tokens: {
                    uuid: (logEvent) => getUUID()
                }
            },
        }
    },
    categories: {
        default: {
            appenders: ['out'],
            level: config.logLevel,
            enableCallStack: true
        }
    }
});
module.exports = (moduleName) => {
    const logger = log4js.getLogger(moduleName);
    return logger;
};