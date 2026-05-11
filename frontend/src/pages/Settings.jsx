export default function Settings() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Settings ⚙️
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Hindura amakuru ya BuildWise platform.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Company Profile
          </h2>

          <div className="space-y-5">
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Company Name"
              defaultValue="BuildWise"
            />

            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              defaultValue="admin@buildwise.rw"
            />

            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone"
              defaultValue="+250 780 000 000"
            />

            <button className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold">
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            System Preferences
          </h2>

          <div className="space-y-5">
            <div className="flex justify-between items-center bg-slate-50 p-5 rounded-2xl">
              <span className="font-semibold">Notifications</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                Enabled
              </span>
            </div>

            <div className="flex justify-between items-center bg-slate-50 p-5 rounded-2xl">
              <span className="font-semibold">Dark Mode</span>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
                Coming Soon
              </span>
            </div>

            <div className="flex justify-between items-center bg-slate-50 p-5 rounded-2xl">
              <span className="font-semibold">Language</span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                English / Kinyarwanda
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}