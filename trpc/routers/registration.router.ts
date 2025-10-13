import { TRPCError } from "@trpc/server";
import { adminProcedure, createTRPCRouter, publicProcedure } from "../init";
import {
  studentRegisterSchema,
  studentUpdateRegisterSchema,
} from "../schemas/registration.schema";
import z from "zod";

export const registrationRouter = createTRPCRouter({
  getAllRegistrationsPublic: publicProcedure.query(async ({ ctx }) => {
    const registrations = await ctx.db.registration.findMany({
      select: {
        nisn: true,
        namaLengkap: true,
        jenisKelamin: true,
        sekolahAsal: true,
        tempatLahir: true,
        tanggalLahir: true,
        status: true,
      },
    });

    return registrations;
  }),
  getAllRegistrations: adminProcedure.query(async ({ ctx }) => {
    const registrations = await ctx.db.registration.findMany();

    return registrations;
  }),
  createRegistration: publicProcedure
    .input(studentRegisterSchema)
    .mutation(async ({ ctx, input }) => {
      const existingRegistration = await ctx.db.registration.findUnique({
        where: { nisn: input.nisn },
        select: { id: true },
      });

      if (existingRegistration) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "NISN sudah terdaftar",
        });
      }

      await ctx.db.registration.create({
        data: input,
        select: {
          id: true,
        },
      });

      return {
        message: "Berhasil mendaftar",
      };
    }),
  deleteRegistration: adminProcedure
    .input(
      z.object({
        registrationId: z.cuid("Invalid ID"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const existingRegistration = await ctx.db.registration.findUnique({
        where: { id: input.registrationId },
        select: { id: true },
      });

      if (!existingRegistration) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Pendaftaran tidak ditemukan",
        });
      }

      await ctx.db.registration.delete({
        where: { id: existingRegistration.id },
        select: {
          id: true,
        },
      });

      return {
        message: "Berhasil menghapus pendaftaran",
      };
    }),
  updateRegistration: adminProcedure
    .input(studentUpdateRegisterSchema)
    .mutation(async ({ ctx, input }) => {
      const existingRegistration = await ctx.db.registration.findUnique({
        where: { id: input.id },
        select: { id: true },
      });

      if (!existingRegistration) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Pendaftaran tidak ditemukan",
        });
      }

      await ctx.db.registration.update({
        where: { id: input.id },
        data: input,
        select: {
          id: true,
        },
      });

      return {
        message: "Berhasil memperbarui pendaftaran",
      };
    }),
  getRegistration: adminProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const registration = await ctx.db.registration.findUnique({
        where: { id: input.id },
      });

      return registration;
    }),
});
