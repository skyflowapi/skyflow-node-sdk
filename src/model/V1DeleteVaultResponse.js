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
 * The V1DeleteVaultResponse model module.
 * @module model/V1DeleteVaultResponse
 * @version v1
 */
export class V1DeleteVaultResponse {
  /**
   * Constructs a new <code>V1DeleteVaultResponse</code>.
   * @alias module:model/V1DeleteVaultResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1DeleteVaultResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1DeleteVaultResponse} obj Optional instance to populate.
   * @return {module:model/V1DeleteVaultResponse} The populated <code>V1DeleteVaultResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1DeleteVaultResponse();
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} ID
 */
V1DeleteVaultResponse.prototype.ID = undefined;

