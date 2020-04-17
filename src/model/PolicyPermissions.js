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
 * Enum class PolicyPermissions.
 * @enum {String}
 * @readonly
 */
const PolicyPermissions = {
  /**
   * value: "NONE"
   * @const
   */
  NONE: "NONE",

  /**
   * value: "VIEWER"
   * @const
   */
  VIEWER: "VIEWER",

  /**
   * value: "ADMIN"
   * @const
   */
  ADMIN: "ADMIN",

  /**
   * value: "DEVELOPER"
   * @const
   */
  DEVELOPER: "DEVELOPER",

  /**
   * Returns a <code>PolicyPermissions</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/PolicyPermissions} The enum <code>PolicyPermissions</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {PolicyPermissions};