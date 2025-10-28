
## Action Types
### All action types
#### Properties
These properties are used by all action types.
##### name
The name of the action that will be displayed in the UI.
##### id
The id of the action. The id must be unique within the dataflow definition, but is not expected to be unique among the actions of other dataflow definitions.
##### dependsOn
The ids of all actions whose output will be consumed by the current action while producing its output rows.

### Output DataSet
#### Properties
##### name
The name of the action that will be displayed in the UI.
##### id
The id of the action. The id must be unique within the dataflow definition, but is not expected to be unique among the actions of other dataflow definitions.
##### dependsOn
In the case of an Output DataSet action, this list will contain the id of the single action that produces the rows that are published by this action.
##### type
Use the value 'PublishToVault' to specify an Output DataSet action.
##### dataSource
- name: the initial name of the output data source
- description: a description of the output data source
- guid: the internal id of the output data source
##### versionChainType
REPLACE | APPEND | UPSERT
This describes the update method. More details can be found [here](https://domo-support.domo.com/s/article/000005541)
To specify partitioned output, choose APPEND and specify the partition key column in the partitionIdColumns property
##### upsertColumns
No upsertColumns should be supplied unless versionChainType is UPSERT.
##### partitionIdColumns
An array of column names that constitute the partition key. No more than one partition id column is supported.
No non-null value should be used for partitionIdColumns unless versionChainType = APPEND.
##### retainPartitionExpression
An expression that defines which partitions will be retained by domo and which will not be created (and which will be deleted if they exist).
Any partition key that produces a true result from this expression will be maintained by domo. Other partitions will be deleted.
This expression applies to all partitions that have been created in the past, as well as those that are included in the current execution.
No non-null value should be used for retainPartitionExpression unless versionChainType = APPEND and partitionIdColumns contains a single column name.
