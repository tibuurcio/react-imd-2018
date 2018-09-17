import styled from 'styled-components';

export const fullScreen = styled.div([], {
  width: '90vw',
  height: '90vh',
  textAlign: 'left',
  '& pre': {
    // needed to override inline styles from syntax highlighting
    margin: '0 !important',
    width: '90vw',
    height: '90vh'
  }
});
