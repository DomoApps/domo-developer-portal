# Datasets API

The Domo Datasets API empowers developers to seamlessly manage, create, and update datasets within the Domo platform. With robust capabilities like executing SQL queries, appending rows, sharing datasets with granular access permissions, and retrieving detailed metadata, this API is designed to streamline data-driven workflows. Whether you're building integrations to automate business processes or enabling real-time analytics, the Datasets API provides the tools to unlock the full potential of your data. Dive in to transform raw data into actionable insights and drive smarter decision-making across your organization.

## Query with SQL

**Description**: This endpoint executes an SQL query on the specified DataSet and returns the result in the form of a list of objects.

**HTTP Request**:

```http
POST /api/query/v1/execute/:datasetId
```

**Query Parameters**

| Property Name | Type   | Required | Description                     |
| ------------- | ------ | -------- | ------------------------------- |
| datasetId     | String | Yes      | The ID of the DataSet to query. |

**Body Parameters**

| Property Name | Type   | Required | Description                   |
| ------------- | ------ | -------- | ----------------------------- |
| sql           | String | Yes      | The SQL statement to execute. |

**Headers**:

- `X-DOMO-Developer-Token`: `<developer token here>`
- `Accept`: `application/json`
- `Content-Type`: `application/json`

**Request Body**:

```json
{
  "body": {
    "sql": "SELECT * FROM your_table WHERE column = 'value'"
  }
}
```

**Response**

- **200 OK**: The request was successful, and the query results are returned.

  ```json
  {
    "datasource": "dummy-datasource-id",
    "device": "dummy-device-01",
    "columns": ["UID", "Last Updated By", "Last Updated Date"],
    "metadata": [
      {
        "type": "STRING",
        "dataSourceId": "dummy-datasource-id",
        "maxLength": -1,
        "minLength": -1,
        "aggregated": false,
        "analytic": false
      },
      {
        "type": "STRING",
        "dataSourceId": "dummy-datasource-id",
        "maxLength": -1,
        "minLength": -1,
        "aggregated": false,
        "analytic": false
      },
      {
        "type": "DATETIME",
        "dataSourceId": "dummy-datasource-id",
        "maxLength": -1,
        "minLength": -1,
        "aggregated": false,
        "analytic": false
      }
    ],
    "fromcache": "false",
    "numColumns": 3,
    "rows": [
      ["ABC123", "Jane Doe", "2024-01-01T12:00:00"],
      ["XYZ789", "John Smith", "2024-01-02T15:30:00"]
    ],
    "numRows": 2,
    "duration": "1"
  }
  ```

- **400 Bad Request**: The request was malformed or missing required parameters.
- **403 Forbidden**: The client does not have permission to access the requested resource.
- **409 Conflict**: The request could not be completed due to a conflict with the current state of the resource.
- **416 Requested Range Not Satisfiable**: The range specified in the request is invalid or cannot be satisfied.
- **500 Internal Server Error**: An unexpected error occurred on the server.

## Dataset Access List

**Description**:  
Retrieves a list of users and groups with access to the dataset, along with their permissions.

**HTTP Request**:

```http
GET /api/data/v3/datasources/:datasetId/permissions
```

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| datasetId     | String | Yes      | Unique identifier of the dataset. |

