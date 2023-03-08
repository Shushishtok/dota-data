import { schemas } from '../../src/schemas';
import { createIntegrationTest } from './_util';

describe('integration', () => {
  createIntegrationTest({
    name: 'standard',
    schema: schemas.portraits,
    url: 'https://raw.githubusercontent.com/dotabuff/d2vpkr/master/dota/scripts/npc/portraits.txt',

    ignore: [
      'models/heroes/antimage_female/antimage_female.vmdl.PortraitBackgroundTexture should match pattern: /^materials\\/.+\\.vmat$/',
      'models/heroes/techies/techies.vmdl.PortraitAmbientColor[0] should be an integer',
      'models/heroes/techies/techies.vmdl.PortraitAmbientColor[1] should be an integer',
      'models/heroes/techies/techies.vmdl.PortraitAmbientColor[2] should be an integer',
      'models/heroes/techies/techies.vmdl.PortraitBackgroundColor4 has 2 elements when at least 3 is expected',
      'models/heroes/techies/techies.vmdl.PortraitBackgroundColor4[1] should be a number',
    ],
  });
});
