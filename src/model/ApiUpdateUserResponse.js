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
 * The ApiUpdateUserResponse model module.
 * @module model/ApiUpdateUserResponse
 * @version 1.0
 */
export class ApiUpdateUserResponse {
  /**
   * Constructs a new <code>ApiUpdateUserResponse</code>.
   * @alias module:model/ApiUpdateUserResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApiUpdateUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiUpdateUserResponse} obj Optional instance to populate.
   * @return {module:model/ApiUpdateUserResponse} The populated <code>ApiUpdateUserResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiUpdateUserResponse();
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = RpcStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {String} ID
 */
ApiUpdateUserResponse.prototype.ID = undefined;

/**
 * @member {module:model/RpcStatus} status
 */
ApiUpdateUserResponse.prototype.status = undefined;


