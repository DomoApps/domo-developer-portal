# Local Development with Domo CLI

## Intro

---

This comprehensive tutorial will guide you through setting up and optimizing your local development environment using the Domo CLI. You'll learn how to create, develop, debug, and deploy Domo apps efficiently with modern development workflows.

### What you'll learn

- Setting up a professional local development environment
- Using the Domo Apps CLI to create a new app
- Configuring data proxies for consuming live Domo data
- Domo version control basics
- Using `domo dev` for live development with hot reload
- Publishing your app to Domo

## Prerequisites

---

Before starting this tutorial, ensure you have:

- **Node.js** installed (version 18 or higher) - This is required for running the Domo CLI and managing dependencies
- [Domo CLI installed](../Tools/domo-CLI.md#installation)
- A Domo instance with appropriate permissions
- A code editor (VS Code recommended)

## Step 1: Initial Setup and Authentication

---

### Install and Verify CLI

First, ensure you have the latest version of the Domo CLI:

```bash
# Check current version
domo --version

# Update to latest version (if using npm)
npm update -g @domoinc/domo-cli

# Or using Homebrew
brew upgrade domo-cli
```

### Authenticate to Your Instance

```bash
# Interactive login (recommended for first time)
domo login

# Or with specific instance
domo login -i your-instance.domo.com -u your-email@company.com

# Skip upgrade check during login (optional)
domo login --no-upgrade-check
```

**Pro Tip**: The CLI will remember your credentials and instances for future use.

## Step 2: Creating Your Development Project

---

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
├── manifest.json          # App configuration
├── index.html            # Main HTML file
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
    "width": 800,
    "height": 600
  },
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
  "id": "your-app-design-id",
  "proxyId": "your-remote-domo-card-id"
}
```

**Key manifest properties for local development:**

- `mapping`: Defines data connections
- `proxyId`: Enables API proxying for live data
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

## Step 3: Local Development Server

---

### Starting the Development Server

```bash
# Basic development server
domo dev

# With specific user context
domo dev -u specific-user@company.com

# Expose to external network (for testing on mobile devices)
domo dev -e

# Use specific manifest file (for advanced users)
domo dev -m manifest.dev.json
```

### Development Server Features

The `domo dev` command provides:

- **Live Reload**: Automatically refreshes when files change
- **App Sizing**: Renders in a frame matching your manifest dimensions
- **Data Proxy**: Routes API calls to your Domo instance
- **Live Reload**: Reloads when code changes are detected.

### Development Workflow

```bash
# 1. Start development server
domo dev

# 2. Open browser to http://localhost:8080
# 3. Make changes to your code
# 4. See changes instantly in browser
# 5. Test with real Domo data
```

## Step 4: Advanced Development Configuration (Optional)

---

### Environment-Specific Manifests

For advanced users, you can create different manifest configurations:

```bash
# Create development manifest
cp manifest.json manifest.dev.json

# Use development manifest
domo dev -m manifest.dev.json
```

### Data Proxy Configuration (Advanced)

For advanced API access, you can configure a proxy ID in your manifest:

```json
{
  "proxyId": "your-proxy-id-here"
}
```

**Note**: This is only needed for advanced features like AppDB, Files, Code Engine, and Workflows APIs.

## Step 5: Basic Debugging

---

### Browser Developer Tools

Open your browser's developer tools (F12) to debug your app:

```javascript
// Check if your data is loading
domo.datasets.get('myData').then((data) => {
  console.log('Dataset loaded:', data);
});
```

### Common Issues

**Data not loading?** Check your manifest.json mapping section.

**App not updating?** Make sure you saved your files and the dev server is running.

## Step 6: Publishing Your App

---

### Publishing Your App

```bash
# Publish to Domo
domo publish

# Publish and open in Asset Library
domo publish -g
```

### Important: Version Management

⚠️ **Critical**: When you publish your app, Domo will update the existing version. If you want to keep previous versions, you must increment the version number in your `manifest.json` before publishing.

```json
{
  "version": "1.0.1",
  "name": "My App v1.0.1"
}
```

**What happens:**

- If you publish with the same version number → **Previous version is overwritten**
- If you increment the version number → **Previous version is preserved**

## Step 7: Testing Your App

---

### Basic Testing

Before publishing, make sure your app works:

- [ ] App loads without errors
- [ ] Data connections work correctly
- [ ] UI looks good and functions properly

### Testing with Different Users

```bash
# Test with different user permissions
domo dev -u admin@company.com
domo dev -u user@company.com
```

## Conclusion

---

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
