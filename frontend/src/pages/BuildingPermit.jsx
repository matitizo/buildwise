import React, { useMemo, useState } from "react";

const requiredDocs = [
  { key: "landTitle", label: "Land Title" },
  { key: "plotMap", label: "Plot Map" },
  { key: "architecturalPlan", label: "Architectural Plan" },
  { key: "structuralDrawings", label: "Structural Drawings" },
  { key: "ownerId", label: "Owner ID" },
];

export default function BuildingPermit() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    plotLocation: "",
    plotNumber: "",
    buildingType: "Residential House",
    floors: "",
    landTitle: "",
    plotMap: "",
    architecturalPlan: "",
    structuralDrawings: "",
    ownerId: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [requestHelp, setRequestHelp] = useState(false);
  const [paid, setPaid] = useState(false);

  const missingDocs = useMemo(() => {
    return requiredDocs.filter((doc) => !form[doc.key]);
  }, [form]);

  const completedDocs = requiredDocs.length - missingDocs.length;
  const isComplete = missingDocs.length === 0;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPermit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const payPermitCharge = () => {
    setPaid(true);
    alert("Permit Service Charge yishyuwe neza.");
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="page-title">Get Building Permit</h1>
        <p className="text-slate-600">
          Fasha umukiriya gutegura no gusaba ibyangombwa byo kubaka.
        </p>
      </div>

      <div className="grid xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="card p-5">
            <h2 className="section-title">Ese urashaka ibyangombwa byose?</h2>
            <p className="text-slate-600 mb-4">
              Turabigushakira. Reba checklist y’ibikenewe kugira ngo dosiye yawe yuzure.
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {requiredDocs.map((doc) => (
                <div
                  key={doc.key}
                  className={`p-4 rounded-2xl border ${
                    form[doc.key]
                      ? "bg-green-50 border-green-200 text-green-700"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  {form[doc.key] ? "✔" : "•"} {doc.label}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submitPermit} className="card p-5">
            <h2 className="section-title">Permit Request Form</h2>

            <div className="grid md:grid-cols-2 gap-3">
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Amazina"
                className="input"
                required
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="input"
                required
              />

              <input
                name="plotLocation"
                value={form.plotLocation}
                onChange={handleChange}
                placeholder="Plot Location"
                className="input"
                required
              />

              <input
                name="plotNumber"
                value={form.plotNumber}
                onChange={handleChange}
                placeholder="Plot Number"
                className="input"
                required
              />

              <select
                name="buildingType"
                value={form.buildingType}
                onChange={handleChange}
                className="input"
              >
                <option>Residential House</option>
                <option>Commercial House</option>
                <option>Apartment</option>
                <option>Office Building</option>
                <option>Shop / Commercial Building</option>
              </select>

              <input
                name="floors"
                value={form.floors}
                onChange={handleChange}
                placeholder="Number of Floors"
                className="input"
                required
              />
            </div>

            <h3 className="font-bold text-slate-800 mt-5 mb-3">
              Upload Available Documents / shyiramo document URL
            </h3>

            <div className="grid md:grid-cols-2 gap-3">
              <input
                name="landTitle"
                value={form.landTitle}
                onChange={handleChange}
                placeholder="Land Title URL"
                className="input"
              />

              <input
                name="plotMap"
                value={form.plotMap}
                onChange={handleChange}
                placeholder="Plot Map URL"
                className="input"
              />

              <input
                name="architecturalPlan"
                value={form.architecturalPlan}
                onChange={handleChange}
                placeholder="Architectural Plan URL"
                className="input"
              />

              <input
                name="structuralDrawings"
                value={form.structuralDrawings}
                onChange={handleChange}
                placeholder="Structural Drawings URL"
                className="input"
              />

              <input
                name="ownerId"
                value={form.ownerId}
                onChange={handleChange}
                placeholder="Owner ID URL"
                className="input"
              />
            </div>

            <button className="btn-primary mt-3">
              Submit Permit Application
            </button>
          </form>

          {submitted && (
            <div className="card p-5">
              <h2 className="section-title">Auto Document Check</h2>

              <div className="space-y-2">
                {requiredDocs.map((doc) => (
                  <p key={doc.key} className={form[doc.key] ? "text-green-700" : "text-red-600"}>
                    {form[doc.key] ? "✔" : "✖"} {doc.label}
                    {!form[doc.key] && " missing"}
                  </p>
                ))}
              </div>

              {!isComplete && (
                <div className="mt-5 bg-red-50 border border-red-200 rounded-2xl p-4">
                  <h3 className="font-bold text-red-700 mb-2">
                    Hari documents zibuze
                  </h3>

                  <p className="text-red-600">
                    {missingDocs.map((doc) => doc.label).join(", ")} missing.
                  </p>

                  <button
                    onClick={() => setRequestHelp(true)}
                    className="btn-danger mt-4"
                  >
                    Request Engineer Help
                  </button>
                </div>
              )}

              {isComplete && (
                <div className="mt-5 bg-green-50 border border-green-200 rounded-2xl p-4">
                  <h3 className="font-bold text-green-700">
                    Dosiye yuzuye neza
                  </h3>
                  <p className="text-green-700">
                    Ushobora gukomeza kuri Permit Processing Payment.
                  </p>

                  <button onClick={payPermitCharge} className="btn-primary mt-4">
                    Pay Permit Service Charge
                  </button>
                </div>
              )}
            </div>
          )}

          {requestHelp && (
            <div className="card p-5">
              <h2 className="section-title">Guhuza umukiriya n’inzobere</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border">
                  <h3 className="font-bold">Architect</h3>
                  <p className="text-slate-600 text-sm">
                    Azagufasha gukora architectural plan.
                  </p>
                  <p className="font-bold text-blue-700 mt-2">
                    Service Fee: 150,000 RWF
                  </p>
                  <button className="btn-secondary mt-3">
                    Connect Architect
                  </button>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border">
                  <h3 className="font-bold">Engineer</h3>
                  <p className="text-slate-600 text-sm">
                    Azagufasha gukora structural drawings.
                  </p>
                  <p className="font-bold text-blue-700 mt-2">
                    Service Fee: 200,000 RWF
                  </p>
                  <button className="btn-secondary mt-3">
                    Connect Engineer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="card p-5">
            <h2 className="section-title">Permit Progress</h2>

            <div className="text-4xl font-bold text-blue-700">
              {completedDocs}/{requiredDocs.length}
            </div>

            <p className="text-slate-600 mt-2">
              Documents completed
            </p>

            <div className="w-full bg-slate-200 rounded-full h-3 mt-4">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{
                  width: `${(completedDocs / requiredDocs.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="card p-5">
            <h2 className="section-title">Payment Status</h2>

            {paid ? (
              <p className="badge-success inline-block">
                Permit Service Charge Paid
              </p>
            ) : (
              <p className="badge-warning inline-block">
                Payment Pending
              </p>
            )}

            <p className="text-slate-600 mt-4">
              Permit Service Charge: <b>50,000 RWF</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}