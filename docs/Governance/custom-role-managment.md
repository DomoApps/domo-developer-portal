# Custom Role Management

## Overview

Custom Role management API is a fast and convenient way for administrators to create custom roles and manage authorization to provision users with the right level of access to their domo instance.

### User use cases
---
Domo Custom Role Management API is used to enable the following experiences:

- **Custom Role Creation:** Custom roles allow you to elevate and provision users to a specific level of access in Domo beyond the current built-in roles (Admin, Privileged, Editor, Participant, and Social)..
- **Role Grant Selection:** Manage the privileges assigned to each new role.
- **SSO Synchronization:** Use SSO to automatically assign people to appropriate roles through a SAML assertion at each login.
For additional help refer to the following guides and articles:

 - [Managing Custom Roles](https://domo-support.domo.com/s/article/360043438973)
 - [Assigning a Security Role to a User](https://domo-support.domo.com/s/article/360042934354)
 - [Default Security Role Reference](https://domo-support.domo.com/s/article/360043438953)


## Quickstart

In this guide we will show you how to:
- Create a Custom Role
- Getting a list of Your Custom Roles
- Getting a list of Grants
- Update a Custom Role's Grants
- Update a Custom Role's MetaData
- Delete a Custome Role

Once a custom role is created, you can then make updates to the u's information displayed in the Domo application as well as the user's role which grants permission to functionality throughout each Domo feature.

<!-- theme: info -->

> #### Note
> In order to follow this Quickstart you will need to obtain an [access token](../API-Reference/Embed-APIs/Embed-Token-API.yaml#quickstart) or you can leverage any of [Domo's SDKs](../Getting-Started/sdks.md) which will also handle authentication.

### Step 1: Create a user
---

#### Sample Request

See this sample request in [Java](https://github.com/domoinc/domo-java-sdk/tree/master/domo-java-sdk-all/src/test/java/com/domo/sdk/users/CreateExample.java), [Python](https://github.com/domoinc/domo-python-sdk/blob/master/examples/user.py).

 ```HTTP
POST /v1/users?sendInvite=true HTTP/1.1
Content-Type: application/json
Accept: application/json
Host: api.domo.com
Content-Length: 90
Authorization: bearer <your-valid-oauth-access-token>

{
"title": "Software Engineer",
"email": "leonhard.euler@domo.com",
"alternateEmail": "leonhardeuler@email.com",
"role": "Admin",
"phone": "888-555-0123",
"name": "Leonhard Euler",
"location": "American Fork",
"timezone": "",
"locale": "",
"employeeNumber": 23432
}
```

Make sure to store the `user_id` value with the user's name in order to make updates to user information, the user's role in Domo, or adding access rights to data within a DataSet or content found in a Domo Page or Card.

### Step 2: Update a user's information
---
With a new `user_id`, update the user's information:

#### Sample Request

See this sample request in [Java](https://github.com/domoinc/domo-java-sdk/tree/master/domo-java-sdk-all/src/test/java/com/domo/sdk/users/UpdateExample.java), [Python](https://github.com/domoinc/domo-python-sdk/blob/master/examples/user.py).

```HTTP
PUT /v1/users/855462682 HTTP/1.1
Content-Type: application/json
Accept: application/json
Host: api.domo.com
Content-Length: 41
Authorization: bearer <your-valid-oauth-access-token>

{
  "email": "leonhard.euler@domo.com",
  "role": "Admin",
  "name": "Leonhard Euler"
}
```

### Step 3: Delete a user from Domo
---
Similar to updating a user's information, provide the correct `user_id` when attempting to delete the user from Domo:

#### Sample Request

See this sample request in [Java](https://github.com/domoinc/domo-java-sdk/tree/master/domo-java-sdk-all/src/test/java/com/domo/sdk/users/DeleteExample.java), [Python](https://github.com/domoinc/domo-python-sdk/blob/master/examples/user.py).

```HTTP
DELETE /v1/users/855462682 HTTP/1.1
Accept: application/json
Host: api.domo.com
Authorization: bearer <your-valid-oauth-access-token>
```

