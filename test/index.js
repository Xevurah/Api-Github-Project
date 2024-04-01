import { obtainUserData as obtainUser } from './../index.js';

import { expect } from 'chai';

import nock from 'nock';

import { readFile } from 'fs/promises';
const xevurah = JSON.parse(
  await readFile(
    new URL('./Answers/Xevurah.json', import.meta.url)
  )
);

console.log(xevurah)

describe('Data test from different users of Github', () => {
    beforeEach(()=>{
        nock('https://api.github.com')
            .get('/users/Xevurah')
            .reply(200, xevurah);
    });
    it('Obtain data from user "Xevurah"', ()=>{
        return obtainUser('Xevurah').then(
            result => {
                // Variable type test from result. It haves to be an object
                expect(typeof result).to.equal('object');

                // Check that the user from the API is Xevurah
                expect(result.login).to.equal('Xevurah');

                // Check that the ID from the user is numerical
                expect(typeof result.id).to.equal('number');

                // Followers and Following have to be numerical
                expect(typeof result.followers && typeof result.following).to.equal('number');

                // Bio = Autodidact, I'm kind of a Jack-of-all-trades.
                expect(result.bio).to.equal("Autodidact, I'm kind of a Jack-of-all-trades.");
            }
        )
    });
});