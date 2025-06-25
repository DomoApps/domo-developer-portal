# DataSet API

The Domo DataSet API provides a set of endpoints for managing, creating, and updating DataSets within Domo. The API allows developers to execute SQL queries on DataSets, revoke access to DataSets for specific users, retrieve DataSet metadata, append rows to DataSets, share DataSets with access permissions, etc. With these endpoints, developers can build integrations that interact with Domo DataSets, enabling data-driven decision-making and automation of business processes.

## Query with SQL

**Method**: `POST`  
**Endpoint**: `/api/query/v1/execute/:datasetId`

This endpoint executes an SQL query on the specified DataSet and returns the result in the form of a list of objects.

### Parameters

| Property Name | Type   | Required | Description                     |
| ------------- | ------ | -------- | ------------------------------- |
| datasetId     | String | Yes      | The ID of the DataSet to query. |
| sql           | String | Yes      | The SQL statement to execute.   |

### Example

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/query/v1/execute/{datasetId}",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    "sql": "SELECT * FROM your_table WHERE column = 'value'"
  }
}
```

### Response

```json
[
  {
    "column1": "value 1",
    "column2": "value 2",
    "column3": "value 3"
  },
  {
    "column1": "value 1",
    "column2": "value 2",
    "column3": "value 3"
  }
]
```

## Revoke DataSet Access

**Method**: `DELETE`  
**Endpoint**: `/api/data/v3/datasources/:datasetId/permissions/USER/:userId`

This endpoint revokes access to a specified DataSet for a given user.

### Parameters

| Property Name | Type   | Required | Description                                  |
| ------------- | ------ | -------- | -------------------------------------------- |
| datasetId     | String | Yes      | The ID of the DataSet to revoke access from. |
| userId        | String | Yes      | The ID of the user to revoke access for.     |

### Example

```json
{
  "method": "DELETE",
  "url": "https://{instance}.domo.com/api/data/v3/datasources/{datasetId}/permissions/USER/{userId}",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

### Response

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Get DataSet Metadata

**Method**: `GET`  
**Endpoint**: `/api/data/v3/datasources/:datasetId`

This endpoint retrieves metadata for a specified DataSet, including the dataset's properties and optionally requested parts of the metadata.

### Parameters

| Property Name  | Type   | Required | Description                                          |
| -------------- | ------ | -------- | ---------------------------------------------------- |
| datasetId      | String | Yes      | The ID of the DataSet to retrieve metadata for.      |
| requestedParts | String | No       | A comma-separated list of metadata parts to include. |

### Example

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

### Response

```json
{
  "id": "dataset id",
  "displayType": "webform",
  "dataProviderType": "webform",
  "type": "webform",
  "name": "dataset name",
  "owner": {
    "id": "User id",
    "name": "User name",
    "type": "USER",
    "group": false
  },
  "status": "SUCCESS",
  "created": 1231234124,
  "lastTouched": 1231421312,
  "lastUpdated": 12341234412,
  "rowCount": 2,
  "columnCount": 3,
  "cardInfo": {
    "cardCount": 3,
    "cardViewCount": 0
  },
  "properties": {
    "formulas": {
      "formulas": {}
    }
  },
  "state": "SUCCESS",
  "validConfiguration": true,
  "validAccount": true,
  "streamId": 25222,
  "transportType": "WEBFORM",
  "adc": true,
  "adcExternal": false,
  "adcSource": "DIRECT",
  "masked": false,
  "currentUserFullAccess": true,
  "cloudId": "domo",
  "cloudName": "Domo",
  "permissions": "READ_WRITE_DELETE_SHARE_ADMIN",
  "hidden": false,
  "scheduleActive": true,
  "cardCount": 3,
  "cloudEngine": "domo"
}
```

## Append Row to DataSet

**Method**: `POST`  
**Endpoint**: `/api/data/v3/datasources/:datasetId/uploads`

### Description

This endpoint appends a row of values to a specified DataSet.

### Parameters

| Property Name | Type   | Required | Description                                                       |
| ------------- | ------ | -------- | ----------------------------------------------------------------- |
| datasetId     | String | Yes      | The ID of the DataSet to which values will be appended.           |
| values        | String | Yes      | A comma-delimited text string of values to append to the dataset. |
| delimiter     | String | No       | The delimiter used to split the values (default is comma).        |

### Example Request

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/data/v3/datasources/{datasetId}/uploads",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    "action": "APPEND",
    "message": "Uploading",
    "appendId": "latest"
  }
}
```

### Response

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Request Multipart Upload API

**Method**: `POST`
**Endpoint**: `/api/data/v3/datasources/:datasetId/uploads`

### Description

Initiates a multipart upload session for uploading data to a Domo DataSet. This endpoint supports various upload modes including data replacement, appending, upserting, and row deletion. After initialization, users upload individual parts using the upload part endpoint path convention.

### Parameters

**Path Parameters**

| Property Name | Type          | Required | Description                                            |
| ------------- | ------------- | -------- | ------------------------------------------------------ |
| dataSourceId  | String (UUID) | Yes      | The unique identifier of the DataSet to upload data to |

**Query Parameters**

| Property Name  | Type    | Required | Default | Description                                                   |
| -------------- | ------- | -------- | ------- | ------------------------------------------------------------- |
| dataTag        | String  | No       | -       | Optional tag to associate with the uploaded data for tracking |
| restateDataTag | String  | No       | -       | Optional tag used for data restatement operations             |
| includeHistory | Boolean | No       | true    | Whether to include historical data in the upload process      |

**Request Body**

Optional JSON object with the following properties:

| Property Name | Type   | Required | Description                                                  |
| ------------- | ------ | -------- | ------------------------------------------------------------ |
| appendId      | String | No       | Upload mode: "replace", "append", "upsert", or "delete"      |
| executionId   | Number | No       | Existing execution ID to continue, or omit for new execution |

### Delete Mode Usage

When `appendId` is set to "delete", this endpoint initiates a row deletion process:

#### How Delete Mode Works

1. **Initialize**: Call this endpoint with `appendId: "delete"` to get an upload session ID
2. **Upload Parts**: Upload CSV file(s) containing primary keys using the upload part endpoint pattern
3. **Finalize**: Complete the multipart upload to execute the deletions

#### Step 1: Initialize Delete Upload

```bash
curl -X POST "https://api.domo.com/data/v3/datasources/12345678-1234-1234-1234-123456789012/uploads" \
  -H "X-Domo-Developer-Token: YOUR_DEVELOPER_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "appendId": "delete"
  }'
