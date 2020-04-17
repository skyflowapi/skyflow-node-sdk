/*
 * Skyflow Data
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: support@skyflow.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';
import {ApiUser} from './ApiUser';

/**
 * The ApiVault model module.
 * @module model/ApiVault
 * @version 1.0
 */
export class ApiVault {
  /**
   * Constructs a new <code>ApiVault</code>.
   * @alias module:model/ApiVault
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApiVault</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiVault} obj Optional instance to populate.
   * @return {module:model/ApiVault} The populated <code>ApiVault</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiVault();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('users'))
        obj.users = ApiClient.convertToType(data['users'], [ApiUser]);
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
ApiVault.prototype.name = undefined;

/**
 * @member {String} description
 */
ApiVault.prototype.description = undefined;

/**
 * @member {Array.<module:model/ApiUser>} users
 */
ApiVault.prototype.users = undefined;

/**
 * @member {String} ID
 */
ApiVault.prototype.ID = undefined;

