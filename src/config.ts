export const config = {
  port: +process.env.PORT || 3000,
  useCors: process.env.ENABLE_CORS === 'true' || false,
  trustProxy: process.env.TRUST_PROXY === 'true' || false,
};
