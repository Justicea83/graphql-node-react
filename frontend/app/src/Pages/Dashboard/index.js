import Header from "../../components/Header";
import { Route, Routes} from "react-router-dom";
import Profile from "../../components/Profile";
import ProfileEdit from "../../components/Profile/ProfileEdit";

export default function Dashboard() {
    return (
        <>
            <div className="min-h-full">
                <Header/>
                <div className="py-10">
                    <main>
                        <Routes>
                            <Route exact path="/" element={<Profile/>}/>
                            <Route exact path="/edit" element={<ProfileEdit/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    )
}