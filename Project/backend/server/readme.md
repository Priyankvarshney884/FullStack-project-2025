## HTTP Status Codes Reference

<div style="overflow-x:auto; border:1px solid #ddd; border-radius:6px; box-shadow:0 2px 8px #eee;">

| **Status Code**              | **Icon** | **Meaning**                                     | **Description**                                                            |
|------------------------------|:--------:|-------------------------------------------------|----------------------------------------------------------------------------|
| `201 Created`                | ✅       | Resource successfully created                    | The resource was successfully added to the database.                        |
| `400 Bad Request`            | ❌       | Invalid request format or missing required fields | Request body is malformed or missing required properties.                   |
| `401 Unauthorized`           | 🔒       | Authentication required                          | User is not logged in or token is missing/invalid.                          |
| `403 Forbidden`              | 🚫       | Permission denied                                | Authenticated but lacks permissions to create the resource.                 |
| `404 Not Found`              | 🔍       | Endpoint/resource not found                      | The API endpoint does not exist or a related dependency is missing.         |
| `409 Conflict`               | ⚠️       | Resource already exists                          | Trying to create a duplicate entry (e.g., username/email already in use).   |
| `422 Unprocessable Entity`   | ❗       | Validation failed                                | Data is in correct format but fails specific business rules or validations. |
| `500 Internal Server Error`  | 💥       | Server error                                     | Unexpected error occurred on the server side.                               |
| `503 Service Unavailable`    | 📴       | Service unavailable                              | The service is down for maintenance or overloaded.                          |

</div>

what is preflight ?

Preflight refers to a preliminary check or process that occurs before a main action is performed. In web development, "preflight" most commonly describes a step in Cross-Origin Resource Sharing (CORS). When a browser makes a cross-origin HTTP request that uses methods or headers not considered "simple," it first sends an HTTP OPTIONS request—called a preflight request—to the server. This preflight request asks the server if the actual request is safe to send. The server responds with headers indicating whether the main request is allowed. This mechanism helps ensure security by allowing servers to control which cross-origin requests are permitted.

Preflight checks are also used in other contexts, such as preparing assets before deployment or verifying configuration before running a build process. The general idea is to catch potential issues early, reducing errors and improving reliability.


<!--
CORS (Cross-Origin Resource Sharing) is a security feature implemented in web browsers that allows or restricts web applications running at one origin (domain) to make requests for resources from a different origin. It is commonly used in web development to enable APIs to be accessed from web pages hosted on different domains, while protecting users from malicious cross-origin requests. CORS is configured on the server side by setting specific HTTP headers that indicate which origins are permitted to access the resources.
-->
what is CORS in webdevelopment ?
