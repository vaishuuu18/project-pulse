import React from 'react'

export default function Sidebar({selected, setSelected})
{ const items = [ 
    {id: 'dashboard', label: 'Dashboard'},
     {id: 'tasks', label: 'Tasks'},
      {id: 'projects', label: 'Projects'}, 
      {id: 'team', label: 'Team'},
       {id: 'reports', label: 'Reports'},
        {id: 'settings', label: 'Settings'},
     ]

return ( <nav className="w-64 bg-white border-r p-4"> 
<div className="mb-6 flex items-center gap-3">
     <div className="w-10 h-10 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">PP</div>
      <div>
         <div className="font-semibold">Project Pulse</div> 
         <div className="text-xs text-slate-500">AI dashboard</div>
          </div>
           </div>

<ul className="space-y-2">
    {items.map(it => (
      <li key={it.id}>
        <button
          onClick={()=>setSelected(it.id)}
          className={w-full text-left px-3 py-2 rounded-md ${selected === it.id ? 'bg-slate-100 font-medium' : 'hover:bg-slate-50'}}
        >{it.label}</button>
      </li>
    ))}
  </ul>
</nav>

) }