```

#### Step 2: Upload CSV Parts with Primary Keys

After receiving the upload response, upload individual parts using this endpoint pattern. Use the `uploadId` from the response to upload your CSV data as parts:

`PUT /data/v3/datasources/{dataSourceId}/uploads/{uploadId}/parts/{partId}`

- `partId` can be any positive integer (1, 2, 3, etc.)
- Parts do not need to be uploaded sequentially, but sequential ordering is recommended for easier debugging
- Each part should contain CSV data with the appropriate headers
- Upload parts by sending the CSV data as the request body with `Content-Type: text/csv`

**Upload Part 1:**

```bash
curl -X PUT "https://api.domo.com/data/v3/datasources/12345678-1234-1234-1234-123456789012/uploads/12345/parts/1" \
  -H "X-Domo-Developer-Token: YOUR_DEVELOPER_TOKEN" \
  -H "Content-Type: text/csv" \
  --data-binary @rows-to-delete-part1.csv
```

**Upload Part 2 (if needed):**

```bash
curl -X PUT "https://api.domo.com/data/v3/datasources/12345678-1234-1234-1234-123456789012/uploads/12345/parts/2" \
  -H "X-Domo-Developer-Token: YOUR_DEVELOPER_TOKEN" \
  -H "Content-Type: text/csv" \
  --data-binary @rows-to-delete-part2.csv
