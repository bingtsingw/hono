const Hono = require('hono')
const app = Hono()

app.use('*', (c, next) => {
  console.log(`[${c.req.method}] ${c.req.url}`)
  next()
})

app.get('/', () => {
  return new Response('Hono!! Compute@Edge!!')
})

app.get('/hello/:name', (c) => {
  return new Response(`Hello ${c.req.params('name')}!!!!!`)
})

app.fire()