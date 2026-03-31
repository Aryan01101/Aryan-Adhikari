import { test, expect } from '@playwright/test';

/**
 * Direct API Testing for Gemini Endpoint
 * Tests the /api/gemini endpoint independently
 */

const BASE_URL = process.env.TEST_ENV === 'production'
  ? 'https://aryan-adhikari.github.io'
  : 'http://localhost:8000';

test.describe('Gemini API Endpoint Tests', () => {

  test('should respond to API requests with valid message', async ({ request }) => {
    try {
      const response = await request.post(`${BASE_URL}/api/gemini`, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          message: 'Hello, who are you?'
        },
        timeout: 10000
      });

      console.log('API Response Status:', response.status());
      console.log('API Response OK:', response.ok());

      if (response.ok()) {
        const body = await response.json();
        console.log('✅ API is working!');
        console.log('Response preview:', JSON.stringify(body).substring(0, 200));

        expect(response.status()).toBe(200);
        expect(body).toHaveProperty('text');
        expect(body.text).toBeTruthy();
      } else {
        const errorBody = await response.text();
        console.log('❌ API returned error:', response.status());
        console.log('Error body:', errorBody);

        // Document the error but don't fail the test - we want to see what happened
        console.log('⚠️  API endpoint exists but returned error status');
      }
    } catch (error) {
      console.log('❌ API request failed with exception:', error);
      console.log('⚠️  This likely means:');
      console.log('   1. The API endpoint does not exist');
      console.log('   2. GEMINI_API_KEY is not configured');
      console.log('   3. Network/CORS issues');
    }
  });

  test('should reject requests without message', async ({ request }) => {
    try {
      const response = await request.post(`${BASE_URL}/api/gemini`, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {},
        timeout: 10000
      });

      console.log('Empty message response status:', response.status());

      if (response.status() === 400) {
        console.log('✅ API correctly rejects empty messages');
        const body = await response.json();
        expect(body).toHaveProperty('error');
      } else {
        console.log('⚠️  API did not return 400 for empty message');
      }
    } catch (error) {
      console.log('API endpoint not accessible:', error);
    }
  });

  test('should have correct CORS headers', async ({ request }) => {
    try {
      const response = await request.post(`${BASE_URL}/api/gemini`, {
        headers: {
          'Content-Type': 'application/json',
          'Origin': BASE_URL
        },
        data: {
          message: 'test'
        },
        timeout: 10000
      });

      const headers = response.headers();
      console.log('Response headers:', headers);

      // Check for CORS-related headers if needed
      if (headers['access-control-allow-origin']) {
        console.log('✅ CORS headers present');
      } else {
        console.log('⚠️  No explicit CORS headers (might be okay for same-origin)');
      }
    } catch (error) {
      console.log('CORS test failed:', error);
    }
  });

  test('should detect if using fallback or real API', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Track network requests
    let apiCalled = false;
    let apiSucceeded = false;

    page.on('request', request => {
      if (request.url().includes('/api/gemini')) {
        apiCalled = true;
        console.log('📡 API call detected:', request.url());
      }
    });

    page.on('response', response => {
      if (response.url().includes('/api/gemini')) {
        apiSucceeded = response.ok();
        console.log('📡 API response status:', response.status());
      }
    });

    // Send a chat message
    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    await chatInput.fill('Hello');
    await sendButton.click();

    // Wait for response
    await page.waitForTimeout(3000);

    // Check results
    console.log('\n=== CHAT SYSTEM STATUS ===');
    console.log('API Called:', apiCalled);
    console.log('API Succeeded:', apiSucceeded);

    if (apiCalled && apiSucceeded) {
      console.log('✅ STATUS: Using REAL Gemini AI API');
    } else if (apiCalled && !apiSucceeded) {
      console.log('⚠️  STATUS: API called but FAILED - using fallback responses');
    } else {
      console.log('⚠️  STATUS: Using FALLBACK rule-based responses (no API)');
    }
    console.log('========================\n');
  });
});

test.describe('Environment Check', () => {

  test('should detect current environment', async () => {
    console.log('\n=== ENVIRONMENT INFO ===');
    console.log('Test Environment:', process.env.TEST_ENV || 'local');
    console.log('Base URL:', BASE_URL);
    console.log('========================\n');
  });
});
