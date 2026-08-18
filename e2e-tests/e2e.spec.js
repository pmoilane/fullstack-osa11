const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.',
      ),
    ).toBeVisible()
  })
  describe('When on front page', () => {
    beforeEach(async ({ page }) => {
      await page.goto('')
    })
    test('individual pokemon can be opened', async ({ page }) => {
      await page.getByText('squirtle').click()
      await expect(page.getByText('torrent')).toBeVisible()
    })
  })
})
