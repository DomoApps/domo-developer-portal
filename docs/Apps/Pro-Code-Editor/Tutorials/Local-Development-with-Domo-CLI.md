# Local Development with Domo CLI

## Intro

This comprehensive tutorial will guide you through setting up and optimizing your local development environment using the Domo CLI. You'll learn how to create, develop, debug, and deploy Domo apps efficiently with modern development workflows.

### What you'll learn

- Setting up a professional local development environment
- Using the Domo Apps CLI to create a new app
- Configuring data proxies for consuming live Domo data
- Domo version control basics
- Using `domo dev` for live development with hot reload
- Publishing your app to Domo

## Prerequisites

Before starting this tutorial, ensure you have:

- **Node.js** installed (version 18 or higher) - This is required for running the Domo CLI and managing dependencies
- [Domo CLI installed](../../App-Framework/Tools/domo-CLI.md#installation)
- A Domo instance with appropriate permissions
- A code editor (VS Code recommended)

## Step 1: Initial Setup and Authentication

### Install and Verify CLI

First, ensure you have the latest version of the Domo CLI:

```bash
# Check current version
domo --version

# Update to latest version (if using npm)
npm update -g ryuu

```

If you haven't installed the Domo CLI yet, you can install it by following the [Setup and Installation Guide](../../App-Framework/Tools/domo-CLI.md#installation).

### Authenticate to Your Instance

```bash
# Interactive login
domo login

# Or with specific instance
domo login -i your-instance.domo.com -u your-email@company.com

# Or with a developer access token
domo token -i your-instance.domo.com -t your-developer-access-token*
domo login -i your-instance.domo.com
```

\*Developer Access Tokens (Developer Tokens) are secure API keys assigned to a specific user in your Domo instance. You can get more information and obtain a developer access token by following the [Access Token Guide](https://domo-support.domo.com/s/article/360042934494?language=en_US).

## Step 2: Creating Your Development Project

### Initialize a New App

```bash
# Create a new app with the hello world template
domo init my-awesome-app

# Navigate to your project
cd my-awesome-app
```

### Project Structure

Your new project will have this structure:

```text
my-awesome-app/
├── manifest.json        # App configuration
├── index.html           # Main HTML file
├── app.js               # Main JavaScript
├── app.css              # Styles
├── domo.js              # Domo SDK
└── assets/              # Static assets
```

### Understanding the Manifest

The `manifest.json` is crucial for local development:

```json
{
  "name": "My Awesome App",
  "version": "1.0.0",
  "size": {
    "width": 1,
    "height": 1
  },
  "fullpage": false,
  "mapping": [
    {
      "dataSetId": "your-dataset-id",
      "alias": "myData",
      "fields": [
        {
          "columnName": "sales",
          "alias": "revenue"
        }
      ]
    }
  ],
  "collections": [],
  "id": "your-app-design-id",
  "proxyId": "your-remote-domo-card-id"
}
```

**Key manifest properties for local development:**

- `id`: The ID of your app design in Domo
  - This is automatically added to your manifest when you publish your app design
  - This is used to link your app design to the published app design for future publishing
  - This is used to identify your app design in the Domo API
- `proxyId`: Enables API proxying for live data
- `mapping`: Defines data connections
- `size`: Sets app dimensions within Domo

### Adding a Thumbnail

📸 **Required**: You must add a thumbnail image to your app design before you can create cards from it.

**How to add a thumbnail:**

1. **Create or find an image** (PNG) - it must be named `thumbnail.png` and it must be 300x300 pixels
2. **Add it to your project folder** (e.g., `thumbnail.png`)

**Need a quick thumbnail?** You can use this [sample thumbnail](../../../../assets/images/thumbnail-procode.png) as a starting point.

**Thumbnail requirements:**

- **Format**: PNG
- **Size**: 300x300 pixels
- **Naming**: Must be exactly `thumbnail.png`

## Step 3: Running a Local Development Server

### Development Server Features

The `domo dev` command provides:

- **Live Reload**: Automatically refreshes when files change
- **App Sizing**: Renders in a frame matching your manifest dimensions
- **Data Proxy**: Routes API calls to your proxy card in Domo instance using [ryuu-proxy](https://www.npmjs.com/package/@domoinc/ryuu-proxy)

### Development Workflow

```bash
# 1. Start development server
domo dev

# 2. Open browser to http://localhost:3000
# 3. Make changes to your code
# 4. See changes instantly in browser
# 5. Test with real Domo data
```

### Data Proxy Configuration (Advanced)

For querying data from Domo, we can configure the manifest to use a proxy card in Domo instance. This is done by adding the `proxyId` to the manifest. See instructions in the [manifest](../../App-Framework/Guides/manifest.md#getting-a-proxyid-advanced) guide.

## Step 4: Publishing Your App Design

### Publishing Your App

```bash
# Publish to Domo
domo publish

```

### Important: Version Management

⚠️ **Critical**: When you publish your app, Domo will update the existing version if it already exists. If you want to keep previous versions, you **_must_** increment the version number in your `manifest.json` **_(not the package.json)_** before publishing.

```json
{
  "version": "1.0.1",
  "name": "My Awesome App"
}
```

**What happens:**

- If you publish with the same version number → **Previous version is overwritten**
- If you increment the version number → **Previous version is preserved for rolling back**

## Step 5: Testing Your App

### Basic Testing

Before publishing, make sure your app works:

- [ ] App loads without errors
- [ ] Data connections work correctly
- [ ] UI looks good and functions properly

## Conclusion

Congratulations! You've learned the essential workflow for local development with the Domo CLI:

✅ **Setup**: Install Node.js and Domo CLI  
✅ **Login**: Authenticate to your Domo instance  
✅ **Create**: Initialize a new app with `domo init`  
✅ **Develop**: Use `domo dev` for live development  
✅ **Publish**: Deploy your app with `domo publish`

### Next Steps

- Explore the [Domo Apps CLI documentation](../Tools/domo-CLI.md) for more advanced features
- Check out other [tutorials](./Overview.md) for specific app types
- Join the [Domo Developer Community](https://developer.domo.com/community)

---

**Happy coding!** 🚀
