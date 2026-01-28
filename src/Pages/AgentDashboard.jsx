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
     <aside className="fixed top-16 left-0 w-1/5 h-[calc(100vh-4rem)] bg-blue-900 text-white p-4 overflow-y-auto">
  <StatePanel />
</aside>


      {/* Right Panel */}
     <main className="ml-[20%] mt-16 w-4/5 h-[calc(100vh-4rem)] p-6 overflow-y-auto relative">
  {!form && <UploadButton onClick={() => setForm(true)} />}

  <div className="mt-16">
    {form ? <UploadForm setForm={setForm} /> : <AnsweSheetTable />}
  </div>
</main>

    </div>
  );
};

export default AgentDashboard;
