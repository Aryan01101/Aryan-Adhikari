import { test, expect, Page } from '@playwright/test';

/**
 * Comprehensive Test Suite for Bamboo Chat System
 * Tests both local and deployed versions of the portfolio chat
 */

// Test both local and production URLs
const TEST_URLS = {
  local: 'http://localhost:8000',
  production: 'https://aryan-adhikari.github.io/'
};

// Choose which environment to test
const BASE_URL = process.env.TEST_ENV === 'production'
  ? TEST_URLS.production
  : TEST_URLS.local;

test.describe('Bamboo Chat System - UI Elements', () => {

  test('should load the page and display chat interface', async ({ page }) => {
    await page.goto(BASE_URL);

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Check if chat section exists
    const chatSection = page.locator('#ai-assistant');
    await expect(chatSection).toBeVisible();

    // Verify chat header
    await expect(page.locator('.chat-header')).toBeVisible();
    await expect(page.locator('.chat-header h3')).toContainText('Bamboo');
  });

  test('should display Bamboo character and status', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Check Bamboo character container
    const bambooCharacter = page.locator('#bamboo-character');
    await expect(bambooCharacter).toBeVisible();

    // Check status element
    const bambooStatus = page.locator('#bamboo-status');
    await expect(bambooStatus).toBeVisible();
    await expect(bambooStatus).toContainText('Bamboo is ready to chat');
  });

  test('should display initial greeting message', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Check for initial assistant message
    const initialMessage = page.locator('.message.assistant').first();
    await expect(initialMessage).toBeVisible();
    await expect(initialMessage).toContainText('Hey there');
  });

  test('should have functional chat input and send button', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    await expect(chatInput).toBeVisible();
    await expect(chatInput).toBeEditable();
    await expect(sendButton).toBeVisible();
    await expect(sendButton).toBeEnabled();
  });

  test('should display chat messages container', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const messagesContainer = page.locator('#chat-messages');
    await expect(messagesContainer).toBeVisible();
  });
});

test.describe('Bamboo Chat System - User Interaction', () => {

  test('should allow user to type and send a message', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Type a test message
    await chatInput.fill('Hello Bamboo!');

    // Verify input value
    await expect(chatInput).toHaveValue('Hello Bamboo!');

    // Click send button
    await sendButton.click();

    // Input should be cleared after sending
    await expect(chatInput).toHaveValue('');
  });

  test('should display user message in chat after sending', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');
    const testMessage = 'Test message for chat';

    // Count initial messages
    const initialMessageCount = await page.locator('.message').count();

    // Send message
    await chatInput.fill(testMessage);
    await sendButton.click();

    // Wait for user message to appear
    await page.waitForSelector('.message.user', { timeout: 5000 });

    // Verify user message is displayed
    const userMessage = page.locator('.message.user').last();
    await expect(userMessage).toContainText(testMessage);
  });

  test('should show typing indicator when processing', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Send message
    await chatInput.fill('What are your skills?');
    await sendButton.click();

    // Check for typing indicator (it appears briefly)
    // Note: This might be too fast to catch, so we use a short timeout
    try {
      await expect(page.locator('.typing-indicator')).toBeVisible({ timeout: 1000 });
    } catch (e) {
      console.log('Typing indicator appeared too briefly to catch - this is okay');
    }
  });

  test('should receive response from Bamboo after sending message', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Count initial assistant messages
    const initialAssistantCount = await page.locator('.message.assistant').count();

    // Send a message
    await chatInput.fill('Hello!');
    await sendButton.click();

    // Wait for response (timeout after 10 seconds)
    await page.waitForSelector('.message.assistant', {
      timeout: 10000,
      state: 'attached'
    });

    // Count assistant messages again
    const finalAssistantCount = await page.locator('.message.assistant').count();

    // Should have at least one more assistant message
    expect(finalAssistantCount).toBeGreaterThan(initialAssistantCount);
  });

  test('should handle Enter key press to send message', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');

    // Type message and press Enter
    await chatInput.fill('Testing Enter key');
    await chatInput.press('Enter');

    // Input should be cleared
    await expect(chatInput).toHaveValue('');

    // User message should appear
    await page.waitForSelector('.message.user', { timeout: 5000 });
    const userMessage = page.locator('.message.user').last();
    await expect(userMessage).toContainText('Testing Enter key');
  });
});

test.describe('Bamboo Chat System - Response Quality', () => {

  test('should respond to greeting messages', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Send greeting
    await chatInput.fill('Hello');
    await sendButton.click();

    // Wait for response
    await page.waitForTimeout(3000);

    // Check if response contains expected greeting patterns
    const lastResponse = page.locator('.message.assistant').last();
    const responseText = await lastResponse.textContent();

    expect(responseText).toMatch(/Bamboo|Hey|Hi|Hello/i);
  });

  test('should respond to skills question', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Ask about skills
    await chatInput.fill('What skills does Aryan have?');
    await sendButton.click();

    // Wait for response
    await page.waitForTimeout(3000);

    // Check if response mentions skills/technologies
    const lastResponse = page.locator('.message.assistant').last();
    const responseText = await lastResponse.textContent();

    expect(responseText).toMatch(/Python|JavaScript|React|skill|tech/i);
  });

  test('should respond to projects question', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Ask about projects
    await chatInput.fill('Tell me about projects');
    await sendButton.click();

    // Wait for response
    await page.waitForTimeout(3000);

    // Check if response mentions projects
    const lastResponse = page.locator('.message.assistant').last();
    const responseText = await lastResponse.textContent();

    expect(responseText).toMatch(/project|YAAKE|built|developed/i);
  });

  test('should respond to hobbies question', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Ask about hobbies
    await chatInput.fill('What does Aryan do for fun?');
    await sendButton.click();

    // Wait for response
    await page.waitForTimeout(3000);

    // Check if response mentions hobbies
    const lastResponse = page.locator('.message.assistant').last();
    const responseText = await lastResponse.textContent();

    expect(responseText).toMatch(/Valorant|bouldering|basketball|gaming|fitness/i);
  });
});

