import { test, expect } from '@playwright/test';

const yourSentences = [
  'na ooruku poren',
  'padam pakanum aana exam irikirathala ippa paaka ela',
  'ne enna paaka eppa waruvai',
  'Avarukku sambalaththa kudunga',
  'Na nalaiku nerathode elumpuvan',
  'Nan nalaiku nerathoda elumpa maten',
  'vanakkam',
  'enaku anththa bookah konjam thariya',
  'sari na vasichitu tharen',
  'thayavusenji enna anga konjam irakki viduringala',
  'konjam iringala nan call panren',
  'Enakku payama irukku',
  'Enakku cake venum',
  'Sari Sari',
  'Avan unakku vena',
  'aval examku poithaal',
  'Kovikkama enaku atha konjam eduthu thavan',
  'Naanga vehicle service poda Kurnagela ponam',
  'Courseweb ku access irukka',
  'Konjam sooda uththi tharingala',
  'Va Machcha Va Machcha',
  'nee eppo varuve',
  'nAn ippo varen',
  'aval nalla paiyan'
];

yourSentences.forEach((sentence, index) => {
  test(`PosFun${String(index + 1).padStart(4, '0')} - "${sentence}"`, async ({ page }) => {
    test.setTimeout(120000);  // 2 minutes for long sentences
    
    await page.goto('/');
    await page.click('textarea');
    await page.waitForTimeout(1000);
    
    // Type sentence WORD-BY-WORD (same logic as your working code)
    const words = sentence.split(' ');
    for (const word of words) {
      await page.keyboard.type(word);           // Type word
      await page.keyboard.press('Space');       // Press space  
      await page.waitForTimeout(2500);          // Wait for conversion (your timing)
    }
    
    // Final wait + PROOF (same as your code)
    await page.waitForTimeout(4000);
    await page.screenshot({ 
      path: `proof-pos${String(index + 1).padStart(4, '0')}.png`, 
      fullPage: true 
    });
    console.log(`🟢 PosFun${String(index + 1).padStart(4, '0')} COMPLETE! "${sentence}"`);
  });
});
