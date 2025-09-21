import React, { useState } from 'react'
 import axios from 'axios'

export default function AIChat(){
     const [messages, setMessages] = useState([
         {from: 'ai', text: 'Hi — I am Project Pulse assistant. Ask me about project health, risks, or tasks.'}
         ])
          const [input, setInput] = useState('')
           const [loading, setLoading] = useState(false)

async function send(){
     if(!input.trim()) return
      const userMsg = {from:'user', text: input}
       setMessages(m=>[...m, userMsg])
        setInput('')
         setLoading(true)
          try{ const res = await axios.post('/api/ai', {query: userMsg.text})
           const ai = res.data?.reply || 'Sorry, no reply.'
            setMessages(m=>[...m, {from:'ai', text: ai}])
         }catch(err){
             console.error(err)
              setMessages(m=>[...m, {from:'ai', text: 'Error contacting AI.'}])
             }finally{
                 setLoading(false)
                 }
                 }

return (
     <div className="flex flex-col h-full">
         <h2 className="font-semibold mb-3">AI Assistant</h2>
          <div className="flex-1 overflow-auto p-2 space-y-3 bg-slate-50 rounded">
             {messages.map((m,i)=>
                 ( <div key={i} className={p-2 rounded ${m.from==='ai' ? 'bg-white self-start' : 'bg-teal-50 self-end'}}>
                     <div className="text-sm">{m.text}</div> </div> ))}
                      </div>

<div className="mt-3 flex gap-2">
    <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask: show delayed tasks" className="flex-1 px-3 py-2 border rounded" />
    <button onClick={send} disabled={loading} className="px-4 py-2 bg-teal-500 text-white rounded">{loading ? '...' : 'Send'}</button>
  </div>
</div>

) }
