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
 * The V1GetRecordResponse model module.
 * @module model/V1GetRecordResponse
 * @version v1
 */
export class V1GetRecordResponse {
  /**
   * Constructs a new <code>V1GetRecordResponse</code>.
   * @alias module:model/V1GetRecordResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1GetRecordResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1GetRecordResponse} obj Optional instance to populate.
   * @return {module:model/V1GetRecordResponse} The populated <code>V1GetRecordResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1GetRecordResponse();
      if (data.hasOwnProperty('record'))
        obj.record = V1Record.constructFromObject(data['record']);
    }
    return obj;
  }
}

/**
 * @member {module:model/V1Record} record
 */
V1GetRecordResponse.prototype.record = undefined;


