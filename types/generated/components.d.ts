import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonIngredients extends Schema.Component {
  collectionName: 'components_common_ingredients';
  info: {
    displayName: 'ingredients';
    icon: 'seed';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    quantity: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.ingredients': CommonIngredients;
    }
  }
}
