import { Paper } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PropTypes from 'prop-types';

function CodeBlock({ code, language = 'html' }) {
  return (
    <Paper sx={{ p: 2, backgroundColor: '#fafafa' }}>
      <SyntaxHighlighter 
        language={language} 
        style={docco}
        customStyle={{ 
          backgroundColor: 'transparent',
          padding: '0',
          margin: '0'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Paper>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string
};

export default CodeBlock; 