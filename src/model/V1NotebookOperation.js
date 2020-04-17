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
 * Enum class V1NotebookOperation.
 * @enum {String}
 * @readonly
 */
const V1NotebookOperation = {
  /**
   * value: "EXACT_MATCH"
   * @const
   */
  EXACT_MATCH: "EXACT_MATCH",

  /**
   * value: "RANGE"
   * @const
   */
  RANGE: "RANGE",

  /**
   * value: "AGGREGATE"
   * @const
   */
  AGGREGATE: "AGGREGATE",

  /**
   * value: "UNENCRYPTED"
   * @const
   */
  UNENCRYPTED: "UNENCRYPTED",

  /**
   * value: "RANDOM"
   * @const
   */
  RANDOM: "RANDOM",

  /**
   * value: "RANGE_OPE"
   * @const
   */
  RANGE_OPE: "RANGE_OPE",

  /**
   * value: "RANGE_ORE"
   * @const
   */
  RANGE_ORE: "RANGE_ORE",

  /**
   * Returns a <code>V1NotebookOperation</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/V1NotebookOperation} The enum <code>V1NotebookOperation</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {V1NotebookOperation};