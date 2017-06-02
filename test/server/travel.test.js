import test from 'ava'
import request from 'supertest'

import app from '../../server/server'

test.serial.cb('GET /countries', t => {
  request(app)
    .get('/')
    .expect(200)
    .end((err,res) => {
      t.deepEqual(Object.keys(res.body).length, 3)
      t.end()
    })
})
