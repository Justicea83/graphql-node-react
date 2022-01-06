const {createUser} = require('../../graphql/resolvers/auth')
const mockingoose = require('mockingoose');
const User = require('../../models/user')

describe('test the auth section of the app',  () => {
    it('tests that the input is required', async () => {
        await expect(createUser(null))
            .rejects
            .toThrow("Cannot destructure property 'createUserInput' of 'object null' as it is null.");
    })

    it('tests the the email and password are required to create a user', async () => {
        const payload = {}
        await expect(createUser({createUserInput : payload}))
            .rejects
            .toThrow("email and password are required");
    })

    it('tests the creation of a user successfully', async () => {
        const payload = {
            email: 'test@test1.com',
            password: '214234234'
        }
        mockingoose(User).toReturn({
            ...payload,
            _id : '3429507234',
        })
        await expect(createUser({createUserInput : payload}))
            .resolves
            .toEqual(expect.objectContaining({
                email : 'test@test1.com'
            }));
    })
})