# Dataflows API

The Dataflows API allows developers to manage and interact with Dataflows in Domo, including retrieving lists of dataflows, fetching details for a specific dataflow, and executing dataflows programmatically.

## Get All Dataflows

**Method**: `GET`  
**Endpoint**: `/api/dataprocessing/v1/dataflows`

**Description**: Retrieve the list of all dataflows from the Domo instance, including dataset inputs and outputs with their properties.

**Example**:

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/dataprocessing/v1/dataflows",
  "headers": {
    "x-domo-authentication": "<session_token>",
    "Content-Type": "application/json"
  }
}
```

**Response**:  
Returns an array of dataflows with their properties, including inputs and outputs.

```json
[
  {
    "id": 46,
    "name": "AW_delete",
    "dapDataFlowId": "26155ae2-1994-4808-ac55-5ec56318a026",
    "responsibleUserId": 1251168784,
    "runState": "ENABLED",
    "lastExecution": {
      "id": 53816,
      "onboardFlowId": 46,
      "previewRows": 0,
      "dapDataFlowExecutionId": "3bd2c8a2-9ee1-4f8e-9453-9f21f1186933",
      "beginTime": 1620395314000,
      "endTime": 1620395329000,
      "lastUpdated": 1620395329000,
      "failed": false,
      "state": "SUCCESS",
      "dataFlowVersion": 0
    },
    "created": 1620395295000,
    "modified": 1620395310000,
    "engineProperties": {
      "kettle.mode": "STRICT"
    },
    "inputs": [
      {
        "dataSourceId": "c119c8e8-fc43-4b12-b45b-6dac2a704aed",
        "executeFlowWhenUpdated": false,
        "dataSourceName": "Crytpo Usecase"
      }
    ],
    "outputs": [
      {
        "onboardFlowId": null,
        "dataSourceId": "576efb2f-e72a-4ee9-87f8-52304061217e",
        "dataSourceName": "AW_delete",
        "versionChainType": "REPLACE"
      }
    ],
    "executionCount": 2,
    "executionSuccessCount": 2,
    "hydrationState": "DEHYDRATED",
    "useLegacyTriggerBehavior": false,
    "passwordProtected": false,
    "deleted": false,
    "abandoned": false,
    "neverAbandon": false,
    "paused": false,
    "magic": true,
    "restricted": false,
    "editable": true,
    "enabled": true,
    "container": false,
    "databaseType": "MAGIC",
    "triggeredByInput": false,
    "draft": false,
    "numInputs": 1,
    "numOutputs": 1
  }
]
```

---

## Get Dataflow by Id

**Method**: `GET`  
**Endpoint**: `/api/dataprocessing/v1/dataflows/{id}`

**Path Parameters**:

| Property Name | Type    | Required | Description         |
| ------------- | ------- | -------- | -------------------|
| id            | String  | yes      | The Dataflow ID    |

**Example**:

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/dataprocessing/v1/dataflows/{id}",
  "headers": {
    "x-domo-authentication": "<session_token>",
    "Content-Type": "application/json"
  }
}
```

**Response**:  
Returns the full information for the specified dataflow, including inputs, outputs, queries, and state.

```json
{
  "id": 46,
  "name": "AW_delete",
  "dapDataFlowId": "26155ae2-1994-4808-ac55-5ec56318a026",
  ...
}
```

---

## Execute Dataflow

**Method**: `POST`  
**Endpoint**: `/api/dataprocessing/v1/dataflows/{dataflow_id}/executions`

**Path Parameters**:

| Property Name | Type    | Required | Description         |
| ------------- | ------- | -------- | -------------------|
| dataflow_id   | String  | yes      | The Dataflow ID    |

**Example**:

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/dataprocessing/v1/dataflows/{dataflow_id}/executions",
  "headers": {
    "x-domo-authentication": "<session_token>",
    "Content-Type": "application/json"
  }
}
```

**Response**:  
Returns execution details for the triggered dataflow.

```json
{
  "id": 0,
  "onboardFlowId": 0,
  "previewRows": 0,
  "dapDataFlowExecutionId": "",
  "beginTime": 0,
  "lastUpdated": 0,
  "state": "",
  "activationType": "",
  "executionEngine": {
    "platform": "",
    "engine": ""
  },
  "dataProcessor": "",
  "dataFlowVersion": 0
}
```

---

## Get Dataflow Lineage

**Method**: `GET`  
**Endpoint**: `/api/data/v1/lineage/DATAFLOW/{dataflow_id}`

**Description**: Retrieve the data lineage for a specific Dataflow. This endpoint returns the upstream (ancestor) or downstream (descendant) objects related to the dataflow, such as datasets and cards. You can control the direction and depth of traversal with query parameters.

**Path Parameters**:

| Property Name | Type   | Required | Description      |
| ------------- | ------ | -------- | ----------------|
| dataflow_id   | String | yes      | The Dataflow ID |

**Query Parameters**:

| Property Name   | Type    | Required | Description                                                                 | Options                        |
| ---------------| ------- | -------- | --------------------------------------------------------------------------- | ------------------------------ |
| traverseDown   | Boolean | no       | If false, retrieves upstream/ancestor objects. If true, retrieves downstream | true, false (default: false)   |
| traverseUp     | Boolean | no       | If false, retrieves downstream objects.                                      | true, false (default: not set) |
| maxDepth       | Number  | no       | Number of levels to traverse.                                               | Any positive integer           |
| requestEntities| String  | no       | Comma-separated list of entity types to include (e.g., DATA_SOURCE,DATAFLOW,CARD) | DATA_SOURCE, DATAFLOW, CARD    |

**Example**:

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/data/v1/lineage/DATAFLOW/{dataflow_id}?traverseDown=false&requestEntities=DATA_SOURCE,DATAFLOW,CARD",
  "headers": {
    "x-domo-authentication": "<session_token>",
    "Content-Type": "application/json"
  }
}
```

**Response**:  
Returns a lineage graph of the dataflow, including related datasets and cards. The response includes the current object and its relationships.

```json
{
  "DATAFLOW60": {
    "type": "DATAFLOW",
    "id": "60",
    "descendantCounts": {},
    "ancestorCounts": { "DATA_SOURCE": 2 },
    "complete": true,
    "children": [
      { "type": "DATA_SOURCE", "id": "94a4edfa-5926-4f0c-ad1e-a341f53f6113", "complete": true, "children": [], "parents": [] }
    ],
    "parents": [
      { "type": "DATA_SOURCE", "id": "61c4e63d-0627-41f7-b138-74968ebd7634", "complete": true, "children": [], "parents": [] },
      { "type": "DATA_SOURCE", "id": "241025d7-3cca-4369-b7c0-b3264277c0e1", "complete": true, "children": [], "parents": [] }
    ]
  },
  ...
}
```

---

## References

- [Domo DataFlow Management Knowledge Base](https://domohelp.domo.com/hc/en-us/sections/360007295494-DataFlow-Management)
- [Viewing the Impact of Changes to DataSets](https://domohelp.domo.com/hc/en-us/articles/360042926234-Viewing-the-Impact-of-Changes-to-DataSets)
