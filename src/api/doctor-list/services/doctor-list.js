'use strict';

/**
 * doctor-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doctor-list.doctor-list');