**Example**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{datasetId}/permissions",
  "headers": {}
}
```

**Response**

- **200 OK**: The request was successful, and the list of users and groups with access to the dataset is returned.

  ```json
  {
    "list": [
      {
        "accessLevel": "CAN_VIEW",
        "id": "966365811",
        "name": "John Doe",
        "type": "USER"
      },
      {
        "accessLevel": "CAN_EDIT",
        "id": "group-12345",
        "name": "Editors Group",
        "type": "GROUP"
      }
    ],
    "totalGroupCount": 1,
    "totalUserCount": 1
  }
  ```

## Revoke Dataset Access

**Method**: `DELETE`  
**Endpoint**: `/api/data/v3/datasources/{dataSourceId}/permissions/{type}/{id}`

This endpoint revokes access to a specified datasource for a given entity.

**Parameters**

| Property Name | Type   | Required | Description                                                                                                                                                                                          |
| ------------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSourceId  | String | Yes      | The ID of the datasource to revoke access from.                                                                                                                                                      |
| type          | String | Yes      | The type of entity to revoke access for. Valid values are: `USER`, `GROUP`, `CARD`, `VIRTUAL_USER`, `APPROVAL`, `ENIGMA_FORM_INSTANCE`, `DATA_APP`, `DATA_APP_VIEW`, `WORKFLOW`, `REPORT_VIEW_PAGE`. |
| id            | String | Yes      | The ID of the entity to revoke access for.                                                                                                                                                           |

**Example**

```json
{
  "method": "DELETE",
  "url": "https://{instance}.domo.com/api/data/v3/datasources/{dataSourceId}/permissions/{type}/{id}",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response**

- **200 OK**: The request was successful, and the entity's access was revoked.

- **403 Forbidden**: The client does not have permission to revoke access for the specified entity.

- **409 Conflict**: The request could not be completed due to a conflict with the current state of the resource.

- **416 Requested Range Not Satisfiable**: The range specified in the request is invalid or cannot be satisfied.

- **500 Internal Server Error**: An unexpected error occurred on the server.

## Get Metadata

**Method**: `GET`  
**Endpoint**: `/api/data/v3/datasources/:datasetId`

This endpoint retrieves metadata for a specified DataSet, including the dataset's properties and optionally requested parts of the metadata.

**Parameters**

| Property Name | Type   | Required | Description                                                                                                                                                                                                                |
| ------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| datasetId     | String | Yes      | The ID of the dataset to retrieve metadata for.                                                                                                                                                                            |
| part          | Array  | No       | A list of metadata parts to include. Valid values are: `core`, `permission`, `status`, `pdp`, `rowcolcount`, `certification`, `sharecount`, `alertcount`, `dataprovider`, `features`, `impactcounts`, `functions`, `cryo`. |

**Example**

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/data/v3/datasources/{datasetId}?part=core,permission",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response**

```json
{
  "id": "44c5d1b9-7a26-4369-bf0d-c575bfb168a6",
  "displayType": "file-upload-new",
  "dataProviderType": "file-upload-new",
  "type": "file-upload-new",
  "name": "mock_clients",
  "description": "Mock data for testing",
  "owner": {
    "id": "403368057",
    "name": "Jonathan Tiritilli",
    "type": "USER",
    "group": false
  },
  "created": 1755706042000,
  "lastTouched": 1755717169000,
  "lastUpdated": 1755717169005,
  "cardInfo": {
    "cardCount": 5,
    "cardViewCount": 0
  },
  "state": "SUCCESS",
  "validConfiguration": true,
  "validAccount": true,
  "streamId": 27286,
  "transportType": "CONNECTOR",
  "cloudId": "domo",
  "cloudName": "Domo",
  "permissions": "READ_WRITE_DELETE_SHARE_ADMIN",
  "hidden": false,
  "scheduleActive": true,
  "cardCount": 5,
  "cloudEngine": "domo"
}
```

## Append Row to Dataset

**Method**: `POST`  
**Endpoint**: `/api/data/v3/datasources/:datasetId/uploads`

This endpoint appends a row of values to a specified dataset.

**Parameters**

| Property Name | Type   | Required | Description                              |
| ------------- | ------ | -------- | ---------------------------------------- |
| datasetId     | String | Yes      | The ID of the DataSet to append rows to. |

**Example**

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/data/v3/datasources/{datasetId}/uploads",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    "data": [
      {
        "client_id": 2,
        "client_name": "Madelaine Tinsey",
        "client_age": 70,
        "client_email": "mtinsey1@mapy.cz",
        "client_country": "Russia",
        "client_gender": "Male",
        "client_type": "External",
        "client_company": "Nimbus Forge",
        "client_rank": 3,
        "client_last_active": "2025-08-20T19:12:46"
      }
    ]
  }
}
```

**Response**

- **200 OK**: The request was successful, and the following response is returned:

  ```json
  {
    "dataSourceId": "44c5d1b9-7a26-4369-bf0d-c575bfb168a6",
    "uploadId": 4,
    "requestedAsOf": 1757443346151
  }
  ```

- **400 Bad Request**: The request was malformed or missing required parameters.

- **403 Forbidden**: The client does not have permission to append rows to the dataset.

- **409 Conflict**: The request could not be completed due to a conflict with the current state of the resource.

## Stream (Connector) - Create

**Method**: `POST`  
**Endpoint**: `/api/data/v1/streams`

**Description**:  
Creates a new data stream using a connector and specifies configuration details.

**Parameters**

| Property Name        | Type   | Required | Description                                              |
| -------------------- | ------ | -------- | -------------------------------------------------------- |
| transport            | Object | Yes      | Connector transport details, including type and version. |
| configuration        | Array  | Yes      | List of key-value pairs defining stream configurations.  |
| account              | Object | Yes      | Account information (e.g., ID).                          |
| updateMethod         | String | Yes      | Update method, e.g., `APPEND`.                           |
| dataProvider         | Object | Yes      | Data provider details, including key.                    |
| dataSource           | Object | Yes      | Dataset details, including name and description.         |
| advancedScheduleJson | String | No       | Schedule details in JSON format.                         |

**Example**

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/data/v1/streams",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "transport": {
      "type": "CONNECTOR",
      "description": "com.domo.connector.snowflakeunloadv2",
      "version": "1"
    },
    "configuration": [
      {
        "name": "query",
        "value": "SELECT * FROM table",
        "type": "string",
        "category": "METADATA"
      }
    ],
    "account": {
      "id": 3
    },
    "updateMethod": "APPEND",
    "dataProvider": {
      "key": "snowflake-unload-v2"
    },
    "dataSource": {
      "name": "hello world",
      "description": "config works?"
    },
    "advancedScheduleJson": "{\"type\": \"MANUAL\", \"timezone\": \"UTC\"}"
  }
}
```

**Response**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Stream (Connector) - Get

**Method**: `GET`  
**Endpoint**: `/api/data/v1/streams/{stream_id}`

**Description**:  
Retrieves configuration details for a specific data stream.

**Parameters**

| Property Name | Type   | Required | Description                      |
| ------------- | ------ | -------- | -------------------------------- |
| streamId      | String | Yes      | Unique identifier of the stream. |

