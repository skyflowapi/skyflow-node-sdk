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

/**
 * The ApiCreateNotebookTableResponse model module.
 * @module model/ApiCreateNotebookTableResponse
 * @version 1.0
 */
export class ApiCreateNotebookTableResponse {
  /**
   * Constructs a new <code>ApiCreateNotebookTableResponse</code>.
   * @alias module:model/ApiCreateNotebookTableResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApiCreateNotebookTableResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiCreateNotebookTableResponse} obj Optional instance to populate.
   * @return {module:model/ApiCreateNotebookTableResponse} The populated <code>ApiCreateNotebookTableResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiCreateNotebookTableResponse();
    }
    return obj;
  }
}

