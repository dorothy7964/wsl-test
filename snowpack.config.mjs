/** @type {import("snowpack").SnowpackUserConfig } */

export default {
  alias: {
    '@': './src',
  },
  /* mount: 빌드에 포함될 디렉토리와 연결될 URL을 지정 */
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* devOptions	개발 서버의 작동 방식을 지정 */
    // port: 8080, // 개발 서버를 실행할 포트 번호
    // fallback: 'index.html', // SPA인 경우 제공할 모든 사용자 경로
    // open: 'default', // 새 브라우저 탭에 개발 서버를 열기, "default" | "none" | "BROWSER_NAME"
    // output: 'dashboard', // 콘솔의 출력 모드를 지정, "stream" | "dashbaord"
    // hostname: 'localhost', // 브라우저가 열리는 호스트 이름
    // hmr: true, // Hot Module Replacement(HMR, 수정사항을 즉시 반영) 활성화
    // hmrErrorOverlay: true, // HMR 활성화시 자바스크립트 오류 표시 여부
    // secure: false, // HTTP2 활성화 상태에서 HTTPS 사용 여부
    // out: 'build' // Deprecated! 
  },
  buildOptions: {
    /* buildOptions	최종 빌드를 처리하는 방법을 지정 */
    // out: 'build', // 최종 빌드를 출력하는 로컬 디렉토리 이름
    // baseUrl: '/', // 제품 모드의 기본 URL 지정, 현재 앱이 하위 디렉토리로 배포되는 경우 유용
    // clean: false, // 빌드 전 기존 데이터 제거
    // metaDir: '__snowpack__', // HMR 및 ENV 등의 정보를 출력할 디렉토리 이름
    // sourceMap: false, // 소스 맵 사용 여부
    // webModulesUrl: 'web_modules' // 사용하는 웹 모듈이 저장될 디렉토리 이름
  },
};
