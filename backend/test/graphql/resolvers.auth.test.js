const {createUser, login} = require('../../graphql/resolvers/auth')
const mockingoose = require('mockingoose');
const User = require('../../models/user')

describe('test the auth section of the app', () => {

    const OLD_ENV = process.env;

    beforeEach(() => {
        process.env = { ...OLD_ENV };
    });

    afterAll(() => {
        process.env = OLD_ENV;
    });

    it('tests that the input is required', async () => {
        await expect(createUser(null))
            .rejects
            .toThrow("Cannot destructure property 'createUserInput' of 'object null' as it is null.");
    })

    it('tests the the email and password are required to create a user', async () => {
        const payload = {}
        await expect(createUser({createUserInput: payload}))
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
            _id: '3429507234',
        })
        await expect(createUser({createUserInput: payload}))
            .resolves
            .toEqual(expect.objectContaining({
                email: 'test@test1.com'
            }));
    })

    it('tests login with invalid credentials', async () => {
        await expect(login({email: 'test@test1.com', password: '214234234'}))
            .rejects
            .toThrow('invalid credentials')
    })

    it('tests login with correct credentials', async () => {

        process.env.JWT_SECRET = 'super key';

        mockingoose(User).toReturn({
            email: 'test@test1.com',
            _id: '3546345634564',
            password: '2142342349780897078'
        }, 'findOne')

        await expect(login({email: 'test@test1.com', password: '214234234'}))
            .resolves
            .toEqual(expect.objectContaining({
                tokenExpiration: 1
            }));
    })
})

