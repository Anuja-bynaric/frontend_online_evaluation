import React, { useState } from "react";
import StatePanel from "../components/StatePanel";
import UploadForm from "../components/UploadForm";
import AnsweSheetTable from "../components/AnsweSheetTable";
import UploadButton from "../components/UploadButton";

const AgentDashboard = () => {
  const [form, setForm] = useState(false);

  return (
    <div className="flex h-[100vh]">
      {/* Left Panel */}
      <aside className="w-1/5 bg-blue-900 text-white fixed top-16 left-0 bottom-0 p-4 overflow-auto">
        <StatePanel />
      </aside>

      {/* Right Panel */}
      <main className="ml-[20%] w-4/5 p-6 relative overflow-auto">
        {/* Only show button when form is NOT open */}
        {!form && <UploadButton onClick={() => setForm(true)} />}

        {/* Form or Table */}
        <div className="mt-16">
          {form ? <UploadForm setForm={setForm} /> : <AnsweSheetTable />}
        </div>
      </main>
    </div>
  );
};

export default AgentDashboard;