```

**Note**: You can upload as many parts as needed. Part IDs don't need to be sequential (you could use 1, 5, 10, etc.) but sequential numbering is recommended for easier debugging.

#### Step 3: Finalize Upload

```bash
curl -X PUT "https://api.domo.com/data/v3/datasources/12345678-1234-1234-1234-123456789012/uploads/12345/commit" \
  -H "X-Domo-Developer-Token: YOUR_DEVELOPER_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Deleted inactive user records"
  }'
```

### CSV Format for Deletions

The uploaded CSV file must contain only the primary key columns of the rows you want to delete:

#### Example: Single Primary Key

If your DataSet's primary key is `user_id`:

```csv
user_id
12345
67890
54321
```

#### Example: Composite Primary Key

If your DataSet has composite primary keys `region` and `product_id`:

```csv
region,product_id
US,ABC123
EU,DEF456
APAC,GHI789
```

### Important Notes for Delete Mode

- CSV must contain only primary key columns - do not include other data columns
- Header row is optional - column names must match the primary key field names exactly, if not provided columns must match the order provided in the current DataSet schema
- Case sensitive - column names are case-sensitive and must match your DataSet schema
- All primary key parts required - for composite keys, all key columns must be present
- Rows not found are ignored - if a primary key doesn't exist, it's silently skipped

### Response

Returns a DataSourceUploadResponse object:

```json
{
  "uploadId": 12345,
  "dataSourceId": 67890,
  "requestedAsOf": "YYYY-mm-dd HH:mm:ss.SSS"
}
```

| Property Name | Type      | Description                                                                             |
| ------------- | --------- | --------------------------------------------------------------------------------------- |
| uploadId      | Number    | Unique identifier for this upload session - use this in subsequent part upload requests |
| dataSourceId  | Number    | Data source identifier for this upload                                                  |
| requestedAsOf | Timestamp | Timestamp when the upload was initiated                                                 |

## Stream (Connector) - Create

**Method**: `POST`  
**Endpoint**: `/api/data/v1/streams`

**Description**:  
Creates a new data stream using a connector and specifies configuration details.

**Parameters**:

| Property Name        | Type   | Required | Description                                              |
| -------------------- | ------ | -------- | -------------------------------------------------------- |
| transport            | Object | Yes      | Connector transport details, including type and version. |
| configuration        | Array  | Yes      | List of key-value pairs defining stream configurations.  |
| account              | Object | Yes      | Account information (e.g., ID).                          |
| updateMethod         | String | Yes      | Update method, e.g., `APPEND`.                           |
| dataProvider         | Object | Yes      | Data provider details, including key.                    |
| dataSource           | Object | Yes      | DataSet details, including name and description.         |
| advancedScheduleJson | String | No       | Schedule details in JSON format.                         |

**Example Request**:

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

## Stream (Connector) - Get

**Method**: `GET`  
**Endpoint**: `/api/data/v1/streams/{stream_id}`

**Description**:  
Retrieves configuration details for a specific data stream.

**Parameters**:

| Property Name | Type   | Required | Description                      |
| ------------- | ------ | -------- | -------------------------------- |
| stream_id     | String | Yes      | Unique identifier of the stream. |

**Example Request**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v1/streams/{stream_id}",
  "headers": {}
}
```

**Example Response**:

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

**Parameters**:

| Property Name        | Type   | Required | Description                                                  |
| -------------------- | ------ | -------- | ------------------------------------------------------------ |
| stream_id            | String | Yes      | Unique identifier of the stream.                             |
| transport            | Object | Yes      | Connector transport details, including type and description. |
| configuration        | Array  | Yes      | List of key-value pairs defining updated configurations.     |
| account              | Object | Yes      | Account information (e.g., ID).                              |
| updateMethod         | String | Yes      | Update method, e.g., `APPEND`.                               |
| dataProvider         | Object | Yes      | Data provider details, including key.                        |
| dataSource           | Object | Yes      | DataSet details, including name and description.             |
| advancedScheduleJson | String | No       | Schedule details in JSON format.                             |

**Example Request**:

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

## Stream Execution History

**Method**: `GET`  
**Endpoint**: `/api/data/v1/streams/{stream_id}/history/aggregate`

**Description**:  
Retrieves the execution history for a specific data stream, including details about completed operations, errors, and performance metrics.