**Example**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v1/streams/{streamId}",
  "headers": {}
}
```

**Response**

```json
{
  "id": 371,
  "valid": true,
  "invalidExecutionId": null,
  "transport": {
    "type": "CONNECTOR",
    "description": "com.domo.connector.covid19",
    "version": "0"
  },
  "updateMethod": "REPLACE",
  "dataProvider": {
    "id": 2834,
    "key": "covid-19",
    "name": "Covid-19",
    "url": null,
    "defaultConnectorId": null,
    "defaultConnectorLabel": null,
    "authenticationScheme": null,
    "connectorValidatorPresent": false,
    "resourceBundlePresent": false,
    "moduleHandler": null,
    "iconPicker": false,
    "scope": "0",
    "producer": "DOMO",
    "version": "0",
    "dateCreated": 1583529722000,
    "dateUpdated": 1583521641000,
    "visibility": "WITH_CONNECTOR",
    "type": "STANDARD",
    "authenticationSchemeConfiguration": []
  },
  "account": null,
  "dataSource": {
    "id": "dcad2f50-e65e-4259-a9e8-214a3d1e18a7",
    "displayType": "covid-19",
    "dataProviderType": "covid-19",
    "type": "covid-19",
    "name": "DOMO Covid Time Series Tracker Data",
    "owner": {
      "id": "1345408759",
      "name": "Alexis Lorenz (DataMaven)",
      "type": "USER",
      "group": false
    },
    "status": "SUCCESS",
    "created": 1594224795000,
    "lastTouched": 1652481876000,
    "lastUpdated": 1652481807436,
    "nextUpdate": 1652483579534,
    "rowCount": 283429,
    "columnCount": 22,
    "cardInfo": {
      "cardCount": 30,
      "cardViewCount": 0
    },
    "properties": {
      "formulas": {
        "formulas": {
          "calculation_c8db9ded-314f-41fa-9352-2954139a1302": {
            "templateId": 422,
            "id": "calculation_c8db9ded-314f-41fa-9352-2954139a1302",
            "name": "Filter out Early Results",
            "formula": "(CASE  WHEN ((CURRENT_DATE = `date`) AND (HOUR(CURRENT_TIMESTAMP) >= 8)) THEN 'TOO EARLY' ELSE 'USE CURRENT' END )",
            "status": "VALID",
            "persistedOnDataSource": true,
            "isAggregatable": false,
            "bignumber": false,
            "columnPositions": [
              {
                "columnName": "`date`",
                "columnPosition": 29
              }
            ]
          },
          "calculation_af03accf-482c-46ce-bb73-eaa008e511d5": {
            "templateId": 429,
            "id": "calculation_af03accf-482c-46ce-bb73-eaa008e511d5",
            "name": "Recovered (Negative)",
            "formula": "(`recovered_total` * -1)",
            "status": "VALID",
            "dataType": "DOUBLE",
            "persistedOnDataSource": true,
            "isAggregatable": false,
            "bignumber": false,
            "columnPositions": [
              {
                "columnName": "`recovered_total`",
                "columnPosition": 1
              }
            ]
          }
        }
      }
    },
    "state": "SUCCESS",
    "validConfiguration": true,
    "validAccount": true,
    "streamId": 371,
    "transportType": "CONNECTOR",
    "adc": false,
    "adcExternal": false,
    "cloudId": "domo",
    "cloudName": "Domo",
    "permissions": "READ_SHARE",
    "hidden": false,
    "tags": "[\"s_covid-19\",\"udt_MINUTE at undefined\",\"um_REPLACE\",\"covid-19\"]",
    "scheduleActive": true
  },
  "schemaDefinition": {
    "columns": [
      {
        "type": "DATE",
        "name": "date",
        "id": "date",
        "visible": true,
        "metadata": {
          "colLabel": "date",
          "colFormat": "",
          "isEncrypted": false
        }
      },
      {
        "type": "STRING",
        "name": "ISO3",
        "id": "ISO3",
        "visible": true,
        "metadata": {
          "colLabel": "ISO3",
          "colFormat": "",
          "isEncrypted": false
        }
      }
    ]
  },
  "scheduleExpression": "0 13/30 * * * ?",
  "scheduleStartDate": null,
  "advancedScheduleJson": "{\"type\":\"MINUTE\",\"timezone\":\"UTC\",\"between\":null,\"interval\":30}",
  "scheduleRetryExpression": null,
  "scheduleRetryCount": 0,
  "lastExecution": {
    "streamId": 371,
    "executionId": 32360,
    "toe": "HJP31Q11Q3-MO40M-EIVQC",
    "startedAt": 1652481782,
    "endedAt": 1652481807,
    "updateMethod": "REPLACE",
    "index": true,
    "retryCount": 0,
    "retryExecution": null,
    "containerManagerId": "cm-b9c94733-d3d6-4a64-be97-a4b6e33ad8bf",
    "uploadId": 32345,
    "indexRequestKey": 20220513224325.628,
    "currentState": "SUCCESS",
    "runType": "AUTOMATED",
    "createdAt": 1652481782,
    "modifiedAt": 1652481807,
    "latestPhase": null,
    "currentPhase": null,
    "removed": false,
    "rowsInserted": 283429,
    "bytesInserted": 41562816,
    "startedBy": null,
    "cancelledBy": null,
    "dataTag": null,
    "peakMemoryUsedBytes": 198201936,
    "peakMemoryCommittedBytes": 211288064,
    "exportable": false,
    "manualIndex": false,
    "errors": []
  },
  "lastSuccessfulExecution": {
    "streamId": 371,
    "executionId": 32360,
    "toe": "HJP31Q11Q3-MO40M-EIVQC",
    "startedAt": 1652481782,
    "endedAt": 1652481807,
    "updateMethod": "REPLACE",
    "index": true,
    "retryCount": 0,
    "retryExecution": null,
    "containerManagerId": "cm-b9c94733-d3d6-4a64-be97-a4b6e33ad8bf",
    "uploadId": 32345,
    "indexRequestKey": 20220513224325.628,
    "currentState": "SUCCESS",
    "runType": "AUTOMATED",
    "createdAt": 1652481782,
    "modifiedAt": 1652481807,
    "latestPhase": null,
    "currentPhase": null,
    "removed": false,
    "rowsInserted": 283429,
    "bytesInserted": 41562816,
    "startedBy": null,
    "cancelledBy": null,
    "dataTag": null,
    "peakMemoryUsedBytes": 198201936,
    "peakMemoryCommittedBytes": 211288064,
    "exportable": false,
    "manualIndex": false,
    "errors": []
  },
  "currentExecution": null,
  "currentExecutionState": "SUCCESS",
  "createdAt": 1594224796,
  "createdBy": 1345408759,
  "modifiedAt": 1652481875,
  "modifiedBy": 1893952720,
  "scheduleState": "ACTIVE",
  "scheduleAssertion": false,
  "inactiveScheduleCode": null,
  "configuration": [
    {
      "streamId": 371,
      "category": "METADATA",
      "name": "retry.retryNumber",
      "type": "string",
      "value": "0"
    },
    {
      "streamId": 371,
      "category": "METADATA",
      "name": "report",
      "type": "string",
      "value": "time_series_tracker_data"
    }
  ]
}
```

## Stream (Connector) - Update

**Method**: `PUT`  
**Endpoint**: `/api/data/v1/streams/{stream_id}`

**Description**:  
Updates the configuration of an existing data stream.

**Parameters**

| Property Name        | Type   | Required | Description                                                  |
| -------------------- | ------ | -------- | ------------------------------------------------------------ |
| stream_id            | String | Yes      | Unique identifier of the stream.                             |
| transport            | Object | Yes      | Connector transport details, including type and description. |
| configuration        | Array  | Yes      | List of key-value pairs defining updated configurations.     |
| account              | Object | Yes      | Account information (e.g., ID).                              |
| updateMethod         | String | Yes      | Update method, e.g., `APPEND`.                               |
| dataProvider         | Object | Yes      | Data provider details, including key.                        |
| dataSource           | Object | Yes      | Dataset details, including name and description.             |
| advancedScheduleJson | String | No       | Schedule details in JSON format.                             |

**Example**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v1/streams/{stream_id}",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "transport": {
      "type": "CONNECTOR",
      "description": "com.domo.connector.postgresql.partition",
      "version": "0"
    },
    "configuration": [
      {
        "name": "fetch_size",
        "value": "None",
        "type": "string",
        "category": "METADATA"
      }
    ],
    "account": {
      "id": 1
    },
    "updateMethod": "APPEND",
    "dataProvider": {
      "key": "postgresql-partition"
    },
    "dataSource": {
      "name": "hello world",
      "description": "config works?"
    },
    "advancedScheduleJson": "{\"type\": \"MANUAL\", \"timezone\": \"UTC\"}"
  }
}
```

