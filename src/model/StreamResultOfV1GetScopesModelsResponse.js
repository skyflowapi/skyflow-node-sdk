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
import {V1GetScopesModelsResponse} from './V1GetScopesModelsResponse';

/**
 * The StreamResultOfV1GetScopesModelsResponse model module.
 * @module model/StreamResultOfV1GetScopesModelsResponse
 * @version v1
 */
export class StreamResultOfV1GetScopesModelsResponse {
  /**
   * Constructs a new <code>StreamResultOfV1GetScopesModelsResponse</code>.
   * @alias module:model/StreamResultOfV1GetScopesModelsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StreamResultOfV1GetScopesModelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamResultOfV1GetScopesModelsResponse} obj Optional instance to populate.
   * @return {module:model/StreamResultOfV1GetScopesModelsResponse} The populated <code>StreamResultOfV1GetScopesModelsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StreamResultOfV1GetScopesModelsResponse();
      if (data.hasOwnProperty('result'))
        obj.result = V1GetScopesModelsResponse.constructFromObject(data['result']);
      if (data.hasOwnProperty('error'))
        obj.error = RuntimeStreamError.constructFromObject(data['error']);
    }
    return obj;
  }
}

/**
 * @member {module:model/V1GetScopesModelsResponse} result
 */
StreamResultOfV1GetScopesModelsResponse.prototype.result = undefined;

/**
 * @member {module:model/RuntimeStreamError} error
 */
StreamResultOfV1GetScopesModelsResponse.prototype.error = undefined;

