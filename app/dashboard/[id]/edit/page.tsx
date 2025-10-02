import { caller } from "@/trpc/server"
import { redirect } from "next/navigation"
import { EditRegistrationForm } from "./_components/edit-registration-form"

export default async function EditRegistrationPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const registration = await caller.registration.getRegistration({ id })

    if (!registration) {
        redirect("/dashboard")
    }

    return <EditRegistrationForm registration={registration} />
}