**Response**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Stream Execution History

**Method**: `GET`  
**Endpoint**: `/api/data/v1/streams/{stream_id}/history/aggregate`

**Description**:  
Retrieves the execution history for a specific data stream, including details about completed operations, errors, and performance metrics.

**Parameters**:

| Property Name | Type   | Required | Description                      |
| ------------- | ------ | -------- | -------------------------------- |
| streamId      | String | Yes      | Unique identifier of the stream. |

**Request**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v1/streams/{streamId}/history/aggregate",
  "headers": {}
}
```

**Response**:

```json
[
  {
    "streamId": 371,
    "executionId": 34320,
    "currentState": "SUCCESS",
    "rowsInserted": 297164,
    "bytesInserted": 43584980,
    "startedAt": 1656009784,
    "endedAt": 1656009824,
    "updateMethod": "REPLACE",
    "peakMemoryUsedBytes": 200819808
  },
  {
    "streamId": 371,
    "executionId": 34319,
    "currentState": "SUCCESS",
    "rowsInserted": 297164,
    "bytesInserted": 43584980,
    "startedAt": 1656007981,
    "endedAt": 1656008009,
    "updateMethod": "REPLACE",
    "peakMemoryUsedBytes": 206690488
  }
]
```

## Execute Dataset Stream

**Method**: `POST`  
**Endpoint**: `/api/data/v1/streams/:streamId/executions`

### Description

This endpoint queries a dataset's stream ID and executes the dataset stream.

### Parameters (Execute Stream)

| Property Name | Type   | Required | Description                              |
| ------------- | ------ | -------- | ---------------------------------------- |
| streamId      | String | Yes      | The ID of the dataset stream to execute. |

#### Example Request (Execute Stream)

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/data/v1/streams/{streamId}/executions",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    "action": "MANUAL"
  }
}
```

#### Response (Execute Stream)

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## createDatasetTag

**Method**: `POST`  
**Endpoint**: `/api/data/ui/v3/datasources/:datasetId/tags`

### Description (Create Dataset Tag)

This endpoint creates a tag for the specified dataset.

**Parameters (Create Dataset Tag)**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| datasetId     | String | Yes      | The ID of the dataset to tag.     |
| tag           | String | Yes      | The tag to assign to the dataset. |

**Example Request (Create Dataset Tag)**

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/data/ui/v3/datasources/:datasetId/tags",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": ["tag1", "tag2"]
}
```

**Response (Create Dataset Tag)**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Share Dataset with Access permissions

**Method**: `POST`  
**Endpoint**: `/api/data/v3/datasources/:datasetId/share`

### Description (Share Dataset)

This endpoint shares a dataset and grants access permissions to specified users.

**Parameters (Share Dataset Endpoint)**

| Property Name | Type    | Required | Description                                                                                     |
| ------------- | ------- | -------- | ----------------------------------------------------------------------------------------------- |
| datasetId     | String  | Yes      | The ID of the dataset to share.                                                                 |
| permissions   | Array   | Yes      | A list of owners to add to the dataset. Each owner is an object with id, type, and accessLevel. |
| sendEmail     | Boolean | Yes      | A flag indicating whether to send an email.                                                     |

**Example Request (Share Dataset Endpoint)**

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/data/v3/datasources/:datasetId/share",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    "permissions": [
      {
        "id": "ownerId1",
        "type": "USER",
        "accessLevel": "CO_OWNER"
      }
    ],
    "sendEmail": true
  }
}
```

**Response (Share Dataset)**

```json
{
  "HTTP/1.1": "200 OK",
  "Content-Type": "application/json",
  "body": {}
}
```

## Remove user from dataset

**Method**: `DELETE`  
**Endpoint**: `/api/data/v3/datasources/:datasetId/USERS/:userId`

### Description (Remove User)

This endpoint removes a user from a dataset's permissions.

**Parameters (Remove User)**

| Property Name | Type   | Required | Description                                                  |
| ------------- | ------ | -------- | ------------------------------------------------------------ |
| datasetId     | String | Yes      | The ID of the dataset from which the user will be removed.   |
| userId        | String | Yes      | The ID of the user to remove from the dataset's permissions. |

**Example Request (Remove User)**

```json
{
  "method": "DELETE",
  "url": "https://{instance}.domo.com/api/data/v3/datasources/:datasetId/USERS/:userId",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response (Remove User)**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Remove multiple users from dataset

**Method**: `DELETE`  
**Endpoint**: `/api/data/v3/datasources/:datasetId/users`

### Description (Remove Multiple Users)

This endpoint removes multiple people from a dataset's permissions.

**Parameters (Remove Multiple Users)**

| Property Name | Type   | Required | Description                                                           |
| ------------- | ------ | -------- | --------------------------------------------------------------------- |
| datasetId     | String | Yes      | The ID of the dataset from which the people will be removed.          |
| body          | Array  | Yes      | An array of user objects, each containing `id` and `type` properties. |

**Example Request (Remove Multiple Users)**

```json
{
  "method": "DELETE",
  "url": "https://{instance}.domo.com/api/data/v3/datasources/:datasetId/users",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": [
    { "id": "userId1", "type": "USER" },
    { "id": "userId2", "type": "USER" }
  ]
}
```

**Response (Remove Multiple Users)**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Upload CSV - APPEND or REPLACE

### Stage 1 - Get Upload ID

**Method**: `POST`  
**Endpoint**: `/api/data/v3/datasources/:dataset_id/uploads`

**Description**:  
Generates an `uploadId` for appending or replacing data in the dataset. The `uploadId` is required for subsequent upload stages.

### Parameters: Upload CSV - APPEND or REPLACE

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Upload CSV - APPEND or REPLACE**

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/:dataset_id/uploads",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  "body": {
    "action": null,
    "appendId": null
  }
}
```

**Response**:

```json
{
  "dataSourceId": "0dbe6a6a-5588-4a1e-9db4-989ca98762a5",
  "uploadId": 10,
  "requestedAsOf": 1654557838137
}
```

---

### Stage 2 - Upload CSV (Bulk Import)

**Method**: `PUT`  
**Endpoint**: `/api/data/v3/datasources/:dataset_id/uploads/:upload_id/parts/:part`

**Description**:  
Uploads the CSV file data. The dataset is divided into parts for uploading multiple streams simultaneously.

### Parameters: Stage 2 - Upload CSV (Bulk Import)

