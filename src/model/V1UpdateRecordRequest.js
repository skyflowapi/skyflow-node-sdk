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
 * The V1UpdateRecordRequest model module.
 * @module model/V1UpdateRecordRequest
 * @version v1
 */
export class V1UpdateRecordRequest {
  /**
   * Constructs a new <code>V1UpdateRecordRequest</code>.
   * @alias module:model/V1UpdateRecordRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1UpdateRecordRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1UpdateRecordRequest} obj Optional instance to populate.
   * @return {module:model/V1UpdateRecordRequest} The populated <code>V1UpdateRecordRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1UpdateRecordRequest();
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
      if (data.hasOwnProperty('notebookID'))
        obj.notebookID = ApiClient.convertToType(data['notebookID'], 'String');
      if (data.hasOwnProperty('record'))
        obj.record = V1Record.constructFromObject(data['record']);
    }
    return obj;
  }
}

/**
 * @member {String} ID
 */
V1UpdateRecordRequest.prototype.ID = undefined;

/**
 * @member {String} notebookID
 */
V1UpdateRecordRequest.prototype.notebookID = undefined;

/**
 * @member {module:model/V1Record} record
 */
V1UpdateRecordRequest.prototype.record = undefined;


