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
import {ApiOrganization} from './ApiOrganization';

/**
 * The ApiCreateOrganizationRequest model module.
 * @module model/ApiCreateOrganizationRequest
 * @version 1.0
 */
export class ApiCreateOrganizationRequest {
  /**
   * Constructs a new <code>ApiCreateOrganizationRequest</code>.
   * @alias module:model/ApiCreateOrganizationRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApiCreateOrganizationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiCreateOrganizationRequest} obj Optional instance to populate.
   * @return {module:model/ApiCreateOrganizationRequest} The populated <code>ApiCreateOrganizationRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiCreateOrganizationRequest();
      if (data.hasOwnProperty('organization'))
        obj.organization = ApiOrganization.constructFromObject(data['organization']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ApiOrganization} organization
 */
ApiCreateOrganizationRequest.prototype.organization = undefined;


