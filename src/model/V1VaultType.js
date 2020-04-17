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
 * Enum class V1VaultType.
 * @enum {String}
 * @readonly
 */
const V1VaultType = {
  /**
   * value: "NONE"
   * @const
   */
  NONE: "NONE",

  /**
   * value: "TOKEN"
   * @const
   */
  TOKEN: "TOKEN",

  /**
   * value: "ANALYTICAL"
   * @const
   */
  ANALYTICAL: "ANALYTICAL",

  /**
   * Returns a <code>V1VaultType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/V1VaultType} The enum <code>V1VaultType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {V1VaultType};
