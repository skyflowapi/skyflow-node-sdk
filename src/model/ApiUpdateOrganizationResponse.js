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

/**
 * The ApiUpdateOrganizationResponse model module.
 * @module model/ApiUpdateOrganizationResponse
 * @version 1.0
 */
export class ApiUpdateOrganizationResponse {
  /**
   * Constructs a new <code>ApiUpdateOrganizationResponse</code>.
   * @alias module:model/ApiUpdateOrganizationResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApiUpdateOrganizationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiUpdateOrganizationResponse} obj Optional instance to populate.
   * @return {module:model/ApiUpdateOrganizationResponse} The populated <code>ApiUpdateOrganizationResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiUpdateOrganizationResponse();
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} ID
 */
ApiUpdateOrganizationResponse.prototype.ID = undefined;

