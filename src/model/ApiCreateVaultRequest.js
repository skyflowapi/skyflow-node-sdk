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
import {ApiVault} from './ApiVault';

/**
 * The ApiCreateVaultRequest model module.
 * @module model/ApiCreateVaultRequest
 * @version 1.0
 */
export class ApiCreateVaultRequest {
  /**
   * Constructs a new <code>ApiCreateVaultRequest</code>.
   * @alias module:model/ApiCreateVaultRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApiCreateVaultRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiCreateVaultRequest} obj Optional instance to populate.
   * @return {module:model/ApiCreateVaultRequest} The populated <code>ApiCreateVaultRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiCreateVaultRequest();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('orgID'))
        obj.orgID = ApiClient.convertToType(data['orgID'], 'String');
      if (data.hasOwnProperty('vault'))
        obj.vault = ApiVault.constructFromObject(data['vault']);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
ApiCreateVaultRequest.prototype.name = undefined;

/**
 * @member {String} orgID
 */
ApiCreateVaultRequest.prototype.orgID = undefined;

/**
 * @member {module:model/ApiVault} vault
 */
ApiCreateVaultRequest.prototype.vault = undefined;

