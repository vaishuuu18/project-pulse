js const express = require('express')
 const cors = require('cors') 
 const bodyParser = require('body-parser')

const app = express() 
const PORT = process.env.PORT || 4000

app.use(cors())
 app.use(bodyParser.json())

// Simple tasks endpoint (mock data) 
app.get('/api/tasks', (req, res) =>
     { res.json({
         tasks: [ 
            {id:1, title:'Design landing', status:'todo', assignee:'Alice', due:'2025-09-25'},
             {id:2, title:'Implement auth', status:'in-progress', assignee:'Bob', due:'2025-09-28'},
              {id:3, title:'Integrate payments', status:'todo', assignee:'Charlie', due:'2025-10-02'},
             ]
             })
             })

// AI endpoint (mock). Replace with real AI provider integration.
  app.post('/api/ai', async (req, res) => {
     const query = req.body?.query || ''

// Example simple rule-based replies for the prototype

if(/delayed|overdue|late/i.test(query)){ 
    return res.json({reply: 'I found 2 overdue tasks: Implement auth (2 days late) and Integrate payments (1 day late). Suggest reassigning to Charlie.'}) 
}

if(/health|status|progress/i.test(query)){ 
    return res.json({reply: 'Overall project health: 78% on track. 5 tasks overdue, 24 completed this week.'})
 }

// default canned response 
res.json({reply: You asked: "${query}" — this is a prototype reply. Replace /api/ai with your AI integration.})
 })

app.listen(PORT, ()=> console.log('Server listening on', PORT))
