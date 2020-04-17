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
 * Enum class ApiSubscription.
 * @enum {String}
 * @readonly
 */
const ApiSubscription = {
  /**
   * value: "FREE"
   * @const
   */
  FREE: "FREE",

  /**
   * value: "TRIAL"
   * @const
   */
  TRIAL: "TRIAL",

  /**
   * value: "MONTHLY"
   * @const
   */
  MONTHLY: "MONTHLY",

  /**
   * value: "ANNUAL"
   * @const
   */
  ANNUAL: "ANNUAL",

  /**
   * Returns a <code>ApiSubscription</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/ApiSubscription} The enum <code>ApiSubscription</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ApiSubscription};