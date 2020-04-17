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

import {V1TokenPolicy} from './V1TokenPolicy';

/**
 * The V1UpdateTokenRequest model module.
 * @module model/V1UpdateTokenRequest
 * @version v1
 */
export class V1UpdateTokenRequest {
  /**
   * Constructs a new <code>V1UpdateTokenRequest</code>.
   * @alias module:model/V1UpdateTokenRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1UpdateTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1UpdateTokenRequest} obj Optional instance to populate.
   * @return {module:model/V1UpdateTokenRequest} The populated <code>V1UpdateTokenRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1UpdateTokenRequest();
      if (data.hasOwnProperty('tokenID'))
        obj.tokenID = ApiClient.convertToType(data['tokenID'], 'String');
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], {'String': 'String'});
      if (data.hasOwnProperty('fieldLevelPolicies'))
        obj.fieldLevelPolicies = ApiClient.convertToType(data['fieldLevelPolicies'], {'String': V1TokenPolicy});
    }
    return obj;
  }
}

/**
 * @member {String} tokenID
 */
V1UpdateTokenRequest.prototype.tokenID = undefined;

/**
 * @member {Object.<String, String>} _object
 */
V1UpdateTokenRequest.prototype._object = undefined;

/**
 * @member {Object.<String, module:model/V1TokenPolicy>} fieldLevelPolicies
 */
V1UpdateTokenRequest.prototype.fieldLevelPolicies = undefined;


