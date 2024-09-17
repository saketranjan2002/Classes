import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({
    message : "Hello hono!"
  })
  
})

export default app
