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

import {V1Record} from './V1Record';

/**
 * The V1CreateRecordRequest model module.
 * @module model/V1CreateRecordRequest
 * @version v1
 */
export class V1CreateRecordRequest {
  /**
   * Constructs a new <code>V1CreateRecordRequest</code>.
   * @alias module:model/V1CreateRecordRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1CreateRecordRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1CreateRecordRequest} obj Optional instance to populate.
   * @return {module:model/V1CreateRecordRequest} The populated <code>V1CreateRecordRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1CreateRecordRequest();
      if (data.hasOwnProperty('record'))
        obj.record = V1Record.constructFromObject(data['record']);
      if (data.hasOwnProperty('notebookID'))
        obj.notebookID = ApiClient.convertToType(data['notebookID'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/V1Record} record
 */
V1CreateRecordRequest.prototype.record = undefined;

/**
 * @member {String} notebookID
 */
V1CreateRecordRequest.prototype.notebookID = undefined;


