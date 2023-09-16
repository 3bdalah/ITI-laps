import { createTransport } from "nodemailer";

export const sendEmail = async (emailReciver) => {
  const transport = createTransport({
    service: "gmail",
    secure: true, // Make sure this is set to true
    auth: {
      user: "3bdallah.dev@gmail.com",
      pass: "plvgflpudjyugsrq",
    },
  });

  const info = await transport.sendMail({
    from: "from 3bdallah Dev <3bdallah.dev@gmail.com>",
    to: emailReciver,
    subject: "Heelo first email",
    text: "Hello test sender emailer",
    html: "<h1>hello can you confirsm this email just by clicked at button </h1><br><a href='http://localhost:4000/user/verify' >confirm</a>",
  });
};
