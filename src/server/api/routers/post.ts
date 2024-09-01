import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import nodemailer from "nodemailer"

const log = console.log.bind(console)

export const postRouter = createTRPCRouter({
  book: publicProcedure
    .input(z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      about: z.string()
    }))
    .mutation(async ({ input }) => {
      log('in post book route')

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_APP_PASSWORD
        }
      })

      const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        // to: "marthacartertherapy@gmail.com",
        to: "marthacartertherapy@gmail.com",
        subject: "New Inquiry from marthacartertherapy.com!",
        html: `
          <p>Name: ${input.firstName} ${input.lastName}</p>
          <p>Email Address: ${input.email}</p>
          <p>${input.about}</p>
        `
      }

      const transporterResponse = await transporter.sendMail(mailOptions)

      log('transporterResponse:', transporterResponse)

      return {
        response: 'response from book route'
      }
    }),

  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
