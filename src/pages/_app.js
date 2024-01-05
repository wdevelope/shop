import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// 사용자 정의 테마 설정
const theme = createTheme({
  // 테마 옵션
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline을 사용해 기본 스타일을 초기화 */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
