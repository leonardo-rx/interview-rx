import { Box, Typography, Paper, Alert, Collapse } from '@mui/material';
import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

function Exercise6() {
  const [feedback, setFeedback] = useState({ show: false, isCorrect: false });

  const handleClick = (productName) => {
    setFeedback({
      show: true,
      isCorrect: productName === 'Gaming Headset'
    });

    // Hide feedback after 2 seconds
    setTimeout(() => {
      setFeedback({ show: false, isCorrect: false });
    }, 4000);
  };

  const htmlExample = `<!-- Product listing -->
<div class="product-container">
    <!-- First product -->
    <div class="product-card">
        <h2>Gaming Mouse</h2>
        <p class="price">$59.99</p>
        <button class="add-to-cart" data-cy="add-button">
            Add to Cart
        </button>
    </div>

    <!-- Second product -->
    <div class="product-card">
        <h2>Gaming Keyboard</h2>
        <p class="price">$129.99</p>
        <button class="add-to-cart" data-cy="add-button">
            Add to Cart
        </button>
    </div>

    <!-- Third product -->
    <div class="product-card">
        <h2>Gaming Headset</h2>
        <p class="price">$89.99</p>
        <button class="add-to-cart" data-cy="add-button">
            Add to Cart
        </button>
    </div>
</div>`;

  const cypressExample = `// Your code here to:
// 1. Find the product card containing "Gaming Headset"
// 2. Click its "Add to Cart" button
// Note: All buttons have the same text and data-cy attribute`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Exercise 6: Product Selection
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Requirements:
        </Typography>
        <Typography variant="body1" paragraph>
          Write a Cypress test that specifically clicks the &quot;Add to Cart&quot; button for the Gaming Headset (the third product).
        </Typography>
        <Typography variant="body1" component="div" sx={{ pl: 2 }}>
          <ul>
            <li>Must click the correct &quot;Add to Cart&quot; button</li>
            <li>Note that:</li>
            <ul>
              <li>All buttons have the same text</li>
              <li>All buttons have the same data-cy attribute</li>
              <li>Product order might change</li>
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
          <div className="product-container" style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div className="product-card" style={{
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              backgroundColor: '#f5f5f5',
              width: '250px',
              textAlign: 'center'
            }}>
              <h2 style={{ margin: '0 0 10px 0' }}>Gaming Mouse</h2>
              <p className="price" style={{ 
                fontSize: '1.2em', 
                color: '#2196f3',
                margin: '10px 0' 
              }}>$59.99</p>
              <button 
                className="add-to-cart" 
                data-cy="add-button"
                onClick={() => handleClick('Gaming Mouse')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#4caf50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add to Cart
              </button>
            </div>

            <div className="product-card" style={{
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              backgroundColor: '#f5f5f5',
              width: '250px',
              textAlign: 'center'
            }}>
              <h2 style={{ margin: '0 0 10px 0' }}>Gaming Keyboard</h2>
              <p className="price" style={{ 
                fontSize: '1.2em', 
                color: '#2196f3',
                margin: '10px 0' 
              }}>$129.99</p>
              <button 
                className="add-to-cart" 
                data-cy="add-button"
                onClick={() => handleClick('Gaming Keyboard')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#4caf50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add to Cart
              </button>
            </div>

            <div className="product-card" style={{
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              backgroundColor: '#f5f5f5',
              width: '250px',
              textAlign: 'center'
            }}>
              <h2 style={{ margin: '0 0 10px 0' }}>Gaming Headset</h2>
              <p className="price" style={{ 
                fontSize: '1.2em', 
                color: '#2196f3',
                margin: '10px 0' 
              }}>$89.99</p>
              <button 
                className="add-to-cart" 
                data-cy="add-button"
                onClick={() => handleClick('Gaming Headset')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#4caf50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          <Collapse in={feedback.show}>
            <Alert 
              severity={feedback.isCorrect ? "success" : "error"}
              sx={{ mt: 2 }}
            >
              {feedback.isCorrect 
                ? "Correct! You selected the Gaming Headset." 
                : "Incorrect. Try selecting the Gaming Headset."}
            </Alert>
          </Collapse>
        </Box>
      </Paper>
    </Box>
  );
}

export default Exercise6; 