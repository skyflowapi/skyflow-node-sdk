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
 * The V1CreateVaultResponse model module.
 * @module model/V1CreateVaultResponse
 * @version v1
 */
export class V1CreateVaultResponse {
  /**
   * Constructs a new <code>V1CreateVaultResponse</code>.
   * @alias module:model/V1CreateVaultResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1CreateVaultResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1CreateVaultResponse} obj Optional instance to populate.
   * @return {module:model/V1CreateVaultResponse} The populated <code>V1CreateVaultResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1CreateVaultResponse();
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} ID
 */
V1CreateVaultResponse.prototype.ID = undefined;


