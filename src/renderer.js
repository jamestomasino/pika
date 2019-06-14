console.log('Heya, this is coming from a webpack bundle')
const Gopher = require('gopher-lib')
var client = new Gopher.Client()

client.get('gopher://gopher.black/1/phlog/20190607-gopher-2-0', (err, reply)=>{
  if(err) {
    console.error(err)
  } else {
    console.log(reply.text)
  }
})
