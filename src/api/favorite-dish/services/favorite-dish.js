'use strict';

/**
 * favorite-dish service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::favorite-dish.favorite-dish');