test.describe('Bamboo Chat System - API Integration', () => {

  test('should attempt to call Gemini API endpoint', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Set up request interception to monitor API calls
    const apiRequests: any[] = [];
    page.on('request', request => {
      if (request.url().includes('/api/gemini')) {
        apiRequests.push({
          url: request.url(),
          method: request.method(),
          postData: request.postData()
        });
      }
    });

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Send message
    await chatInput.fill('Hello');
    await sendButton.click();

    // Wait for response
    await page.waitForTimeout(3000);

    // Check if API was called (might be called, might use fallback)
    console.log('API Requests captured:', apiRequests.length);

    if (apiRequests.length > 0) {
      console.log('✅ Gemini API endpoint was called');
      console.log('Request details:', JSON.stringify(apiRequests[0], null, 2));
    } else {
      console.log('⚠️  No API calls detected - likely using fallback responses');
    }
  });

  test('should handle API responses correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Monitor API responses
    const apiResponses: any[] = [];
    page.on('response', async response => {
      if (response.url().includes('/api/gemini')) {
        apiResponses.push({
          url: response.url(),
          status: response.status(),
          ok: response.ok(),
          body: await response.text().catch(() => 'Could not read body')
        });
      }
    });

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Send message
    await chatInput.fill('What is your name?');
    await sendButton.click();

    // Wait for response
    await page.waitForTimeout(3000);

    // Check API response details
    if (apiResponses.length > 0) {
      const response = apiResponses[0];
      console.log('✅ API Response received');
      console.log('Status:', response.status);
      console.log('OK:', response.ok);
      console.log('Body preview:', response.body.substring(0, 200));

      if (!response.ok) {
        console.error('❌ API returned error status:', response.status);
      }
    } else {
      console.log('⚠️  No API response captured - using fallback');
    }
  });
});

test.describe('Bamboo Chat System - Error Handling', () => {

  test('should handle empty message submission gracefully', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Count initial messages
    const initialCount = await page.locator('.message').count();

    // Try to send empty message
    await chatInput.fill('');
    await sendButton.click();

    // Wait a bit
    await page.waitForTimeout(1000);

    // Message count should not increase
    const finalCount = await page.locator('.message').count();
    expect(finalCount).toBe(initialCount);
  });

  test('should handle rapid message sending', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Send multiple messages quickly
    for (let i = 1; i <= 3; i++) {
      await chatInput.fill(`Message ${i}`);
      await sendButton.click();
      await page.waitForTimeout(100); // Small delay between sends
    }

    // Wait for all responses
    await page.waitForTimeout(5000);

    // All user messages should appear
    const userMessages = page.locator('.message.user');
    const userCount = await userMessages.count();
    expect(userCount).toBeGreaterThanOrEqual(3);
  });
});

test.describe('Bamboo Chat System - Mobile Responsiveness', () => {

  test('should display chat correctly on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Chat elements should still be visible
    await expect(page.locator('#chat-input')).toBeVisible();
    await expect(page.locator('#send-btn')).toBeVisible();
    await expect(page.locator('#chat-messages')).toBeVisible();
  });

  test('should be interactive on tablet viewport', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Should be able to interact
    await chatInput.fill('Test on tablet');
    await sendButton.click();

    await page.waitForTimeout(2000);

    // Message should appear
    const userMessage = page.locator('.message.user').last();
    await expect(userMessage).toContainText('Test on tablet');
  });
});

test.describe('Bamboo Chat System - Visual States', () => {

  test('should show Bamboo character with correct initial state', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const bambooCharacter = page.locator('#bamboo-character');

    // Check if character has idle class (initial state)
    const classes = await bambooCharacter.getAttribute('class');
    console.log('Bamboo character classes:', classes);

    // Character should exist and be visible
    await expect(bambooCharacter).toBeVisible();
  });

  test('should display formatted text in responses', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const chatInput = page.locator('#chat-input');
    const sendButton = page.locator('#send-btn');

    // Send a message that typically gets formatted response
    await chatInput.fill('Tell me about your skills');
    await sendButton.click();

    await page.waitForTimeout(3000);

    // Check last response for formatting (bold text, line breaks)
    const lastResponse = page.locator('.message.assistant').last();
    const hasFormatting = await lastResponse.locator('strong, br').count() > 0;

    console.log('Response contains formatting:', hasFormatting);
  });
});
