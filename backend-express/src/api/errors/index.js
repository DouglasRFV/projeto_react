'use strict';

module.exports.badRequest = message => ({status: 400, message});
module.exports.notFound = message => ({status: 404, message});
module.exports.conflict = message => ({status: 409, message});