| Property Name | Type   | Required | Description                            |
| ------------- | ------ | -------- | -------------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset.      |
| upload_id     | String | Yes      | Upload ID generated in Stage 1.        |
| part          | Number | Yes      | Indicates the part number of the data. |

**Example Request: Stage 2 - Upload CSV (Bulk Import)**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/:dataset_id/uploads/:upload_id/parts/1",
  "headers": {
    "Content-Type": "text/csv",
    "Accept": "application/json"
  },
  "body": "Jae and Oleksii, why\nhello, it is the way"
}
```

---

### Stage 3 - Commit and Index (Bulk Import)

**Method**: `PUT`  
**Endpoint**: `/api/data/v3/datasources/:dataset_id/uploads/:upload_id/commit`

**Description**:  
Finalizes the data upload by committing the uploaded parts and indexing the dataset.

### Parameters: Stage 3 - Commit and Index (Bulk Import)

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |
| upload_id     | String | Yes      | Upload ID generated in Stage 1.   |

**Body Parameters**:

| Property Name | Type    | Required | Description                               |
| ------------- | ------- | -------- | ----------------------------------------- |
| action        | String  | Yes      | Accepts `APPEND` or `REPLACE`.            |
| index         | Boolean | Yes      | Indicates if indexing should be executed. |

**Example Request: Stage 3 - Commit and Index (Bulk Import)**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/:dataset_id/uploads/:upload_id/commit",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  "body": {
    "action": "APPEND",
    "index": "true"
  }
}
```

## Upload CSV - APPEND with Partitioning

### Stage 1 - Get Partition Tag

**Method**: `POST`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/uploads/?restateDataTag={dataset_partition_id}`

**Description**:  
Initializes a data upload with partitioning and generates an `uploadId`. The `uploadId` is required for subsequent upload stages. Note that `restateDataTag` is largely deprecated and retained for backward compatibility.

### Parameters: Upload CSV - APPEND with Partitioning

| Property Name  | Type   | Required | Description                                                         |
| -------------- | ------ | -------- | ------------------------------------------------------------------- |
| dataset_id     | String | Yes      | Unique identifier of the dataset.                                   |
| restateDataTag | String | No       | Specifies a partition for UPDATE/REPLACE actions. Defaults to None. |

**Example Request: Upload CSV - APPEND with Partitioning**

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/uploads/?restateDataTag={dataset_partition_id}",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  "body": {
    "action": null,
    "appendId": null
  }
}
```

**Response**:

```json
{
  "uploadId": 12345
}
```

---

### Stage 2 - Upload CSV

**Method**: `PUT`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/uploads/{dataset_upload_id}/parts/:part`

**Description**:  
Uploads data in CSV format. Multiple parts can be uploaded simultaneously for larger datasets.

**Parameters**

| Property Name     | Type   | Required | Description                               |
| ----------------- | ------ | -------- | ----------------------------------------- |
| dataset_id        | String | Yes      | Unique identifier of the dataset.         |
| dataset_upload_id | String | Yes      | Upload ID generated in Stage 1.           |
| part              | Number | Yes      | Indicates the part number being uploaded. |

**Example**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/uploads/{dataset_upload_id}/parts/1",
  "headers": {
    "Content-Type": "text/csv",
    "Accept": "application/json"
  },
  "body": "column1,column2\nvalue1,value2"
}
```

---

### Stage 3 - Commit and Index

**Method**: `PUT`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/uploads/{dataset_upload_id}/commit`

**Description**
Finalizes the data upload by committing all parts and optionally indexing the dataset for query access.

**Parameters**

| Property Name     | Type    | Required | Description                                                           |
| ----------------- | ------- | -------- | --------------------------------------------------------------------- |
| dataset_id        | String  | Yes      | Unique identifier of the dataset.                                     |
| dataset_upload_id | String  | Yes      | Upload ID generated in Stage 1.                                       |
| action            | String  | Yes      | Acceptable values: `APPEND`, `REPLACE`. Determines the update method. |
| restateDataTag    | String  | No       | Specifies a partition tag for updating specific partitions.           |
| index             | Boolean | Yes      | Indicates whether the data should be indexed.                         |

**Example**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/uploads/{dataset_upload_id}/commit",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  "body": {
    "action": "APPEND",
    "restateDataTag": "{dataset_partition_id}",
    "index": true
  }
}
```

## GET Data Versions

**Method**: `GET`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/dataversions/details`

**Description**:  
Retrieves detailed information about all data versions associated with the dataset.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: GET Data Versions**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/dataversions/details",
  "headers": {}
}
```

## GET Partition List

**Method**: `GET`  
**Endpoint**: `/api/query/v1/datasources/{dataset_id}/partition`

**Description**:  
Retrieves a list of partitions associated with the dataset. Does not include metadata such as row counts.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: GET Partition List**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/query/v1/datasources/{dataset_id}/partition",
  "headers": {}
}
```

**Notes**:

- To include row count metadata, use the `/partition/list` endpoint.
- This endpoint does not differentiate between partitions marked for deletion and those not marked.

## Search Partition List

**Method**: `POST`  
**Endpoint**: `/api/query/v1/datasources/{dataset_id}/partition/list`

**Description**:  
Searches for partitions associated with the dataset. Allows pagination, sorting, and filtering of results.

### Parameters: Search Partition List

| Property Name    | Type   | Required | Description                             |
| ---------------- | ------ | -------- | --------------------------------------- |
| dataset_id       | String | Yes      | Unique identifier of the dataset.       |
| paginationFields | Array  | No       | Defines sorting and filtering.          |
| limit            | Number | No       | Maximum number of results. Default: 100 |
| offset           | Number | No       | Number of results to skip. Default: 0   |

**Example Request: Search Partition List**

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/query/v1/datasources/{dataset_id}/partition/list",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "paginationFields": [
      {
        "fieldName": "datecompleted",
        "sortOrder": "DESC",
        "filterValues": {
          "MIN": null,
          "MAX": null
        }
      }
    ],
    "limit": 100,
    "offset": 0
  }
}
```

## Data Version List from Magic

**Method**: `POST`  
**Endpoint**: `/api/dataprocessing/v2/dataflows/data-version-hydrate`

**Description**:  
Retrieves a list of data versions for datasets processed with the MAGIC engine.

### Parameters: Data Version List from Magic

