import * as React from 'react';
import { Box, Typography, Paper, Collapse } from '@mui/material';
import CodeBlock from '../../components/CodeBlock';

function Exercise5() {
  const [showWelcome, setShowWelcome] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowWelcome(true);
  };

  const htmlExample = `<!-- Login form -->
<form class="login-form">
    <input
        type="email"
        data-cy="email-input"
        placeholder="Email"
    />
    <input
        type="password"
        data-cy="password-input"
        placeholder="Password"
    />
    <button
        type="submit"
        data-cy="submit-button"
    >
        Login
    </button>
</form>

<!-- Success message (appears after login) -->
<div data-cy="welcome-message">
    Welcome back!
</div>`;

  const cypressExample = `// Your code here to:
// 1. Create a custom command that logs in a user
// 2. Accept email and password as parameters
// 3. Use data-cy attributes for selectors
// 4. Include assertion to verify login success

// Example usage:
// cy.login('test@example.com', 'password123')`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Exercise 5: Login Command
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Requirements:
        </Typography>
        <Typography variant="body1" paragraph>
          Create a custom Cypress command for user login functionality.
        </Typography>
        <Typography variant="body1" component="div" sx={{ pl: 2 }}>
          <ul>
            <li>Command should:</li>
            <ul>
              <li>Accept email and password as parameters</li>
              <li>Use data-cy attributes for selectors</li>
              <li>Include a basic assertion to verify login success</li>
              <li>Follow Cypress best practices for custom commands</li>
            </ul>
            <li>Can be reused across different test files</li>
            <li>Should verify successful login</li>
          </ul>
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Initial Cypress Code:
        </Typography>
        <CodeBlock code={cypressExample} language="javascript" />
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          HTML Structure:
        </Typography>
        <CodeBlock code={htmlExample} />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Interactive Example (Inspect me):
        </Typography>
        <Box sx={{ overflowX: 'auto' }}>
          <form className="login-form" 
            style={{ 
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              backgroundColor: '#f5f5f5',
              maxWidth: '400px',
              margin: '0 auto'
            }}
            onSubmit={handleSubmit}
          >
            <div style={{ marginBottom: '15px' }}>
              <input
                type="email"
                data-cy="email-input"
                placeholder="Email"
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <input
                type="password"
                data-cy="password-input"
                placeholder="Password"
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
              />
            </div>
            <button
              type="submit"
              data-cy="submit-button"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#2196f3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </form>
          <Collapse in={showWelcome}>
            <div 
              data-cy="welcome-message" 
              style={{ 
                marginTop: '20px',
                padding: '10px',
                textAlign: 'center',
                color: '#4caf50'
              }}
            >
              Welcome back!
            </div>
          </Collapse>
        </Box>
      </Paper>
    </Box>
  );
}

export default Exercise5; 