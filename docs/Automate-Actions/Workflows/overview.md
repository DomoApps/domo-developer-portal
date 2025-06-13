# Domo Workflows

**Domo Workflows** empowers customers to design, implement, and execute automated processes using low-code tools. It enables business experts, process owners, and analysts to create workflows directly within their Domo instance—without requiring extensive technical expertise.

For advanced integrations, automation, and external orchestration, Domo provides a robust [Workflows Product API](../../API-Reference/Product-APIs/Workflows.md). This API allows you to programmatically start, manage, and interact with workflows from external systems, scripts, or even other Domo instances. Whether you're building custom solutions, automating business processes, or integrating with third-party platforms, the Workflows API offers the flexibility and power to extend your workflow capabilities far beyond the UI.

Explore the API documentation to unlock new possibilities for automation and seamless integration with your business processes.

## Things to keep in mind

- **Size Limits** - The maximum size of a workflow variable is 1Mb
- **Loop Iterrations** - To prevent runaway endless loops, the maximum number of iterations in a loop is 1000 per day
- **Strict Typing** - Domo Workflows are strongly typed, so you must ensure that the data types you are using are compatible with the data types expected by the steps in the workflow
- **Entity Permissions** - Using entities in workflows, such as datasets, requires the appropriate permissions to access them. Make sure the people running the workflow will have the necessary permissions
- **Validation** - Workflows are validated before they are deployed. If there are any errors, the workflow will not be able to be deployed until they are fixed. There are also validation warnings, which won't block the workflow from being deployed, but may cause unexpected behavior
- **Code Engine Logs** - Code Engine logs are only available in your workflow if you `throw` in your function. If you `console.log` or `print`, the logs will only be available when running the function in Code Engine