| Property Name | Type   | Required | Description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| datasetId     | String | Yes      | The ID of the dataset.                  |
| engine        | String | No       | Defaults to `MAGIC`.                    |
| limit         | Number | No       | Maximum number of results. Default: 500 |
| offset        | Number | No       | Number of results to skip. Default: 0   |

**Example Request: Data Version List from Magic**

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/dataprocessing/v2/dataflows/data-version-hydrate?engine=MAGIC&limit=500&offset=0",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "id": "",
    "type": "LoadFromVault",
    "dataSourceId": "{dataset_id}",
    "versionWindow": {
      "type": "EXPRESSION",
      "expression": "1=1"
    }
  }
}
```

## Delete Data Version

**Method**: `DELETE`  
**Endpoint**: `/api/query/v1/datasources/{dataset_id}/tag/{dataset_partition_id}/data`

**Description**:  
Marks the data version associated with a partition tag as deleted. This does not delete the partition tag itself or remove the association between the partition tag and the data version.

### Parameters: Delete Data Version

| Property Name | Type   | Required | Description                      |
| ------------- | ------ | -------- | -------------------------------- |
| datasetId     | String | Yes      | The ID of the dataset.           |
| versionId     | String | Yes      | The ID of the version to delete. |

**Example Request: Delete Data Version**

```json
{
  "method": "DELETE",
  "url": "https://{domo_instance}.domo.com/api/query/v1/datasources/{dataset_id}/tag/{dataset_partition_id}/data",
  "headers": {}
}
```

**Notes**:

- Use this endpoint to mark data versions as deleted without removing the partition tag.
- To only remove the partition tag, use the "Delete Partition Tag" endpoint.

## Delete Partition Tag

**Method**: `DELETE`  
**Endpoint**: `/api/query/v1/datasources/{dataset_id}/partition/{dataset_partition_id}`

**Description**:  
Removes the association of a partition tag with its dataset, ensuring it no longer appears in the partition list.

### Parameters: Delete Partition Tag

| Property Name        | Type   | Required | Description                                    |
| -------------------- | ------ | -------- | ---------------------------------------------- |
| dataset_id           | String | Yes      | Unique identifier of the dataset.              |
| dataset_partition_id | String | Yes      | Identifier of the dataset partition to remove. |

**Example Request: Delete Partition Tag**

```json
{
  "method": "DELETE",
  "url": "https://{domo_instance}.domo.com/api/query/v1/datasources/{dataset_id}/partition/{dataset_partition_id}",
  "headers": {}
}
```

**Notes**:

- Removing the partition tag does not count against the 400-partition limit in Magic 2.0.
- Partitions against deleted data versions will not appear in the partition list.

## Index Dataset

**Method**: `POST`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/indexes`

**Description**:  
Indexes data versions for a dataset to make them queryable. If no `dataIds` are provided, all complete and unindexed versions are indexed.

### Parameters: Index Dataset

| Property Name | Type   | Required | Description            |
| ------------- | ------ | -------- | ---------------------- |
| datasetId     | String | Yes      | The ID of the dataset. |
| indexName     | String | Yes      | The name of the index. |

**Example Request: Index Dataset**

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/indexes",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "dataIds": []
  }
}
```

**Notes**:

- Sending an empty `dataIds` array will index all eligible data versions.
- Indexing is required for datasets to become accessible for querying.

## Create Dataset Copy

**Method**: `POST`  
**Endpoint**: `/api/data/v2/datasources`

**Description**:  
Creates a new dataset by copying an existing schema and providing user-defined metadata.

**Parameters: Create Dataset Copy**

| Property Name   | Type   | Required | Description                                                   |
| --------------- | ------ | -------- | ------------------------------------------------------------- |
| userDefinedType | String | Yes      | Specifies the type of the dataset. Default: `api`.            |
| dataSourceName  | String | Yes      | Name of the new dataset.                                      |
| schema          | Object | Yes      | Defines the dataset schema, including column types and names. |

**Example Request: Create Dataset Copy**

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "userDefinedType": "api",
    "dataSourceName": "hello world",
    "schema": {
      "columns": [
        {
          "type": "STRING",
          "name": "Friend"
        },
        {
          "type": "STRING",
          "name": "Attending"
        }
      ]
    }
  }
}
```

## Get Dataset Schema

**Method**: `GET`  
**Endpoint**: `/api/query/v1/datasources/{dataset_id}/schema/indexed?includeHidden=false`

**Description**:  
Retrieves the schema of a dataset, including details about columns, their types, and metadata.

**Parameters: Get Dataset Schema**

| Property Name | Type    | Required | Description                                                      |
| ------------- | ------- | -------- | ---------------------------------------------------------------- |
| dataset_id    | String  | Yes      | Unique identifier of the dataset.                                |
| includeHidden | Boolean | No       | Specifies whether hidden columns are included. Default: `false`. |

**Example Request: Get Dataset Schema**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/query/v1/datasources/{dataset_id}/schema/indexed?includeHidden=false",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "x-domo-authentication": "{session_token}"
  }
}
```

**Example Response**:

```json
{
  "name": "schema",
  "tables": [
    {
      "columns": [
        {
          "name": "Display Name",
          "id": "Display Name",
          "type": "STRING",
          "visible": true,
          "order": 0
        },
        {
          "name": "Role",
          "id": "Role",
          "type": "STRING",
          "visible": true,
          "order": 0
        }
      ]
    }
  ],
  "dataSourceId": "94a4edfa-5926-4f0c-ad1e-a341f53f6113"
}
```

## Alter Dataset Schema

**Method**: `POST`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/schemas`

**Description**:  
Modifies the schema of an existing dataset by adding or altering columns.

**Parameters: Alter Dataset Schema**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |
| schema        | Object | Yes      | Updated schema definition.        |

**Example Request: Alter Dataset Schema**

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}/schemas",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "x-domo-authentication": "{session_token}"
  },
  "body": {
    "columns": [
      {
        "name": "name",
        "id": "name",
        "type": "STRING",
        "visible": true,
        "order": 0
      },
      {
        "name": "id",
        "id": "id",
        "type": "LONG",
        "visible": true,
        "order": 0
      },
      {
        "name": "alertId",
        "id": "alertId",
        "type": "LONG",
        "visible": true,
        "order": 0
      }
    ],
    "objects": [],
    "views": []
  }
}
```

## Get Cards for a Dataset ID

**Method**: `GET`  
**Endpoint**: `/api/content/v1/datasources/{dataset_id}/cards?drill=true`

**Description**:  
Retrieves a list of cards associated with a dataset. Includes drill paths for cards if `drill` is set to `true`.

**Parameters: Get Cards for a Dataset ID**

| Property Name | Type    | Required | Description                                      |
| ------------- | ------- | -------- | ------------------------------------------------ |
| dataset_id    | String  | Yes      | Unique identifier of the dataset.                |
| drill         | Boolean | No       | Whether to include drill paths. Default: `true`. |

**Example Request: Get Cards for a Dataset ID**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/content/v1/datasources/{dataset_id}/cards?drill=true",
  "headers": {}
}
```