**Parameters**:

| Property Name | Type   | Required | Description                      |
| ------------- | ------ | -------- | -------------------------------- |
| stream_id     | String | Yes      | Unique identifier of the stream. |

**Example Request**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v1/streams/{stream_id}/history/aggregate",
  "headers": {}
}
```

**Example Response**:

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

## Execute DataSet Stream

**Method**: `POST`  
**Endpoint**: `/api/data/v1/streams/:streamId/executions`

### Description

This endpoint queries a DataSet's stream ID and executes the DataSet stream.

### Parameters

| Property Name | Type   | Required | Description                                                         |
| ------------- | ------ | -------- | ------------------------------------------------------------------- |
| streamId      | String | Yes      | The ID of the DataSet stream to execute.                            |
| action        | String | Yes      | The action to execute on the. "Manual", for example DataSet stream. |

### Example Request:

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

### Response

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Create DataSet Tag

**Method**: `POST`  
**Endpoint**: `/api/data/ui/v3/datasources/:datasetId/tags`

### Description

This endpoint creates a tag for the specified DataSet.

### Parameters

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| datasetId     | String | Yes      | The ID of the DataSet to tag.     |
| tag           | String | Yes      | The tag to assign to the DataSet. |

### Example Request

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

### Response

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Share DataSet with Access permissions

**Method**: `POST`  
**Endpoint**: `/api/data/v3/datasources/:datasetId/share`

### Description

This endpoint shares a DataSet and grants access permissions to specified users.

### Parameters

| Property Name | Type    | Required | Description                                                                                     |
| ------------- | ------- | -------- | ----------------------------------------------------------------------------------------------- |
| datasetId     | String  | Yes      | The ID of the DataSet to share.                                                                 |
| permissions   | Array   | Yes      | A list of owners to add to the DataSet. Each owner is an object with id, type, and accessLevel. |
| sendEmail     | Boolean | Yes      | A flag indicating whether to send an email.                                                     |

### Example Request

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

### Response

```json
{
  "HTTP/1.1": "200 OK",
  "Content-Type": "application/json",
  "body": {}
}
```

## Remove User From DataSet

**Method**: `DELETE`  
**Endpoint**: `/api/data/v3/datasources/:datasetId/USERS/:userId`

### Description

This endpoint removes a user from a DataSet's permissions.

### Parameters

| Property Name | Type   | Required | Description                                                  |
| ------------- | ------ | -------- | ------------------------------------------------------------ |
| datasetId     | String | Yes      | The ID of the DataSet from which the user will be removed.   |
| userId        | String | Yes      | The ID of the user to remove from the DataSet's permissions. |

### Example Request

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

### Response

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

## Remove Multiple Users from DataSet

**Method**: `DELETE`  
**Endpoint**: `/api/data/v3/datasources/:datasetId/users`

### Description

This endpoint removes multiple people from a DataSet's permissions.

### Parameters

| Property Name | Type   | Required | Description                                                           |
| ------------- | ------ | -------- | --------------------------------------------------------------------- |
| datasetId     | String | Yes      | The ID of the DataSet from which the people will be removed.          |
| body          | Array  | Yes      | An array of user objects, each containing `id` and `type` properties. |

### Example Request

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

### Response

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

**Parameters**:

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request**:

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

### Stage 2 - Upload CSV

**Method**: `PUT`  
**Endpoint**: `/api/data/v3/datasources/:dataset_id/uploads/:upload_id/parts/:part`

**Description**:  
Uploads the CSV file data. The DataSet is divided into parts for uploading multiple streams simultaneously.

**Parameters**:

| Property Name | Type   | Required | Description                            |
| ------------- | ------ | -------- | -------------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset.      |
| upload_id     | String | Yes      | Upload ID generated in Stage 1.        |
| part          | Number | Yes      | Indicates the part number of the data. |

**Example Request**:

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

### Stage 3 - Commit and Index

**Method**: `PUT`  
**Endpoint**: `/api/data/v3/datasources/:dataset_id/uploads/:upload_id/commit`

**Description**:  
Finalizes the data upload by committing the uploaded parts and indexing the dataset.

**Parameters**:

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |
| upload_id     | String | Yes      | Upload ID generated in Stage 1.   |

**Body Parameters**:

| Property Name | Type    | Required | Description                               |
| ------------- | ------- | -------- | ----------------------------------------- |
| action        | String  | Yes      | Accepts `APPEND` or `REPLACE`.            |
| index         | Boolean | Yes      | Indicates if indexing should be executed. |

**Example Request**:

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

**Parameters**:

| Property Name  | Type   | Required | Description                                                         |
| -------------- | ------ | -------- | ------------------------------------------------------------------- |
| dataset_id     | String | Yes      | Unique identifier of the dataset.                                   |
| restateDataTag | String | No       | Specifies a partition for UPDATE/REPLACE actions. Defaults to None. |

**Example Request**:

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

**Parameters**:

| Property Name     | Type   | Required | Description                               |
| ----------------- | ------ | -------- | ----------------------------------------- |
| dataset_id        | String | Yes      | Unique identifier of the dataset.         |
| dataset_upload_id | String | Yes      | Upload ID generated in Stage 1.           |
| part              | Number | Yes      | Indicates the part number being uploaded. |

**Example Request**:

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

**Description**:  
Finalizes the data upload by committing all parts and optionally indexing the DataSet for query access.

**Parameters**:

| Property Name     | Type    | Required | Description                                                           |
| ----------------- | ------- | -------- | --------------------------------------------------------------------- |
| dataset_id        | String  | Yes      | Unique identifier of the dataset.                                     |
| dataset_upload_id | String  | Yes      | Upload ID generated in Stage 1.                                       |
| action            | String  | Yes      | Acceptable values: `APPEND`, `REPLACE`. Determines the update method. |
| restateDataTag    | String  | No       | Specifies a partition tag for updating specific partitions.           |
| index             | Boolean | Yes      | Indicates whether the data should be indexed.                         |

**Example Request**:

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

**Parameters**:

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request**:

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

**Parameters**:

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request**:

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

**Parameters**:

| Property Name    | Type   | Required | Description                             |
| ---------------- | ------ | -------- | --------------------------------------- |
| dataset_id       | String | Yes      | Unique identifier of the dataset.       |
| paginationFields | Array  | No       | Defines sorting and filtering.          |
| limit            | Number | No       | Maximum number of results. Default: 100 |
| offset           | Number | No       | Number of results to skip. Default: 0   |

**Example Request**:

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

**Parameters**:

| Property Name | Type   | Required | Description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset.       |
| engine        | String | No       | Defaults to `MAGIC`.                    |
| limit         | Number | No       | Maximum number of results. Default: 500 |
| offset        | Number | No       | Number of results to skip. Default: 0   |

**Example Request**:

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

**Parameters**:

| Property Name        | Type   | Required | Description                                    |
| -------------------- | ------ | -------- | ---------------------------------------------- |
| dataset_id           | String | Yes      | Unique identifier of the dataset.              |
| dataset_partition_id | String | Yes      | Identifier of the DataSet partition to delete. |

**Example Request**:

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

**Parameters**:

| Property Name        | Type   | Required | Description                                    |
| -------------------- | ------ | -------- | ---------------------------------------------- |
| dataset_id           | String | Yes      | Unique identifier of the dataset.              |
| dataset_partition_id | String | Yes      | Identifier of the DataSet partition to remove. |

**Example Request**:

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

## Create DataSet Copy

**Method**: `POST`  
**Endpoint**: `/api/data/v2/datasources`

**Description**:  
Creates a new DataSet by copying an existing schema and providing user-defined metadata.

**Parameters**:

| Property Name   | Type   | Required | Description                                                   |
| --------------- | ------ | -------- | ------------------------------------------------------------- |
| userDefinedType | String | Yes      | Specifies the type of the dataset. Default: `api`.            |
| dataSourceName  | String | Yes      | Name of the new dataset.                                      |
| schema          | Object | Yes      | Defines the DataSet schema, including column types and names. |

**Example Request**:

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

## Get DataSet Schema

**Method**: `GET`  
**Endpoint**: `/api/query/v1/datasources/{dataset_id}/schema/indexed?includeHidden=false`

**Description**:  
Retrieves the schema of a dataset, including details about columns, their types, and metadata.

**Parameters**:

| Property Name | Type    | Required | Description                                                      |
| ------------- | ------- | -------- | ---------------------------------------------------------------- |
| dataset_id    | String  | Yes      | Unique identifier of the dataset.                                |
| includeHidden | Boolean | No       | Specifies whether hidden columns are included. Default: `false`. |

**Example Request**:

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

## Alter DataSet Schema

**Method**: `POST`  
**Endpoint**: `/api/data/v2/datasources/{dataset_id}/schemas`

**Description**:  
Modifies the schema of an existing DataSet by adding or altering columns.

**Parameters**:

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |
| schema        | Object | Yes      | Updated schema definition.        |

**Example Request**:

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

## Get Cards for a DataSet ID

**Method**: `GET`  
**Endpoint**: `/api/content/v1/datasources/{dataset_id}/cards?drill=true`

**Description**:  
Retrieves a list of cards associated with a dataset. Includes drill paths for cards if `drill` is set to `true`.

**Parameters**:

| Property Name | Type    | Required | Description                                      |
| ------------- | ------- | -------- | ------------------------------------------------ |
| dataset_id    | String  | Yes      | Unique identifier of the dataset.                |
| drill         | Boolean | No       | Whether to include drill paths. Default: `true`. |

**Example Request**:

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
        "displayName": "Bryan Van Kampen"
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
        "displayName": "Jae Wilson"
      }
    ],
    "access": true,
    "datasourceId": "61c4e63d-0627-41f7-b138-74968ebd7634"
  }
]
```

