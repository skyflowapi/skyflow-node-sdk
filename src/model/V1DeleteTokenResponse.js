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
 * The V1DeleteTokenResponse model module.
 * @module model/V1DeleteTokenResponse
 * @version v1
 */
export class V1DeleteTokenResponse {
  /**
   * Constructs a new <code>V1DeleteTokenResponse</code>.
   * @alias module:model/V1DeleteTokenResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1DeleteTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1DeleteTokenResponse} obj Optional instance to populate.
   * @return {module:model/V1DeleteTokenResponse} The populated <code>V1DeleteTokenResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1DeleteTokenResponse();
      if (data.hasOwnProperty('tokenID'))
        obj.tokenID = ApiClient.convertToType(data['tokenID'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} tokenID
 */
V1DeleteTokenResponse.prototype.tokenID = undefined;