**Example Response**:

```json
[
  {
    "id": 93905300,
    "urn": "93905300",
    "type": "kpi",
    "chartType": "badge_xyscatterplot",
    "title": "Page Views by User",
    "ownerId": 587894148,
    "owners": [
      {
        "id": "587894148",
        "type": "USER",
        "displayName": "Bryan Riff"
      }
    ],
    "access": true,
    "datasourceId": "61c4e63d-0627-41f7-b138-74968ebd7634"
  },
  {
    "id": 100292082,
    "urn": "100292082",
    "type": "kpi",
    "chartType": "badge_vert_bar",
    "title": "DataFlow Creation",
    "ownerId": 1893952720,
    "owners": [
      {
        "id": "1893952720",
        "type": "USER",
        "displayName": "Scott Wilson"
      }
    ],
    "access": true,
    "datasourceId": "61c4e63d-0627-41f7-b138-74968ebd7634"
  }
]
```

## Index Dataset (Create)

**Method**: `POST`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/indexes`

**Description**:  
Indexes data versions for a dataset to make them queryable. If no `dataIds` are provided, all complete and unindexed versions are indexed.

### Parameters: Index Dataset (Create)

| Property Name | Type   | Required | Description            |
| ------------- | ------ | -------- | ---------------------- |
| datasetId     | String | Yes      | The ID of the dataset. |
| indexName     | String | Yes      | The name of the index. |

**Example Request: Index Dataset (Create)**

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/indexes",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "dataIds": []
  }
}
```

**Notes**:

- Sending an empty `dataIds` array will index all eligible data versions.
- Indexing is required for datasets to become accessible for querying.

## Index Dataset (Update)

**Method**: `PUT`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/indexes/{index_id}`

**Description**:  
Updates the configuration of an existing index for a dataset.

### Parameters: Index Dataset (Update)

| Property Name | Type   | Required | Description            |
| ------------- | ------ | -------- | ---------------------- |
| datasetId     | String | Yes      | The ID of the dataset. |
| indexId       | String | Yes      | The ID of the index.   |

**Example Request: Index Dataset (Update)**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/indexes/{index_id}",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "dataIds": [],
    "reindex": true
  }
}
```

## Index Dataset Progress

**Method**: `GET`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/indexes/{index_id}/statuses`

**Description**:  
Retrieves the status of a dataset indexing operation for the specified index ID.

### Parameters: Index Dataset Progress

| Property Name | Type   | Required | Description            |
| ------------- | ------ | -------- | ---------------------- |
| datasetId     | String | Yes      | The ID of the dataset. |
| indexId       | String | Yes      | The ID of the index.   |

**Example Request: Index Dataset Progress**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/indexes/{index_id}/statuses",
  "headers": {}
}
```

## Change Dataset Properties

**Method**: `PUT`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/properties`

**Description**:  
Updates the properties of a dataset, such as the data provider type.

### Parameters: Change Dataset Properties

| Property Name | Type   | Required | Description               |
| ------------- | ------ | -------- | ------------------------- |
| datasetId     | String | Yes      | The ID of the dataset.    |
| properties    | Object | Yes      | The properties to update. |

**Example Request: Change Dataset Properties**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/properties",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "dataProviderType": "new_type"
  }
}
```

## Get Dataset Copy Status

**Method**: `GET`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/copy/status`

**Description**:  
Retrieves the status of a dataset copy operation.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Get Dataset Copy Status**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}/copy/status",
  "headers": {}
}
```

**Response**

```json
{
  "status": "COMPLETED",
  "message": "Dataset copy completed successfully.",
  "datasetId": "new_dataset_id"
}
```

## Get Dataset Copy Log

**Method**: `GET`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/copy/log`

**Description**:  
Retrieves the log of a dataset copy operation, including details about the copied schema and data.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Get Dataset Copy Log**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}/copy/log",
  "headers": {}
}
```

**Response**

```json
{
  "log": ["Schema copied: column1, column2", "Data copied: 100 rows"]
}
```

## Get Dataset Details

**Method**: `GET`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}`

**Description**:  
Retrieves detailed information about a specific dataset, including its schema, data source, and properties.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Get Dataset Details**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}",
  "headers": {}
}
```

**Response**

```json
{
  "id": "dataset_id",
  "name": "Dataset Name",
  "type": "api",
  "owner": "owner_id",
  "created": "2023-01-01T00:00:00Z",
  "lastUpdated": "2023-01-02T00:00:00Z",
  "rowCount": 100,
  "columnCount": 2,
  "properties": {
    "dataProviderType": "api",
    "description": "Dataset description"
  },
  "schema": {
    "columns": [
      {
        "name": "column1",
        "type": "STRING"
      },
      {
        "name": "column2",
        "type": "STRING"
      }
    ]
  }
}
```

## Get Dataset History

**Method**: `GET`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/history`

**Description**:  
Retrieves the history of changes made to a dataset, including schema and data changes.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Get Dataset History**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}/history",
  "headers": {}
}
```

**Response**

```json
{
  "changes": [
    {
      "timestamp": "2023-01-01T00:00:00Z",
      "action": "CREATE",
      "user": "user_id",
      "details": "Dataset created with 2 columns."
    },
    {
      "timestamp": "2023-01-02T00:00:00Z",
      "action": "UPDATE",
      "user": "user_id",
      "details": "Column 'column1' type changed from STRING to TEXT."
    }
  ]
}
```

## Get Dataset Tags

**Method**: `GET`  
**Endpoint**: `/api/data/ui/v3/datasources/{dataset_id}/tags`

