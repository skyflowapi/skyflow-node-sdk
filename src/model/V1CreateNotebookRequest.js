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

import {V1Notebook} from './V1Notebook';

/**
 * The V1CreateNotebookRequest model module.
 * @module model/V1CreateNotebookRequest
 * @version v1
 */
export class V1CreateNotebookRequest {
  /**
   * Constructs a new <code>V1CreateNotebookRequest</code>.
   * @alias module:model/V1CreateNotebookRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1CreateNotebookRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1CreateNotebookRequest} obj Optional instance to populate.
   * @return {module:model/V1CreateNotebookRequest} The populated <code>V1CreateNotebookRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1CreateNotebookRequest();
      if (data.hasOwnProperty('notebook'))
        obj.notebook = V1Notebook.constructFromObject(data['notebook']);
      if (data.hasOwnProperty('vaultID'))
        obj.vaultID = ApiClient.convertToType(data['vaultID'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/V1Notebook} notebook
 */
V1CreateNotebookRequest.prototype.notebook = undefined;

/**
 * @member {String} vaultID
 */
V1CreateNotebookRequest.prototype.vaultID = undefined;

