---
stoplight-id: 1sirxqzlsb4sk
---

# Domo Code Engine Documentation

## Introduction

Domo Code Engine is a Domo-native runtime environment that executes JavaScript or Python code. It allows you to write, test, and distribute functions for use in Workflows and other Domo Apps. Code Engine provides a library of general packages for common integrations and services, and you can also create custom functions for automated services in your instance.

![Picture1.jpg](../../../assets/images/Picture1.jpg)

To learn more about how to access, configure, and manage Code Engine packages, see the [Code Engine article in Domo's Knowledge Base](https://domo-support.domo.com/s/article/000005173?language=en_US#code_engine_repository_list).

---

## Common Code Engine Use Cases

- **Workflows**: Workflows contain a series of steps – many of which are code engine functions (either global functions that Domo has written and maintains across all instances or custom ones that you write).

- **Apps**: Historically, Domo has limited the number of APIs that you can hit from an App to a small number that have been configured to work with Domo’s App Framework. However, now you can connect apps to any API securely (internal and external) by wiring the App to trigger a Code Engine function. See our guide to [hitting Code Engine functions from a Domo App](../App-Framework/Guides/hitting-code-engine-from-an-app.md).

<!-- theme: info -->

> #### Pro-tip
>
> Domo has a global package to start a DataFlow. Jupyter Notebooks in Domo can be scheduled as DataFlows. This means that you can spin up and run a Jupyter job via Code Engine, which can be useful when you'd like to do heavier data processing.

---

## Global vs. Custom Packages

Domo provides a library of general packages and their related functions for common integrations and services that anyone with access to Code Engine can use. You can also create functions with custom code to perform automated services in your instance.

### Global packages

![Picture1.png](../../../assets/images/Picture1.png)

Domo maintains a wide range of packages across all Domo instances. These global packages generally fall into two distinct categories:

1. Taking common actions in Domo by leveraging the Product APIs
2. Utility functions for manipulating small amounts of data

### Custom packages

By creating custom packages you can write functions beyond what is covered in the global packages. Common use-cases for custom packages are:

- to hit Domo APIs not covered by a global package
- to hit non-Domo APIs to trigger events in external systems
- to reshape inputs and outputs a across steps in a Workflow

For custom packages, you will also likely leverage a few key Code Engine specific functions.

`codeengine.sendRequest` provides a wrapper around internal Domo APIs and inherits authentication from the user making the request. You can [see an example Javascript request here](#codeengine.sendRequest).

`codeengine.getAccount` securely reads in credentials stored in Domo's Account layer, which you can use in requests to external APIs. See a Javascript [example here](#codeengine.getAccount).

`codeengine.axios` provides access to the [Axios library](https://axios-http.com/docs/intro), which you can use to send requests to external APIs and handle authentication yourself. This can be beneficial when you want to run a function:

- using a service account
- to hit Domo APIs across Domo instances
- to hit external APIs

---

## Required Grants

To use Code Engine, users need specific grants:

- **Manage Code Engine Packages**: Perform any action on any Code Engine package (for admins/managers).
- **Create Code Engine Packages**: Create new Code Engine packages (for developers).

> **Note:** Contact your Domo account team to enable these grants. Users must also have permission to specific packages to interact with them.

---

## Accessing Code Engine

1. In the navigation header, select **More > Workflows** to open the Workflows landing page.
2. In the left navigation, select **Code Engine**.

The Code Engine home page displays a list of all available packages based on your permissions.

---

## Home Page & Repository List

The home page features a repository list of all Code Engine packages you can access. Each row represents a package with columns for:

- **Package Name/Description**
- **Owned By**
- **Runtime** (JavaScript or Python)
- **Last Saved**
- **Created**

Click a row to open the package in the code editor.

---

## Creating a Custom Package

1. Click **+ New Package** (ensure you have the required grants).
2. Fill in the required fields:
   - **Package Name**
   - **Package Description**
   - **Language** (JavaScript or Python)
3. (Optional) Upload a thumbnail.
4. Click **Create New Package** to open it in the code editor.

---

## Creating a New Package Version

To update a package (e.g., add or update a function):

1. Open the package in the code editor.
2. Click **Create New Version**.
3. Select a version to copy from.
4. Enter the new version number (Semantic Versioning).
5. (Optional) Add a version description.
6. Click **Create New Version**.

The new version becomes the default, but you can access earlier versions as needed.

---

## Code Editor Overview

The code editor is an integrated development environment (IDE) for writing code, configuring function inputs/outputs, and testing functions. A package can contain multiple functions, each configured in the editor.

### Package Information/Action Bar

- **Back arrow**: Return to home page
- **Package thumbnail**
- **Title/Description**
- **Last Saved**
- **Runtime/Language**
- **Owner thumbnail**
- **Share button**: Manage permissions
- **Dark Mode toggle**
- **Version list**
- **Save/Save options**: Save, create new version, delete, or deploy

---

## Permissions

Permissions are granted at the package level:

- **Admin**: Full control
- **Delete**: Delete package/version
- **Read**: View metadata and versions
- **Write**: Edit package
- **Share**: Grant access to others
- **Execute**: Run functions
- **Read Content**: View code content
- **Update Content**: Edit code and metadata

To grant permissions:

1. Click **Share** in the action bar.
2. Search for a user or group.
3. Select the desired permission.
4. Click **Save**.

---

## Side Navigation

The side navigation in the code editor has two sections:

- **Function Configuration**: Configure function description, inputs, and output.
- **Package Information**: View package metadata.

### Function Configuration

- **Select a function**: Choose from parsed functions.
- **Function description**: Brief summary.
- **Inputs tab**: Add input parameters (name and data type required).
- **Output tab**: Add an output parameter (optional, but recommended).
- **Rescan Functions**: Parse new/updated functions.

#### Input Variables and Return Type

Available data types:

- Account, Boolean, DataSet, Date, Datetime, Decimal, Duration, Group, Number, Object, Person, Text, Time

> **Note:** Defining data types is required for saving functions and for mapping in Workflows.

#### Advanced Editing for Parameters

- Access via the three-dot menu next to a parameter.
- Options: Change name/type, make a list, nullable, add/delete default value.

##### Account Data Type

- Choose a data provider when selecting Account type.
- Configure account-specific fields for function execution.

##### List & Object Types

- **List**: Define as an array of a type.
- **Object**: Can be open (any data) or defined (with child properties).

---

## Testing a Function

After coding and configuring parameters:

1. Click **Start Function** in the code editor.
2. Enter/modify variable values for the test run.
3. Click **Save and Start Function**.
4. View results in the Console and Response areas.

> **Tip:** Fix any parameter issues (e.g., missing types) before testing.

---

## Code Engine Library

The Code Engine library provides methods for internal and external API calls. Import it with `require("codeengine")`.

### codeengine.sendRequest

Make calls to internal Domo APIs. Example:

```js
const codeengine = require('codeengine');

function getDataSetMetadata(dataSetId) {
  const url = `api/data/v3/datasources/${dataSetId}?part=core,permission,status,pdp,rowcolcount,certification,functions`;
  return codeengine.sendRequest('get', url).catch(console.error);
}
```

### codeengine.getAccount

Retrieve account credentials for use in external API calls. Example:

```js
const codeengine = require('codeengine');

async function accountExample(twilioAccount) {
  const account = await codeengine.getAccount(twilioAccount.id);
  const { accountSID, password } = account.properties;
}
```

### codeengine.axios

Make external HTTP requests. Example:

```js
const codeengine = require('codeengine');

async function sendTwilioSms(to, from, body) {
  const account = await codeengine
    .getAccount('Twilio')
    .then((a) => a.properties);
  const url = `https://api.twilio.com/2010-04-01/Accounts/${account.SID}/Messages.json`;
  const data = new URLSearchParams();
  data.append('To', to);
  data.append('From', from);
  data.append('Body', body);
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization:
        'Basic ' +
        Buffer.from(`${account.SID}:${account.TOKEN}`).toString('base64'),
    },
    data,
  };
  try {
    const response = await codeengine.axios(url, requestOptions);
    const jsonResponse = await response.data;
    if (response.ok) {
      console.log('SMS sent successfully:', jsonResponse);
      return jsonResponse;
    } else {
      console.error('Error sending SMS:', jsonResponse);
      throw new Error(jsonResponse.message);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```

---

## Key Limitations

Code Engine unlocks a lot of flexibility to programatically interact with Domo and with external systems; however, it is not the right tool in all scripting scenarios.

Code Engine's key limitations are:

- **Compute**: Limited to 1 GB Memory and 5 min max runtime, which means they are not meant for heavy data processing.
- **Output**: Functions may only return a single output. More complex response types are typically handled by returning a single `object` type output
- **Dependencies**: There are a limited set of common libraries available in the JavaScript or Python environment.

Code Engine is ideal for simple, lightweight functions while Domo's Jupyter Workspace integration is ideal for more complex, heavier scripting tasks.

---

## Best Practices

- Always define input/output types for functions.
- Use semantic versioning for package updates.
- Test functions before deploying.
- Use permissions to control access at the package level.
- Leverage the Code Engine library for API integrations.

---

## Troubleshooting

If you're running into errors building or executing Code Engine, it's often worth checking one of the follow most common gotchas:

- Ensure that the user has the appropriate [permissions](https://domo-support.domo.com/s/article/000005173?language=en_US#permissions) and [grants](https://domo-support.domo.com/s/article/000005173?language=en_US#required_grants) enabled.
- Ensure correct typing of both inputs and outputs in the function. This can get trickier if you're using lists or objects. If you are using a native Domo type like `Account`, `Dataset`, `Group`, or `Person` - you can pass the id of the resource as a string to your function.
- If you are sending SQL into your function as a string, please note that it is case sensitive.
- When you're debugging functions in custom packages, you can use the `console.log` or `console.error` function to understand what is happening when you test your function.

---

## Additional Resources

- [Domo Developer Documentation](https://developer.domo.com/)
- [Domo Support](https://domo-support.domo.com/)

---

_Copyright © 2011 — 2025 Domo, Inc._
stoplight-id: 1sirxqzlsb4sk

---

# Introduction to Code Engine

Code Engine is a Domo-native runtime environment that can securely execute server-side JavaScript or Python code. In Code Engine, you can write, test, and distribute serverless lambda functions that can be consumed by Workflows, Domo Apps, and API.

![Picture1.jpg](../../../assets/images/Picture1.jpg)

To learn more about how to access, configure, and manage Code Engine packages, see the [Code Engine article in Domo's Knowledge Base](https://domo-support.domo.com/s/article/000005173?language=en_US#code_engine_repository_list).

## Common Code Engine Use Cases

- **Workflows**: Workflows contain a series of steps – many of which are code engine functions (either global functions that Domo has written and maintains across all instances or custom ones that you write).

- **Apps**: Historically, Domo has limited the number of APIs that you can hit from an App to a small number that have been configured to work with Domo’s App Framework. However, now you can connect apps to any API securely (internal and external) by wiring the App to trigger a Code Engine function. See our guide to [hitting Code Engine functions from a Domo App](../App-Framework/Guides/hitting-code-engine-from-an-app.md).

<!-- theme: info -->

> #### Pro-tip
>
> Domo has a global package to start a DataFlow. Jupyter Notebooks in Domo can be scheduled as DataFlows. This means that you can spin up and run a Jupyter job via Code Engine, which can be useful when you'd like to do heavier data processing.

## Global vs. Custom Packages

Domo provides a library of general packages and their related functions for common integrations and services that anyone with access to Code Engine can use. You can also create functions with custom code to perform automated services in your instance.

### Global packages

![Picture1.png](../../../assets/images/Picture1.png)

Domo maintains a wide range of packages across all Domo instances. These global packages generally fall into two distinct categories:

1. Taking common actions in Domo by leveraging the Product APIs
2. Utility functions for manipulating small amounts of data

### Custom packages

By creating custom packages you can write functions beyond what is covered in the global packages. Common use-cases for custom packages are:

- to hit Domo APIs not covered by a global package
- to hit non-Domo APIs to trigger events in external systems
- to reshape inputs and outputs a across steps in a Workflow

For custom packages, you will also likely leverage a few key Code Engine specific functions.

`codeengine.sendRequest` provides a wrapper around internal Domo APIs and inherits authentication from the user making the request. You can [see an example Javascript request here](https://domo-support.domo.com/s/article/000005173?language=en_US#code_engine_send_request).

`codeengine.getAccount` securely reads in credentials stored in Domo's Account layer, which you can use in requests to external APIs. See a Javascript [example here](https://domo-support.domo.com/s/article/000005173?language=en_US#codeengine.getAccount).

`codeengine.axios` provides access to the [Axios library](https://axios-http.com/docs/intro), which you can use to send requests to external APIs and handle authentication yourself. This can be beneficial when you want to run a function:

- using a service account
- to hit Domo APIs across Domo instances
- to hit external APIs

## Key Limitations

Code Engine unlocks a lot of flexibility to programatically interact with Domo and with external systems; however, it is not the right tool in all scripting scenarios.

Code Engine's key limitations are:

- **Compute**: Limited to 1 GB Memory and 5 min max runtime, which means they are not meant for heavy data processing.
- **Output**: Functions may only return a single output. More complex response types are typically handled by returning a single `object` type output
- **Dependencies**: There are a limited set of common libraries available in the JavaScript or Python environment.

Code Engine is ideal for simple, lightweight functions while Domo's Jupyter Workspace integration is ideal for more complex, heavier scripting tasks.

## Troubleshooting

If you're running into errors building or executing Code Engine, it's often worth checking one of the follow most common gotchas:

- Ensure that the user has the appropriate [permissions](https://domo-support.domo.com/s/article/000005173?language=en_US#permissions) and [grants](https://domo-support.domo.com/s/article/000005173?language=en_US#required_grants) enabled.
- Ensure correct typing of both inputs and outputs in the function. This can get trickier if you're using lists or objects. If you are using a native Domo type like `Account`, `Dataset`, `Group`, or `Person` - you can pass the id of the resource as a string to your function.
- If you are sending SQL into your function as a string, please note that it is case sensitive.
- When you're debugging functions in custom packages, you can use the `console.log` or `console.error` function to understand what is happening when you test your function.
