    /**
     * Test Case: Product Search
     * 
     * Tags: @master @regression
     * 
     * Steps:
     * 1) Navigate to the application URL
     * 2) Enter the product name in the search field
     * 3) Click the search button
     * 4) Verify if the product is displayed in the search results
     */
    
    import { test, expect } from '@playwright/test';
    import { Homepage } from '../pages/ninjaHomepage'; 
    import { SearchResultsPage } from '../pages/ninjaSearchResultpage';
    import { TestConfig } from '../test.config';
    
    // Declare reusable variables
    let config:TestConfig;
    let homepage:Homepage;
    let searchResultPage:SearchResultsPage;
    /* let config: TestConfig;
    let homePage: Homepage;
    let searchResultsPage: SearchResultsPage; */
    
    // Playwright hook - runs before each test
    test.beforeEach(async ({ page }) => {
      config = new TestConfig(); // Load configuration values like URL and product name
      await page.goto(config.appurl); // Step 1: Navigate to the application
    
      // Initialize page objects
      homepage = new Homepage(page);
      searchResultPage = new SearchResultsPage(page);
    });
    
    // Playwright hook - runs after each test (optional cleanup)
    test.afterEach(async ({ page }) => {
      await page.close(); // Closes the browser tab after test
    });
    
    test('Product search test @master @regression', async () => {
      const productName = config.productName;
    
      // Step 2 & 3: Enter product name and click Search
      await homepage.enterSearchText(productName);
      await homepage.clickSearchButton();
    
      // Step 4: Verify that the search results page is displayed
      expect(await searchResultPage.isSearchResultsPageExists()).toBeTruthy();
    
      // Step 5: Validate if the searched product appears in results
      const isProductFound = await searchResultPage.isProductExist(productName);
      expect(isProductFound).toBeTruthy();
    });
    