**Description**:  
Retrieves the tags associated with a dataset.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Get Dataset Tags**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/ui/v3/datasources/{dataset_id}/tags",
  "headers": {}
}
```

**Response**

```json
{
  "tags": ["tag1", "tag2"]
}
```

## Add Dataset Tags

**Method**: `POST`  
**Endpoint**: `/api/data/ui/v3/datasources/{dataset_id}/tags`

**Description**:  
Adds tags to a dataset.

**Parameters**

| Property Name | Type   | Required | Description                         |
| ------------- | ------ | -------- | ----------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset.   |
| tags          | Array  | Yes      | List of tags to add to the dataset. |

**Example Request: Add Dataset Tags**

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/data/ui/v3/datasources/{dataset_id}/tags",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": ["tag1", "tag2"]
}
```

**Response**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Remove Dataset Tags

**Method**: `DELETE`  
**Endpoint**: `/api/data/ui/v3/datasources/{dataset_id}/tags`

**Description**:  
Removes tags from a dataset.

**Parameters**

| Property Name | Type   | Required | Description                              |
| ------------- | ------ | -------- | ---------------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset.        |
| tags          | Array  | Yes      | List of tags to remove from the dataset. |

**Example Request: Remove Dataset Tags**

```json
{
  "method": "DELETE",
  "url": "https://{domo_instance}.domo.com/api/data/ui/v3/datasources/{dataset_id}/tags",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": ["tag1", "tag2"]
}
```

**Response**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Get Dataset Permissions

**Method**: `GET`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/permissions`

**Description**:  
Retrieves the permissions of a dataset, including access levels for users and groups.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Get Dataset Permissions**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/permissions",
  "headers": {}
}
```

**Response**

```json
{
  "permissions": [
    {
      "type": "USER",
      "id": "user_id",
      "accessLevel": "CO_OWNER"
    }
  ]
}
```

## Update Dataset Permissions

**Method**: `PUT`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/permissions`

**Description**:  
Updates the permissions of a dataset, including adding or removing user and group access.

**Parameters**

| Property Name | Type   | Required | Description                                   |
| ------------- | ------ | -------- | --------------------------------------------- |
| dataset_id    | String | Yes      | The ID of the dataset.                        |
| permissions   | Array  | Yes      | A list of permissions to set for the dataset. |

**Example Request: Update Dataset Permissions**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/permissions",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "permissions": [
      {
        "id": "userId1",
        "type": "USER",
        "accessLevel": "CO_OWNER"
      }
    ]
  }
}
```

**Response**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Get Dataset Owner

**Method**: `GET`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/owner`

**Description**:  
Retrieves the owner of a dataset.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Get Dataset Owner**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/owner",
  "headers": {}
}
```

**Response**

```json
{
  "owner": {
    "id": "owner_id",
    "name": "Owner Name",
    "type": "USER",
    "group": false
  }
}
```

## Update Dataset Owner

**Method**: `PUT`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/owner`

**Description**:  
Updates the owner of a dataset.

**Parameters**

| Property Name | Type   | Required | Description                   |
| ------------- | ------ | -------- | ----------------------------- |
| dataset_id    | String | Yes      | The ID of the dataset.        |
| owner         | Object | Yes      | The new owner of the dataset. |

**Example Request: Update Dataset Owner**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/owner",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "owner": {
      "id": "new_owner_id",
      "type": "USER"
    }
  }
}
```

**Response**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Get Dataset Data

**Method**: `GET`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/data`

**Description**:  
Retrieves the data from a dataset.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Get Dataset Data**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}/data",
  "headers": {}
}
```

**Response**

```json
{
  "columns": ["column1", "column2"],
  "rows": [
    ["value1", "value2"],
    ["value3", "value4"]
  ]
}
```

## Update Dataset Data

**Method**: `PUT`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/data`

**Description**:  
Updates the data in a dataset.

**Parameters**

| Property Name | Type   | Required | Description                   |
| ------------- | ------ | -------- | ----------------------------- |
| dataset_id    | String | Yes      | The ID of the dataset.        |
| data          | Array  | Yes      | The new data for the dataset. |

**Example Request: Update Dataset Data**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}/data",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "data": [
      {
        "column1": "new_value1",
        "column2": "new_value2"
      }
    ]
  }
}
```

**Response**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Get Dataset Query

**Method**: `GET`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/query`

**Description**:  
Retrieves the query of a dataset.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Get Dataset Query**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}/query",
  "headers": {}
}
```

**Response**

```json
{
  "query": "SELECT * FROM your_table"
}
```

## Update Dataset Query

**Method**: `PUT`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/query`

**Description**:  
Updates the query of a dataset.

**Parameters**

| Property Name | Type   | Required | Description                    |
| ------------- | ------ | -------- | ------------------------------ |
| dataset_id    | String | Yes      | The ID of the dataset.         |
| query         | String | Yes      | The new query for the dataset. |

**Example Request: Update Dataset Query**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}/query",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "query": "SELECT * FROM new_table"
  }
}
```

**Response**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Get Dataset SQL

**Method**: `GET`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/sql`

**Description**:  
Retrieves the SQL of a dataset.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Get Dataset SQL**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}/sql",
  "headers": {}
}
```

**Response**

```json
{
  "sql": "SELECT * FROM your_table"
}
```

## Update Dataset SQL

**Method**: `PUT`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/sql`

**Description**:  
Updates the SQL of a dataset.

**Parameters**

| Property Name | Type   | Required | Description                  |
| ------------- | ------ | -------- | ---------------------------- |
| dataset_id    | String | Yes      | The ID of the dataset.       |
| sql           | String | Yes      | The new SQL for the dataset. |

**Example Request: Update Dataset SQL**

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}/sql",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "sql": "SELECT * FROM new_table"
  }
}
```

**Response**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Get Dataset Dataflow

**Method**: `GET`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/dataflow`

**Description**:  
Retrieves the dataflow associated with a dataset.

**Parameters**

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request: Get Dataset Dataflow**

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v2/datasources/{dataset_id}/dataflow",
  "headers": {}
}
```

**Response**

```json
{
  "dataflow": {
    "id": "dataflow_id",
    "name": "Dataflow Name",
    "type": "TRANSFORM",
    "owner": "owner_id",
    "created": "2023-01-01T00:00:00Z",
    "lastUpdated": "2023-01-02T00:00:00Z",
    "status": "SUCCESS",
    "steps": [
      {
        "id": "step_id",
        "name": "Step Name",
        "type": "TRANSFORM",
        "status": "SUCCESS",
        "created": "2023-01-01T00:00:00Z",
        "lastUpdated": "2023-01-02T00:00:00Z"
      }
    ]
  }
}
```
