"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface DeleteAlertDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  registrationId: string;
}

export function DeleteAlertDialog({
  open,
  setOpen,
  setIsLoading,
  registrationId,
}: DeleteAlertDialogProps) {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const deleteStudentMutationOptions =
    trpc.registration.deleteRegistration.mutationOptions({
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: trpc.registration.pathKey(),
        });
        toast.success(data.message);
        setOpen(false);
      },
      onError: (error) => {
        toast.error(error.message);
      },
      onMutate: () => {
        setIsLoading(true);
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  const deleteRegistrationMutation = useMutation(deleteStudentMutationOptions);
  const isDeleting = deleteRegistrationMutation.isPending;

  return (
    <AlertDialog open={open} onOpenChange={(open) => setOpen(open)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Apakah Anda yakin ingin menghapus data ini?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Data yang dihapus tidak dapat dikembalikan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Batal</AlertDialogCancel>
          <AlertDialogAction
            disabled={isDeleting}
            onClick={() =>
              deleteRegistrationMutation.mutate({
                registrationId,
              })
            }
          >
            {isDeleting ? "Menghapus..." : "Ya, Hapus"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
