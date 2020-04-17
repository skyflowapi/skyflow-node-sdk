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

import {V1Notebook} from './V1Notebook';

/**
 * The V1GetNotebookTypeModelsResponse model module.
 * @module model/V1GetNotebookTypeModelsResponse
 * @version v1
 */
export class V1GetNotebookTypeModelsResponse {
  /**
   * Constructs a new <code>V1GetNotebookTypeModelsResponse</code>.
   * @alias module:model/V1GetNotebookTypeModelsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V1GetNotebookTypeModelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1GetNotebookTypeModelsResponse} obj Optional instance to populate.
   * @return {module:model/V1GetNotebookTypeModelsResponse} The populated <code>V1GetNotebookTypeModelsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1GetNotebookTypeModelsResponse();
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('iconURL'))
        obj.iconURL = ApiClient.convertToType(data['iconURL'], 'String');
      if (data.hasOwnProperty('learnMoreURL'))
        obj.learnMoreURL = ApiClient.convertToType(data['learnMoreURL'], 'String');
      if (data.hasOwnProperty('notebookSchema'))
        obj.notebookSchema = V1Notebook.constructFromObject(data['notebookSchema']);
    }
    return obj;
  }
}

/**
 * This should be mapped to Types[] during Create Vault Call
 * @member {String} ID
 */
V1GetNotebookTypeModelsResponse.prototype.ID = undefined;

/**
 * @member {String} name
 */
V1GetNotebookTypeModelsResponse.prototype.name = undefined;

/**
 * @member {String} description
 */
V1GetNotebookTypeModelsResponse.prototype.description = undefined;

/**
 * @member {String} iconURL
 */
V1GetNotebookTypeModelsResponse.prototype.iconURL = undefined;

/**
 * @member {String} learnMoreURL
 */
V1GetNotebookTypeModelsResponse.prototype.learnMoreURL = undefined;

/**
 * @member {module:model/V1Notebook} notebookSchema
 */
V1GetNotebookTypeModelsResponse.prototype.notebookSchema = undefined;


