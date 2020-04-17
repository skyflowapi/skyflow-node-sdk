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

import {StreamResultOfV1GetOrganizationResponse} from '../model/StreamResultOfV1GetOrganizationResponse';
import {V1CreateOrganizationRequest} from '../model/V1CreateOrganizationRequest';
import {V1CreateOrganizationResponse} from '../model/V1CreateOrganizationResponse';
import {V1DeleteOrganizationResponse} from '../model/V1DeleteOrganizationResponse';
import {V1GetOrganizationResponse} from '../model/V1GetOrganizationResponse';
import {V1UpdateOrganizationRequest} from '../model/V1UpdateOrganizationRequest';
import {V1UpdateOrganizationResponse} from '../model/V1UpdateOrganizationResponse';

/**
* Organizations service.
* @module api/OrganizationsApi
* @version v1
*/
const OrganizationsApi = {


    /**
     * Callback function to receive the result of the createOrganization operation.
     * @callback module:api/OrganizationsApi~createOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1CreateOrganizationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Organization
     * Create an Organization. This also internally creates a Master API Key which can be used to access all resources and sub-resources of this Organization
     * @param {module:model/V1CreateOrganizationRequest} body 
     * @param {module:api/OrganizationsApi~createOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1CreateOrganizationResponse}
     */
    createOrganization(body, callback) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOrganization");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AppID', 'AppSecret', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1CreateOrganizationResponse;

      return this.callApi(
        '/v1/organizations', 'POST',
        pathParams, postBody,
        returnType, callback
      );
    },

    /**
     * Callback function to receive the result of the deleteOrganization operation.
     * @callback module:api/OrganizationsApi~deleteOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1DeleteOrganizationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Organization
     * Deletes Organization and its child entities with the given ID
     * @param {String} ID 
     * @param {module:api/OrganizationsApi~deleteOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1DeleteOrganizationResponse}
     */
    deleteOrganization(ID, callback) {
      let postBody = null;

      // verify the required parameter 'ID' is set
      if (ID === undefined || ID === null) {
        throw new Error("Missing the required parameter 'ID' when calling deleteOrganization");
      }


      let pathParams = {
        'ID': ID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AppID', 'AppSecret', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1DeleteOrganizationResponse;

      return this.callApi(
        '/v1/organizations/{ID}', 'DELETE',
        pathParams, postBody,
        returnType, callback
      );
    },

    /**
     * Callback function to receive the result of the getOrganization operation.
     * @callback module:api/OrganizationsApi~getOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1GetOrganizationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Organization By ID
     * Retreives an Organization using the provided ID
     * @param {String} ID 
     * @param {module:api/OrganizationsApi~getOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1GetOrganizationResponse}
     */
    getOrganization(ID, callback) {
      let postBody = null;

      // verify the required parameter 'ID' is set
      if (ID === undefined || ID === null) {
        throw new Error("Missing the required parameter 'ID' when calling getOrganization");
      }


      let pathParams = {
        'ID': ID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AppID', 'AppSecret', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1GetOrganizationResponse;

      return this.callApi(
        '/v1/organizations/{ID}', 'GET',
        pathParams, postBody,
        returnType, callback
      );
    },

    /**
     * Callback function to receive the result of the searchOrganizationsByFilter operation.
     * @callback module:api/OrganizationsApi~searchOrganizationsByFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamResultOfV1GetOrganizationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Organizations
     * Streams Organizations which matches the conditions set in query parameters
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Organization Name.  - using which we need to fetch records
     * @param {String} opts.offset Pagination Offset.  - indicates from which record number to start retrieving data (default to 0)
     * @param {String} opts.limit Pagination Limit.  - indicates how many records to retrieve (default to 100)
     * @param {String} opts.version 
     * @param {module:api/OrganizationsApi~searchOrganizationsByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamResultOfV1GetOrganizationResponse}
     */
    searchOrganizationsByFilter(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'version': opts['version']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AppID', 'AppSecret', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StreamResultOfV1GetOrganizationResponse;

      return this.callApi(
        '/v1/organizations', 'GET',
        pathParams, postBody,
        returnType, callback
      );
    },

    /**
     * Callback function to receive the result of the updateOrganization operation.
     * @callback module:api/OrganizationsApi~updateOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1UpdateOrganizationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Organization
     * Updates Organization with the given ID
     * @param {String} ID 
     * @param {module:model/V1UpdateOrganizationRequest} body 
     * @param {module:api/OrganizationsApi~updateOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1UpdateOrganizationResponse}
     */
    updateOrganization(ID, body, callback) {
      let postBody = body;

      // verify the required parameter 'ID' is set
      if (ID === undefined || ID === null) {
        throw new Error("Missing the required parameter 'ID' when calling updateOrganization");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrganization");
      }


      let pathParams = {
        'ID': ID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AppID', 'AppSecret', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1UpdateOrganizationResponse;

      return this.callApi(
        '/v1/organizations/{ID}', 'PUT',
        pathParams, postBody,
        returnType, callback
      );
    },


}
export default OrganizationsApi

