import React, { useEffect, useState } from 'react'

function StatCard({title, value, sub}){ 
    return
     ( <div className="bg-white p-4 rounded-lg shadow-sm">
         <div className="text-sm text-slate-500">{title}</div>
          <div className="text-2xl font-semibold mt-1">{value}</div>
           {sub && <div className="text-xs text-slate-400 mt-1">{sub}</div>} 
           </div>
            )
         }

export default function Dashboard(){
     const [metrics, setMetrics] = useState({health:78, completed:24, overdue:5})

return (
     <div className="space-y-6">
         <section className="grid grid-cols-3 gap-4">
             <StatCard title="Project Health" value={${metrics.health}%} sub="Overall on-track score" />
              <StatCard title="Completed" value={metrics.completed} sub="Tasks completed this week" />
               <StatCard title="Overdue" value={metrics.overdue} sub="Tasks past due date" />
                </section>

<section className="grid grid-cols-2 gap-4">
    <div className="bg-white p-4 rounded-lg shadow-sm min-h-[220px]">
      <h3 className="font-semibold mb-2">AI Insights</h3>
      <ul className="text-sm text-slate-600 space-y-2">
        <li>• Task "Integrate API" likely delayed due to dependency on "Auth".</li>
        <li>• Alice is 20% overloaded this sprint.</li>
        <li>• Predicted completion for Project Alpha: <strong>Oct 3, 2025</strong>.</li>
      </ul>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-2">Upcoming Deadlines</h3>
      <ol className="text-sm text-slate-600 space-y-2">
        <li>• Design review — Sep 25, 2025</li>
        <li>• Beta release — Oct 02, 2025</li>
        <li>• Client demo — Oct 10, 2025</li>
      </ol>
    </div>
  </section>

  <section>
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-2">Recent Activity</h3>
      <ul className="text-sm text-slate-600">
        <li>• Bob moved "Fix login" to In Progress — 2h ago</li>
        <li>• Alice uploaded file design_v2.fig — 4h ago</li>
        <li>• System ran health check — 1d ago</li>
      </ul>
    </div>
  </section>
</div>

) }

