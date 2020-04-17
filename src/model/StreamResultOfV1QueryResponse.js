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

import {RuntimeStreamError} from './RuntimeStreamError';
import {V1QueryResponse} from './V1QueryResponse';

/**
 * The StreamResultOfV1QueryResponse model module.
 * @module model/StreamResultOfV1QueryResponse
 * @version v1
 */
export class StreamResultOfV1QueryResponse {
  /**
   * Constructs a new <code>StreamResultOfV1QueryResponse</code>.
   * @alias module:model/StreamResultOfV1QueryResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StreamResultOfV1QueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamResultOfV1QueryResponse} obj Optional instance to populate.
   * @return {module:model/StreamResultOfV1QueryResponse} The populated <code>StreamResultOfV1QueryResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StreamResultOfV1QueryResponse();
      if (data.hasOwnProperty('result'))
        obj.result = V1QueryResponse.constructFromObject(data['result']);
      if (data.hasOwnProperty('error'))
        obj.error = RuntimeStreamError.constructFromObject(data['error']);
    }
    return obj;
  }
}

/**
 * @member {module:model/V1QueryResponse} result
 */
StreamResultOfV1QueryResponse.prototype.result = undefined;

/**
 * @member {module:model/RuntimeStreamError} error
 */
StreamResultOfV1QueryResponse.prototype.error = undefined;

