import { test, expect, type Page } from '@playwright/test'

test('has title', async ({ page }: { page: Page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/StudyCrew/)
})

test('has stages', async ({ page }: { page: Page }) => {
  await page.goto('/')

  await page
    .locator(
      'body > div.header > header > div.desktop-navbar > nav > div:nth-child(2)'
    )
    .click()

  await expect(page.getByRole('heading', { name: 'Stage 1' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Stage 2' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Stage 3' })).toBeVisible()
})
