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
import {ApiVault} from './ApiVault';
import {RpcStatus} from './RpcStatus';

/**
 * The ApiGetUserResponse model module.
 * @module model/ApiGetUserResponse
 * @version 1.0
 */
export class ApiGetUserResponse {
  /**
   * Constructs a new <code>ApiGetUserResponse</code>.
   * @alias module:model/ApiGetUserResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApiGetUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiGetUserResponse} obj Optional instance to populate.
   * @return {module:model/ApiGetUserResponse} The populated <code>ApiGetUserResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiGetUserResponse();
      if (data.hasOwnProperty('status'))
        obj.status = RpcStatus.constructFromObject(data['status']);
      if (data.hasOwnProperty('User'))
        obj.user = ApiUser.constructFromObject(data['User']);
      if (data.hasOwnProperty('vaults'))
        obj.vaults = ApiClient.convertToType(data['vaults'], [ApiVault]);
    }
    return obj;
  }
}

/**
 * @member {module:model/RpcStatus} status
 */
ApiGetUserResponse.prototype.status = undefined;

/**
 * @member {module:model/ApiUser} user
 */
ApiGetUserResponse.prototype.user = undefined;

/**
 * @member {Array.<module:model/ApiVault>} vaults
 */
ApiGetUserResponse.prototype.vaults = undefined;

