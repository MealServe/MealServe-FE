import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  headerHeight: '88px',

  colors: {
    bgColor: '#ffffff',
    primaryColor: '#e8354f',
    secondaryColor: '#e7c6cb46',
  },

  border: {
    borderRadius: `8px`,
    primaryBorder: '#95969a',
    secondaryBorder: '#2f364070',
    tertiaryBorder: '#2f364046',
  },

  defaultForm: `
    display: flex;
    flex-direction: column;
  
    label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: bold;
    }
  
    input {
      height: 40px;
      width: 400px;
      font-size: 16px;
      border-radius: 8px;
      padding: 0 8px;
      margin: 4px;
    }
  `,
};

export { theme };

// const theme: DefaultTheme = {
//   color: {
//     textColor: '#f5f6fa',
//     bgColor: '#2f3640',
//     accentColor: '#D6AB00',
//     sectionColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   border: {
//     borderRadius: `14px`,
//     primaryBorder: '#2f3640',
//     secondaryBorder: '#2f364070',
//     tertiaryBorder: '#2f364060',
//   },

//   buttonStyle: `
//     all: unset;
//     display: block;
//     padding: 8px 16px;
//     border-radius: 8px;
//     cursor: pointer;
//     `,
//   containerStyle: `
//     position: relative;
//     padding: 0 24px;
//     margin: 16px auto;
//   `,

//   flex: (jc = 'flex-start', ai = 'flex-start') => `
//   display:flex;
//   flex-direction: row;
//   justify-content: ${jc};
//   align-items: ${ai};
//   `,
//   flexColumn: (jc = 'flex-start', ai = 'flex-start') => `
//   display:flex;
//   flex-direction: column;
//   justify-content: ${jc};
//   align-items: ${ai};
//   `,
// };

// export { theme };
