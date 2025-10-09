import prisma from "@/lib/prisma";
import { faker } from "@faker-js/faker";
import cliProgress from "cli-progress";

const GENDER = ["LAKI_LAKI", "PEREMPUAN"] as const;
const STATUS = ["TERDAFTAR", "DITERIMA", "DITOLAK"] as const;

function getRandomDateWithinLastMonths(months: number) {
  const now = new Date();
  const past = new Date();
  past.setMonth(now.getMonth() - months);
  return faker.date.between({ from: past, to: now });
}

async function main() {
  const total = 1000; // jumlah data yang ingin di-seed
  const nisnSet = new Set<string>();

  // Initialize cli-progress bar
  const bar = new cliProgress.SingleBar(
    {
      format: "Seeding data |{bar}| {percentage}% | {value}/{total} records",
      barCompleteChar: "\u2588",
      barIncompleteChar: "\u2591",
      hideCursor: true,
    },
    cliProgress.Presets.shades_classic,
  );

  bar.start(total, 0);

  for (let i = 0; i < total; i++) {
    // pastikan NISN unik
    let nisn = faker.string.numeric(10);
    while (nisnSet.has(nisn)) {
      nisn = faker.string.numeric(10);
    }
    nisnSet.add(nisn);

    const jenisKelamin = faker.helpers.arrayElement(GENDER);
    const namaLengkap =
      jenisKelamin === "LAKI_LAKI"
        ? faker.person.fullName({ sex: "male" })
        : faker.person.fullName({ sex: "female" });

    const tanggalLahir = faker.date.birthdate({
      min: 12,
      max: 15,
      mode: "age",
    });

    await prisma.registration.create({
      data: {
        nisn,
        namaLengkap,
        jenisKelamin,
        nomorTelepon: faker.datatype.boolean()
          ? faker.phone.number({
              style: "international",
            })
          : null,
        sekolahAsal: faker.company.name(),
        tempatLahir: faker.location.city(),
        tanggalLahir,
        alamat: faker.location.streetAddress(true),
        status: faker.helpers.arrayElement(STATUS),

        namaAyah: faker.person.fullName({ sex: "male" }),
        pekerjaanAyah: faker.datatype.boolean()
          ? faker.person.jobTitle()
          : null,
        namaIbu: faker.person.fullName({ sex: "female" }),
        pekerjaanIbu: faker.datatype.boolean() ? faker.person.jobTitle() : null,
        rekomendasiDari: faker.datatype.boolean()
          ? faker.person.fullName()
          : null,

        createdAt: getRandomDateWithinLastMonths(3),
      },
    });

    bar.update(i + 1);
  }

  bar.stop();
  console.log(`✅ ${total} data registration berhasil di-seed.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
