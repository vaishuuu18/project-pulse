 import React, { useState, useEffect } from 'react'
  import Sidebar from './components/Sidebar'
   import Dashboard from './components/Dashboard'
    import AIChat from './components/AIChat'


export default function App(){
     const [selected, setSelected] = useState('dashboard')

return (
     <div className="h-screen flex">
         <Sidebar selected={selected} setSelected={setSelected} />

<main className="flex-1 p-6 overflow-auto">
    <header className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold">Project Pulse</h1>
        <p className="text-sm text-slate-500">AI-powered project health & insights</p>
      </div>
      <div className="flex items-center gap-4">
        <input
          placeholder="Ask anything... (e.g. show delayed tasks)"
          className="px-3 py-2 border rounded-md w-80"
        />
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">U</div>
      </div>
    </header>

    {selected === 'dashboard' && <Dashboard />}
    {/* Future pages: tasks, projects, reports */}
  </main>

  <aside className="w-96 border-l p-4 bg-white">
    <AIChat />
  </aside>
</div>

) 
}
