'use strict';

/**
 * `Test` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In Test policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