## Index DataSet

**Method**: `POST`  
**Endpoint**: `/api/query/v1/datasources/{dataset_id}`

**Description**:  
Indexes a DataSet to make it available for querying. This process is required after schema changes or data updates.

**Parameters**:

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request**:

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/query/v1/datasources/{dataset_id}",
  "headers": {}
}
```

## Index Data Versions

**Method**: `POST`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/indexes`

**Description**:  
Indexes data versions for a DataSet to make them queryable. If no `dataIds` are provided, all complete and unindexed versions are indexed.

**Parameters**:

| Property Name | Type   | Required | Description                        |
| ------------- | ------ | -------- | ---------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset.  |
| dataIds       | Array  | No       | List of data version IDs to index. |

**Example Request**:

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

## Index DataSet Progress

**Method**: `GET`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/indexes/{index_id}/statuses`

**Description**:  
Retrieves the status of a DataSet indexing operation for the specified index ID.

**Parameters**:

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |
| index_id      | String | Yes      | Unique identifier of the index.   |

**Example Request**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/indexes/{index_id}/statuses",
  "headers": {}
}
```

## DataSet Access List

**Method**: `GET`  
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/permissions`

**Description**:  
Retrieves a list of users and groups with access to the dataset, along with their permissions.

**Parameters**:

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| dataset_id    | String | Yes      | Unique identifier of the dataset. |

**Example Request**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/permissions",
  "headers": {}
}
```

**Example Response**:

```json
{
  "list": [
    {
      "type": "USER",
      "id": "966365811",
      "accessLevel": "OWNER",
      "name": "Scott Thompson"
    }
  ],
  "totalUserCount": 1,
  "totalGroupCount": 0
}
```

````

## Change DataSet Properties

**Method**: `PUT`
**Endpoint**: `/api/data/v3/datasources/{dataset_id}/properties`

**Description**:
Updates the properties of a dataset, such as the data provider type.

**Parameters**:

| Property Name    | Type   | Required | Description                       |
| ---------------- | ------ | -------- | --------------------------------- |
| dataset_id       | String | Yes      | Unique identifier of the dataset. |
| dataProviderType | String | Yes      | The type of the data provider.    |

**Example Request**:

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/data/v3/datasources/{dataset_id}/properties",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "dataProviderType": "domo-jupyterdata"
  }
}
````
