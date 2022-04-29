import Tabs from "./Tabs";
import ProfileInput from "./Profileinput";
import Table from "./Table";

export default function Settings() {
  return (
    <>
      <h1 className="font-extrabold">Settings</h1>
      <div className="min-h-screen bg-white ">
        <Tabs />
        <div className="flex h-screen ml-8 Profile">
          <div className="border-2  border-black w-1/4 h-1/2">
            <h1 className="ml-3">Profile image</h1>
            <div className="bg-purple-100 rounded-md h-60 w-48 mx-auto mt-3"></div>
            <h2 className="mt-3 ml-3">
              <span className="text-gray-500">Role</span>: Admin
            </h2>
          </div>
          <div className=" w-3/4 h-1/2 mt-12">
            <div className="flex justify-between">
              {["Name", "Last Name"].map((el) => (
                <ProfileInput name={el} />
              ))}
              <div className="w-full"></div>
            </div>
            <div className="flex mt-2 justify-between">
              {["Email", "Password", "New Password"].map((el) => (
                <ProfileInput name={el} />
              ))}
            </div>
          </div>
        </div>

        <div className="Team">
          <div className="relative border-b-2 h-20 border-black">
            <button className="border-2 absolute right-2 top-2 border-black w-44 text-white h-12 rounded-full bg-blue-500">
              Invite User
            </button>
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
