import { Box, Typography, Paper } from '@mui/material';
import CodeBlock from '../../components/CodeBlock';

function Exercise7() {
  const apiExample = `// API Details
Endpoint: POST https://jsonplaceholder.typicode.com/posts

// Request Payload Structure:
{
    "title": "Product Added",
    "body": "Added product to cart",
    "userId": 1
}

// Expected Response Structure:
{
    // response body
}`;

  const cypressExample = `// Your code here to:
// 1. Intercept POST request to jsonplaceholder.typicode.com/posts
// 2. Verify request payload has title, body and userId
// 3. Verify response contains id
// 4. Handle the interception using callback functions`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Exercise 7: API Interception
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Requirements:
        </Typography>
        <Typography variant="body1" paragraph>
          Write a Cypress test that intercepts an API call and verifies both request and response using callback functions.
        </Typography>
        <Typography variant="body1" component="div" sx={{ pl: 2 }}>
          <ul>
            <li>Must intercept POST request to jsonplaceholder.typicode.com/posts</li>
            <li>Verify request payload has:</li>
            <ul>
              <li>title (string)</li>
              <li>body (string)</li>
              <li>userId (number)</li>
            </ul>
            <li>Verify response contains:</li>
            <ul>
              <li>id field (number)</li>
            </ul>
            <li>Use callback functions for verification</li>
          </ul>
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Initial Cypress Code:
        </Typography>
        <CodeBlock code={cypressExample} language="javascript" />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          API Structure:
        </Typography>
        <CodeBlock code={apiExample} language="javascript" />
      </Paper>
    </Box>
  );
}

export default Exercise7; 