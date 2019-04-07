var express = require('express')

var app = express()

app.use(express.static('./dist'))

app.get('/',(req,res)=>{
  res.send('你正在访问hhp的仿网易云音乐的播放器');
})

app.listen(3006,()=>{
  console.log('app is listening on port 3006')
})