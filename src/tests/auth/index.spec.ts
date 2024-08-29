import { test, expect, type Page } from '@playwright/test'

test('has login route', async ({ page }: { page: Page }) => {
  await page.goto('/login/')

  await expect(page).toHaveTitle(/StudyCrew/)
})


test('has signup route', async ({ page }: { page: Page }) => {
  await page.goto('/signup/')

  await expect(page).toHaveTitle(/StudyCrew/)
})
