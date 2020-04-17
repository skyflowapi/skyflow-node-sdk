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


/**
 * The V1UpdateTokenResponse model module.
 * @module model/V1UpdateTokenResponse
 * @version v1
 */
export class V1UpdateTokenResponse {
  /**
   * Constructs a new <code>V1UpdateTokenResponse</code>.
   * @alias module:model/V1UpdateTokenResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1UpdateTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1UpdateTokenResponse} obj Optional instance to populate.
   * @return {module:model/V1UpdateTokenResponse} The populated <code>V1UpdateTokenResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1UpdateTokenResponse();
      if (data.hasOwnProperty('objectTokenID'))
        obj.objectTokenID = ApiClient.convertToType(data['objectTokenID'], 'String');
      if (data.hasOwnProperty('tokenizedObject'))
        obj.tokenizedObject = ApiClient.convertToType(data['tokenizedObject'], {'String': 'String'});
    }
    return obj;
  }
}

/**
 * @member {String} objectTokenID
 */
V1UpdateTokenResponse.prototype.objectTokenID = undefined;

/**
 * @member {Object.<String, String>} tokenizedObject
 */
V1UpdateTokenResponse.prototype.tokenizedObject = undefined;

