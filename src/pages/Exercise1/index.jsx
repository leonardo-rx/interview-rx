import { Box, Typography, Paper } from '@mui/material';
import CodeBlock from '../../components/CodeBlock';

function Exercise1() {
  const htmlExample = `
<div class="product-list">
  <div 
    id="product-item-45627"
    data-cy="product-item"
    data-product-id="45627"
  >
    <span data-cy="product-name">Laptop</span>
    <span data-cy="product-price">$999</span>
  </div>
  <div 
    id="product-item-45628"
    data-cy="product-item"
    data-product-id="45628"
  >
    <span data-cy="product-name">Mouse</span>
    <span data-cy="product-price">$59</span>
  </div>
</div>`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Exercise 1: Find Product with Specific Price
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Requirements:
        </Typography>
        <Typography variant="body1" paragraph>
            Write a Cypress command to find the product with price $59
        </Typography>
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
        <div className="product-list">
          <div 
            id="product-item-45627"
            data-cy="product-item"
            data-product-id="45627"
          >
            <span data-cy="product-name">Laptop</span>
            <span data-cy="product-price">$999</span>
          </div>
          <div 
            id="product-item-45628"
            data-cy="product-item"
            data-product-id="45628"
          >
            <span data-cy="product-name">Mouse</span>
            <span data-cy="product-price">$59</span>
          </div>
        </div>
      </Paper>
    </Box>
  );
}

export default Exercise1; 