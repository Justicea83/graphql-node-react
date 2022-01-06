import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import AuthContext from "../../context/auth-context";
import appAxios from "../../axios";


export default function ProfileEdit() {

    const context = useContext(AuthContext)

    const user = context?.user ? {...context.user} : {}

    const [name, setName] = useState(user?.name ? user.name : '')
    const [phone, setPhone] = useState(user?.phone ? user.phone : '')
    const [photo, setPhoto] = useState(null)
    const [email, setEmail] = useState(user?.email ? user.email : '')
    const [password, setPassword] = useState('')
    const [bio, setBio] = useState(user?.bio ? user.bio : '')


    const handleSubmit = (event) => {
        event.preventDefault()

        //validate form
        if (!email || !password) {
            //TODO show validation error
            return
        }

        const payload = {
            query: `
            mutation{
              updateUserProfile(updateUserProfileInput: {
                email : "${email}",
                phone: "${phone}",
                bio: "${bio}",
                name: "${name}"
                password: "${password}"
                
              }) {
                phone
                photo
                name
                bio
                password
                email
                _id
              }
            }
        `
        }

        appAxios.post('', payload,
            {
                headers: {
                    Authorization: `Authorization ${context.token}`
                }
            }
        ).then(resp => {
            const {name,phone,email,bio,photo,password} = resp.data.data.updateUserProfile
            context.setUserDetails({name,phone,email,bio,photo,password})
            navigate(-1)
        })
    }

    const navigate = useNavigate()
    return (
        <>
            <div className="min-h-full flex flex-col justify-center  sm:px-6 lg:px-8">

                <div className="lg:w-full sm:mx-auto sm:w-full sm:max-w-5xl">

                    <div onClick={() => navigate(-1)}
                         className="self-start flex dark:bg-black bg-white mb-4 items-center content-center">
                        <span className="material-icons mr-1 primary cursor-pointer">chevron_left</span>
                        <h3 className="primary cursor-pointer">Back</h3>
                    </div>

                    <div className=" py-8 px-4 border border-gray-300 sm:rounded-lg sm:px-10">

                        <p className="text-2xl dark:text-white my-4 text-align-start">Change Info </p>

                        <p className="text-sm dark:text-white mt-3 mb-6 text-align-start">
                            Changes will be reflected to every services
                        </p>

                        <div className="flex justify-start align-middle mb-5">
                            <div>
                                <img className="h-12 w-auto mr-2 rounded-lg"
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt="profile"/>
                            </div>
                            <p className="text-sm uppercase self-center">Change Photo</p>
                        </div>

                        <form className="space-y-6" id="profile-edit-form" onSubmit={handleSubmit}>
                            {/*name*/}
                            <div className="flex flex-col justify-start">
                                <label htmlFor="name"
                                       className=" dark:text-white  mb-1 self-start text-sm text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        placeholder="Enter your name..."
                                        value={name}
                                        onChange={(event) => {
                                            setName((event.target.value))
                                        }}
                                        type="text"
                                        className="dark:bg-gray-200 appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/*bio*/}
                            <div className="flex flex-col justify-start">
                                <label htmlFor="bio"
                                       className="block  dark:text-white mb-1 self-start text-sm text-gray-700">
                                    Bio
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="bio"
                                        placeholder="Enter your bio..."
                                        rows={4}
                                        name="bio"
                                        autoComplete="bio"
                                        value={bio}
                                        onChange={(event) => {
                                            setBio((event.target.value))
                                        }}
                                        className="appearance-none dark:bg-gray-200 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/*Phone*/}
                            <div className="flex flex-col justify-start">
                                <label htmlFor="phone"
                                       className="block dark:text-white float-left mb-1 self-start text-sm text-gray-700">
                                    Phone
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="phone"
                                        name="name"
                                        placeholder="Enter your phone..."
                                        type="text"
                                        value={phone}
                                        onChange={(event) => {
                                            setPhone((event.target.value))
                                        }}
                                        autoComplete="name"
                                        className="appearance-none dark:bg-gray-200 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/*email*/}
                            <div className="flex flex-col justify-start">
                                <label htmlFor="phone"
                                       className="block dark:text-white float-left mb-1 self-start text-sm text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email..."
                                        type="text"
                                        value={email}
                                        onChange={(event) => {
                                            setEmail((event.target.value))
                                        }}
                                        autoComplete="email"
                                        required
                                        className="appearance-none dark:bg-gray-200  block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/*password*/}
                            <div className="flex flex-col justify-start">
                                <label htmlFor="phone"
                                       className=" mb-1 dark:text-white self-start text-sm text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(event) => {
                                            setPassword((event.target.value))
                                        }}
                                        placeholder="Enter your password..."
                                        type="password"
                                        autoComplete="password"
                                        required
                                        className="appearance-none dark:bg-gray-200 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </form>

                        <div className="pt-5">
                            <div className="flex justify-start">
                                <button form="profile-edit-form"
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white button-color"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}