import { Box, Typography, Paper } from '@mui/material';
import CodeBlock from '../../components/CodeBlock';

function Exercise2() {
  const htmlExample = `<table name="Test1">
  <thead>
    <tr>
      <th>Date</th>
      <th>Type</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>05/14/2024</td>
      <td>
        <p>First</p>
      </td>
      <td>
        <span>Accepted</span>
      </td>
      <td>
        <button>View</button>
        <button class="button-order-more">Order More</button>
      </td>
    </tr>
    <tr>
      <td>05/15/2024</td>
      <td>
        <p>First</p>
      </td>
      <td>
        <span>Accepted</span>
      </td>
      <td>
        <button>View</button>
        <button class="button-order-more">Order More</button>
      </td>
    </tr>
    <tr>
      <td>05/15/2024</td>
      <td>
        <p class="first-class">Not First</p>
      </td>
      <td>
        <span>Pending</span>
      </td>
      <td>
        <button>View</button>
        <button class="button-order">Order More</button>
      </td>
    </tr>
    <tr>
      <td>05/15/2024</td>
      <td>
        <p>First</p>
      </td>
      <td>
        <span>Accepted</span>
      </td>
      <td>
        <button class="button-order-more">Order More</button>
        <button>View</button>
      </td>
    </tr>
    <tr>
      <td>05/15/2024</td>
      <td>
        <div>First</div>
      </td>
      <td>
        <div>Accepted</div>
      </td>
      <td>
        <a>View</a>
        <button class="button-order-more-items">Order More</button>
      </td>
    </tr>
  </tbody>
</table>`;

  const cypressExample = `cy.get('table[name="Test1"]')
      .contains(moment.tz("America/Los_Angeles").format("MM/DD/YYYY"))
      .parentsUntil("tbody")
      .as("test-table")

// Your code here to:
// 1. Find a paragraph (<p>) element containing exactly "First"
// 2. Find a span (<span>) element containing "Accepted"
// 3. Find a button (<button>) element containing "View"
// 4. Find and click a button with the class "button-order-more"`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Exercise 2: Find Table Elements
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Requirements:
        </Typography>
        <Typography variant="body1" paragraph>
          Complete the code to find specific elements within the row that matches the 05/15/2024 date (in Los Angeles timezone).
        </Typography>
        <Typography variant="body1" component="div" sx={{ pl: 2 }}>
          <ul>
            <li>All elements must be found within the aliased row (&quot;@test-table&quot;)</li>
            <li>Be specific with element types as similar text appears in different elements</li>
            <li>Order of elements matters</li>
            <li>Multiple similar classes exist</li>
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
          <table 
            name="Test1" 
            style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #e0e0e0'
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: '12px', borderBottom: '1px solid #e0e0e0', textAlign: 'left' }}>Date</th>
                <th style={{ padding: '12px', borderBottom: '1px solid #e0e0e0', textAlign: 'left' }}>Type</th>
                <th style={{ padding: '12px', borderBottom: '1px solid #e0e0e0', textAlign: 'left' }}>Status</th>
                <th style={{ padding: '12px', borderBottom: '1px solid #e0e0e0', textAlign: 'left' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>05/14/2024</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <p style={{ margin: '0' }}>First</p>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <span style={{ margin: '0' }}>Accepted</span>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <button style={{ marginRight: '8px' }}>View</button>
                  <button className="button-order-more">Order More</button>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>05/15/2024</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <p style={{ margin: '0' }}>First</p>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <span style={{ margin: '0' }}>Accepted</span>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <button style={{ marginRight: '8px' }}>View</button>
                  <button className="button-order-more">Order More</button>
                </td>
              </tr>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>05/15/2024</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <p style={{ margin: '0' }} className="first-class">Not First</p>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <span style={{ margin: '0' }}>Pending</span>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <button style={{ marginRight: '8px' }}>View</button>
                  <button className="button-order">Order More</button>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>05/15/2024</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <p style={{ margin: '0' }}>First</p>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <span style={{ margin: '0' }}>Accepted</span>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <button style={{ marginRight: '8px' }} className="button-order-more">Order More</button>
                  <button style={{ margin: '0' }}>View</button>
                </td>
              </tr>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>05/15/2024</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <div style={{ margin: '0' }}>First</div>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <div style={{ margin: '0' }}>Accepted</div>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e0e0e0' }}>
                  <a style={{ margin: '0' }}>View</a>
                  <button style={{ margin: '0' }} className="button-order-more-items">Order More</button>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Paper>
    </Box>
  );
}

export default Exercise2; 