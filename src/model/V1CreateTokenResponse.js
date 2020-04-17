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
 * The V1CreateTokenResponse model module.
 * @module model/V1CreateTokenResponse
 * @version v1
 */
export class V1CreateTokenResponse {
  /**
   * Constructs a new <code>V1CreateTokenResponse</code>.
   * @alias module:model/V1CreateTokenResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1CreateTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1CreateTokenResponse} obj Optional instance to populate.
   * @return {module:model/V1CreateTokenResponse} The populated <code>V1CreateTokenResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1CreateTokenResponse();
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
V1CreateTokenResponse.prototype.objectTokenID = undefined;

/**
 * @member {Object.<String, String>} tokenizedObject
 */
V1CreateTokenResponse.prototype.tokenizedObject = undefined;

