// 检测网页的渲染性能
async function measurePageRenderingPerformance(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const performanceMetrics = await page.evaluate(() => JSON.stringify(window.performance));
  await browser.close();
  return performanceMetrics;
}



// 检测网页的错误和异常
async function detectPageErrors(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('pageerror', error => console.error('Page error:', error));
  page.on('error', error => console.error('Error:', error));
  await page.goto(url);
  await browser.close();
}