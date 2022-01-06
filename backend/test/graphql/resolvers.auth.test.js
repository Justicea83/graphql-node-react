const {createUser, login} = require('../../graphql/resolvers/auth')
const mockingoose = require('mockingoose');
const User = require('../../models/user')
const httpMocks = require('node-mocks-http')

describe('test the auth section of the app', () => {

    const OLD_ENV = process.env;
    beforeEach(() => {
        process.env = { ...OLD_ENV };
    });

    afterAll(() => {
        process.env = OLD_ENV;
    });

    it('tests that the input is required', async () => {
        let req = httpMocks.createRequest()

        await expect(createUser(null,req))
            .rejects
            .toThrow("Cannot destructure property 'createUserInput' of 'object null' as it is null.");
    })

    it('tests the the email and password are required to create a user', async () => {
        let req = httpMocks.createRequest()
        const payload = {}
        await expect(createUser({createUserInput: payload}, req))
            .rejects
            .toThrow("email and password are required");
    })

    it('tests the creation of a user successfully', async () => {
        let req = httpMocks.createRequest()

        const payload = {
            email: 'test@test1.com',
            password: '214234234'
        }
        mockingoose(User).toReturn({
            ...payload,
            _id: '3429507234',
        })
        await expect(createUser({createUserInput: payload},req))
            .resolves
            .toEqual(expect.objectContaining({
                email: 'test@test1.com'
            }));
    })

    it('tests login with invalid credentials', async () => {
        let req = httpMocks.createRequest()

        await expect(login({email: 'test@test1.com', password: '214234234'},req))
            .rejects
            .toThrow('invalid credentials')
    })

    it('tests login with correct credentials', async () => {
        let req = httpMocks.createRequest()

        process.env.JWT_SECRET = 'super key';

        mockingoose(User).toReturn({
            email: 'test@test1.com',
            _id: '3546345634564',
            password: '2142342349780897078'
        }, 'findOne')

        await expect(login({email: 'test@test1.com', password: '214234234'},req))
            .resolves
            .toEqual(expect.objectContaining({
                tokenExpiration: 1
            }));
    })
})

