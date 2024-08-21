import { FastifyInstance } from 'fastify';
import { test, expect, describe, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
import { buildFastify } from '../../../src/app';

describe('Credit Card Routes', () => {
  let fastify: FastifyInstance

  beforeAll(async () => {
    fastify = buildFastify();
    await fastify.ready()
  });
 
  afterAll(() => {
    fastify.close();
  });

  test('should return 200 for a valid credit card number', async () => {
    const response = await request(fastify.server).post('/v1/credit-card').send({
      cardNumber: '4532015112830366'
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({});
  });

  test('should return 400 for an invalid credit card number', async () => {
    const response = await request(fastify.server).post('/v1/credit-card').send({
      cardNumber: '1234567890123456'
    });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      errors: [{ code: 'credit-card/card-is-invalid' }]
    });
  });

  test('should return 400 for invalid characters in the credit card number', async () => {
    const response = await request(fastify.server).post('/v1/credit-card').send({
      cardNumber: 'abcd1234efgh5678'
    });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      errors: [{ code: 'credit-card/invalid-characters' }]
    });
  });
});
