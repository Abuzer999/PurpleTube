import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  await prisma.user.create({
    data: {
      email: "1",
      name: "1",
    },
  });

  const { sendMail } = useNodeMailer();

  return sendMail({
    subject: "Nuxt + nodemailer",
    text: "Hello from nuxt-nodemailer!",
    to: "john@doe.com",
  });
});
