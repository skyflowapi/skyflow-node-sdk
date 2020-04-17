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
import {RpcStatus} from './RpcStatus';

/**
 * The ApiCreateVaultResponse model module.
 * @module model/ApiCreateVaultResponse
 * @version 1.0
 */
export class ApiCreateVaultResponse {
  /**
   * Constructs a new <code>ApiCreateVaultResponse</code>.
   * @alias module:model/ApiCreateVaultResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApiCreateVaultResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiCreateVaultResponse} obj Optional instance to populate.
   * @return {module:model/ApiCreateVaultResponse} The populated <code>ApiCreateVaultResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiCreateVaultResponse();
      if (data.hasOwnProperty('status'))
        obj.status = RpcStatus.constructFromObject(data['status']);
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/RpcStatus} status
 */
ApiCreateVaultResponse.prototype.status = undefined;

/**
 * @member {String} ID
 */
ApiCreateVaultResponse.prototype.ID = undefined;

