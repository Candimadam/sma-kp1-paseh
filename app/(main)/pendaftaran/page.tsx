import { RegistrationForm } from "./_components/registration-form";

export default function PendaftaranSiswa() {
  return (
    <div className="flex flex-col items-center p-4 bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <header className="w-full max-w-3xl text-center mb-6">
        <h2 className="text-balance text-3xl font-semibold text-blue-600 dark:text-yellow-400">
          Pendaftaran Siswa Baru
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          Tahun Ajaran 2026/2027
        </p>
      </header>
      <RegistrationForm />
    </div>
  );
}
