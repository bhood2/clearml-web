/**
 * models
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { MultiFieldPatternData } from '././multiFieldPatternData';


export interface ModelsGetByIdExRequest {
    /**
     * Get only models whose name matches this pattern (python regular expression   syntax)
     */
    name?: string;
    /**
     * List of user IDs used to filter results by the model\'s creating user
     */
    user?: Array<string>;
    /**
     * Indication whether to retrieve only models that are marked ready If not   supplied returns both ready and not-ready projects.
     */
    ready?: boolean;
    /**
     * User-defined tags list used to filter results. Prepend \'-\' to tag name to   indicate exclusion
     */
    tags?: Array<string>;
    /**
     * System tags list used to filter results. Prepend \'-\' to system tag name to   indicate exclusion
     */
    system_tags?: Array<string>;
    /**
     * List of model field names (if applicable, nesting is supported using \'.\'). If   provided, this list defines the query\'s projection (only these fields will be   returned for each result entry)
     */
    only_fields?: Array<string>;
    /**
     * Page number, returns a specific page out of the resulting list of models
     */
    page?: number;
    /**
     * Page size, specifies the number of results returned in each page (last page may   contain fewer results)
     */
    page_size?: number;
    /**
     * List of associated project IDs
     */
    project?: Array<string>;
    /**
     * List of field names to order by. When search_text is used, \'@text_score\' can be   used as a field representing the text score of returned documents. Use \'-\'   prefix to specify descending order. Optional, recommended when using page
     */
    order_by?: Array<string>;
    /**
     * List of associated task IDs
     */
    task?: Array<string>;
    /**
     * List of model IDs
     */
    id?: Array<string>;
    /**
     * Free text search query
     */
    search_text?: string;
    /**
     * List of frameworks
     */
    framework?: Array<string>;
    /**
     * List of model URIs
     */
    uri?: Array<string>;
    _all_?: MultiFieldPatternData;
    _any_?: MultiFieldPatternData;
}
