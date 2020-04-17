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
 * Enum class V1FieldType.
 * @enum {String}
 * @readonly
 */
const V1FieldType = {
  /**
   * value: "STRING"
   * @const
   */
  STRING: "STRING",

  /**
   * value: "INTEGER"
   * @const
   */
  INTEGER: "INTEGER",

  /**
   * value: "FLOAT"
   * @const
   */
  FLOAT: "FLOAT",

  /**
   * value: "DATE"
   * @const
   */
  DATE: "DATE",

  /**
   * value: "TIME"
   * @const
   */
  TIME: "TIME",

  /**
   * value: "GENDER"
   * @const
   */
  GENDER: "GENDER",

  /**
   * value: "ADDRESS"
   * @const
   */
  ADDRESS: "ADDRESS",

  /**
   * value: "USERNAME"
   * @const
   */
  USERNAME: "USERNAME",

  /**
   * value: "PHONE"
   * @const
   */
  PHONE: "PHONE",

  /**
   * value: "CITY"
   * @const
   */
  CITY: "CITY",

  /**
   * value: "COUNTRY"
   * @const
   */
  COUNTRY: "COUNTRY",

  /**
   * value: "SSN"
   * @const
   */
  SSN: "SSN",

  /**
   * value: "PASSPORT"
   * @const
   */
  PASSPORT: "PASSPORT",

  /**
   * value: "EMAIL"
   * @const
   */
  EMAIL: "EMAIL",

  /**
   * value: "PRIMARY_KEY"
   * @const
   */
  PRIMARY_KEY: "PRIMARY_KEY",

  /**
   * Returns a <code>V1FieldType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/V1FieldType} The enum <code>V1FieldType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {V1FieldType};