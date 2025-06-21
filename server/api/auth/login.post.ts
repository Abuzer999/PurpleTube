export default defineEventHandler(async (event) => {
  // Лог для проверки вызова
  console.log("API /api/auth/login called");

  return { message: "Login success" };
});
