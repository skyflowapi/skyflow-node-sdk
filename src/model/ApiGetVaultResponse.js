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
import {RpcStatus} from './RpcStatus';

/**
 * The ApiGetVaultResponse model module.
 * @module model/ApiGetVaultResponse
 * @version 1.0
 */
export class ApiGetVaultResponse {
  /**
   * Constructs a new <code>ApiGetVaultResponse</code>.
   * @alias module:model/ApiGetVaultResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApiGetVaultResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiGetVaultResponse} obj Optional instance to populate.
   * @return {module:model/ApiGetVaultResponse} The populated <code>ApiGetVaultResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiGetVaultResponse();
      if (data.hasOwnProperty('status'))
        obj.status = RpcStatus.constructFromObject(data['status']);
      if (data.hasOwnProperty('vault'))
        obj.vault = ApiVault.constructFromObject(data['vault']);
    }
    return obj;
  }
}

/**
 * @member {module:model/RpcStatus} status
 */
ApiGetVaultResponse.prototype.status = undefined;

/**
 * @member {module:model/ApiVault} vault
 */
ApiGetVaultResponse.prototype.vault = undefined;


