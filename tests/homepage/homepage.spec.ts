import { test, expect, type Page } from '@playwright/test'

test('has title', async ({ page }: { page: Page }) => {
	await page.goto('/')

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/StudyCrew/)
})

test('has stages', async ({ page }: { page: Page }) => {
	await page.goto('/')

	await page
		.locator(
			'body > div.header > header > div.desktop-navbar > nav > div:nth-child(2)'
		)
		.click()

	// Expects page to have a heading with the name of Stage 1.
	await expect(page.getByRole('heading', { name: 'Stage 1' })).toBeVisible()

	// Expects page to have a heading with the name of Stage 2.
	await expect(page.getByRole('heading', { name: 'Stage 2' })).toBeVisible()

	// Expects page to have a heading with the name of Stage 3.
	await expect(page.getByRole('heading', { name: 'Stage 3' })).toBeVisible()
})
