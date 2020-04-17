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

import {V1Vault} from './V1Vault';

/**
 * The V1GetVaultResponse model module.
 * @module model/V1GetVaultResponse
 * @version v1
 */
export class V1GetVaultResponse {
  /**
   * Constructs a new <code>V1GetVaultResponse</code>.
   * @alias module:model/V1GetVaultResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1GetVaultResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1GetVaultResponse} obj Optional instance to populate.
   * @return {module:model/V1GetVaultResponse} The populated <code>V1GetVaultResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1GetVaultResponse();
      if (data.hasOwnProperty('vault'))
        obj.vault = V1Vault.constructFromObject(data['vault']);
    }
    return obj;
  }
}

/**
 * @member {module:model/V1Vault} vault
 */
V1GetVaultResponse.prototype.vault = undefined;

