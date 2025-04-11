import { Box, Typography, Paper } from '@mui/material';
import CodeBlock from '../../components/CodeBlock';

function Exercise3() {
  const htmlExample = `<div data-cy="test-grid-1">
  <div class="grid-item">
    <p>Test2</p>
    <input type="checkbox" checked disabled>
  </div>
</div>

<div data-cy="test-grid-3">
  <div class="grid-item">
    <div class="item-content">
      <p>Test1</p>
      <input type="checkbox" disabled>
    </div>
  </div>
  
  <div class="grid-item">
    <div class="item-content">
      <p>Test2</p>
      <input type="checkbox" checked disabled>
    </div>
  </div>

  <div class="grid-item">
    <div>
      <div>Test2</div>
      <input type="checkbox" checked disabled>
    </div>
  </div>
</div>`;

  const cypressExample = `// Your code here to:
// 1. Find checkbox within test-grid-3
// 2. Ensure it's within item-content div
// 3. Verify it's associated with paragraph containing "Test2"
// 4. Check if it's checked`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Exercise 3: Verify Checkbox State
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Requirements:
        </Typography>
        <Typography variant="body1" paragraph>
          Write a Cypress command to verify if a specific checkbox is checked.
        </Typography>
        <Typography variant="body1" component="div" sx={{ pl: 2 }}>
          <ul>
            <li>Checkbox must be associated with a paragraph containing &quot;Test2&quot;</li>
            <li>Must be within the test-grid-3 section</li>
            <li>Must be inside an item-content div</li>
            <li>Multiple &quot;Test2&quot; texts exist in different locations</li>
            <li>Several checkboxes are checked</li>
            <li>Similar structures appear in different grids</li>
            <li>Some &quot;Test2&quot; texts are in different element types</li>
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
          <div data-cy="test-grid-1" style={{ marginBottom: '20px', padding: '10px', border: '1px solid #e0e0e0' }}>
            <div className="grid-item">
              <p>Test2</p>
              <input type="checkbox" defaultChecked disabled />
            </div>
          </div>

          <div data-cy="test-grid-3" style={{ padding: '10px', border: '1px solid #e0e0e0' }}>
            <div className="grid-item" style={{ marginBottom: '10px' }}>
              <div className="item-content">
                <p>Test1</p>
                <input type="checkbox" disabled />
              </div>
            </div>
            
            <div className="grid-item" style={{ marginBottom: '10px' }}>
              <div className="item-content">
                <p>Test2</p>
                <input type="checkbox" defaultChecked disabled />
              </div>
            </div>

            <div className="grid-item">
              <div>
                <div>Test2</div>
                <input type="checkbox" defaultChecked disabled />
              </div>
            </div>
          </div>
        </Box>
      </Paper>
    </Box>
  );
}

export default Exercise3; 