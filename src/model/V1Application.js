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

import {ApplicationApplicationStatus} from './ApplicationApplicationStatus';

/**
 * The V1Application model module.
 * @module model/V1Application
 * @version v1
 */
export class V1Application {
  /**
   * Constructs a new <code>V1Application</code>.
   * @alias module:model/V1Application
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1Application</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Application} obj Optional instance to populate.
   * @return {module:model/V1Application} The populated <code>V1Application</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1Application();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApplicationApplicationStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * Name of this Application
 * @member {String} name
 */
V1Application.prototype.name = undefined;

/**
 * The description for this Application
 * @member {String} description
 */
V1Application.prototype.description = undefined;

/**
 * This will be generated by Server and cannot be user generated
 * @member {String} ID
 */
V1Application.prototype.ID = undefined;

/**
 * Status of the Application if Active or InActive
 * @member {module:model/ApplicationApplicationStatus} status
 */
V1Application.prototype.status = undefined;

