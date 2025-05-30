---
stoplight-id: 1sirxqzlsb4sk
---

# Domo Code Engine Documentation

## Introduction

Domo Code Engine is a Domo-native runtime environment that executes JavaScript or Python code. It allows you to write, test, and distribute functions for use in Workflows and other Domo Apps. Code Engine provides a library of general packages for common integrations and services, and you can also create custom functions for automated services in your instance.

![Picture1.jpg](../../../assets/images/Picture1.jpg)

To learn more about how to access, configure, and manage Code Engine packages, see the [Code Engine article in Domo's Knowledge Base](https://domo-support.domo.com/s/article/000005173?language=en_US#code_engine_repository_list).

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

## Additional Resources

- [Domo Developer Documentation](https://developer.domo.com/)
- [Domo Support](https://domo-support.domo.com/)
