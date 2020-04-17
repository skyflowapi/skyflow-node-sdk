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

import {NotebookFieldStatus} from './NotebookFieldStatus';
import {V1FieldType} from './V1FieldType';
import {V1NotebookOperation} from './V1NotebookOperation';

/**
 * The NotebookField model module.
 * @module model/NotebookField
 * @version v1
 */
export class NotebookField {
  /**
   * Constructs a new <code>NotebookField</code>.
   * @alias module:model/NotebookField
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>NotebookField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotebookField} obj Optional instance to populate.
   * @return {module:model/NotebookField} The populated <code>NotebookField</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NotebookField();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = V1FieldType.constructFromObject(data['type']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('operations'))
        obj.operations = ApiClient.convertToType(data['operations'], [V1NotebookOperation]);
      if (data.hasOwnProperty('status'))
        obj.status = NotebookFieldStatus.constructFromObject(data['status']);
      if (data.hasOwnProperty('alias'))
        obj.alias = ApiClient.convertToType(data['alias'], 'String');
      if (data.hasOwnProperty('provenance'))
        obj.provenance = ApiClient.convertToType(data['provenance'], 'Boolean');
      if (data.hasOwnProperty('custom'))
        obj.custom = ApiClient.convertToType(data['custom'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Name of the Field with AlphaNumeric Characters to uniquely identify a Column in the Vault
 * @member {String} name
 */
NotebookField.prototype.name = undefined;

/**
 * Display Name for the Field which can be used for UI Rendering
 * @member {String} displayName
 */
NotebookField.prototype.displayName = undefined;

/**
 * Type of Data saved in the Field
 * @member {module:model/V1FieldType} type
 */
NotebookField.prototype.type = undefined;

/**
 * More Content about the Field
 * @member {String} description
 */
NotebookField.prototype.description = undefined;

/**
 * Defines the list of Operation that are allowed to be performed on the Field - Aggregation like SUM(), Etc.
 * @member {Array.<module:model/V1NotebookOperation>} operations
 */
NotebookField.prototype.operations = undefined;

/**
 * Defines if the Field is Enabled or Disabled
 * @member {module:model/NotebookFieldStatus} status
 */
NotebookField.prototype.status = undefined;

/**
 * Used for External Widgets for mapping a field with a different name, so response will contain alias instead of name
 * @member {String} alias
 */
NotebookField.prototype.alias = undefined;

/**
 * Defines if a field should be audited or not
 * @member {Boolean} provenance
 */
NotebookField.prototype.provenance = undefined;

/**
 * A Custom Notebook, Instead of Pre-Defined Field
 * @member {Boolean} custom
 */
NotebookField.prototype.custom = undefined;


