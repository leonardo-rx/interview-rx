import { Box, Typography, Paper } from '@mui/material';
import CodeBlock from '../../components/CodeBlock';

function Exercise4() {
  const htmlExample = `<div class="container">
  <div class="other-class">
    <div class="new-car-class">
      <div class="details">
        <span>new-car</span>
        <span>2</span>
      </div>
    </div>
  </div>

  <div class="my-class">
    <div class="vehicle-card">
      <div class="details">
        <span>old-car</span>
        <span>1</span>
      </div>
    </div>
  </div>

  <div class="another-class">
    <div class="vehicle-card">
      <div class="details">
        <span>old-car</span>
        <span>3</span>
      </div>
    </div>
  </div>
</div>`;

  const cypressExample = `// Your code here to:
// 1. Verify "old-car" is within an element with class "my-class"
// 2. Verify that the number "1" is a sibling of "old-car"`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Exercise 4: Element Relations
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Requirements:
        </Typography>
        <Typography variant="body1" paragraph>
          Write two Cypress commands that will verify element relationships.
        </Typography>
        <Typography variant="body1" component="div" sx={{ pl: 2 }}>
          <ul>
            <li>Verify &quot;old-car&quot; is within an element with class &quot;my-class&quot;</li>
            <li>Verify that the number &quot;1&quot; is a sibling of &quot;old-car&quot;</li>
            <li>Solution should work even if:</li>
            <ul>
              <li>The order of the cards changes</li>
              <li>There are multiple &quot;old-car&quot; texts</li>
              <li>There are multiple numbers</li>
            </ul>
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
          <div className="container" style={{ border: '1px solid #e0e0e0', padding: '20px' }}>
            <div className="other-class" style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f5f5f5' }}>
              <div className="new-car-class">
                <div className="details">
                  <span style={{ marginRight: '10px' }}>new-car</span>
                  <span>2</span>
                </div>
              </div>
            </div>

            <div className="my-class" style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f5f5f5' }}>
              <div className="vehicle-card">
                <div className="details">
                  <span style={{ marginRight: '10px' }}>old-car</span>
                  <span>1</span>
                </div>
              </div>
            </div>

            <div className="another-class" style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>
              <div className="vehicle-card">
                <div className="details">
                  <span style={{ marginRight: '10px' }}>old-car</span>
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Paper>
    </Box>
  );
}

export default Exercise4; 