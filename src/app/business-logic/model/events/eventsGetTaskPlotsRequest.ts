/**
 * events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface EventsGetTaskPlotsRequest {
    /**
     * Task ID
     */
    task: string;
    /**
     * Max number of latest iterations for which to return debug images
     */
    iters?: number;
    /**
     * Scroll ID of previous call (used for getting more results)
     */
    scroll_id?: string;
    /**
     * List of metrics and variants
     */
    metrics?: Array<object>;
}
