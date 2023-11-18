// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    headerHeight: string;

    colors: {
      bgColor: string;
      primaryColor: string;
      secondaryColor: string;
    };

    border: {
      borderRadius: string;
      primaryBorder: string;
      secondaryBorder: string;
      tertiaryBorder: string;
    };
  }
}

// and extend them!
// declare module 'styled-components' {
//   export interface DefaultTheme {
//     textColor: string;
//     bgColor: string;
//     btnColor: string;
//   }
// }

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     color: {
//       textColor: string;
//       bgColor: string;
//       accentColor: string;
//       sectionColor: string;
//     };
//     border: {
//       borderRadius: string;
//       primaryBorder: string;
//       secondaryBorder: string;
//       tertiaryBorder: string;
//     };
//     buttonStyle: string;
//     containerStyle: string;
//     flex: (jc?: string, ai?: string) => string;
//     flexColumn: (jc?: string, ai?: string) => string;
//   }
// }
