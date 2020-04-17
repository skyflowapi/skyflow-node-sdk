/*
 * Skyflow
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
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

import {V1Organization} from './V1Organization';

/**
 * The V1UpdateOrganizationRequest model module.
 * @module model/V1UpdateOrganizationRequest
 * @version v1
 */
export class V1UpdateOrganizationRequest {
  /**
   * Constructs a new <code>V1UpdateOrganizationRequest</code>.
   * @alias module:model/V1UpdateOrganizationRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1UpdateOrganizationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1UpdateOrganizationRequest} obj Optional instance to populate.
   * @return {module:model/V1UpdateOrganizationRequest} The populated <code>V1UpdateOrganizationRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1UpdateOrganizationRequest();
      if (data.hasOwnProperty('organization'))
        obj.organization = V1Organization.constructFromObject(data['organization']);
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/V1Organization} organization
 */
V1UpdateOrganizationRequest.prototype.organization = undefined;

/**
 * @member {String} ID
 */
V1UpdateOrganizationRequest.prototype.ID = undefined;

/**
 * @member {String} version
 */
V1UpdateOrganizationRequest.prototype.version = undefined;


