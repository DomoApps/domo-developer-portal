# Embedded Scheduled Reports

## Overview

This guide explains how to utilize the new scheduled reports system, which delivers report data securely to your custom webhook endpoint. The system uses HMAC with SHA256 to encrypt data during transmission, ensuring confidentiality and integrity.

## How It Works

1. You configure a scheduled report and provide a webhook endpoint.
2. When the report is triggered, the data is encrypted using HMAC-SHA256.
3. The encrypted payload is sent to your webhook.
4. You verify and decrypt the payload using your private key.

**Encryption Details:**

- The first 16 bytes of the encrypted data are the Salt.
- Bytes 17-32 are the unique report id.
- The remainder is the encrypted report data.

## Prerequisites

- A private key for HMAC verification.
- A user-defined webhook endpoint that can receive POST requests.

## Step-by-Step Setup

### 1. Generate a Private Key

You will need a secure private key to verify and decrypt incoming scheduled report payloads. This key is generated and managed through the Domo Everywhere Settings page in the DomoWeb UI.

1. Navigate to **Domo Everywhere > Settings** in your Domo instance.
2. Under **Allow Scheduled Reports in embedded Dashboards**, enter your recipient authentication callback URL.
3. Click **Generate Secret** next to the Authentication secret field. This will create a new private key for your scheduled reports integration.
4. Copy and store this secret securely. Do not share it publicly.

![Domo Everywhere Settings - Generate Secret](../../assets/images/domo-everywhere-generate-secret.png)

### 2. Register Your Webhook Endpoint

Provide your webhook URL in the scheduled reports configuration page. Your endpoint must accept POST requests and be accessible from the internet.

### 3. Configure Scheduled Reports

In the platform, set up your scheduled report and select your webhook as the delivery method. Save your configuration.

### 4. Signature Verification & Decryption

When your webhook receives a report, the payload will be encrypted and signed. You must verify the HMAC signature and decrypt the data using your private key. (See the next section for details.)

## Webhook Payload Example

When your webhook receives a scheduled report, the POST request will contain an encrypted payload and a signature header. Here is an example:

### Example Request

**Headers:**

```
Content-Type: application/octet-stream
X-Report-Signature: 4f2c1e... (hex-encoded HMAC-SHA256 signature)
```

**Body:**

The body is a binary payload structured as follows:

- Bytes 1-16: Salt (random value for encryption)
- Bytes 17-32: Report ID (unique identifier)
- Bytes 33-end: Encrypted report data

### Example Verification and Decryption (Python)

```python
import hmac
import hashlib

def verify_signature(payload: bytes, signature: str, key: bytes) -> bool:
    computed = hmac.new(key, payload, hashlib.sha256).hexdigest()
    return hmac.compare_digest(computed, signature)

# Example usage:
# payload = ... (raw POST body)
# signature = ... (from X-Report-Signature header)
# key = ... (your 32-byte private key)
# if verify_signature(payload, signature, key):
#     # Proceed to decrypt payload
# else:
#     # Reject request
```

Decryption of the report data depends on your platform's encryption implementation. After verifying the signature, extract the salt and report id, then decrypt the remaining bytes using your key and the salt.

> **Note:** Always verify the signature before attempting to decrypt the payload.

## Next Steps

Continue with setup instructions, payload examples, and signature verification steps as needed.
